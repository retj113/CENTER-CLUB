<script>
    // API ключ для Яндекс.Карт
    const apiKey = 'YOUR_API_KEY';

    // Координаты центра карты (широта, долгота)
    const clubCoordinates = [55.751244, 37.618423]; // Замените на координаты своего клуба

    // Функция инициализации карты
    function init() {
        // Создаем карту
        const map = new ymaps.Map('map', { // 'map' - ID элемента, где отображается карта
            center: clubCoordinates,   // Центр карты
            zoom: 15                   // Уровень масштабирования
        });

        // Добавляем маркер на карту
        const placemark = new ymaps.Placemark(clubCoordinates, {
            hintContent: 'Наш клуб',      // Подсказка при наведении на маркер
            balloonContent: 'Наш клуб - здесь!' // Содержимое всплывающей подсказки
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            preset: 'islands#darkBlueDotIcon' // стиль маркера
        });

        map.geoObjects.add(placemark);  // Добавляем маркер на карту
    }

    // Загружаем API Яндекс.Карт
    ymaps.ready(init);  // Инициализируем карту после загрузки API

    // Добавляем скрипт API Яндекс.Карт
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=' + apiKey + '&lang=ru_RU';
    document.head.appendChild(script);
</script>