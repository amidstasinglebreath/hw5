//pseudo constants, based on the possiblity that a future version may want to allow the user to adjust their working hours
var dayStart = 9;
var dayEnd = 5;
//some kind of calculation to run through this sequence?
var postMeridian = false;
var hourcounter = dayStart;


//placeholder array for initial version (with localstorage):
var hourArray  = [9, 10, 11, 12, 1, 2, 3, 4, 5];
var workingHours = 9;
//localStorage.setItem("hours", hourArray);

//array that holds the various user time objects
var usersTime = [];


// setting function, determines whether there is anything from the user in local storage and pre-populates it if not.
function setTimeBlocks(){
    var setStatus = localStorage.getItem("Status");
    if (setStatus === null){
        //future versions may use a different version of hourArray for tracking.
        for (var i = 0; i < hourArray.length; i++){
            var timeSegment = {hour: hourArray[i], details: " "};
            usersTime.push(timeSegment);
        }
        localStorage.setItem("Saved Times", JSON.stringify(usersTime));
        setStatus = "Saved";
        localStorage.setItem("Status", setStatus);
    } else{
        usersTime = JSON.parse(localStorage.getItem("Saved Times"));
    }

}

setTimeBlocks();
loadTimeBlocks();

/*
<div class="input-group mb-3 time-block">
            <div class="input-group-prepend">
                <span class="input-group-text hour-marker">9</span>
            </div>
            <input type="text" class="planner-entry" placeholder="Something">
            <div class="input-group-append">
                <button class="btn btn-primary save-button fas fa-save" type="button"></button>
            </div>
        </div>
 */

 //population/load function
/*
 function loadTimeBlocks (){
    for (var i = 0; i < usersTime.length; i++){
        //timeblock
        var buffer = $("<div>");
        buffer.addClass("input-group mb-3 time-block");
        //hour
        var curHour = $("<span>");
        curHour.addClass("input-group-text hour-marker");
        curHour.attr("text", usersTime[i].hour)
        buffer.append(curHour);
        //content
        var cInput = $("<input>");
        cInput.addClass("planner-entry");
        cInput.attr("type", "text");
        cInput.attr("placeholder", usersTime[i].details)
        buffer.append(cInput);
        //submit
        var cButton = $("<button>");
        cButton.addClass("btn btn-primary save-button fas fa-save");
        cButton.attr("type", "button");
        buffer.append(cButton);

        //append to content
        $("#container").append(buffer);
        //$("#container").append("<hr>");
        
    }

}

loadTimeBlocks();
*/

//function that is called within loadTimeblocks that gives the color based on current 
function colorForCurrent(){

}

//editing function

