var timeDisplayEl = $("#currency");
var save = $(".saveBtn");
var task = $('.description');
var currentHour = moment().format('h');
var hour = $(".datetime");
var nine=$
var currentDayEl = $("#currentDay");

function displayTime() {
    var currentDay = moment().format('dddd, MMMM, Do');
    currentDayEl.text(currentDay);
    console.log(currentDay);
}
displayTime ();




console.log(moment().format());

function checkHour(){
    var currentHour = moment().hour()

    $(".time-block").each(function(){

 
    var hour=parseInt($(this).attr("id"))

    if(hour < currentHour){
        $(this).addClass("past");
    }else if(hour === currentHour){
        $(this).removeClass("past");
        $(this).addClass("present");
    }
    else{
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
})
}
checkHour();
// var currentHour = moment().format('h');
// var nine=$('#9');
// if(hour === currentHour){
//     this.addClass("present");
// }
// if(hour <= currentHour){
//     this.addClass("past");
// }
// if(hour >= currentHour){
//     this.addClass("future");
// }
// }