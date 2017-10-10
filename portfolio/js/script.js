$(function(){
    var current_li;
    
    $("#search").keyup(function(){
        var current_query = $("#search").val();
        
        if(current_query != ""){
            
            $("#portfolio li").hide();
        
            $("#portfolio li").each(function(){

                var current_keyword = $(this).attr("data-keywords");

                if(current_keyword.indexOf(current_query) >= 0){
                    $(this).show();
                }

            });
        }else{
            $("#portfolio li").show();
        }
        

    });
    
    function setImg(src, id){
        $("#main").attr("src", src);
        var path = "text/"+id+".txt";
        $.get(path, function(data){
            $("#description p").html(data);
        });
    }
    
    $("#portfolio img").click(function(){
        var src = $(this).attr("src");
        var id = $(this).attr("id");
        current_li = $(this).parent();
        setImg(src, id);
        $("#frame").fadeIn();
        $("#overlay").fadeIn();
    });
    
    $("#overlay").click(function(){
        $(this).fadeOut();
        $("#frame").fadeOut();
    });
    
    $("#right").click(function(){
        
        if(current_li.is(":last-child")){
            var next_li = $("#portfolio li").first();
        }else{
            var next_li = current_li.next();
        }
        
        var next_src = next_li.children("img").attr("src");
        var id = next_li.children("img").attr("id");
        setImg(next_src, id);
        current_li = next_li;
    });
    
     $("#left").click(function(){
         
        if(current_li.is(":first-child")){
            var prev_li = $("#portfolio li").last();
        }else{
            var prev_li = current_li.prev();
        }
        
        var prev_src = prev_li.children("img").attr("src");
        var id = prev_li.children("img").attr("id");
        setImg(prev_src, id);
        current_li = prev_li; 
    });
    
    $("#left, #right").mouseover(function(){
        $(this).css("opacity", "0.85");
    });
    
    $("#left, #right").mouseleave(function(){
        $(this).css("opacity", "0.5");
    });
    
});