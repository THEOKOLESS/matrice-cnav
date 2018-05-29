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
          function callDate(param){
            var date3mois = new Date();
            var month = date3mois.getMonth();
            var year = date3mois.getFullYear();
            // if (month > 4){
              month = month - 3;
            // }
            date3mois.setMonth(month);
            date3mois.setUTCDate('1');
          date3mois = date3mois.toLocaleDateString().toString();
          date3mois = date3mois.split("T");
          $("#startdate").prop('value', date3mois[0]) 
          if (param == 1)
            return month;
          else
            return year;
          }
          function callDate2(){
            var date3mois = new Date($("#startdate").val());
            var month = date3mois.getMonth();
            // if (month > 3){
              month = month + 2;
            // }
            date3mois.setMonth(month);
            // date3mois.setUTCDate('32');
            var lastDayOfMonth = new Date(date3mois.getFullYear(), date3mois.getMonth()+1, 0);
          lastDayOfMonth = lastDayOfMonth.toLocaleDateString().toString();
          lastDayOfMonth = lastDayOfMonth.split("T");
          $("#enddate").prop('value', lastDayOfMonth) 
          }

          callDate();
          callDate2();




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
             $('#conj').show();
             document.getElementById("conj-tittle").innerHTML = "Identité de votre ex-conjoint(e), décédé(e) ou disparu(e)"; 
        }
        else
        {
             $('#conj').show();
             document.getElementById("conj-tittle").innerHTML = "Identité de votre conjoint(e) actuel(le)"; 
        }
        });

      $(document).on('change', '#myDropdown' , function(){

          var status = $('#myDropdown').val();
          if (status == "celibataire" || status == "Veuf" || status == "Divorce" || status == "Sépare" || status == "Conjoint-disparu")
        {
            document.getElementById("alone-title").innerHTML = "VOS BIENS, EN FRANCE ET/OU Á L'ÉTRANGER"; 
            document.getElementById("alone-sub").innerHTML = "Avez-vous des biens <b>immobiliers</b> en france et/ou á l'étranger ?"; 
            document.getElementById("alone-home").innerHTML = "Habitez-vous la maison dont vous êtes propriétaire ?"; 
            document.getElementById("alone-mob").innerHTML = "Avez-vous des biens <b>mobiliers</b> en france et/ou á l'étranger ?";  
            document.getElementById("alone-d-immo").innerHTML = "Avez-vous des biens <b>immobiliers</b> en france et/ou á l'étranger DONT VOUS AVEZ FAIS LA DONNATION DEPUIS MOINS DE 10 ANS ?";
            document.getElementById("alone-d-mobi").innerHTML = "Avez-vous des biens <b>mobiliers</b> en france et/ou á l'étranger DONT VOUS AVEZ FAIS LA DONNATION DEPUIS MOINS DE 10 ANS ?";
            $('#alone-donnate-imo').hide();
            $('#alone-donnate-mobi').hide();
            document.getElementById("impo").innerHTML = "Veuillez nous envoyer votre dernier avis d’impôt sur le revenu.";
            document.getElementById("acceptTerms").innerHTML = "je signe eletroniquement.";  
 
        }
        else
        {
             document.getElementById("alone-title").innerHTML = "VOS BIENS (ET EVENTUELLEMENT CEUX AVEC VOTRE MÉNAGE), EN FRANCE ET/OU Á L'ÉTRANGER"; 
             document.getElementById("alone-sub").innerHTML = "Avez-vous (et/ou votre conjoint, concubin, partenaire PACS) des biens <b>immobiliers</b> en france et/ou á l'étranger ?";
             document.getElementById("alone-home").innerHTML = "Habitez-vous la maison dont vous ou votre conjoint actuel, concubin, partenaire PACS êtes propriétaire ?"; 
             document.getElementById("alone-mob").innerHTML = "Avez-vous (et/ou votre conjoint, concubin, partenaire PACS) des biens <b>mobiliers</b> en france et/ou á l'étranger ?";  
             document.getElementById("alone-d-immo").innerHTML = "Avez-vous et/ou votre conjoint, concubin, partenaire PACS des biens <b>immobiliers</b> en france et/ou á l'étranger DONT VOUS AVEZ FAIS LA DONNATION DEPUIS MOINS DE 10 ANS ?";  
             document.getElementById("alone-d-immo").innerHTML = "Avez-vous et/ou votre conjoint, concubin, partenaire PACS des biens <b>mobiliers</b> en france et/ou á l'étranger DONT VOUS AVEZ FAIS LA DONNATION DEPUIS MOINS DE 10 ANS ?";
             $('#alone-donnate-imo').show();
             $('#alone-donnate-mobi').show(); 
              document.getElementById("impo").innerHTML = "Veuillez nous envoyer votre dernier avis d’impôt sur le revenu ainsi que le dernier avis d’impôt de votre concubin.";  
              document.getElementById("acceptTerms").innerHTML = "je signe eletroniquement pour les deux partis.";  
        }
        });

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
    $("#retraitecomplet").after("<div class='row bloc' id='agrircarrco'><div class='logo-reg'> <img src='img/logo.png'></div><div class='col-sm'><label for='fstmth' class='mois'></label><input type='text' id='fstmth' placeholder='€'></div><div class='col-sm'><label for='secmth' class='mois'></label><input type='text' id='secmth' placeholder='€'></div><div class='col-sm'><label for='thrmth' class='mois'></label><input type='text' id='thrmth' placeholder='€'></div></div>")
       writemth();            
      
     
   } else if ((this).id == "cnraclC"){
       $("#retraitecomplet").after("<div class='row bloc' id='cnracl'><div class='logo-reg'> <img src='img/Logo_CNRACL.png'></div><div class='col-sm'><label for='fstmth' class='mois'></label><input type='text' id='fstmth' placeholder='€'></div><div class='col-sm'><label for='secmth' class='mois'></label><input type='text' id='secmth' placeholder='€'></div><div class='col-sm'><label for='thrmth' class='mois'></label><input type='text' id='thrmth' placeholder='€'></div></div>")
       writemth();  

    }
     else if ((this).id == "ratpC"){
       $("#retraitecomplet").after("<div class='row bloc' id='ratp'><div class='logo-reg'> <img src='img/crp-ratp-logo.png'></div><div class='col-sm'><label for='fstmth' class='mois'></label><input type='text' id='fstmth' placeholder='€'></div><div class='col-sm'><label for='secmth' class='mois'></label><input type='text' id='secmth' placeholder='€'></div><div class='col-sm'><label for='thrmth' class='mois'></label><input type='text' id='thrmth' placeholder='€'></div></div>")
       writemth();  
    }
     else if ((this).id == "ircantecC"){
       $("#retraitecomplet").after("<div class='row bloc' id='ircantec'><div class='logo-reg'> <img src='img/logo_0.png'></div><div class='col-sm'><label for='fstmth' class='mois'></label><input type='text' id='fstmth' placeholder='€'></div><div class='col-sm'><label for='secmth' class='mois'></label><input type='text' id='secmth' placeholder='€'></div><div class='col-sm'><label for='thrmth' class='mois'></label><input type='text' id='thrmth' placeholder='€'></div></div>")
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

        $(function(){
        $('#btnMenu').on('click touch', function(e){
          e.preventDefault();
            $('#nav').slideToggle();
            $('#PalimC').hide();
            $('#PinvaC').hide();
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
          else if((this).id == "autre"){
            $("#nav").after("<div class='row bloc' id='PalimC'><h4>preciser votre revenue <input class='inline autow' id='enddate' type='text'> <input class='myButton2 inline' id='cancel' type='button' value='x'></h4><div class='col-sm'><label for='fstmth' class='mois'></label><input type='text' id='fstmth' placeholder='€'></div><div class='col-sm'><label for='secmth' class='mois'></label><input type='text' id='secmth' placeholder='€'></div><div class='col-sm'><label for='thrmth' class='mois'></label><input type='text' id='thrmth' placeholder='€'></div></div>")
            writemth()
          }

        // }
        // else
        // {

        // }
          // $("#nav").after("<div class='row bloc' id='PalimC'><h4>Pension alimentaire (hors aide alimentaire obligatoire) <input class='myButton2 inline' id='cancel' type='button' value='x'></h4><div class='col-sm'><label for='fstmth' class='mois'></label><input type='text' id='fstmth' placeholder='€'></div><div class='col-sm'><label for='secmth' class='mois'></label><input type='text' id='secmth' placeholder='€'></div><div class='col-sm'><label for='thrmth' class='mois'></label><input type='text' id='thrmth' placeholder='€'></div></div>")
          // writemth()
          // $( ".myButton2" ).click(function($link) {
          //   link.show();
          // });
        
          // else if ((this).id == "Pinva"){
          //   $("#nav").after("<div class='row bloc' id='PinvaC'><h4>Pension d'invalidité <input class='myButton2 inline' id='cancel' type='button' value='x'></h4><div class='col-sm'><label for='fstmth' class='mois'></label><input type='text' id='fstmth' placeholder='€'></div><div class='col-sm'><label for='secmth' class='mois'></label><input type='text' id='secmth' placeholder='€'></div><div class='col-sm'><label for='thrmth' class='mois'></label><input type='text' id='thrmth' placeholder='€'></div></div>")
          // writemth()
          // $( ".myButton2" ).click(function($link) {
          //   link.show();
          // });
          // }

         // }
         // link.toggleClass('vis');
        });



        // $('#Palim').click(function(){

        //   $('#PalimC').show();

        // });


         $(document).on('click', '.myButton2', function(e){
          e.preventDefault();
          $(this).parent().parent().hide();  /* remove panel */
        });


function getValue(param) {
      var value =  param       // je ferais ma requete
      return value;
    }

    $(document).on('click', '.biens', function(e){
          e.preventDefault();
          console.log($(this));
          $("#bibi").after("<div class='row'><h4>Bien immobilier supplementaire a declarer <input class='myButton2 inline' id='cancel' type='button' value='x'></h4><div class='col-sm'><label for='nature'>Précisez la nature du bien déclaré</label><input type='text' id='nature' placeholder='nature du bien'></div><div class='col-sm'><label for='adresse'>Adresse du bien déclaré</label><input type='text' id='adresse' placeholder='Adresse complete du bien'></div><div class='col-sm'><label for='valeur'>Valeur actuelle</label><input type='text' id='valeur' placeholder='€'></div></div>")
      });
    $(document).on('click', '.biens-mobi', function(e){
          e.preventDefault();
          console.log($(this));
          $("#mobibibi").after("<div class='row'><h4>Bien mobilier supplementaire a declarer <input class='myButton2 inline' id='cancel' type='button' value='x'></h4><div class='col-sm'><label for='nature'>Précisez la nature du bien déclaré</label><input type='text' id='nature' placeholder='nature du bien'></div><div class='col-sm'><label for='valeur'>Valeur actuelle</label><input type='text' id='valeur' placeholder='€'></div></div>")
      });
    $(document).on('click', '.biens-donnate', function(e){
          e.preventDefault();
          console.log($(this));
          $("#bibi-do").after("<div class='row'><h4>Bien immobilier supplementaire a declarer <input class='myButton2 inline' id='cancel' type='button' value='x'></h4><div class='col-sm'><label for='nature'>Précisez la nature du bien déclaré</label><input type='text' id='nature' placeholder='nature du bien'>\
            </div><div class='col-sm'><label for='adresse'>Adresse du bien déclaré</label><input type='text' id='adresse' placeholder='Adresse complete du bien'></div><div class='col-sm'><label for='valeur'>Valeur actuelle</label><input type='text' id='valeur' placeholder='€'> <p>Date de l’acte de \
            donation <input class='situf inline' type='text' placeholder='jj/mm/aaaa' name='famidate' id='immo-donna-date'> <div class='col-sm'>\
                                <label for='thrmth' class='parent'>Lien de parenté avec le bénéficiaire de la donation :</label>\
                                <input type='text' id='thrmth'  placeholder='Lien de parenté'>\
                          </div></div></div>")
      });

    $(document).on('click', '.biens-donnate-mobi', function(e){
          e.preventDefault();
          console.log($(this));
          $("#bibi-do-mobi").after("<div class='row'><h4>Bien mobilier supplementaire a declarer <input class='myButton2 inline' id='cancel' type='button' value='x'></h4><div class='col-sm'><label for='nature'>Précisez la nature du bien déclaré</label>\
            <input type='text' id='nature' placeholder='nature du bien'></div><div class='col-sm'><label for='valeur'>Valeur actuelle</label><input type='text' id='valeur' placeholder='€'><p>Date de l’acte de \
            donation <input class='situf inline' type='text' placeholder='jj/mm/aaaa' name='famidate' id='immo-donna-date'> <div class='col-sm'>\
                                <label for='thrmth' class='parent'>Lien de parenté avec le bénéficiaire de la donation :</label>\
                                <input type='text' id='thrmth'  placeholder='Lien de parenté'>\
                          </div></div></div>")
      });
});


