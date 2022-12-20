/**
 * Set the pioritiy of the selected events
 * 
 * @author Michael Hartung <michael@hartung.studio>
 */
 this.do_SetVoiceStealingOfSelectedEvents = function(voiceStealing) {

  var objects = studio.window.browserSelection();
  
  if(objects.length > 0) {
    objects.forEach(function(obj) {
      if(obj.isOfExactType("Event"))
        {
          obj.automatableProperties.voiceStealing = voiceStealing;
        }
    });
  } else {
    console.error("ERR: No events selected")
  }

}