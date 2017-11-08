$(document).ready(function(){
   
    //Mouseenter overlay
    $('.inner').on('mouseenter', function(){
      
      var title = $(this).data('title');
           
       //Create info div overlay
      $(this).append('<div class="info"></div>');
       
       var info = $(this).children('.info');
       
       info.html('<h3>'+title+'</h3>');
       
       info.fadeIn(400);
  });
    
    //Mouseleave
    $('.inner').on('mouseleave', function(){
        
        var info = $(this).children('.info');
        
       $(info).fadeOut(400, function(){
            $(info).remove();
        });
        
    });
});


