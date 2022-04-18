    let numerosLeo = [7, 22, 34, 48, 52, 59];
    console.log ("Seus números são: " + numerosLeo);

    let ln1 = Math.floor(Math.random() * 60) + 1;
    let ln2 = Math.floor(Math.random() * 60) + 1;
    let ln3 = Math.floor(Math.random() * 60) + 1;
    let ln4 = Math.floor(Math.random() * 60) + 1;
    let ln5 = Math.floor(Math.random() * 60) + 1;
    let ln6 = Math.floor(Math.random() * 60) + 1;

    let numerosLoteria = [ln1, ln2, ln3, ln4, ln5, ln6];
    console.log ("Os números sorteados foram: " + numerosLoteria); 

    let acertos = 0

    for (let index = 0; index < numerosLoteria.length; index +=1 ) {
            for (let i = 0; i < numerosLeo.length; i +=1 ) {
                        if (numerosLoteria[index] === numerosLeo[i]){
                acertos +=1
            }
        }
    }

    console.log ("Você acertou " + acertos + " números.")