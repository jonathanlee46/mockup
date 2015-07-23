$(document).ready(function() {

  jobClicker();

});

var jobClicker = function(){
  // console.log("ERMAGERD JERBS HAPPERNED")

  $('.panel').click(function(event){
    // console.log("clicking on");
    // debugger

    // var targetPanel = this.nextElementSibling.id;
    var targetPanel = this.children[1].id;
    var panelNumber = targetPanel.slice(-1);

    $('#' + targetPanel).collapse('toggle');
    // debugger
    
    // $("#inside").removeClass("glyphicon-triangle-right").addClass("glyphicon-triangle-bottom");

    $('#inside' + panelNumber ).toggleClass("glyphicon-triangle-right glyphicon-triangle-bottom")

  })
}
