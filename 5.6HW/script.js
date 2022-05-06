const kartinka = document.querySelector('.kartinka')
const knopka = document.querySelector('.j-btn')
const message = '«одно из чисел вне диапазона от 100 до 300»'

const useRequest = (swith,sheight) => {
    const url = `https://picsum.photos/${swith}/${sheight}`
    console.log(url)
    return fetch(url)
    .then((response) => {
        console.log(response.url)
        return  response.url;
    })
    .then((json) => { return json;})
    .catch(() => { console.log('error') }); 
}

knopka.addEventListener('click', async () => {
    let swith = document.querySelector('.swith').value;
    let sheight = document.querySelector('.sheight').value;;
    if ((sheight >= 100 && sheight <=300) && (swith >= 100 && swith <=300)) {
        const requestResult = await useRequest(swith,sheight);
        kartinka.outerHTML = `<div class="kartinka"><img src="${requestResult}" class="card-image"/></div>`;
    }else{
        console.log(message);
    }
});
