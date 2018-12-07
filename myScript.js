function resize() {
    "use strict";

    if (pic.width === 400 && pic.height === 200) {

        document.getElementById("pic").width = pic.width * 1.25;

        document.getElementById("pic").height = pic.height * 1.25;
    }

            else if (pic.width > 400 && pic.height > 200) {

        document.getElementById("pic").width = "400";

        document.getElementById("pic").height = "200";
    }
}

window.onload = function dateTime() {
    "use strict";

    setInterval(function dt() {
        document.getElementById("date").innerHTML = new Date();
    }, 1000);
};
