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

function saveData() {
   var textareaData = $(this).siblings(".description").val();
   var key = $(this).parent().attr("id");
   localStorage.setItem(key, textareaData);

}


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

function previousData(){
    $("#hour-9").val(localStorage.getItem("9"))
    $("#hour-10").val(localStorage.getItem("10"))
    $("#hour-11").val(localStorage.getItem("11"))
    $("#hour-12").val(localStorage.getItem("12"))
    $("#hour-13").val(localStorage.getItem("13"))
    $("#hour-14").val(localStorage.getItem("14"))
    $("#hour-15").val(localStorage.getItem("15"))
    $("#hour-16").val(localStorage.getItem("16"))
    $("#hour-17").val(localStorage.getItem("17"))

}

previousData();

save.on("click", saveData)



//When the page loads, any data in local storage for each time block should show in the corresponding text area.
//









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