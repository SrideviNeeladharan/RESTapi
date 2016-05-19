  $(document).ready(function()
        {


           $("#table").hide();
          
            

            $("#submitButton").click(function(event)
            {
                event.preventDefault();

debugger;
              //generating the table  
                var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
                var collections = 'sneeladharan';
                var tableVal1 = $("#movieName").val(); 
                var tableVal2 = $("#year").val();
             
              
              $.ajax(baseUrl + collections,
                     {
                      method : 'POST',
                      data   :  {
                                movie  : tableVal1,
                                year   : tableVal2      
                                },
                      success: function displayResult(response)
                                {
                                  debugger;
                                       
                       /*  var html = '<table><thead><th>Mov</th><th>yr</th><th>cid</th></thead><tbody>';
                               $.each(response, function (key, val) {
                                   debugger;
                                   html += '<tr><td>' +  tableVal1 + '' + val.MailID + '</td><td>' + tableVal2 + '</td>                                                      <td>' + response.created + '</td></tr>';
                               });
                               html += '</tbody></table>';
                               $('#myGrid').html(html); */
                                   $("#table1").append('<tr><td>' + tableVal1 + '</td><td>' + tableVal2 + '</td><td>' + '</td><td style="visibility:hidden;">' + response.created + '</td><td>' + '<button >Edit</button>'+ '<button>Delete</button>' + '</td></tr>');
                                },
                      error  : displayError
                
                      });
                  
                    function displayError(jqXHR, textStatus, errorThrown ) 
                    {
                      
                    console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
                    }
              
              
               
               


              
             
             
                $("#form").hide();
                $("#table").show();



            });

             $("#button1").click(function(event)
                {
                   $("#table").hide();
                   $("#form").show();
                });
    

    
           
       });
//*********************************************************

  function resetForm()
  {
     $("#form").reset();

  }

//*******************************************************************************************************************************

 //$("#edit").on('click', function(){
           //   alert("hi!!!");

           // });

  

















