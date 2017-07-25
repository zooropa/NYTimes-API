
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('all.js'))    
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});


// shoval's code
gulp.task('to-sass', function () {
  gulp.src('*.scss')
  .pipe(sass())
     .pipe(concat('style.css'))
        .pipe(uglifycss())
        .pipe(gulp.dest('.'));   
});






function click(){


	var ourRequest = new XMLHttpRequest ();
    var url = "https://api.nytimes.com/svc/topstories/v2/food.json";

    ourRequest.open('GET', 'https://api.nytimes.com/svc/topstories/v2/food.json' );

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

});

// SHOVAL'S CODE


function apiget(result){
    var choice = $('#dropDown').val();
    var url = "https://api.nytimes.com/svc/topstories/v2/"+choice+".json";
    url += '?' + $.param({
      'api-key': "bc26c8e91bf445e388e87441a3b3219d"
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
     
        // remove any div with class of article
        $( ".article" ).remove();

      var res = result.results;
      var mul = result.results.multimedia;

      for(i=0; i< res.length;i++){
          
          if (res[i].multimedia.length>0) {

          var para = $("<div class='article'><p class='title'>"+res[i].title+"</p>"+"<a href="+res[i].url+">"+"<img src="+res[i].multimedia[0].url+">"+"</a>"+"<br>"+"<p class='abstract'>"+res[i].abstract+"</p>"+"</div>");

          $("#artRes").append(para);

      }
    }

    }).fail(function(err) {
      throw err;
    });
    

}
