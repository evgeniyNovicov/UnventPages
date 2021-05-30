$ (function() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrow-prev.png" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrow-next.png" alt="">',
        speed: 500,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnFocus: true,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 550,
                settings: {
                  slidesToShow: 3,
                }
            },
            {
                breakpoint: 450,
                settings: {
                  slidesToShow: 2,
                }
            }
        ]
    })
})

$('.slider').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
        verticalFit: true,
        titleSrc: function(item) {
            return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
        }
    },
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
            return element.find('img');
        }
    }
    
});

let mapOpenButton = document.querySelector('.header-local__info')
let map = document.querySelector('.map-block')
let background = document.querySelector('.background')
let closeButton = document.querySelector('.button--close')
mapOpenButton.addEventListener('click', function() {
    map.classList.add('active') 
    background.classList.add('active') 
    setTimeout(function () {
        background.style.opacity='.6'
    }, 700)
    closeButton.classList.add('active') 
})
background.addEventListener('click', function() {
    map.classList.remove('active')
    setTimeout(function () {
        background.classList.remove('active')
    }, 700)
    background.style.opacity='0'
    closeButton.classList.remove('active')
})
closeButton.addEventListener('click', function() {
    map.classList.remove('active')
    setTimeout(function () {
        background.classList.remove('active')
    }, 700)
    background.style.opacity='0'
    closeButton.classList.remove('active')
})


const langObj = {
    ru: {
        logoText: '<span>Профессиональный монтаж <br> дымоходов</span> любой сложности в <br> Киеве и Киевской области',
        localAdress: '<span>Украина, Киев <br></span> Васильковская 30',
        localLink: 'Посмотреть на карте',
        langText: 'Выбор языка',
        headerButton: 'Консультация инженера',
        menuLinks: ['Калькулятор','Услуги','Наши работы','Отзывы','Консультация','Преимущества','Монтаж','Вопрос-ответ','Контакты'],
        contentTitle: '<span>Монтаж дымоходов из нержавеющей стали</span>для частных домов и предприятий',
        descriptionText: [' <span>лет устанавливаем дымоходы</span> для частных лиц и организаций', '<span>Бесплатный выезд инженера</span> в пределах 30 километров от Киева', '<span>Монтаж под ключ от 1 дня,</span> в наличии все разрешительные документы'],
        priceText: 'Рассчитайте стоимость монтажа вашего дымохода за 1 минуту и <span>получите скидку 15%</span>',
        priceButtonText: 'Рассчитать стоимость монтажа и получить скидку',
        sertivicateText: 'Лицензии и сертификаты в наличии',
        name: '<span class="content-info--name">Виталий<br></span> монтажник <br><div class="content-info--experience">Опыт работы с дымоходом 9 лет</div>' ,
        workYear: 'Опыт работы с дымоходом 9 лет'
    },
    ua: {
        logoText: '<span>Professional installation of <br> chimneys</span> any difficulty in <br> Kiev and the Kiev region',
        localAdress: '<span>Ukraine, Kiev <br></span> Vasilkovskaya 30',
        localLink: 'View on the map',
        langText: 'Language Selection',
        headerButton: "Engineer's consultation",
        menuLinks: ['Calculator', 'Services', 'Our works','Reviews','Consultation','Advantages of','Installation','Question-answer','Contacts'],
        contentTitle: '<span>Installation of stainless steel chimneys</span>for private homes and businesses',
        descriptionText: ['<span>years installing chimneys</span> for individuals and organizations', '<span>Free departure of an engineer</span> within 30 kilometers from Kiev', '<span>Turnkey installation from 1 day,</span> all permits are available'],
        priceText: 'Calculate the cost of installing your chimney in 1 minute and <span>get a 15% discount</span>',
        priceButtonText: 'Calculate the installation cost and get a discount',
        sertivicateText: 'Licenses and certificates available',
        name: '<span class="content-info--name">Vitaly<br></span> installer <br><div class= "content-info--experience">9 years of experience working with a chimney </div>' ,
    }
}

const UA = document.querySelector('.link--ua')
const RU = document.querySelector('.link--ru')
let LogoText = document.querySelector('.header-logo__text')
let localAdress = document.querySelector('.header-local__text')
let localLink = document.querySelector('.header-local__link')
let langText = document.querySelector('.language__text')
let headerButton = document.querySelector('.header-button')
let menuLinks = document.querySelectorAll('.menu-link')
let contentTitle = document.querySelector('.content__title')
let descriptionText = document.querySelectorAll('.descriprion__text')
let priceText = document.querySelector('.price__text')
let priceButtonText = document.querySelector('.price-button__text')
let sertivicateText = document.querySelector('.sertificate__text')
let name = document.querySelector('.content-info__block')

// function lahgChange (langButton, lang)  {
    UA.addEventListener('click', function () {
        UA.classList.add('active')
        RU.classList.remove('active')
        LogoText.innerHTML = langObj.ua.logoText 
        langText.innerHTML =  langObj.ua.langText 
        localAdress.innerHTML = langObj.ua.localAdress  
        localLink.innerHTML = langObj.ua.localLink  
        langText.innerHTML = langObj.ua.langText  
        headerButton.innerHTML = langObj.ua.headerButton 
        menuLinks.forEach((link,ind) => {
            langObj.ua.menuLinks.forEach((elem, num) => {
                if(ind == num) {
                    link.innerHTML = elem
                }
            })
        }) 
        contentTitle.innerHTML = langObj.ua.contentTitle 
        descriptionText.forEach((link,ind) => {
            langObj.ua.descriptionText.forEach((elem, num) => {
                if(ind == num) {
                    link.innerHTML = elem
                }
            })
        }) 
        priceText.innerHTML = langObj.ua.priceText  
        priceButtonText.innerHTML = langObj.ua.priceButtonText  
        sertivicateText.innerHTML = langObj.ua.sertivicateText  
        name.innerHTML = langObj.ua.name  
        console.log(LogoText)
    })
// }

// function lahgChange (langButton, lang)  {
    RU.addEventListener('click', function () {
        UA.classList.remove('active')
        RU.classList.add('active')
        LogoText.innerHTML = langObj.ru.logoText  
        localAdress.innerHTML = langObj.ru.localAdress 
        localLink.innerHTML = langObj.ru.localLink  
        langText.innerHTML = langObj.ru.langText  
        headerButton.innerHTML = langObj.ru.headerButton 
        menuLinks.forEach((link,ind) => {
            langObj.ru.menuLinks.forEach((elem, num) => {
                if(ind == num) {
                    link.innerHTML = elem
                }
            })
        }) 
        contentTitle.innerHTML = langObj.ru.contentTitle 
        descriptionText.forEach((link,ind) => {
            langObj.ru.descriptionText.forEach((elem, num) => {
                if(ind == num) {
                    link.innerHTML = elem
                }
            })
        }) 
        priceText.innerHTML = langObj.ru.priceText  
        priceButtonText.innerHTML = langObj.ru.priceButtonText  
        sertivicateText.innerHTML = langObj.ru.sertivicateText  
        name.innerHTML = langObj.ru.name  
    })
// }
 let menuList = document.querySelector('.menu-list')
 let burger = document.querySelector('.header-burger')
 burger.addEventListener('click', function() {
    menuList.classList.toggle('active')
 })
