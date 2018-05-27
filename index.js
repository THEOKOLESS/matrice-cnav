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
        else if (status == "Veuf" || status == "Divorce" || status == "Sépare" || status == "Conjoint disparu")
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
      console.log((this).id)

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

    function getChecked(param){
      param.show();
    }

function getValue(param) {
      var value =  param       // je ferais ma requete
      return value;
    }
    
});


