function mostrarHora() {
    var data = new Date();
    var h = data.getHours();
    var m = data.getMinutes();
    var s = data.getSeconds();
    var periodo = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        periodo = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var tempo = h + ":" + m + ":" + s + ":" + periodo;
    document.getElementById("meu-relogio").innerHTML = tempo;
    document.getElementById("meu-relogio").textContent = tempo;

    setTimeout(mostrarHora, 1000);
}

mostrarHora();