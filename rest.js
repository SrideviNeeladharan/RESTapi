//CREATE
$("document").ready(function(){
  
    var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
      var collection = 'sneeladharan';
  
$("#button1").off();
$("#button1").on('click', function(evt){
  
  
      evt.preventDefault();
  
      var name = $("#createName").val();
      var age = $("#createAge").val();
  
      $.ajax(baseUrl + collection,
          {
            method  : 'POST',
            data    : {
                        name : name,
                        age  : age
                      },
            success : logCreateResult,
            error   : logAjaxError

          });
  
    function logCreateResult(data)
    {
      
     // console.log("ID : ", data.created);  
     
      $("#createdId").html(data.created);
      $("#list").append('<li>' + data.created + ", Name: " + name + ", Age: " + age + '</li>');
    }

  });//closing POST
  
  
//GET******************************************************
  
  $("#singleButton").on('click', function(evt){
    
        evt.preventDefault();

        var sinItem = $("#idInput").val();
          $("#itemId").html(sinItem);
          $.ajax(baseUrl + collection + '/' + sinItem,
                 {
                  method  : 'GET',
                  success : readResult,
                  error   : logAjaxError
                  });
    
    function readResult(data)
    {
      
      $("#itemName").html(data.name);
      $("#age").html(data.age);
     
   
    
    }
    
  });//closing GET
  
  
  //UPDATE***************************************************
  $("#updateButton").on('click', function(evt){
     evt.preventDefault();
     var upId = $("#updateId").val();
     var upName  = $("#updateName").val();
     var upAge = $("#updateAge").val();
      $.ajax(baseUrl + collection + '/' + upId,
                 {
                  method  : 'PUT',
                  data    :{
                            name:upName,
                            age:upAge
                            },
                  success : updatedResult,
                  error   : logAjaxError
                  });
  
    function updatedResult(data)
    {
     
      $("#newId").html(data.updated);
    }
    
  });//closing update
  
  //DELETE
   $("#deleteButton").on('click', function(evt){
     evt.preventDefault();
     var delId = $("#deleteId").val();
     $.ajax(baseUrl + collection + '/' + delId,
            {
              method : 'DELETE',
              success: deleteResult,
              error  : logAjaxError      
            });
     function deleteResult(data)
     {
       console.log(data);
       $("#deleteDisplay").html(data.deleted);
     }
   });
  
  
  
  //AJAX ERROR******************************************
    function logAjaxError(jqXHR, textStatus, errorThrown ) 
    {
    console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
    }
  
  });

