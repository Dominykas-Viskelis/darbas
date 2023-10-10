function arKeliamieji(metai) {
    if ((metai % 4 === 0 && metai % 100 !== 0) || metai % 400 === 0) {
        return true;
    }
    return false;
}

function keliamiejiMetuSarasas(n, m) {
    var keliamiejiMetai = [];
    for (var metai = n; metai <= m; metai++) {
        if (arKeliamieji(metai)) {
            keliamiejiMetai.push(metai);
        }
    }
    return keliamiejiMetai;
}

function rastiKeliamusMetus() {
    var nuoMetai = parseInt(document.getElementById("nuoMetai").value);
    var ikiMetai = parseInt(document.getElementById("ikiMetai").value);

    var keliamieji = keliamiejiMetuSarasas(nuoMetai, ikiMetai);
    var rezultatas = document.getElementById("rezultatas");

    if (keliamieji.length > 0) {
        rezultatas.textContent = "Keliamieji metai nuo " + nuoMetai + " iki " + ikiMetai + " yra: " + keliamieji.join(", ");
    } else {
        rezultatas.textContent = "Keliamųjų metų nėra nuo " + nuoMetai + " iki " + ikiMetai;
    }
}
