var map; 

var MAPBOX_TOKEN = "pk.eyJ1IjoiY21jY2FydGFuIiwiYSI6ImNrZGdkdW9waTA1eGEycmxycnQzZ3o4c3kifQ.v_XViAm-nItfHgx0J3Xg3A";
var SPECIFICATION = "https://corymccartan.github.io/neighborhood-survey/assets/little-rock.json";
var ADJACENCY_GRAPH = "https://corymccartan.github.io/neighborhood-survey/assets/little-rock_graph.json";

Qualtrics.SurveyEngine.addOnload(function() {
    this.disableNextButton();

    map = window.MapDraw("#ns__container", {
        token: MAPBOX_TOKEN,
        url: SPECIFICATION,
        graph: ADJACENCY_GRAPH,
        errors: showError,
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

