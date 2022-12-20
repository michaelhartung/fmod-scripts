/**
 * Print selected event paths to the console window
 * 
 * @author Michael Hartung <michael@hartung.studio>
 */
this.do_LogPathOfSelectedEvents = function() {

  var objects = studio.window.browserSelection();
  
  if(objects.length > 0) {
    objects.forEach(function(obj) {
      if(obj.isOfExactType("Event"))
        console.log(obj.getPath().substr(6));
    });
  } else {
    console.error("ERR: No events selected")
  }

}