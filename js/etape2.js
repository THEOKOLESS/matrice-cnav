
  $( function() {
        $( "#famidate" ).datepicker({
            changeMonth: true,
            changeYear: true,
             minDate: "-100 Y",  
            maxDate: new Date(),
            dateFormat: 'dd/mm/yy' 
    });
    });

   $( function() {
        $( "#conjbrth" ).datepicker({
            changeMonth: true,
            changeYear: true,
             minDate: "-100 Y",  
            maxDate: new Date(),
            dateFormat: 'dd/mm/yy' 
    });
    });

    $( function() {
        $( "#mobi-donna-date" ).datepicker({
            changeMonth: true,
            changeYear: true,
             minDate: "-100 Y",  
            maxDate: new Date(),
            dateFormat: 'dd/mm/yy' 
    });
    });

     $( function() {
        $( "#immo-donna-date" ).datepicker({
            changeMonth: true,
            changeYear: true,
             minDate: "-100 Y",  
            maxDate: new Date(),
            dateFormat: 'dd/mm/yy' 
    });
    });

//remove error


$('input[name="famidate"]').change(function (){
  if ($('#famidate').hasClass("error")){
    $('#famidate').removeClass("error");
    $(this).next().remove();
  }


  if ($('#conjbrth').hasClass("error")){
    $('#conjbrth').removeClass("error");
    $(this).next().remove();
  }

  if ($('#mobi-donna-date').hasClass("error")){
    $('#mobi-donna-date').removeClass("error");
    $(this).next().remove();
  }

  if ($('#immo-donna-date').hasClass("error")){
    $('#immo-donna-date').removeClass("error");
    $(this).next().remove();
  }

});

      	$(document).on('change', '#myDropdown' , function(){

          var status = $('#myDropdown').val();
          if (status == "celibataire" || status == "Veuf" || status == "Divorce" || status == "Sépare" || status == "Conjoint disparu")
        {
            $('#notAlone').hide();// $("#myDropdown").prop("selectedIndex", -1);
        }
        else  
        {
             $('#notAlone').show();
        }
        });

		$(document).on('change', '#myDropdown' , function(){

          var status = $('#myDropdown').val();
        //   if (status == "celibataire")
        // {
        //     $('#conj').hide();
        // }
        // else if (status == "Veuf" || status == "Divorce" || status == "Sépare" || status == "Conjoint-disparu")
        // {
        //      $('#conj').hide();
        //      // document.getElementById("conj-tittle").innerHTML = "Identité de votre ex-conjoint(e), décédé(e) ou disparu(e)"; 
        // }
        // else
        // {
        //      $('#conj').show();
        //      document.getElementById("conj-tittle").innerHTML = "Identité de votre conjoint(e) actuel(le)"; 
        // }
        });

           $(document).on('change', '#myDropdown' , function(){

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

          if (status == "marie" || status == "Remarie"){
               document.getElementById("changement-fam").innerHTML = "<b>Veuillez joindre ci-dessous une copie de votre livret famille</b>";
               $("#up-liv").show(); 
             }
             else if ((status == "Pacse" || status == "Vie-en-convubinage")){
              document.getElementById("changement-fam").innerHTML = "<b>Veuillez joindre ci-dessous une attestation d’enregistrement d’un pacte civil de solidarité</b>";
              $("#up-liv").show(); 
             }
              else if ((status == "Divorce" || status == "Sépare")){
                document.getElementById("changement-fam").innerHTML = "<b>Veuillez joindre ci-dessous un jugement de séparation</b>";
                $("#up-liv").show(); 
              }
              else{
                $("#up-liv").hide(); 
              }
        });


  $(document).on('click', '#addr', function(e){
        e.preventDefault();

        var street =  document.getElementById ( "street-offi" ).innerText;
        var city   =  document.getElementById ( "city-offi" ).innerText;
        var zip    =  document.getElementById ( "zip-offi" ).innerText;
        $(".centerBlock").hide();
        $("#add").show();
        $("#addr").hide();
         $("#street").prop('value', street);
         $("#city").prop('value', city);
         $("#ZIP").prop('value', zip);
  });

$($("#autocomplete")).change(function (){
  if ($("#autocomplete").hasClass("error")){
    $("#autocomplete").removeClass("error");
    $("#autocomplete").next().hide();
  }
});

   $(document).on('click', '#addr-valid', function(e){
        e.preventDefault();
        var streetnumver = $('#street_number').val();
        var street =  $('#route').val();//document.getElementById ( "street" );
        var city   =  $('#locality').val();//
        var zip    =  $('#postal_code').val();//

        if ($("#autocomplete").prop('value') == ""){
          $("#autocomplete").addClass("error");
          $("#addr-error").show();  
        }
        else{
          $("#autocomplete").removeClass("error");
          $("#addr-error").hide();
          $("#addr-valid").removeClass("btn-error");
          $("#add-valid-error").hide();
        $(".centerBlock").show();
        $("#add").hide();
        $("#addr").show();

        if (streetnumver)
         document.getElementById("number-offi").innerHTML = streetnumver;
       if(street)
         document.getElementById("street-offi").innerHTML = street;
       if (city)
         document.getElementById("city-offi").innerHTML = city;
       if (zip)
         document.getElementById("zip-offi").innerHTML = zip;
     }
  });

