$(document).ready(function(){
  var omd = new XMLHttpRequest();
  var yeah 
  $.ajax({
    type:"GET",
    url:"http://www.omdbapi.com/?",
    success: function(data, textStatus, jqXHR) {
      console.log(data);
      // document.getElementById("here").innerHTML = yeah;
      },
  
    error: function(jqXHR, textStatus, errorThrown){
     console.log(jqXHR);
     console.log(textStatus);
     console.log(errorThrown);
    }
  })
  });
