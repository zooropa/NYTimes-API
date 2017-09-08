function apiget(){
  var choice = $('#dropDown').val();
  $( "#dropDown" ).change(function() {
    apiget();
  });
  var url = "https://api.nytimes.com/svc/topstories/v2/"+choice+".json";
  url += '?' + $.param({
    'api-key': "70e31b9fed1d483faaacf8bd7dcd456a"
  });

  $.ajax({
    url: url,
    method: 'GET',
  }).done(function (res) {
    console.log(res);
    console.log(res.num_results);

$("#main")["0"].innerHTML = "";

    var i;

    for (i=0; i<12; i++){

     if (typeof res.results[i].multimedia[4] !== 'undefined' && res.results[i].multimedia[4] !== null) {
//i=0
//create wrapper
//add div to it

//i=1
//add div to existing wrapper
var div = document.createElement("div");
//var articlewrapper = document.createElement("div");


console.log(res.results[i].title);
console.log(res.results[i].abstract);
console.log(res.results[i].url);
console.log(res.results[i].multimedia[4].url);


var paragraph = document.createElement("p");


var abstract = document.createTextNode(res.results[i].abstract);
var a = document.createElement("a");
var title = document.createTextNode(res.results[i].title); 

a.href = res.results[i].url;

a.appendChild(title);
paragraph.appendChild(abstract);

//div.appendChild(a);
//div.appendChild(paragraph);

div.className += "article";
a.className += "link";
//a.appendChild(div);
div.appendChild(a);

//div.style.width = "23%";
a.style.width = "100%";
// div.style.height = "100px";
div.style.backgroundImage = "url(" + res.results[i].multimedia[4].url+ ")";
div.style.color = "white";

document.getElementById("main").appendChild(div);

}

}

});

  var a = document.createElement("a");
  var url = google.com;
  a.href = url;
  readmore=document.createTextNode("readmore");
  a.appendChild(readmore);

}





























/*function apiget(){

    var choice = $('#dropDown').val();
    
    var url = "https://api.nytimes.com/svc/topstories/v2/"+choice+".json";
    console.log("DEBUG: " + url);
    url += '?' + $.param({
      'api-key': "bc26c8e91bf445e388e87441a3b3219d"
    });

    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
     
      console.log(result);

      $("#piccontainer")["0"].innerHTML = "";
      
      var article_counter = 0;
      for (var i=0; i < result.results.length && article_counter < 12; i++) {
      	
        if(result.results[i].multimedia[4]) {
          var style = " style='background-image: url(" + result.results[i].multimedia[4].url + ")'";
          var abstract = result.results[i].abstract;
          $("#piccontainer")["0"].innerHTML += "<div class='pic'"+ style +"><div>"+ abstract +"</div></div>"
          article_counter++;
        }
      }
      
    }).fail(function(err) {
      throw err;
    });
    

  }*/