$(document).on('click', '#new-conj', function(e){
    if ($("#conj-name").prop('value') == ""){
      $("#conj-name").addClass("error"); 
          $("#conj-name-error").show();
    }
    else if ($("#conj-name").prop('value') != ""){
      $("#conj-name").removeClass("error");
      $("#conj-name-error").hide();
    }

    if ($("#conj-prename").prop('value') == ""){
      $("#conj-prename").addClass("error");
      $("#conj-prename-error").show();
    }
        else if ($("#conj-prename").prop('value') != ""){
      $("#conj-prename").removeClass("error");
      $("#conj-prename-error").hide();
    }

    if ($("#conjbrth").prop('value') == ""){
      $("#conjbrth").addClass("error");
      $("#conjbrth-error").show();
    }
    else if ($("#conjbrth").prop('value') != ""){
      $("#conjbrth").removeClass("error");
      $("#conjbrth-error").hide();
    }

    if ($("#conj-natio").prop('value') == ""){
      $("#conj-natio").addClass("error");
      $("#conj-natio-error").show();
    }
    else if ($("#conj-natio").prop('value') != ""){
      $("#conj-natio").removeClass("error");
      $("#conj-natio-error").hide();
    }

    if ($("#conj-commune").prop('value') == ""){
      $("#conj-commune").addClass("error");
      $("#conj-commune-error").show();
    }
    else if ($("#conj-commune").prop('value') != ""){
      $("#conj-commune").removeClass("error");
      $("#conj-commune-error").hide();
    }

    if ($("#conj-ZIP").prop('value') == ""){
      $("#conj-ZIP").addClass("error");
      $("#conj-ZIP-error").show();
    }
    else if ($("#conj-ZIP").prop('value') != ""){
      $("#conj-ZIP").removeClass("error");
      $("#conj-ZIP-error").hide();
    }

    if ($('#conj-country').val() == null){
      $('#conj-country').addClass("btn-error");
      $("#conj-country-error").show();
    }
    else if ($("#conj-country").prop('value') != ""){
      $("#conj-country").removeClass("btn-error");
      $("#conj-country-error").hide();
    }

    if ($("#secu").prop('value') == ""){
      $("#secu").addClass("error");
       $("#secu-error").show();
    }
    else if ($("#secu").prop('value') != ""){
      $("#secu").removeClass("error");
      $("#secu-error").hide();
    }

    if($('input[name=sexe]:checked', '#contact').val() == null){
      $('#sexe-conj').addClass("verif-genre");
      $('#sexe-conj-error').show();
    }
    else if ($('input[name=sexe]:checked', '#contact').val() != null){
      $('#sexe-conj').removeClass("verif-genre");
      $('#sexe-conj-error').hide();
    }

    if ($("#conj").find(".error").length == 0){
      if ($('input[name=sexe]:checked', '#contact').val() == "F"){
      document.getElementById("sexe-offi").innerHTML = "Mme. ";
    }
      else{
      document.getElementById("sexe-offi").innerHTML = "M. ";
      }
    
      if($("#conj-usage-name").prop('value') != ""){
        document.getElementById("name-offi").innerHTML = $("#conj-usage-name").prop('value')
      }
      else{
        document.getElementById("name-offi").innerHTML = $("#conj-name").prop('value') + " "
      }
      document.getElementById("prename-offi").innerHTML = $("#conj-prename").prop('value');
      
    $("#conj-info").hide();
    $("#conj-modif").show();
    $('#final-conj').show();
    $("#new-conj").removeClass("btn-error");
    $("#new-conj-error").css("display", "none");

}


});


$(document).on('click', '#conj-modif', function(e){
  e.preventDefault();
  $('#conj-modif').hide();
  $('#conj-info').show();
  $('#final-conj').hide();
});


  $(document).on('click', '#annuled-add', function(e){
    e.preventDefault();

        $(".centerBlock").show();
        $("#add").hide();
        $("#addr").show();
  });

    $(document).on('click', '#modif-situ', function(e){
        e.preventDefault();

        $("#situation-fami").show();
        $("#modif-situ").hide();
        $("#situation-offi").hide();

  });

       $(document).on('click', '#modified-situ', function(e){
        e.preventDefault();

        var status = $("#myDropdown option:selected").text();
        var save   = "Marié(e)";//$("#situation-offi").text();      situation offi from OR 
   
        if(status != "Veuillez sélectionner votre situation familiale" && status != "Vie en convubinage" && status != "conjoint(e) porté(e) disparu(e)"){
          document.getElementById("situation-offi").innerHTML = "Vous êtes " + status; 
        }
        else if (status == "Vie en convubinage")
        {
          document.getElementById("situation-offi").innerHTML = "Vous vivez en concubinage";
        }
        else if (status == "conjoint(e) porté(e) disparu(e)")
        {
          document.getElementById("situation-offi").innerHTML = "Votre conjoint(e) est porté(e) disparu(e)";
        }

        // if ($("#famidate"))
        if ($("#famidate").prop('value') == ""){
          $("#famidate").addClass("error");
          $("#famidate-error").show();
        }
        else{
          $("#situation-fami").hide();
          $("#modif-situ").show();
          $("#situation-offi").show();
          $("#famidate").removeClass("error");
          $("#modified-situ").removeClass("btn-error");
          $("#famivalid-error").hide();
        }
          if (status == "Veuf(ve)" || status == "Divorcé(e)" || status == "Séparé(e)" || status == "conjoint(e) porté(e) disparu(e)" || status == "Célibataire" || save == status)
        {
             $('#conj').hide();
        }
        else if (save != status && ($("#situation-fami").attr("style")) == "display: none;" )
        {
          
             $('#conj').show();
             $('#conj-info').show();
             document.getElementById("conj-tittle").innerHTML = "Identité de votre conjoint(e) actuel(le)"; 
        }

  });

  $(document).on('click', '#annuled-situ', function(e){
        e.preventDefault();
      
        $("#situation-fami").hide();
        $("#modif-situ").show();
        $("#situation-offi").show();

  });