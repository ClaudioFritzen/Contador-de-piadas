const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');


const apiKey ="OaTjyypjJ3zi7Y0Jw/+zBA==mdcF25oLJ9AryLOk";

const options = {
    method: "GET",
    headers: { 
        'X-Api-Key': apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){

    try {
        jokeEl.innerText = "Updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";

        const response = await fetch(apiURL, options);
        const data = await response.json();

        btnEl.disabled = false;
        btnEl.innerText = "Gerar uma piada...";

        /* recebemos da API um objeto, dentro do pararenteses é o elemento e .joke a outra coisa dentro do elemento */
        //console.log(data[0].joke);
        jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = 'Ocorreu um erro! tente mais tarde!'
        console.log(error);
        
    }  
}
btnEl.addEventListener('click', getJoke)