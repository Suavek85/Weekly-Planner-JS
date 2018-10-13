var addArray, submitArray, openArray, dayNumber ;

addArray = Array.prototype.slice.call(document.querySelectorAll(".add"));

submitArray = Array.prototype.slice.call(
  document.querySelectorAll(".submit-btn")
);

openArray = Array.prototype.slice.call(
  document.querySelectorAll(".open")
);


class DayList {
  constructor() {
    this.a = document.getElementById("input2").value;
    this.b = document.getElementById("input3").value;
    var radios = document.getElementsByName("day");
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        var checkedRadio = radios[i].value;
        break;
      }
    };
    this.f = checkedRadio;
    this.g = ul_tasks.innerHTML;
    
  }

createDay() {
   
  document.getElementById('btns_' + dayNumber + '_sub').style.display = "block";
  document.querySelector('#output' + dayNumber).innerHTML = this.a;
  document.getElementById('box' + dayNumber).style.backgroundImage = this.f;

} 

openDay() {

  document.querySelector("#output8").innerHTML = this.b;
  var word = this.g;
  var todoHtml = `<div id='todolist' class='notes-item'>My tasks:<ul>${word}</ul></div>`; 
  mynotes.insertAdjacentHTML('afterend', todoHtml);
}

}

//TODO SECTION


var button_tasks = document.getElementById('enter');
var input_add = document.getElementById('input_list');
var ul_tasks = document.getElementById('task_list');
var mynotes = document.getElementById('mynotes');


function inputLength() {
  return input_add.value.length
}

function createListElement() {

  var li = document.createElement("li");
    li.appendChild(document.createTextNode(input_add.value));
    ul_tasks.appendChild(li);
    input_add.value = '';

}

function addListAfterClick() {

  if (inputLength() > 0) {
    createListElement();
  }

}

function addListAfterEnter(event) {

  if (inputLength() > 0 && event.keyCode === 13) {

    createListElement();
  }
}


button_tasks.addEventListener("click", addListAfterClick );

input_add.addEventListener("keypress", addListAfterEnter);



//VIEW METHODS

var view = {

  todoListRemove: function() {
    var todolist = document.getElementById('todolist');
    todolist.remove();
  },
  
  disableAdd: function () {
    for (var i = 0; i < addArray.length; i++) {
      addArray[i].disabled = true;
    }
  },

  disableOpen: function () {
    for (var i = 0; i < openArray.length; i++) {
      openArray[i].disabled = true;
    }
  },

  enableAdd: function () {
    for (var i = 0; i < addArray.length; i++) {
      addArray[i].disabled = false;
    }
  },

  enableOpen: function () {
    for (var i = 0; i < openArray.length; i++) {
      openArray[i].disabled = false;
    }
  },

  undisplayForm: function () {
    for (var i = 0; i < submitArray.length; i++) {
      submitArray[i].style.display = "none";

      document.getElementById("form-container").style.display = "none";
    }
  }
};

