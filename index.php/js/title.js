if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 1000);

}

var x = 0;

var titleText = ["&#128293;|&#128293;", "&#128293; ? | &#128293; ", "&#128293; | &#128293;", "&#128293; S|&#128293;", "&#128293; Sp|&#128293;", "&#128293; Spe|&#128293;", "&#128293; Spee|&#128293;", "&#128293; Speed|&#128293;", "&#128293; SpeedK|&#128293;", "&#128293; SpeedKn|&#128293;", "&#128293; SpeedKni|&#128293;", "&#128293; SpeedKnig|&#128293;", "&#128293; SpeedKnigh|&#128293;", "&#128293; SpeedKnight|&#128293;", "&#128293; SpeedKnights|&#128293;", "&#128293; SpeedKnights &#128293;", "&#128293; SpeedKnights &#128293;", "&#128293; SpeedKnights &#128293;", "&#128293; SpeedKnights &#128293;", "&#128293; SpeedKnight|&#128293;", "&#128293; SpeedKnigh|&#128293;", "&#128293; SpeedKnig|&#128293;", "&#128293; SpeedKni|&#128293;", "&#128293; SpeedKn|&#128293;", "&#128293; SpeedK|&#128293;", "&#128293; Speed|&#128293;", "&#128293; Spee| &#128293;", "&#128293; Spe| &#128293;", "&#128293; Sp| &#128293;", "&#128293; S|&#128293;",   "&#128293; |&#128293;", "&#128293;|&#128293;", "&#128293; .| &#128293;", "&#128293; $|&#128293;"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}

