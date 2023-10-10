// Eilutės pavadinimas
console.log("Daugybos lentelė nuo 0 iki 10:");

// Ciklas, kuris eina nuo 0 iki 10
for (var i = 0; i <= 10; i++) {
    // Eilutės pradžioje atspausdiname daugybos skaičių
    process.stdout.write(i + ": ");
    
    // Ciklas, kuris eina nuo 0 iki 10 ir atspausdina daugybos rezultatus
    for (var j = 0; j <= 10; j++) {
        var rezultatas = i * j;
        process.stdout.write(i + "x" + j + "=" + rezultatas);
        
        // Jei ne paskutinis stulpelis, pridedame kablelį ir tarpą
        if (j < 10) {
            process.stdout.write(", ");
        }
    }
    
    // Naujos eilutės simbolis
    console.log();
}
