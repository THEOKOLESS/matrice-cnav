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
        console.log($link.children().prop('id')); 
        if ($link.hasClass('visible')) {
            $link.children().prop('value', '+');
    } else {
            $link.children().prop('value', '-');
    }
     $link.toggleClass('visible');
    });
    // });
	// });

	$( "#startdate" ).change(function() {
		var date = new Date($("#startdate").val());
		 console.log(date);
		var newDate = date.toString('dd-MM-yy');
		console.log(newDate);
		date.setMonth(date.getDay() + 3);
	    $('#enddate').val(date.getDate());
	});

    $( function() {
        $( "#famidate" ).datepicker({
            changeMonth: true,
            changeYear: true

    });
    });

    $('#contact').submit(function() {
    if ($('input:checkbox', this).is(':checked') &&
        $('input:radio', this).is(':checked')) {
        // everything's fine...
    } else {
        alert('Please select something!');
        return false;
    }
});
 
});