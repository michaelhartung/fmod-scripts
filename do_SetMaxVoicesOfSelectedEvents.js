/**
 * Set the pioritiy of the selected events
 * 
 * @author Michael Hartung <michael@hartung.studio>
 */
 this.do_SetMaxVoicesOfSelectedEvents = function(maxVoices) {

  var objects = studio.window.browserSelection();
  
  if(objects.length > 0) {
    objects.forEach(function(obj) {
      if(obj.isOfExactType("Event"))
        {
          obj.automatableProperties.maxVoices = maxVoices;
        }
    });
  } else {
    console.error("ERR: No events selected")
  }

}