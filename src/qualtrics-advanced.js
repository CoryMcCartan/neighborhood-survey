var map; 

var MAPBOX_TOKEN = "pk.eyJ1IjoiY21jY2FydGFuIiwiYSI6ImNrZGdkdW9waTA1eGEycmxycnQzZ3o4c3kifQ.v_XViAm-nItfHgx0J3Xg3A";
var BASEURL = "https://corymccartan.github.io/neighborhood-survey/assets/";
var DEFAULT_CITY = "nyc";

Qualtrics.SurveyEngine.addOnload(function() {
    this.disableNextButton();

    var city = Qualtrics.SurveyEngine.getEmbeddedData("city_group");
    if (city === null || city.trim() === "") city = DEFAULT_CITY;

    var showOverlay = Qualtrics.SurveyEngine.getEmbeddedData("overlay");
    if (showOverlay !== null && showOverlay.trim() === "") showOverlay = null;
    if (showOverlay !== null) showOverlay = showOverlay == "true";

    var overlays = {
        partisan: BivariateOverlay(),
        race: UnivariateOverlay({
            numerator: ["-", ["get", "pop"], ["get", "pop_white"]]
        }),
    };
    var overlayType = Qualtrics.SurveyEngine.getEmbeddedData("overlay_type");
    if (overlayType == null || overlayType.trim() === "") overlayType = "partisan";

    var zoomTo = Qualtrics.SurveyEngine.getEmbeddedData("start_zoom");
    if (zoomTo == null || zoomTo.trim() === "") zoomTo = 14;

    map = window.MapDraw("#ns__container", {
        token: MAPBOX_TOKEN,
        url: BASEURL + city + ".json",
        graph: BASEURL + city + "_graph.json",
        showOverlay: showOverlay,
        overlayRule: overlays[overlayType],
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
        var box = jQuery("#ns__address-box")
        var query = box.val();
        if (query.trim() == "") return;

        Qualtrics.SurveyEngine.setEmbeddedData("home_address", query.trim());
        map.loadAddress(query, box[0]);
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

