
//Функция запроса
 function useRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };
  xhr.send();
};
const resultNode = document.querySelector('.j-result');
const btnNode = document.querySelector('.j-btn-request'); 
//Функция печати
function displayResult(apiData) {
  let cards = '';  
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>`;
    cards = cards + cardBlock;
  });
  resultNode.innerHTML = cards;
}
//Функция прослушки
btnNode.addEventListener('click', () => {
  let num = document.querySelector('input').value;
  if (num >= 1 && num <= 10 ) {
    let setUrl = `https://picsum.photos/v2/list/?limit=${num}`
    useRequest(setUrl, displayResult);
  }else{
    resultNode.innerHTML ='«число вне диапазона от 1 до 10»'
  }

  
  
})
