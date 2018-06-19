
  $.getScript("js/writmth.js");

$(document).ready(function(){

  $.getScript("js/etape1.js");
  $.getScript("js/etape2.js");  
  $.getScript("js/etape3.js");
  $.getScript("js/etape4.js");
  $.getScript("js/jquery.numeric.js");
  initText();
  writemth();

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
    

  
  var formText = document.querySelectorAll('[data-js=form-text]');

    // For each field...
  [].forEach.call( formText, function(el, i) {
  // Cache the field label
  var thisLabel = el.parentNode.querySelector('label');
  
  // Add an 'active' class if text present
  el.onkeyup = function () {
  
    if (el.value.length > 0) {
      thisLabel.classList.add('active');
    } else {
      thisLabel.classList.remove('active');
    }
  
  };
  
});
  $(".mois").numeric({ negative : false, allowEmpty:false });


  // document.getElementsByClassName(".mois").addEventListener('keydown', function(e) 
  //   {
  //   var key   = e.keyCode ? e.keyCode : e.which;
    
  //   if (!( [8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
  //        (key == 65 && ( e.ctrlKey || e.metaKey  ) ) || 
  //        (key >= 35 && key <= 40) ||
  //        (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) ||
  //        (key >= 96 && key <= 105)
  //      )) e.preventDefault(); 
  // });
// });

$('.mois input[type="text"]').keyup(function(){
  if($(this).val() == 0 || $(this).val() == "."){
    $(this).prop('value', '');
  }
});

  //  $(".mois").each(function()){
  //   console.log($(this).val);
  // });
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

