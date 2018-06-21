
      var form = $("#contact");
      form.validate({
          // errorPlacement: function errorPlacement(error, element) { element.after(error);}
          rules: {
              "autocomplete": {
            "required": true
         }
          }
      });
    form.children("div").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        clearFixCssClass: "design clearfix",
        labels: 
        {
            finish: "Envoyer",
            next: "Etape suivante",
            previous: "Etape précédente"
        },
        onStepChanging: function (event, currentIndex, newIndex)
        {
            form.validate().settings.ignore = ":disabled,:hidden";
            if (($("#situation-fami").attr("style")) == "display: block;"){
                $("#famivalid-error").show();  
                $("#modified-situ").addClass("btn-error");
                return ;
            }
            if (($("#add").attr("style")) == "display: block;"){
                $("#add-valid-error").show()
                $("#addr-valid").addClass("btn-error");
                return ;
            }
           
            return form.valid();
        },
        onFinishing: function (event, currentIndex)
        {
            form.validate().settings.ignore = ":disabled";
            return form.valid();
        },
        onFinished: function (event, currentIndex)
        {
            alert("Le formulaire a bien état envoyé, vous allez recevoir un e-mail de confirmation!");
        }
    });
    jQuery.extend(jQuery.validator.messages, {
        required: "Veuillez renseigner ce champ",
        situf: "caca",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        creditcard: "Please enter a valid credit card number.",
        equalTo: "Please enter the same value again.",
        accept: "Please enter a value with a valid extension.",
        maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
        minlength: jQuery.validator.format("Please enter at least {0} characters."),
        rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
        range: jQuery.validator.format("Please enter a value between {0} and {1}."),
        max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
        min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
    });   