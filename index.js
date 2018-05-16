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
            maxDate: new Date() 
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
              month = month + 3;
            // }
            date3mois.setMonth(month);
            date3mois.setUTCDate('29');
          date3mois = date3mois.toLocaleDateString().toString();
          date3mois = date3mois.split("T");
          $("#enddate").prop('value', date3mois) 
          }

          callDate();
          callDate2();




          $(function writemth() {

            $('.bloc').each(function(){

               eachInMois($(this).find('.mois'))
            });
            

          });

          function  eachInMois(currBloc) {

            var date    = new Date($('#startdate').val());
            var moisfr  = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
            var month   = date.getMonth() + 1;
            var year    = date.getFullYear()
            var index   = 0;
            var output  = null;
            var month2  = month2 = month;
            
            currBloc.each(function(){

                if(month > 12)
                {
                    year += 1;
                    month -= 12; 
                }
                output  = moisfr[month] + ' ' + year;
                $(this).append(output);
                index++;
                month++;
            });
        }


        function    drop(){

            var status = $('#myDropdown').val();

            console.log(status);
        }

        drop();



        $(document).on('change', '#myDropdown' , function(){

          console.log($("#myDropdown").val())
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

    function getValue(param) {
      var value =  param       // je ferais ma requete
      return value;
    }
});

