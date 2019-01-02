window.onscroll = function () {
    var distance = document.documentElement.scrollTop || document.body.scrollTop;
    if (distance >= 300) {
        document.getElementById('btnTop').style.display = "block";

    } else {
        document.getElementById('btnTop').style.display = "none";
    }
    var Top = document.getElementById("btnTop");
    Top.onclick = function () {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
}