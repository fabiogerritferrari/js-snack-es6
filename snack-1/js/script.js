//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.


const bici = [
    
    {   
        nome: "campagnolo",
        peso: 7,
    },
    {
        nome: "corima",
        peso: 5,
    },
    {        
        nome: "crankBrothers",
        peso: 8,
    },
    {        
        nome: "dedaElementi",
        peso: 4,
    },
    {        
        nome: "fulcrum",
        peso: 6,
    }
];


function comparazionePeso (array){
    let result=array[0];
    for (let index = 0; index < array.length; index++) {
        if(result.peso > array[index].peso){
        result=array[index];
    }
    }
return result
}

console.log(comparazionePeso(bici));