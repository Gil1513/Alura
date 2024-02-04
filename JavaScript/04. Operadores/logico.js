//Operador Lógico AND (&&):
const idade = 25;
const possuiCarteira = true;

if (idade >= 18 && possuiCarteira) {
    console.log("Pode dirigir, possui idade suficiente e carteira de motorista.");
} else {
    console.log("Não pode dirigir.");
}

//Operador Lógico OR (||):
const temExperiencia = true;
const temDiploma = false;

if (temExperiencia || temDiploma) {
    console.log("Pode se candidatar ao emprego, pois possui experiência ou diploma.");
} else {
    console.log("Não pode se candidatar ao emprego.");
}

//Operador Lógico NOT (!):
const chuva = false;

if (!chuva) {
    console.log("Não está chovendo. Pode sair de casa.");
} else {
    console.log("Está chovendo. Melhor ficar em casa.");
}
