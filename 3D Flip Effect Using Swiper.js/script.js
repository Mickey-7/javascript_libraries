
    var swiper = new Swiper('.swiper-container', {          //new Swiper(swiperContainer, parameters)
        effect:"flip",                                      //`effect` param set to `flip` 
        grabCursor:true,
        loop:true,                                          //added for loop - default is false if not declared
        pagination:{
            el: ".swiper-pagination",                       //invoking pagination
        },
        navigation:{
            nextEl: ".swiper-button-next",                  //invoking button next
            prevEl: ".swiper-button-prev",                  //invoking button prev
        },
    });