        
        var map; 

var MAPBOX_TOKEN = "pk.eyJ1IjoiY21jY2FydGFuIiwiYSI6ImNrZGdkdW9waTA1eGEycmxycnQzZ3o4c3kifQ.v_XViAm-nItfHgx0J3Xg3A";
var BASEURL = "https://cdn.jsdelivr.net/gh/CoryMcCartan/neighborhood-survey/docs/assets/";

Qualtrics.SurveyEngine.addOnload(function() {
    this.disableNextButton();

    let overlays = {
        P: {
            "fill-color": ["interpolate-hcl", 
                ["linear"], 
                ["get", "dem"],
                0.1, "#c44075",
                0.5, "rgba(255, 255, 255, 0)",
                1, "#b09a00",
            ],
            "fill-opacity": 0.45,
        },
        R: {
            "fill-color": ["case",
                ["==", ["get", "pop"], 0], "rgba(255, 255, 255, 0)",

                ["all",
                    [">", ["get", "pop_black"], ["get", "pop_white"]],
                    [">", ["*", 2, ["get", "pop_black"]], 
                        ["-", ["get", "pop"], ["get", "pop_white"]]]
                ], [
                    "interpolate-hcl", ["linear"], 
                    ["/", ["get", "pop_black"], ["get", "pop"]], // value
                    0.35, "rgba(255, 255, 255, 0)",
                    1, "#b09a00",
                ],

                ["all",
                    [">", ["get", "pop_white"], ["get", "pop_black"]],
                    [">", ["*", 2, ["get", "pop_white"]], 
                        ["-", ["get", "pop"], ["get", "pop_black"]]]
                ], [
                    "interpolate-hcl", ["linear"], 
                    ["/", ["get", "pop_white"], ["get", "pop"]], // value
                    0.4, "rgba(255, 255, 255, 0)",
                    1, "#c44075",
                ],

                [
                    "interpolate-hcl", ["linear"], 
                    ["-", 1, ["/", ["+", ["get", "pop_white"], ["get", "pop_black"]], 
                        ["get", "pop"]]], // value
                    0.35, "rgba(255, 255, 255, 0)",
                    1, "#10a0d5",
                ]
            ],
            "fill-opacity": 0.4,
        },
    };
    overlays.RH = overlays.R;
    overlays.PH = overlays.P;
    overlays.C = overlays.P;

    var group = Qualtrics.SurveyEngine.getEmbeddedData("group");
    if (group == null || group.trim() === "") group = "C";

    var zoomTo = Qualtrics.SurveyEngine.getEmbeddedData("start_zoom");
    if (zoomTo == null || zoomTo.trim() === "") zoomTo = 14;

    map = window.MapDraw("#ns__container", {
        token: MAPBOX_TOKEN,
        url: BASEURL + "nyc.json",
        graph: BASEURL + "nyc_graph.json",
        showOverlay: group != "C",
        overlayRule: overlays[group],
        zoomTo: zoomTo,
        errors: window.showError,
        allowProceed: (function(allow) {
            if (allow) this.enableNextButton();
            else this.disableNextButton();
        }).bind(this)
    });
});

Qualtrics.SurveyEngine.addOnReady(function() {
    function addressSearch() {
        var query = jQuery("#ns__address-box").val();
        if (query.trim() == "") return;

        Qualtrics.SurveyEngine.setEmbeddedData("home_address", query.trim());
        map.loadAddress(query);
    }

    jQuery("#ns__address-go").on("click", addressSearch);
    jQuery("#ns__address-box").on("keydown", function(e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            addressSearch();
        }
    });
});

Qualtrics.SurveyEngine.addOnPageSubmit(function() {
    Qualtrics.SurveyEngine.setEmbeddedData("neighborhood", map.getNeighborhood());
});
