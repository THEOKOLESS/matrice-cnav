$( function() {
        $( "#date-test" ).datepicker({
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