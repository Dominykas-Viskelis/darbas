// Pradiniai duomenys: intervalo pradžios ir pabaigos skaičiai s1 ir s2
var s1 = 222;
var s2 = 245;

// Ciklas, kuris eina per triženklius skaičius nuo s1 iki s2
for (var bilietoNumeris = s1; bilietoNumeris <= s2; bilietoNumeris++) {
    // Tikriname, ar bilieto numeris dalijasi iš trijų be liekanos
    if (bilietoNumeris % 3 === 0) {
        // Konvertuojame bilieto numerį į simbolių eilutę, kad galėtume tikrinti kiekvieno skaitmens dalijimą
        var numerioEilute = bilietoNumeris.toString();
        // Tikriname, ar bent vienas skaitmuo dalijasi iš trijų be liekanos (skaitmenys negali būti 0)
        var turiSkaitmeniKurisDalijasiIs3 = false;
        for (var i = 0; i < numerioEilute.length; i++) {
            var skaitmuo = parseInt(numerioEilute[i]);
            if (skaitmuo !== 0 && skaitmuo % 3 === 0) {
                turiSkaitmeniKurisDalijasiIs3 = true;
                break;
            }
        }
        // Jei sąlyga tenkinama, išvedame bilieto numerį
        if (turiSkaitmeniKurisDalijasiIs3) {
            console.log(bilietoNumeris);
        }
    }
}
