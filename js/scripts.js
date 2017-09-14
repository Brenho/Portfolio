$(document).ready(function(){
   
    //Mouseenter overlay
    $('.inner a').on('mouseenter', function(){
      
       var title = $(this).data('title');
       var desc = $(this).data('desc');
           
       //Create info div overlay
       $(this).append('<div class="info"></div>');
       
       var info = $(this).children('.info');
       
       info.html('<h3>'+title+'</h3><p>'+desc+'</p>');
       
       info.fadeIn(400);
   });
    
    //Mouseleave
    $('.inner a').on('mouseleave', function(){
       
        var info = $(this).children('.info');
        
        $(info).fadeOut(400, function(){
            $(info).remove();
        });
        
    });
});


