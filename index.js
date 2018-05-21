

$(document).ready(function(){
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
    // });
	// });


//  steps !!

// var form = $("#contact");
//   form.validate({
//       errorPlacement: function errorPlacement(error, element) { element.after(error); },
//   });
// form.children("div").steps({
//     headerTag: "h3",
//     bodyTag: "section",
//     transitionEffect: "slideLeft",
//     labels: 
//     {
//         finish: "envoyer",
//         next: "Etape suivante",
//         previous: "Etape precedente"
//     },
//     onStepChanging: function (event, currentIndex, newIndex)
//     {

//         form.validate().settings.ignore = ":disabled,:hidden";
//          // var fv = $('#contact').data('formValidation'), // FormValidation instance
//          //            // The current step container
//          //            $container = $('#contact').find('section[data-step="' + currentIndex +'"]');

//          //        // Validate the container
//          //        fv.validateContainer($container);

//          //        var isValidStep = fv.isValidContainer($container);
//          //        if (isValidStep === false || isValidStep === null) {
//          //            // Do not jump to the next step
//          //            return false;
//          //        }

//          //        return true;
        
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

// jQuery.extend(jQuery.validator.messages, {
//     // required: "vous devez remplire ce champ pour continuer le questionaire",
//     required: "",
//     situf: "caca",
//     remote: "Please fix this field.",
//     email: "Please enter a valid email address.",
//     url: "Please enter a valid URL.",
//     date: "Please enter a valid date.",
//     dateISO: "Please enter a valid date (ISO).",
//     number: "Please enter a valid number.",
//     digits: "Please enter only digits.",
//     creditcard: "Please enter a valid credit card number.",
//     equalTo: "Please enter the same value again.",
//     accept: "Please enter a value with a valid extension.",
//     maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
//     minlength: jQuery.validator.format("Please enter at least {0} characters."),
//     rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
//     range: jQuery.validator.format("Please enter a value between {0} and {1}."),
//     max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
//     min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
// });
$("#contact").steps({
        headerTag: "h3",
        bodyTag: "section",
        saveState: true,
       
        // Triggered when clicking the Previous/Next buttons
        onStepChanging: function (e, currentIndex, newIndex) {
            var fv = $('#contact').data('formValidation'), // FormValidation instance
                // The current step container
                $container = $('#contact').find('section[data-step="' + currentIndex + '"]');

            // Validate the container
            fv.validateContainer($container);

            var isValidStep = fv.isValidContainer($container);
            if (isValidStep === false || isValidStep === null) {
                // Do not jump to the next step
                return false;
            }

            return true;
        },
        // Triggered when clicking the Finish button
        onFinishing: function (e, currentIndex) {
            var fv = $('#contact').data('formValidation'),
                $container = $('#contact').find('section[data-step="' + currentIndex + '"]');

            // Validate the last step container
            fv.validateContainer($container);

            var isValidStep = fv.isValidContainer($container);
            if (isValidStep === false || isValidStep === null) {
                return false;
            }

            return true;
        },
        onFinished: function (e, currentIndex) {
            // Uncomment the following line to submit the form using the defaultSubmit() method
            $('#contact').formValidation('defaultSubmit');

            // For testing purpose
            $('#welcomeModal').modal("show");
        }
     }).formValidation({
        excluded: ':disabled',
        message: 'This value is not valid',
        container: 'tooltip',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            //last name validation  
            sd_lastname: {
                container: 'popover',
                validators: {
                    notEmpty: {
                        message: 'The Last Name is required and cannot be empty'
                    }
                }
            },

            //first name validation
            sd_firstname: {
                container: 'popover',
                validators: {
                    notEmpty: {
                        message: 'The First Name is required and cannot be empty'
                    },
                    stringLength: {
                        min: 3,
                        max: 30,
                        message: 'The First Name must be more than 7 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[A-Z]+$/i,
                        message: 'The First Name can only consist of alphabetical characters'
                    }
                }
            },

            //validation of Parent's details step start
            //last name validation  
            pd_lastname: {
                container: 'popover',
                validators: {
                    notEmpty: {
                        message: 'The Last Name is required and cannot be empty'
                    }
                }
            },

            //first name validation
            pd_firstname: {
                container: 'popover',
                validators: {
                    notEmpty: {
                        message: 'The First Name is required and cannot be empty'
                    },
                    stringLength: {
                        min: 3,
                        max: 30,
                        message: 'The First Name must be more than 7 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[A-Z]+$/i,
                        message: 'The First Name can only consist of alphabetical characters'
                    }
                }
            },

            // Validation for Reference details starts
            //School reference name
            rd_schoolrefname: {
                container: 'popover',
                validators: {
                    notEmpty: {
                        message: 'The School Reference Name is required and cannot be empty'
                    },
                    stringLength: {
                        min: 7,
                        max: 40,
                        message: 'The School Reference Name must be more than 7 and less than 40 characters long'
                    },
                    regexp: {
                        regexp: /^[A-Z\s]+$/i,
                        message: 'The School Reference Name can only consist of alphabetical characters'
                    }
                }
            },
            //School reference phone
            rd_schoolrefmobile: {
                container: 'popover',
                validators: {
                    notEmpty: {
                        message: 'The Phone or Mobile is required and cannot be empty'
                    }
                }
            },
            rd_schoolrefemail: {
                container: 'popover',
                validators: {
                    notEmpty: {
                        message: 'The E-Mail ID is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /[a-zA-Z0-9]+(?:(\.|_)[A-Za-z0-9!#$%&'*+\/=?^`{|}~-]+)*@(?!([a-zA-Z0-9]*\.[a-zA-Z0-9]*\.[a-zA-Z0-9]*\.))(?:[A-Za-z0-9](?:[a-zA-Z0-9-]*[A-Za-z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/g,
                        message: 'The E-Mail ID is not a valid E-Mail'
                    }
                }
            },
        }

    })
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
          }

          function callDate2(){
            var date3mois = new Date($("#startdate").val());
            var month = date3mois.getMonth();
            // if (month > 3){
              month = month + 3;
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

//     function getValue(param) {
//       var value =  param       // je ferais ma requete
//       return value;
//     }
});

