
const knopka = document.querySelector('.j-btn')
const finalRes = document.getElementById('kartinka');
const useRequest = (num_page,limit) => {
    const url = `https://picsum.photos/v2/list?page=${num_page}&limit=${limit}`
    return fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((json) => { return json;})
    .catch(() => { console.log('error', response.message) }); 
}

knopka.addEventListener('click', async () => {
    let limit = document.getElementById('limit').value;
    let num_p = document.getElementById('num_p').value;
    if ((num_p >= 1 && num_p <= 10) && (limit >= 1 && limit <=10)) {
        console.log(document.cookie)
        const requestResult = await useRequest(num_p,limit); 
        displayResult(requestResult);
        localStorage.setItem ("kuka", JSON.stringify(requestResult));
    }else {
        if (num_p <= 1 || num_p >= 10 || num_p != Number(num_p)) {
            alert('«Номер страницы вне диапазона от 1 до 10»');
        }if (limit <= 1 || limit >= 10) {
            alert('«Лимит вне диапазона от 1 до 10».');
        } else {
            alert('«Номер страницы и лимит вне диапазона от 1 до 10».');
        }
    }
});

function displayResult(requestRes) {
    let pictures = '';
    requestRes.forEach(item => {
      const allPict = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="pict"
          />
        </div>`;
        pictures = pictures + allPict;
    });
    finalRes.innerHTML = pictures;
}




function setCookie() {
    if (JSON.parse(localStorage.getItem ("kuka"))){ // если кука есть - 
        displayResult(JSON.parse(localStorage.getItem ("kuka"))); // передаём для отображения
        localStorage.clear() //При перезагрузке 2х стирает куки. Для хранения последнего запроса всегда строчка удаляется.
    }else
        console.log("cookie is empty");
}
setCookie();
