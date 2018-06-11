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
