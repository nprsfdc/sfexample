({
    handleRecordUpdated: function(component, event, helper) {
        var eventParams = event.getParams();
        if(eventParams.changeType === "LOADED") {
            var uid = component.get("v.rec.OwnerId");
            component.set("v.ownerId",uid);
        } 
    }
})