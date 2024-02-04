//valor armazenado dentro da váriavel
const estudante = 'Fernando';
const estaAprovado = "true";
const provaReal = "vitor";
const provaReal2 = "Silva";

if (estaAprovado === 'true') { 
  console.log('parabéns, boas festas');
} else {
  console.log('REPROVADO, boas festas');
}

if (estudante === 'Fernando') {
  console.log(`olá, ${estudante}`);
} else {
  console.log('quem é vc');
}

if(provaReal === provaReal2){
    console.log("Não confere o que está dentro das váriaveis");
}else{
    console.log("Está dentro");
}

if (provaReal == provaReal2) {
    console.log("Verificação de tipo de váriavel");
} else {
    console.log("Algo está erradp");
}

// Código omitido. 
if ("0" == 0) {
    console.log('Passou na comparação');
  } else {
    console.log('Não passou na comparação');
  }
  

  //valores e tipo
if ("0" === 0) {
    console.log('Passou na comparação');
  } else {
    console.log('Não passou na comparação');
  }
  