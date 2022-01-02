    ymaps.ready(function () {
        var myMapYandex = new ymaps.Map('mapYandex', {
                center: [53.42149299645412, 58.98780099983039],
                zoom: 16.5
            }, {
                searchControlProvider: 'yandex#search'
            }),


            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemark2 = new ymaps.Placemark([53.42149299645412, 58.98780099983039], {
                hintContent: 'МЦэУ ❘ Медицинский центр'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/ballun.png',
                // Размеры метки.
                iconImageSize: [64, 89],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-43, -87]
            });

        myMapYandex.controls.remove('geolocationControl');
        myMapYandex.controls.remove('searchControl');
        myMapYandex.controls.remove('trafficControl');
        myMapYandex.controls.remove('typeSelector');
        myMapYandex.controls.remove('fullscreenControl');
        myMapYandex.controls.remove('rulerControl');
        myMapYandex.behaviors.disable(['scrollZoom']);

        myMapYandex.behaviors.disable('scrollZoom'); // — это отключает зум колёсиком мышки, всё ок.
        myMapYandex.behaviors.disable('multiTouch'); // — это отключает зум щипком, не очень нужно. 
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            myMapYandex.behaviors.disable('drag')
        }
        myMapYandex.geoObjects
            .add(myPlacemark2);
    });