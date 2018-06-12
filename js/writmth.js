  function writemth() {
      $('.bloc').each(function(){
         eachInMois($(this).find('.mois'));
      });
    };
    
    function  eachInMois(currBloc) {
    var date    = new Date("01/03/2018");

    var moisfr  = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    // var month   = date.getMonth();
    var month   = 2;
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

            if (!(/\S/.test($(this).text()))){
                  $(this).prepend(output);
        }
               // console.log($(this)[0].textContent);
          // index++;
          month++;
      });
  }
