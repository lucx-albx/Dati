const URL = "https://lucx-albx.github.io/Dati/Dati.json"

const update ={
    Nome : "marco",
    Cognome : "Prova2",
    Anni : 17,
    Nascita : "Italia",
    Lingua : "Italiano"
}

const options = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
},
body: JSON.stringify(update),
};

const Api =()=>{
    fetch(URL, options)
  .then(data => {
      if (!data.ok) {
        throw Error(data.status);
       }
       return data.json();
      }).then(update => {
      console.log(update);
      
      }).catch(e => {
      console.log(e);
      });
    
}

// fetch(URL, options)
//     .then((testo) => testo.json())
//     .then((update)=>{
//         console.log(update)

//     })