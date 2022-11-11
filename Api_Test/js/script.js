const URL = "https://lucx-albx.github.io/Dati/Dati.json"

// const update ={
    
//     "Anni" : 17,
//     "Nascita" : "Italia",
//     "Lingua" : "Italiano"
// }

const options = {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
},
body: JSON.stringify({
    Nome : "marco",
    Cognome : "Prova2",
}),
};

const Api =()=>{
    fetch(URL, options)
    .then(data => data.json())
    .then(data =>{
        alert(data[0])
    })
    
}