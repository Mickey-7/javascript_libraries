//must follow strict convention param names based on documentations demos !!!!!!!

//start at the bottom gallery thumbs
var galleryBottom = new Swiper('.gallery-thumbs',{
    spaceBetween: 10,
    slidesPerView:4,
    loop:true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility : true,
    watchSlidesProgress: true,
})






var galleryUp = new Swiper('.gallery-top',{
    spaceBetween: 10,
    loop:true,
    loopedSlides: 5, //looped slides should be the same
    navigation:{
        nextEl:'.swiper-button-prev',
        prevEl:'.swiper-button-next',
    },
    thumbs: {                  //to relate top & bottom gallery
        swiper: galleryBottom, //note the galleryBottom is the var name for bottom gallery
      },
})