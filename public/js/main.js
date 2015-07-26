$(document).ready(function() {

  jobClicker();
  footClicker();
  royaleWithCheese();
  headShot();

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

  });
}


var footClicker = function(){

  $('#expand-all').click(function(event){
    event.preventDefault();
    console.log("expand!");

    $('.panel-collapse').collapse('show');

    for (var i=1; i<=4; i++){
      $('#inside' + i.toString()).removeClass("glyphicon-triangle-right").addClass("glyphicon-triangle-bottom")
    }
  });

  $('#collapse-all').click(function(event){
    event.preventDefault();

    $('.panel-collapse').collapse('hide');

    for (var i=1; i<=4; i++){
      $('#inside' + i.toString()).removeClass("glyphicon-triangle-bottom").addClass("glyphicon-triangle-right")
    }
  })

}

var royaleWithCheese = function(){
  $('#sidebar').simplerSidebar({
      opener: '#toggle-sidebar',
      sidebar: {
        align: 'left', //or 'right' - This option can be ignored, the sidebar will automatically align to right.
        width: 300, //You can ignore this option, the sidebar will automatically size itself to 300px.
        closingLinks: '.close-sidebar' // If you ignore this option, the plugin will look for all links and this can be buggy. Choose a class for every object inside the sidebar that once clicked will close the sidebar.
    }
  });
}

var closer = function(){
      $(".profile-image").click(function(){
        $(".submenu").hide();
      });
    }


var headShot = function(){
  $(".profile-image").click(function(){

    $(".submenu").slideToggle ("fast");

    
    $(".submenu").mouseup(function(){
      return false
    });

    $(".account").mouseup(function(){
      return false
    });

    $(document).mouseup(function(){
      $(".submenu").hide();
    })

  });
}
