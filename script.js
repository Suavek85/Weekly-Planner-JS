var addArray, submitArray, openArray;

addArray = Array.prototype.slice.call(document.querySelectorAll(".add"));

submitArray = Array.prototype.slice.call(
  document.querySelectorAll(".submit-btn")
);

openArray = Array.prototype.slice.call(document.querySelectorAll(".open"));

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
    }
    this.f = checkedRadio;
    this.g = ul_tasks.innerHTML;
  }

  createDay(dayNumber) {
    document.getElementById("btns_" + dayNumber + "_sub").style.display =
      "block";
    document.querySelector("#output" + dayNumber).innerHTML = this.a;
    document.getElementById("box" + dayNumber).style.backgroundImage = this.f;
  }

  openDay() {
    document.querySelector("#output8").innerHTML = this.b;
    var word = this.g;
    var todoHtml = `<div id='todolist' class='notes-item'>My tasks:<ul id='task_list'>${word}</ul><button id='delete2'>Delete</button><button id='completed'>Completed</button></div>`;
    mynotes.insertAdjacentHTML("afterend", todoHtml);
  }
}

//TODO LIST - TBC, IN PROGRESS...

var button_tasks = document.getElementById("enter");
var input_add = document.getElementById("input_list");
var ul_tasks = document.getElementById("task_list");
var mynotes = document.getElementById("mynotes");

function inputLength() {
  return input_add.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input_add.value));
  ul_tasks.appendChild(li);
  input_add.value = "";
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "id";
  checkbox.value = "test";
  checkbox.name = "todoscb";
  checkbox.checked = false;
  ul_tasks.appendChild(checkbox);
  var br = document.createElement("br");
  ul_tasks.appendChild(br);
  document.getElementById("delete").style.display= 'block';
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

button_tasks.addEventListener("click", addListAfterClick);
input_add.addEventListener("keypress", addListAfterEnter);

document.getElementById("delete").onclick = function() {
  var todos_checked = document.getElementsByName("todoscb");
  for (var i = 0, length = todos_checked.length; i < length; i++) {
    if (todos_checked[i].checked) {
      //debugger;
      todos_checked[i].previousSibling.remove();
      todos_checked[i].nextSibling.remove();
      todos_checked[i].remove();
      i--;
    }
  }
};

//VIEW

var view = {
  todoListRemove: function() {
    var todolist = document.getElementById("todolist");
    todolist.remove();
  },

  disableAdd: function() {
    for (var i = 0; i < addArray.length; i++) {
      addArray[i].disabled = true;
    }
  },

  disableOpen: function() {
    for (var i = 0; i < openArray.length; i++) {
      openArray[i].disabled = true;
    }
  },

  enableAdd: function() {
    for (var i = 0; i < addArray.length; i++) {
      addArray[i].disabled = false;
    }
  },

  enableOpen: function() {
    for (var i = 0; i < openArray.length; i++) {
      openArray[i].disabled = false;
    }
  },

  displayForm: function() {
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("work").checked = true;
    document.getElementById("form-container").style.display = "flex";
    document.querySelector(".notes-box").style.display = "none";
    ul_tasks.innerHTML = "";
  },

  undisplayForm: function() {
    for (var i = 0; i < submitArray.length; i++) {
      submitArray[i].style.display = "none";

      document.getElementById("form-container").style.display = "none";
    }
  },

  displaySubmit: function(el) {
    document.getElementById("btn_" + el).style.display = "block";
  },

  closeDay: function() {
    document.querySelector(".notes-box").style.display = "none";
  },

  startFromToday: function(number) {
    document.getElementById("name" + number).innerHTML = "Today";
    document.getElementById("name" + number).style.backgroundColor = "#FFE4B2";
  }
};

document.addEventListener(
  "click",
  function(event) {
    if (event.target.id.includes("btn_")) {
      view.enableAdd();
      view.undisplayForm();
      view.enableOpen();

      var eventbtn_submit = event.target;

      switch (eventbtn_submit.id) {
        case "btn_1":
          day1List = new DayList();
          day1List.createDay(1);
          break;

        case "btn_2":
          day2List = new DayList();
          day2List.createDay(2);
          break;

        case "btn_3":
          day3List = new DayList();
          day3List.createDay(3);
          break;

        case "btn_4":
          day4List = new DayList();
          day4List.createDay(4);
          break;

        case "btn_5":
          day5List = new DayList();
          day5List.createDay(5);
          break;

        case "btn_6":
          day6List = new DayList();
          day6List.createDay(6);
          break;

        case "btn_7":
          day7List = new DayList();
          day7List.createDay(7);
          break;

        default:
          break;
      }
    } else if (event.target.id.includes("-button")) {
      view.displayForm();
      view.disableAdd();
      var eventbtn_add = event.target.id;

      switch (eventbtn_add) {
        case "day1-button":
          view.displaySubmit(1);
          break;
        case "day2-button":
          view.displaySubmit(2);
          break;
        case "day3-button":
          view.displaySubmit(3);
          break;
        case "day4-button":
          view.displaySubmit(4);
          break;
        case "day5-button":
          view.displaySubmit(5);
          break;
        case "day6-button":
          view.displaySubmit(6);
          break;
        case "day7-button":
          view.displaySubmit(7);
          break;
        default:
          break;
      }
    } else if (event.target.id.includes("_sub")) {
      document.querySelector(".notes-box").style.display = "flex";
      view.undisplayForm();
      view.disableOpen();
      view.disableAdd();
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
    } else if (event.target.id.includes("close-day")) {
      view.closeDay();
      view.todoListRemove();
      view.enableAdd();
      view.enableOpen();
    } else if (event.target.id.includes("close-form")) {
      view.enableAdd();
      view.enableOpen();
      view.undisplayForm();
    }
  },
  false
);

//DAY ORDER ON LOAD

window.onload = function() {
  var dayWeek = new Date();
  var currentDay = dayWeek.getDay();

  if (currentDay === 1) {
    view.startFromToday(1);
  } else if (currentDay === 2) {
    document.getElementById("box1").style.order = 8;
    view.startFromToday(2);
  } else if (currentDay === 3) {
    document.getElementById("box1").style.order = 8;
    document.getElementById("box2").style.order = 9;
    view.startFromToday(3);
  } else if (currentDay === 4) {
    document.getElementById("box1").style.order = 8;
    document.getElementById("box2").style.order = 9;
    document.getElementById("box3").style.order = 10;
    view.startFromToday(4);
  } else if (currentDay === 5) {
    document.getElementById("box5").style.order = -3;
    document.getElementById("box6").style.order = -2;
    document.getElementById("box7").style.order = -1;
    view.startFromToday(5);
  } else if (currentDay === 6) {
    document.getElementById("box6").style.order = -2;
    document.getElementById("box7").style.order = -1;
    view.startFromToday(6);
  } else if (currentDay === 0) {
    document.getElementById("box7").style.order = -1;
    view.startFromToday(7);
  }
};
