$(document).ready(function(){
  var omd = new XMLHttpRequest();
  document.getElementById("target").addEventListener("click", )
  $.ajax({
    type:"GET",
    url:"http://www.omdbapi.com/?t=the matrix",
    success: function(data, textStatus, jqXHR) {
      console.log(data);
      var yeah = data;
      document.getElementById("here").innerHTML = yeah;
      },
  
    error: function(jqXHR, textStatus, errorThrown){
     console.log(jqXHR);
     console.log(textStatus);
     console.log(errorThrown);
    }
  })
  });

//how do i concatenate what is entered on the form onto the url request ?