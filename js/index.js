

$(document).ready(function(){
  initText();
  writemth();
  $.getScript("js/etape1.js");
  $.getScript("js/etape2.js");	
  $.getScript("js/etape3.js");
  $.getScript("js/etape4.js");
  $(document).on('click', '.toogle' , function(){
    var $link = $(this);
    $link.parent().parent().next().slideToggle();
        if ($link.hasClass('visible')) {
            $link.children().prop('value', '+');
    } else {
            $link.children().prop('value', '-');
    }
     $link.toggleClass('visible');
    });
    
    function writemth() {
      $('.bloc').each(function(){
         eachInMois($(this).find('.mois'));
      });
    };
    
    function  eachInMois(currBloc) {
    var date    = new Date("01/03/2018");
    console.log(date);
    var moisfr  = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    // var month   = date.getMonth();
    var month   = 2;
    var year    = date.getFullYear()
    var index   = 0;
    var output  = null;
    // var month2  = month2 = month;
      
      currBloc.each(function(){

          if(month > 12)
          {
              year += 1;
              month -= 12; 
          }
          output  = moisfr[month] + ' ' + year;
          if($(this)[0].textContent == ""){
          $(this).append(output);
        }
               // console.log($(this)[0].textContent);
          // index++;
          month++;
      });
  }



        // function writend(){
        //   $('.recap').each(function(){
        //     console.log("coucoucoucocu")
        //       document.getElementById("end-situ").innerHTML = document.getElementById((this).id).innerText;
        //       document.getElementById("end-add").innerHTML = document.getElementById((this).id).innerText;
        //   });
        // }

     

        
          function initText(){
          var status = $('#myDropdown').val();
          if (status == "celibataire" || status == "Veuf" || status == "Divorce" || status == "Sépare" || status == "Conjoint-disparu")
        {
            document.getElementById("alone-title").innerHTML = "Vos biens, en France et/ou à l'étranger"; 
            document.getElementById("alone-sub").innerHTML = "Avez-vous des biens <b>immobiliers</b> en France et/ou à l'étranger ?"; 
            document.getElementById("alone-home").innerHTML = "Habitez-vous la maison dont vous êtes propriétaire ?"; 
            document.getElementById("alone-mob").innerHTML = "Avez-vous des biens <b>mobiliers</b> en France et/ou à l'étranger ?";  
            document.getElementById("alone-d-immo").innerHTML = "Avez-vous des biens <b>immobiliers</b> en France et/ou à l'étranger DONT VOUS AVEZ FAIT LA DONATION DEPUIS MOINS DE 10 ANS ?";
            document.getElementById("alone-d-mobi").innerHTML = "Avez-vous des biens <b>mobiliers</b> en France et/ou à l'étranger DONT VOUS AVEZ FAIT LA DONATION DEPUIS MOINS DE 10 ANS ?";
            $('#alone-donnate-imo').hide();
            $('#alone-donnate-mobi').hide();
            document.getElementById("impo").innerHTML = "Veuillez nous envoyer votre dernier avis d’impôt sur le revenu.";
            document.getElementById("accept-test").innerHTML = "je signe eletroniquement.";             
            document.getElementById("alone-d-mobi").innerHTML = "Avez-vous et/ou votre conjoint, concubin, partenaire PACS des biens <b>mobilier</b> en france et/ou à l'étranger DONT VOUS AVEZ FAIT LA DONNATION DEPUIS MOINS DE 10 ANS?.";
 
        }
        else
        {
             document.getElementById("alone-title").innerHTML = "Vos biens (et éventuellement ceux de votre ménage), en France et/ou à l'étranger"; 
             document.getElementById("alone-sub").innerHTML = "Avez-vous (et/ou votre conjoint, concubin, partenaire PACS) des biens <b>immobiliers</b> en France et/ou à l'étranger ?";
             document.getElementById("alone-home").innerHTML = "Habitez-vous la maison dont vous ou votre conjoint actuel, concubin, partenaire PACS êtes propriétaire ?"; 
             document.getElementById("alone-mob").innerHTML = "Avez-vous (et/ou votre conjoint, concubin, partenaire PACS) des biens <b>mobiliers</b> en France et/ou à l'étranger ?";  
             document.getElementById("alone-d-immo").innerHTML = "Avez-vous et/ou votre conjoint, concubin, partenaire PACS des biens <b>immobiliers</b> en France et/ou à l'étranger DONT VOUS AVEZ FAIT LA DONATION DEPUIS MOINS DE 10 ANS ?";  
             $('#alone-donnate-imo').show();
             $('#alone-donnate-mobi').show(); 
              document.getElementById("impo").innerHTML = "Veuillez nous envoyer votre dernier avis d’impôt sur le revenu ainsi que le dernier avis d’impôt de votre concubin.";  
              document.getElementById("accept-test").innerHTML = "je signe eletroniquement pour les deux parties.";
              document.getElementById("alone-d-mobi").innerHTML = "Avez-vous et/ou votre conjoint, concubin, partenaire PACS des biens <b>mobilier</b> en france et/ou à l'étranger DONT VOUS AVEZ FAIT LA DONNATION DEPUIS MOINS DE 10 ANS?.";  
        }

       
        };

         $(document).on('click', '.cancel', function(e){
          e.preventDefault();
          $(this).parent().parent().remove();  /* remove panel */
        });


});

