$("#target").submit(function(){
    $.ajax({
       type:"POST",
        url:"http://www.omdbapi.com/?" + yeah
        success: function(data, textStatus, jqXHR) {
        console.log(data);
        var yeah = data;

        document.getElementById("here").innerHTML = ;
      },
  
    error: function(jqXHR, textStatus, errorThrown){
     console.log(jqXHR);
     console.log(textStatus);
     console.log(errorThrown);
    })
});













// $(document).ready(function(){ 
//   var omd = new XMLHttpRequest();
//   function = confirmInput(){
//     fname = document.getElementById("target").value;
//   }
//   $.ajax({
//     type:"POST",
//     url:"http://www.omdbapi.com/?t=the matrix"
//     success: function(data, textStatus, jqXHR) {
//       fname + url;
//       console.log(data);
//       var yeah = data;
//       document.getElementById("here").innerHTML = yeah;
//       },
  
//     error: function(jqXHR, textStatus, errorThrown){
//      console.log(jqXHR);
//      console.log(textStatus);
//      console.log(errorThrown);
//     }
//   })
//   });

//how do i concatenate what is entered on the form onto the url request ?