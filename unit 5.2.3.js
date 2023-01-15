const resultNode = document.querySelector('.j-result');
function displayResult(apiData) {
    let cards = '';

    apiData.forEach(item => {
        const cardBlock = `
        <div class="cards">
        <img style="width: 200px; height: 150px;" src="${item.download_url}"/>
        </div>
`;
        cards = cards + cardBlock;
    });
    resultNode.innerHTML = cards;
}

const bt = document.querySelector ('button');

bt.onclick = function () {
    let value = document.querySelector('input').value;
    value = Number (value);

    if (value >=  1 && value <= 10) {

        let url = `https://picsum.photos/v2/list?limit=${value}`;

        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function() {
            if (xhr.status != 200) {
                console.log('Статус ответа: ', xhr.status);
            } else {
                displayResult(JSON.parse(xhr.response));
            }
        };

        xhr.onerror = function() {
            console.log('Ошибка! Статус ответа: ', xhr.status);
        };

        xhr.send();
    } else {
        console.log("Число вне диапазона от 1 до 10");
    }
}