document.addEventListener(
  "click",
  function (event) {
    if (event.target.id.includes("btn_")) {
      view.enableAdd();
      view.undisplayForm();


      var eventbtn_submit = event.target;

      switch (eventbtn_submit.id) {
        case "btn_1":
        dayNumber = 1;
          day1List = new DayList();
          day1List.createDay();
         break;
         
        case "btn_2":
        dayNumber = 2;
        day2List = new DayList();
          day2List.createDay();
          break;
          
        case "btn_3":
        dayNumber = 3;
        day3List = new DayList();
        day3List.createDay();
        break;
           
        case "btn_4":
        dayNumber = 4;
        day4List = new DayList();
        day4List.createDay();
        break;


        case "btn_5":
        dayNumber = 5;
        day5List = new DayList();
        day5List.createDay();
        break;
           
        case "btn_6":
        dayNumber = 6;
        day6List = new DayList();
        day6List.createDay();
        break;

        case "btn_7":
        dayNumber = 7;
        day7List = new DayList();
        day7List.createDay();
        break;

        default:
          break;
      }
    } else if (event.target.id.includes("-button")) {
      document.getElementById("input2").value = "";
      document.getElementById("input3").value = "";
      document.getElementById("work").checked = true;
      document.getElementById("form-container").style.display = "flex";
      document.querySelector(".notes-box").style.display = "none";
      ul_tasks.innerHTML = "";
      view.disableAdd();

      var eventbtn_add = event.target.id;

      switch (eventbtn_add) {
        case "day1-button":
          document.getElementById("btn_1").style.display = "block";
          break;
        case "day2-button":
          document.getElementById("btn_2").style.display = "block";
          break;
        case "day3-button":
          document.getElementById("btn_3").style.display = "block";
          break;
        case "day4-button":
          document.getElementById("btn_4").style.display = "block";
          break;
        case "day5-button":
          document.getElementById("btn_5").style.display = "block";
          break;
        case "day6-button":
          document.getElementById("btn_6").style.display = "block";
          break;
        case "day7-button":
          document.getElementById("btn_7").style.display = "block";
          break;
        default:
          break;
      }
    } else if (event.target.id.includes("_sub")) {
      document.querySelector(".notes-box").style.display = "flex";
      view.undisplayForm();
      view.disableOpen();
      var eventbtn_open = event.target.id;
     

      if (eventbtn_open === "btns_1_sub") {
        day1List.openDay();
      
      } else if (eventbtn_open === "btns_2_sub") {
        day2List.openDay();
        
      } else if (eventbtn_open === "btns_3_sub") {
        day3List.openDay();
        
      } else if (eventbtn_open === "btns_4_sub") {
        day4List.openDay();
        
      } else if (eventbtn_open === "btns_5_sub") {
        day5List.openDay();
        
      } else if (eventbtn_open === "btns_6_sub") {
        day6List.openDay();
        
      } else if (eventbtn_open === "btns_7_sub") {
        day7List.openDay();
        
      } else {
        return;
      }
    }
  },
  false
);

//CLOSE DAY NOTES


document.getElementById("close").onclick = function () {
  document.querySelector(".notes-box").style.display = "none";
  view.todoListRemove();
  view.enableAdd();
  view.enableOpen();
};

//CLOSE FORM

document.getElementById("close-form").onclick = function () {
  view.enableAdd();
  view.undisplayForm();
};


window.onload = function () {

  var dayWeek = new Date();
  var currentDay = dayWeek.getDay();

  if (currentDay === 1) {

    document.getElementById('name1').innerHTML = 'Today';
    document.getElementById('name1').style.backgroundColor = '#FFE4B2';

  } else if (currentDay === 2) {

    document.getElementById('box1').style.order = 8;
    document.getElementById('name2').innerHTML = 'today';
    document.getElementById('name2').style.backgroundColor = '#FFE4B2';

  } else if (currentDay === 3) {

    document.getElementById('box1').style.order = 8;
    document.getElementById('box2').style.order = 9;
    document.getElementById('name3').innerHTML = 'today';
    document.getElementById('name3').style.backgroundColor = '#FFE4B2';

  } else if (currentDay === 4) {

    document.getElementById('box1').style.order = 8;
    document.getElementById('box2').style.order = 9;
    document.getElementById('box3').style.order = 10;
    document.getElementById('name4').innerHTML = 'Today';
    document.getElementById('name4').style.backgroundColor = '#FFE4B2';
  } else if (currentDay === 5) {

    document.getElementById('box5').style.order = -3;
    document.getElementById('box6').style.order = -2;
    document.getElementById('box7').style.order = -1;
    document.getElementById('name5').innerHTML = 'Today';
    document.getElementById('name5').style.backgroundColor = '#FFE4B2';

  } else if (currentDay === 6) {

    document.getElementById('box6').style.order = -2;
    document.getElementById('box7').style.order = -1;
    document.getElementById('name6').innerHTML = 'Today';
    document.getElementById('name6').style.backgroundColor = '#FFE4B2';
  } else if (currentDay === 7) {

    document.getElementById('box7').style.order = -1;
    document.getElementById('name7').innerHTML = 'Today';
    document.getElementById('name7').style.backgroundColor = '#FFE4B2';
  }
}

