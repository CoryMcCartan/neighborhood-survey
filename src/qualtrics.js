Qualtrics.SurveyEngine.addOnload(function() {
    this.disableNextButton();

    var baseurl = "https://corymccartan.github.io/neighborhood-survey/"; 
    // TODO make local
    window.map = window.Districtr("#ns__container", {
        url: baseurl + "assets/little-rock.json",
        graph: baseurl + "assets/little-rock_graph.json"
    });


    function addressSearch() {
        var query = $("#ns__address-box").value;
        if (query.trim() == "") return;

        map.loadAddress(query);
    }

    $("#ns__address-go").addEventListener("click", addressSearch);
    $("#ns__address-box").addEventListener("keydown", function(e) {
        if (e.keyCode == 13) 
            addressSearch();
    });
});

Qualtrics.SurveyEngine.addOnReady(function() {

});

Qualtrics.SurveyEngine.addOnUnload(function() {

});
