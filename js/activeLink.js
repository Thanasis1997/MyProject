$( document ).ready(function() {
    $('.about-me').click(function(){
        $("li").eq(0).addClass("active");
        $("li").removeClass("active");
        $("li").eq(1).addClass("active");
        console.log("test");
    
    
    });

    $('.home').click(function(){
        
        $("li").removeClass("active");
        $("li").eq(0).addClass("active");
        console.log("test");
    
    
    });
    
    $('.contact').click(function(){
        $("li").eq(0).addClass("active");
        $("li").removeClass("active");
        $("li").eq(2).addClass("active");
        console.log("test");
    
    
    });
    $('.projects').click(function(){
        $("li").eq(0).addClass("active");
        $("li").removeClass("active");
        $("li").eq(3).addClass("active");
        console.log("test");
    
    
    });
});