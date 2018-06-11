      function callDate(){
            var date3mois = new Date();
            var month = date3mois.getMonth() - 3;
            var year = date3mois.getFullYear();
 
            date3mois.setMonth(month);
            date3mois.setUTCDate('1');
        

          date3mois = date3mois.toLocaleDateString().toString();
          date3mois = date3mois.split("T");
          // $("#startdate").prop('value', date3mois)
          $("#startdate").prop('value', "01/03/2018")  
         
          }

          callDate();
          function callDate2(){
            var date3mois = new Date($("#startdate").val());
            var month = date3mois.getMonth();

            date3mois.setMonth(month);

            var lastDayOfMonth = new Date(date3mois.getFullYear(), date3mois.getMonth()+1, 0);
          lastDayOfMonth = lastDayOfMonth.toLocaleDateString().toString();
          lastDayOfMonth = lastDayOfMonth.split("T");
          // $("#enddate").prop('value', lastDayOfMonth)
           $("#enddate").prop('value', "31/05/2018")  
          }

          function callDate3(){
            var date3mois = new Date();
            var month = date3mois.getMonth();
              month += 1;
  
            date3mois.setMonth(month);
            date3mois.setUTCDate('1');

          date3mois = date3mois.toLocaleDateString().toString();
          date3mois = date3mois.split("T");
          // $("#echeance").prop('value', date3mois)
          $("#echeance").prop('value', "31/07/2018") 
          }


          callDate();
          callDate2();
          callDate3();