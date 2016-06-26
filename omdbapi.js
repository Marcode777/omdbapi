$("#target").submit(function( e ){
    e.preventDefault();
    var yeah = $("input[type=text]").val();
    $.ajax({
        type:"POST",
        url: "http://www.omdbapi.com/?s=" + yeah + "&type=movie",
        success: function(data, textStatus, jqXHR) {
            // console.log(data);
            for ( i = 0; i < data.Search.length; i++ ) {
                console.log(data.Search[i]);
                //instead of using inner.HTML to display on html page, use jQuery syntax .append
                $("<p>").text(data.Search[i].Title).appendTo( $(".here") );
                $("<p>").text(data.Search[i].Year).appendTo( $(".here") );
            }
        },
  
        error: function(jqXHR, textStatus, errorThrown){
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
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