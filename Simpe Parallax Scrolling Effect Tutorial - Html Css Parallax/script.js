//Settings
//name	            type	        default	                        hint
//orientation	    String	        up	                            up - right - down - left - up left - up right - down left - left right
//scale	            Number	        1.2	                            need to be above 1.0
//overflow	        Boolean	        false	
//delay	            Number	        0.4	                            the delay is in second
//transition	    String	        'cubic-bezier(0,0,0,1)'	        any CSS transition
//customContainer	String or Node	false	
//maxTransition	    Number	        0	                            it should be a percentage between 1 and 99


//Basic config
    var image1 = document.getElementsByClassName('image1');
    new simpleParallax(image1);

//with a different direction
    var image2 = document.getElementsByClassName('image2')
    new simpleParallax(image2, {orientation : "right"});

//with a higher scale
    var image3 = document.getElementsByClassName('image3');
    new simpleParallax(image3, {scale: 1.5})

//with overflow
    var image4 = document.getElementsByClassName("image4");
    new simpleParallax(image4 , { overflow : true})

//with delay and transition
    var image5 = document.getElementsByClassName("image5");
    new simpleParallax(image5 , { delay : 1, transition : 'cubic-bezier(0,0,0,1)'})

//with maxTransition
    var image6 = document.getElementsByClassName("image6");
    new simpleParallax(image5 , { maxTransition : 70})

//experiment
    var image7 = document.getElementsByClassName('image7')
    new simpleParallax(image7, {orientation : "left-right"});

    var image8 = document.getElementsByClassName('image8')
    new simpleParallax(image8, {orientation : "down left"});

    var image9 = document.getElementsByClassName('image9')
    new simpleParallax(image9, {orientation : "up right"});

    var image10 = document.getElementsByClassName('image10')
    new simpleParallax(image10, {orientation : "left-right"});

    var image11 = document.getElementsByClassName('image11')
    new simpleParallax(image11, {orientation : "up left"});

    var image12 = document.getElementsByClassName('image12')
    new simpleParallax(image12, {orientation : "down"});

