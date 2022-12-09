
$(document).ready(function() {
    var botao = $('.hamburguer');
    var dropDown = $('.itens');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });

   $(document).ready(function() {
    var botao = $('.expandir-curso');
    var dropDown = $('.menu');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });

   /* ANIMAÇÃO */

  