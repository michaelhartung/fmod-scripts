/**
 * Set the pioritiy of the selected events
 * 
 * @author Michael Hartung <michael@hartung.studio>
 */
 this.do_SetPriorityOfSelectedEvents = function(priority) {

  var objects = studio.window.browserSelection();
  
  if(objects.length > 0) {
    objects.forEach(function(obj) {
      if(obj.isOfExactType("Event"))
        {
          obj.automatableProperties.priority = priority;
        }
    });
  } else {
    console.error("ERR: No events selected")
  }

}