Qualtrics.SurveyEngine.addOnload(function() {
    this.disableNextButton();

    let msg_box = document.querySelector("#ns__msg");
    function showError(msg) {
        if (msg !== null) {
            msg_box.innerHTML = msg;
            msg_box.hidden = false;
        } else {
            msg_box.innerHTML = null;
            msg_box.hidden = true;
        }
    }


    var baseurl = "https://corymccartan.github.io/neighborhood-survey/"; 
    // TODO make local
    window.map = window.Districtr("#ns__container", {
        url: baseurl + "assets/little-rock.json",
        graph: baseurl + "assets/little-rock_graph.json",
        errors: showError,
        allowProceed: function(allow) {
            if (allow) this.enableNextButton();
            else this.disableNextButton();
        }
    });
});

Qualtrics.SurveyEngine.addOnReady(function() {
    function addressSearch() {
        var query = jQuery("#ns__address-box").val();
        if (query.trim() == "") return;

        map.loadAddress(query);
    }

    jQuery("#ns__address-go").on("click", addressSearch);
    jQuery("#ns__address-box").on("keydown", function(e) {
        if (e.keyCode == 13) 
            addressSearch();
    });
});

Qualtrics.SurveyEngine.addOnUnload(function() {

});
