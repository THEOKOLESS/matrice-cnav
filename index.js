
// var form = $("#contact");
// form.validate({
//     errorPlacement: function errorPlacement(error, element) { element.before(error); },
//     rules: {
//         confirm: {
//             equalTo: "#password"
//         }
//     }
// });
// form.children("div").steps({
//     headerTag: "h3",
//     bodyTag: "section",
//     transitionEffect: "slideLeft",
//     onStepChanging: function (event, currentIndex, newIndex)
//     {
//         form.validate().settings.ignore = ":disabled,:hidden";
//         return form.valid();
//     },
//     onFinishing: function (event, currentIndex)
//     {
//         form.validate().settings.ignore = ":disabled";
//         return form.valid();
//     },
//     onFinished: function (event, currentIndex)
//     {
//         alert("Submitted!");
//     }
// });

$(document).ready(function(){
 	$(document).on('click', '.toogle' , function(){
    var $link = $(this);
    $link.parent().parent().next().slideToggle();
        //console.log($link.children().prop('id')); 
        if ($link.hasClass('visible')) {
            $link.children().prop('value', '+');
    } else {
            $link.children().prop('value', '-');
    }
     $link.toggleClass('visible');
    });
    // });
	// });


	// $( "#startdate" ).change(function() {
	// 	var date = new Date($("#startdate").val());
	// 	 //console.log(date);
	// 	var newDate = date.toString('dd-MM-yy');
	// 	//console.log(newDate);
	// 	date.setMonth(date.getDay() + 3);
	//     $('#enddate').val(date.getDate());
	// });
$( function() {
        $( "#immo-donna-date" ).datepicker({
            changeMonth: true,
            changeYear: true,
             minDate: "-100 Y",  
            maxDate: new Date(),
            dateFormat: 'dd/mm/yy' 
    });
    });
 $( function() {
        $( "#since" ).datepicker({
            changeMonth: true,
            changeYear: true,
             minDate: "-100 Y",  
            maxDate: new Date(),
            dateFormat: 'dd/mm/yy' 
    });
    });

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
        $( "#time" ).datepicker({
            changeMonth: true,
            changeYear: true,
             minDate: "-100 Y",  
            maxDate: new Date(),
            dateFormat: 'dd/mm/yy' 
    });
    });

    // function requiredate(){
    //     var date3mois = new Date();
    //     if($("#famidate"))
    // }

