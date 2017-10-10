$(function(){
    $("#filter li").click(function(){
        var cat = $(this).html();
        
        $("#filter li").removeClass("active");
        $(this).addClass("active");
        
        $("#portfolio li").hide();
        
        $("#portfolio li").each(function(){
            
            if($(this).hasClass(cat)){
                $(this).fadeIn();
            }
            
        });
    });
});