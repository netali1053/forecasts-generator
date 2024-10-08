const forecastButton = document.querySelector('.forecast-btn');
const forecastMessages = document.querySelector('.current-forecast > h1');
const forecastPercent = document.querySelector('.current-forecast > p');
const myForecasts = document.querySelector('.forecasts');
const forecastItem = document.querySelector('#forecast-item');

function getRandomValue(min, max) {
    const randomValue = Math.floor(Math.random() * (max - min)) + min;
    return randomValue;
}

forecastButton.addEventListener('click', function() {
    const randomNumber = getRandomValue(1, 6);
    let predictionText = "";

    if (randomNumber === 1) {
        predictionText = "В этом месяце ты искупаешься в море.";
    } else if (randomNumber === 2) {
        predictionText = "С каждым днем ты становишься увереннее в себе!";
    } else if (randomNumber === 3) {
        predictionText = "Все, что не получилось вчера, получится сегодня!";
    } else if (randomNumber === 4) {
        predictionText = "В этом году ты купишь новую машину.";
    } else {
        predictionText = "Завтра будет счастье!";
    }

    const probability = getRandomValue(0, 101);

    forecastMessages.textContent = predictionText;
    forecastPercent.textContent = `Вероятность: ` + probability + `%`;

    function makeTemplate(predictionText, probability) {
        const myNewForecast = forecastItem.content.cloneNode(true);
        myNewForecast.querySelector('h3').textContent = predictionText;
        myNewForecast.querySelector('p').textContent = `Вероятность: ` + probability + `%`;

        return myNewForecast;
    }

    const listItem = makeTemplate(predictionText, probability);

    myForecasts.prepend(listItem);

})

getRandomForecast();




/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */