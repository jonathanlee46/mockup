$(document).ready(function() {

  jobClickOn();

});

var jobClickOn = function(){
  // console.log("ERMAGERD JERBS HAPPERNED")

  $('.job-panel').click(function(event){
    // console.log("clicking on");

    var targetPanel = this.nextElementSibling.id;

    $('#' + targetPanel).collapse('toggle');

  })
}
