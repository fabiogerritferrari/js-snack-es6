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
    for (let index = 0; index < array.length; index++) {
        
        let result=array[0];
        if(result.peso < array[index.peso]){
        result=array[index];
    }
    }
return
}

console.log(comparazionePeso(bici));