//     $('#contact').submit(function() {
//     if ($('input:checkbox', this).is(':checked') &&
//         $('input:radio', this).is(':checked')) {
//         // everything's fine...
//     } else {
//         alert('Please select something!');
//         return false;
//     }
// });
          function callDate(){
            var date3mois = new Date();
            var month = date3mois.getMonth() - 3;
            var year = date3mois.getFullYear();
            // if (month > 4){
              // month -= 4;
            // }
            date3mois.setMonth(month);
            date3mois.setUTCDate('1');
            console.log(date3mois);

          date3mois = date3mois.toLocaleDateString().toString();
          date3mois = date3mois.split("T");
          $("#startdate").prop('value', date3mois) 
         
          }

          callDate();
          function callDate2(){
            var date3mois = new Date($("#startdate").val());
            console.log(date3mois)
            var month = date3mois.getMonth();
            // if (month > 3){
              // month = month + 2;
            // }
            date3mois.setMonth(month);
            // date3mois.setUTCDate('32');
            var lastDayOfMonth = new Date(date3mois.getFullYear(), date3mois.getMonth()+1, 0);
          lastDayOfMonth = lastDayOfMonth.toLocaleDateString().toString();
          lastDayOfMonth = lastDayOfMonth.split("T");
          $("#enddate").prop('value', lastDayOfMonth) 
          }

          function callDate3(){
            var date3mois = new Date();
            var month = date3mois.getMonth();
            // if (month > 3){
              month += 1;
            // }
            date3mois.setMonth(month);
            date3mois.setUTCDate('1');

          date3mois = date3mois.toLocaleDateString().toString();
          date3mois = date3mois.split("T");
          $("#echeance").prop('value', date3mois) 
          }


          callDate();
          callDate2();
          callDate3();
          initText();


          function writemth() {
            $('.bloc').each(function(){
               eachInMois($(this).find('.mois'));
            });
         

          };
          writemth();
          function  eachInMois(currBloc) {

            var date    = new Date($('#startdate').val());
            var moisfr  = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
            var month   = date.getMonth();
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
          if (status == "celibataire")
        {
            $('#conj').hide();
        }
        else if (status == "Veuf" || status == "Divorce" || status == "Sépare" || status == "Conjoint-disparu")
        {
             $('#conj').hide();
             // document.getElementById("conj-tittle").innerHTML = "Identité de votre ex-conjoint(e), décédé(e) ou disparu(e)"; 
        }
        else
        {
             $('#conj').show();
             document.getElementById("conj-tittle").innerHTML = "Identité de votre conjoint(e) actuel(le)"; 
        }
        });

           function initText(){
          var status = $('#myDropdown').val();
          if (status == "celibataire" || status == "Veuf" || status == "Divorce" || status == "Sépare" || status == "Conjoint-disparu")
        {
            document.getElementById("alone-title").innerHTML = "Vos biens, en France et/ou á l'étranger"; 
            document.getElementById("alone-sub").innerHTML = "Avez-vous des biens <b>immobiliers</b> en France et/ou á l'étranger ?"; 
            document.getElementById("alone-home").innerHTML = "Habitez-vous la maison dont vous êtes propriétaire ?"; 
            document.getElementById("alone-mob").innerHTML = "Avez-vous des biens <b>mobiliers</b> en France et/ou á l'étranger ?";  
            document.getElementById("alone-d-immo").innerHTML = "Avez-vous des biens <b>immobiliers</b> en France et/ou á l'étranger DONT VOUS AVEZ FAIT LA DONATION DEPUIS MOINS DE 10 ANS ?";
            document.getElementById("alone-d-mobi").innerHTML = "Avez-vous des biens <b>mobiliers</b> en France et/ou á l'étranger DONT VOUS AVEZ FAIT LA DONATION DEPUIS MOINS DE 10 ANS ?";
            $('#alone-donnate-imo').hide();
            $('#alone-donnate-mobi').hide();
            document.getElementById("impo").innerHTML = "Veuillez nous envoyer votre dernier avis d’impôt sur le revenu.";
            document.getElementById("accept-test").innerHTML = "je signe eletroniquement.";             
            document.getElementById("alone-d-mobi").innerHTML = "Avez-vous et/ou votre conjoint, concubin, partenaire PACS des biens <b>mobilier</b> en france et/ou á l'étranger DONT VOUS AVEZ FAIT LA DONNATION DEPUIS MOINS DE 10 ANS?.";
 
        }
        else
        {
             document.getElementById("alone-title").innerHTML = "Vos biens (et éventuellement ceux de votre ménage), en France et/ou á l'étranger"; 
             document.getElementById("alone-sub").innerHTML = "Avez-vous (et/ou votre conjoint, concubin, partenaire PACS) des biens <b>immobiliers</b> en France et/ou á l'étranger ?";
             document.getElementById("alone-home").innerHTML = "Habitez-vous la maison dont vous ou votre conjoint actuel, concubin, partenaire PACS êtes propriétaire ?"; 
             document.getElementById("alone-mob").innerHTML = "Avez-vous (et/ou votre conjoint, concubin, partenaire PACS) des biens <b>mobiliers</b> en France et/ou á l'étranger ?";  
             document.getElementById("alone-d-immo").innerHTML = "Avez-vous et/ou votre conjoint, concubin, partenaire PACS des biens <b>immobiliers</b> en France et/ou á l'étranger DONT VOUS AVEZ FAIT LA DONATION DEPUIS MOINS DE 10 ANS ?";  
             $('#alone-donnate-imo').show();
             $('#alone-donnate-mobi').show(); 
              document.getElementById("impo").innerHTML = "Veuillez nous envoyer votre dernier avis d’impôt sur le revenu ainsi que le dernier avis d’impôt de votre concubin.";  
              document.getElementById("accept-test").innerHTML = "je signe eletroniquement pour les deux parties.";
              document.getElementById("alone-d-mobi").innerHTML = "Avez-vous et/ou votre conjoint, concubin, partenaire PACS des biens <b>mobilier</b> en france et/ou á l'étranger DONT VOUS AVEZ FAIT LA DONNATION DEPUIS MOINS DE 10 ANS?.";  
        }

       
        };



      $(document).on('change', '#myDropdown' , function(){

          var status = $('#myDropdown').val();
          if (status == "celibataire" || status == "Veuf" || status == "Divorce" || status == "Sépare" || status == "Conjoint-disparu")
        {
            document.getElementById("alone-title").innerHTML = "Vos biens, en France et/ou á l'étranger"; 
            document.getElementById("alone-sub").innerHTML = "Avez-vous des biens <b>immobiliers</b> en France et/ou á l'étranger ?"; 
            document.getElementById("alone-home").innerHTML = "Habitez-vous la maison dont vous êtes propriétaire ?"; 
            document.getElementById("alone-mob").innerHTML = "Avez-vous des biens <b>mobiliers</b> en France et/ou á l'étranger ?";  
            document.getElementById("alone-d-immo").innerHTML = "Avez-vous des biens <b>immobiliers</b> en France et/ou á l'étranger DONT VOUS AVEZ FAIT LA DONATION DEPUIS MOINS DE 10 ANS ?";
            document.getElementById("alone-d-mobi").innerHTML = "Avez-vous des biens <b>mobiliers</b> en France et/ou á l'étranger DONT VOUS AVEZ FAIT LA DONATION DEPUIS MOINS DE 10 ANS ?";
            $('#alone-donnate-imo').hide();
            $('#alone-donnate-mobi').hide();
            document.getElementById("impo").innerHTML = "Veuillez nous envoyer votre dernier avis d’impôt sur le revenu.";
            document.getElementById("acceptTerms").innerHTML = "je signe eletroniquement.";
            document.getElementById("alone-d-mobi").innerHTML = "Avez-vous et/ou votre conjoint, concubin, partenaire PACS des biens <b>mobilier</b> en france et/ou á l'étranger DONT VOUS AVEZ FAIT LA DONNATION DEPUIS MOINS DE 10 ANS?.";  
 
        }
        else
        {
             document.getElementById("alone-title").innerHTML = "Vos biens (et éventuellement ceux de votre ménage), en France et/ou á l'étranger"; 
             document.getElementById("alone-sub").innerHTML = "Avez-vous (et/ou votre conjoint, concubin, partenaire PACS) des biens <b>immobiliers</b> en France et/ou á l'étranger ?";
             document.getElementById("alone-home").innerHTML = "Habitez-vous la maison dont vous ou votre conjoint actuel, concubin, partenaire PACS êtes propriétaire ?"; 
             document.getElementById("alone-mob").innerHTML = "Avez-vous (et/ou votre conjoint, concubin, partenaire PACS) des biens <b>mobiliers</b> en France et/ou á l'étranger ?";  
             document.getElementById("alone-d-immo").innerHTML = "Avez-vous et/ou votre conjoint, concubin, partenaire PACS des biens <b>immobiliers</b> en France et/ou á l'étranger DONT VOUS AVEZ FAIT LA DONATION DEPUIS MOINS DE 10 ANS ?";  
             $('#alone-donnate-imo').show();
             $('#alone-donnate-mobi').show(); 
              document.getElementById("impo").innerHTML = "Veuillez nous envoyer votre dernier avis d’impôt sur le revenu ainsi que le dernier avis d’impôt de votre concubin.";  
              document.getElementById("acceptTerms").innerHTML = "je signe eletroniquement pour les deux parties.";
               document.getElementById("alone-d-mobi").innerHTML = "Avez-vous et/ou votre conjoint, concubin, partenaire PACS des biens <b>mobilier</b> en france et/ou á l'étranger DONT VOUS AVEZ FAIT LA DONNATION DEPUIS MOINS DE 10 ANS?.";  
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


        // $(document).on('change', '#myDropdown' , function(){
        //   var status = $('#myDropdown').val();
        //      if (status == "marie" || status == "Remarie"){
        //        document.getElementById("changement-fam").innerHTML = "Veuillez joindre ci-dessous une copie de votre livret famille";
        //        $("#up-liv").show(); 
        //      }
        //      else if ((status == "Pacse" || status == "Vie-en-convubinage")){
        //       document.getElementById("changement-fam").innerHTML = "Veuillez joindre ci-dessous une attestation d’enregistrement d’un pacte civil de solidarité";
        //       $("#up-liv").show(); 
        //      }
        //       else if ((status == "Divorce" || status == "Sépare")){
        //         document.getElementById("changement-fam").innerHTML = "Veuillez joindre ci-dessous un jugement de séparation";
        //         $("#up-liv").show(); 
        //       }
        //       else{
        //         $("#up-liv").hide(); 
        //       }
        // });
//         $("#cnracl").click(function() {
//     var checked=this.checked;
//     if(checked==true)
//         {
//           console.log("tototototo");
//          $('#cnracl').show()
//         }
//     else
//         {
//          $('#cnracl').hide()
//         }
// });



    $(document).on('change', '.retcomp' , function(){
   

   if ($(this).is(':checked')) {
    if((this).id == "agricarrcoC"){
    $("#retraitecomplet").after("<div class='row bloc' id='agrircarrco'><div class='logo-reg col-md-auto'> <img src='img/logo.png'></div><div class='col-sm'><label for='fstmth' class='mois'></label><input type='text' id='fstmth' placeholder='€'></div><div class='col-sm'><label for='secmth' class='mois'></label><input type='text' id='secmth' placeholder='€'></div><div class='col-sm'><label for='thrmth' class='mois'></label><input type='text' id='thrmth' placeholder='€'></div></div>")
       writemth();            
      
     
   } else if ((this).id == "cnraclC"){
       $("#retraitecomplet").after("<div class='row bloc' id='cnracl'><div class='logo-reg col-md-auto'> <img src='img/Logo_CNRACL.png'></div><div class='col-sm'><label for='fstmth' class='mois'></label><input type='text' id='fstmth' placeholder='€'></div><div class='col-sm'><label for='secmth' class='mois'></label><input type='text' id='secmth' placeholder='€'></div><div class='col-sm'><label for='thrmth' class='mois'></label><input type='text' id='thrmth' placeholder='€'></div></div>")
       writemth();  

    }
     else if ((this).id == "ratpC"){
       $("#retraitecomplet").after("<div class='row bloc' id='ratp'><div class='logo-reg col-md-auto'> <img src='img/crp-ratp-logo.png'></div><div class='col-sm'><label for='fstmth' class='mois'></label><input type='text' id='fstmth' placeholder='€'></div><div class='col-sm'><label for='secmth' class='mois'></label><input type='text' id='secmth' placeholder='€'></div><div class='col-sm'><label for='thrmth' class='mois'></label><input type='text' id='thrmth' placeholder='€'></div></div>")
       writemth();  
    }
     else if ((this).id == "ircantecC"){
       $("#retraitecomplet").after("<div class='row bloc' id='ircantec'><div class='logo-reg col-md-auto'> <img src='img/logo_0.png'></div><div class='col-sm'><label for='fstmth' class='mois'></label><input type='text' id='fstmth' placeholder='€'></div><div class='col-sm'><label for='secmth' class='mois'></label><input type='text' id='secmth' placeholder='€'></div><div class='col-sm'><label for='thrmth' class='mois'></label><input type='text' id='thrmth' placeholder='€'></div></div>")
       writemth();  

    }

  } else if ($(this).not(':checked')){
    if((this).id == "agricarrcoC"){
      document.getElementById("agrircarrco").outerHTML = "";
    }
    if((this).id == "cnraclC"){
      document.getElementById("cnracl").outerHTML = "";
    }
    if((this).id == "ratpC"){
      document.getElementById("ratp").outerHTML = "";
    }
    if((this).id == "ircantecC"){
      document.getElementById("ircantec").outerHTML = "";
    }
  }
    // $('#cnracl').slideToggle();
        });

$('#contact input[type=radio]').on('change', function() {
   var input  = $('input[name=work_abroad]:checked', '#contact').val();
   var input2 = $('input[name=mobi]:checked', '#contact').val();
   var input3 = $('input[name=home]:checked', '#contact').val();
   var input4 = $('input[name=donnation]:checked', '#contact').val(); 
   var input5 = $('input[name=home-l]:checked', '#contact').val();
   var input6 = $('input[name=donnation-mobi]:checked', '#contact').val();
   if(input == "y"){
     $('#bibibi').show();
     $('#mobi').show();
   }
    else if (input == "n"){
      $('#bibibi').hide();
      $('#mobi').show();
    }
    if (input2 == "ye"){
        $('#mobibi').show();
        $('#donnationdiv').show();
    }
    else if (input2 == "no"){
      $('#mobibi').hide();
      $('#donnationdiv').show();
    }
    if (input3 == "ye"){
      $('#locate').show();
    }
    else if (input3 == "no"){
      $('#locate').hide();
      $('#locateprice').hide();
    }
    if (input5 == "ye"){
      $('#locateprice').show();
    }
    else if (input5 == "no"){
      $('#locateprice').hide();
    }
    if(input5 == "ye" && input3 == "no")
    {
      $('#locateprice').hide();
    }
    if (input4 == "ye"){
      $('#bi-donnate').show();
      $("#donnationdiv-mobi").show();
    }
    else if (input4 == "no"){
      $('#bi-donnate').hide();
      $("#donnationdiv-mobi").show();
    }
     if (input6 == "ye"){
      $('#bi-donnate-mobi').show();
    }
    else if (input6 == "no"){
      $('#bi-donnate-mobi').hide();
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

   $(document).on('click', '#addr-valid', function(e){
        e.preventDefault();
        var streetnumver = $('#street_number').val();
        var street =  $('#route').val();//document.getElementById ( "street" );
        var city   =  $('#locality').val();//
        var zip    =  $('#postal_code').val();//


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
        var save   = $("#situation-offi").text();
   
        if(save != status && status != "Veuillez sélectionner votre situation familiale" && status != "Vie en convubinage" && status != "conjoint(e) porté(e) disparu(e)"){
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
        console.log(status)
        $("#situation-fami").hide();
        $("#modif-situ").show();
        $("#situation-offi").show();

  });

  $(document).on('click', '#annuled-situ', function(e){
        e.preventDefault();
      
        $("#situation-fami").hide();
        $("#modif-situ").show();
        $("#situation-offi").show();

  });





        $(function(){
        $('.btnMenu').on('click touch', function(e){
          e.preventDefault();
            $('#nav').slideToggle();
            $('#PalimC').hide();
            $('#PinvaC').hide();
            $('#RDRC').hide();
            $('#PRC').hide();
            $('#RPAC').hide();
        });
    });

        $(document).on('click', '.icon-bar', function(e){
          e.preventDefault();
          var link = $(this);
       // if (link.hasClass('vis')){
           // link.hide();
           if((this).id == "Palim"){
            $('#PalimC').show();
          }
          else if ((this).id == "Pinva"){
            $('#PinvaC').show();
          }
          else if ((this).id == "RDR"){
            $('#RDRC').show();
          }
          else if ((this).id == "PR"){
            $('#PRC').show();
          }
          else if ((this).id == "RPA"){
            $('#RPAC').show();
          }
          else if((this).id == "autre"){
            $("#autre").after("<div class='row bloc'><h4>preciser votre revenu <input class='inline autow' type='text' placeholder='le nom de votre revenu'><input class='myButton inline cancel' type='button' value='x'/> \
              </h4><div class='col-sm'><label for='fstmth' class='mois'></label><input type='text' \
              id='fstmth' placeholder='€'></div><div class='col-sm'><label for='secmth' class='mois'></label>\
              <input type='text' id='secmth' placeholder='€'></div><div class='col-sm'><label for='thrmth' class='mois'></label><input type='text' id='thrmth' placeholder='€'></div></div>")
            writemth()
          }
        });


   $(document).on('click', '.has-more', function(e){
          e.preventDefault();
            if((this).id == "more-base-retraite"){
              $(this).parent().next().after("<div class='row bloc retraite-base'><h4>retraite de base supplementaire<input class='inline autow' type='text' placeholder='retraite de base'> <input class='myButton cancel inline' id='more-comp-retraite' type='button' value='x'>\
                </h4><div class='col-sm'><label for='fstmth' class='mois'></label><input type='text' \
              id='fstmth' placeholder='€'></div><div class='col-sm'><label for='secmth' class='mois'></label>\
              <input type='text' id='secmth' placeholder='€'></div><div class='col-sm'><label for='thrmth' class='mois'></label><input type='text' id='thrmth' placeholder='€'></div></div>")
            writemth();
            }
            else if((this).id == "more-comp-retraite"){
              $(this).parent().next().after("<div class='row bloc retraite-comp'><h4>retraite complementaire supplementaire<input class='inline autow' type='text' placeholder='retraite complementaire'>\
               <input class='myButton cancel inline' type='button' value='x'>\
                </h4><div class='col-sm'><label for='fstmth' class='mois'></label><input type='text' \
              id='fstmth' placeholder='€'></div><div class='col-sm'><label for='secmth' class='mois'></label>\
              <input type='text' id='secmth' placeholder='€'></div><div class='col-sm'><label for='thrmth' class='mois'></label><input type='text' id='thrmth' placeholder='€'></div></div>")
            writemth();
            }

        });

         $(document).on('click', '.cancel', function(e){
          e.preventDefault();
          $(this).parent().parent().remove();  /* remove panel */
        });


function getValue(param) {
      var value =  param       // je ferais ma requete
      return value;
    }

    $(document).on('click', '.biens', function(e){
          e.preventDefault();
          console.log($(this));
          $("#bibi").after("<div class='row'><h4>Bien immobilier supplementaire a declarer <input class='myButton cancel inline'' type='button' value='x'>\
            </h4><div class='col-sm'><label for='nature'>Précisez la nature du bien déclaré</label><input type='text' id='nature' placeholder='nature du bien'></div><div class='col-sm'><label for='adresse'>Adresse du bien déclaré</label><input type='text' id='adresse' placeholder='Adresse complete du bien'></div><div class='col-sm'><label for='valeur'>Valeur actuelle</label><input type='text' id='valeur' placeholder='€'></div></div>")
      });
    $(document).on('click', '.biens-mobi', function(e){
          e.preventDefault();
          console.log($(this));
          $("#mobibibi").after("<div class='row'><h4>Bien mobilier supplementaire a declarer <input class='myButton cancel inline'' type='button' value='x'>\
            </h4><div class='col-sm'><label for='nature'>Précisez la nature du bien déclaré</label><input type='text' id='nature' placeholder='nature du bien'></div><div class='col-sm'><label for='valeur'>Valeur actuelle</label><input type='text' id='valeur' placeholder='€'></div></div>")
      });
    $(document).on('click', '.biens-donnate', function(e){
          e.preventDefault();
          console.log($(this));
          $("#bibi-do").after("<h4>Bien immobilier supplementaire dont vous avez fait la donation depus moins de 10ans a declarer <input class='myButton cancel inline' type='button' value='x'></h4>\
                        <div class='row'>\
                              <div class='col-sm'>\
                                <label for='nature'>Précisez la nature du bien déclaré</label>\
                                    <input type='text' id='nature' placeholder='nature du bien'>\
                              </div>\
                              <div class='col-sm'>\
                                <label for='adresse'>Adresse du bien déclaré</label>\
                                    <input type='text' id='adresse' placeholder='adresse complete du bien'>\
                              </div>\
                              <div class='col-sm'>\
                                <label for='valeur'>Valeur actuelle</label>\
                                <input type='text' id='valeur' placeholder='€'>\
                              </div>\
                        </div>\
                        <p>Date de l’acte de donation <input class='situf inline' required type='text' placeholder='jj/mm/aaaa' name='famidate' id='immo-donna-date'>\
                           <div class='col-sm'>\
                                <label for='thrmth' class='parent'>Lien de parenté avec le bénéficiaire de la donation :</label>\
                                <input type='text' class='autow inline'   placeholder='Lien de parenté'>\
                          </div>")
      });

    $(document).on('click', '.biens-donnate-mobi', function(e){
          e.preventDefault();
          console.log($(this));
          $("#bibi-do-mobi").after("<h4>Bien mobilier supplementaire dont vous avez fait la donation depus moins de 10ans a declarer <input class='myButton cancel inline' type='button' value='x'></h4>\
                        <div class='row'>\
                              <div class='col-sm'>\
                                <label for='nature'>Précisez la nature du bien déclaré</label>\
                                    <input type='text' id='nature' placeholder='nature du bien'>\
                              </div>\
                              <div class='col-sm'>\
                                <label for='valeur'>Valeur actuelle</label>\
                                <input type='text' id='valeur' placeholder='€'>\
                              </div>\
                        </div>\
                        <p>Date de l’acte de donation <input class='situf inline' required type='text' placeholder='jj/mm/aaaa' name='famidate' id='immo-donna-date'>\
                           <div class='col-sm'>\
                                <label for='thrmth' class='parent'>Lien de parenté avec le bénéficiaire de la donation :</label>\
                                <input type='text' class='autow inline'   placeholder='Lien de parenté'>\
                          </div>")
      });
});



// $(function(){
// $('.design').prepend($('#wizard').addClass("top-actions"));

//   var button = '<button type="button" class="btn btn-primary orange"> \
//                   <span class=" glyphicon glyphicon-chevron-right" aria-hidden="true"></span>\
//                 </button>';

//   // $('').before(button);
// }); 

