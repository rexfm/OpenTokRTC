// Generated by CoffeeScript 1.6.1
(function() {
  var goToRoom, verticalCenter;

  $("#roomName").focus();

  goToRoom = function() {
    var roomName;
    roomName = $("#roomName").val().trim();
    if (roomName.length <= 0) {
      alert("Room Name is Invalid");
      return;
    }
    $("#roomContainer").fadeOut('slow');
    return window.location = "/" + roomName;
  };

  $('#submitButton').click(function() {
    return goToRoom();
  });

  $('#roomName').keypress(function(e) {
    if (e.keyCode === 13) {
      return goToRoom();
    }
  });

  verticalCenter = function() {
    var mtop;
    mtop = (window.innerHeight - $("#insideContainer").outerHeight()) / 2;
    return $("#insideContainer").css({
      "margin-top": "" + mtop + "px"
    });
  };

  window.onresize = verticalCenter;

  verticalCenter();

}).call(this);
