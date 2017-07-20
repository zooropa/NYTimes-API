var url = "https://api.nytimes.com/svc/topstories/v2/food.json";

url += '?' + $.param({
  'api-key': "bc26c8e91bf445e388e87441a3b3219d"
});

$.ajax({
  url: url,
  method: 'GET',

}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;

});