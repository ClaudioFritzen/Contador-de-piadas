const btnEl = document.getElementById('btn');

const apiKey = 'OaTjyypjJ3zi7Y0Jw/+zBA==mdcF25oLJ9AryLOk'

const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey,
    },
};

const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'


async function getJoke(){
    const response = await fetch(apiURL, options)
    const data = response.json()


    console.log(data)
}
btnEl.addEventListener('click', getJoke)