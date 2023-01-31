const btnEl = document.getElementById('btn');

const apiKey ="OaTjyypjJ3zi7Y0Jw/+zBA==mdcF25oLJ9AryLOk";

const options = {
    method: "GET",
    headers: { 
        'X-Api-Key': apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){
    const response = await fetch(apiURL, options);
    const data = await response.json();

    /* recebemos da API um objeto, dentro do pararenteses é o elemento e .joke a outra coisa dentro do elemento */
    console.log(data[0].joke);
}
btnEl.addEventListener('click', getJoke)