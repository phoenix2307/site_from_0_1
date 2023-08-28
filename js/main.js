

const tabItem = document.querySelectorAll('.tabs__btn-item');

const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach( function (el){
    el.addEventListener('click', open)
    });

function open(event){
    const tabTarget = event.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function(item){
        item.classList.remove('tabs__btn-item--active');
    });
    tabTarget.classList.add('tabs__btn-item--active');

    tabContent.forEach(function(item){
       item.classList.remove('tabs__content-item--active')
    });
    document.querySelector(`#${button}`).classList.add('tabs__content-item--active')

}



const swiper = new Swiper(".swiper", {
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});