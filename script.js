class Day {
  constructor() {
    this.b = document.getElementById("notes").value;
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

  createDayBox(dayNumber) {
    document.getElementById("btns_" + dayNumber + "_sub").style.display =
      "block";

    document.getElementById(
      "box_image_" + dayNumber
    ).style.backgroundImage = this.f;
  }

  createDayCard(dayNumber) {
    document.querySelector("#output8").innerHTML = this.b;
    var word = this.g;
    var todoHtml = `<div id='todolist' class='notes-item'>My tasks:<ul id='task_list_output'>${word}</ul></div>`;
    mynotes.insertAdjacentHTML("afterend", todoHtml);
    document.getElementById("close-day-" + dayNumber).style.display = "block";
  }

  updateDay() {
    var ul_tasks_output = document.getElementById("task_list_output").innerHTML;
    this.g = ul_tasks_output;
    this.b = document.querySelector("#output8").innerHTML;
  }
}



//VIEW OBJECT METHODS

var view = {

  addArray: Array.prototype.slice.call(document.querySelectorAll(".add")),

  submitArray: Array.prototype.slice.call(
    document.querySelectorAll(".submit-btn")
  ),

  openArray: Array.prototype.slice.call(document.querySelectorAll(".open")),

  todoListRemove: function() {
    var todolist = document.getElementById("todolist");
    todolist.remove();
  },

  disableAdd: function() {
    for (var i = 0; i < this.addArray.length; i++) {
      this.addArray[i].disabled = true;
    }
  },

  disableOpen: function() {
    for (var i = 0; i < this.openArray.length; i++) {
      this.openArray[i].disabled = true;
    }
  },

  enableAdd: function() {
    for (var i = 0; i < this.addArray.length; i++) {
      this.addArray[i].disabled = false;
    }
  },

  enableOpen: function() {
    for (var i = 0; i < this.openArray.length; i++) {
      this.openArray[i].disabled = false;
    }
  },

  displayForm: function() {
    document.getElementById("notes").value = "";
    document.getElementById("work").checked = true;
    document.getElementById("form-container").style.display = "flex";
    document.querySelector(".notes-box").style.display = "none";
    ul_tasks.innerHTML = "";
  },

  clearTodo: function() {
    ul_tasks.innerHTML = "";
  },

  undisplayForm: function() {
    for (var i = 0; i < this.submitArray.length; i++) {
      this.submitArray[i].style.display = "none";
      document.getElementById("form-container").style.display = "none";
    }
  },

  displaySubmit: function(el) {
    document.getElementById("btn_" + el).style.display = "block";
  },

  undisplayDay: function() {
    document.querySelector(".notes-box").style.display = "none";
    var closeSave = Array.prototype.slice.call(
      document.querySelectorAll(".close-save")
    );

    closeSave.forEach(element => {
      element.style.display = "none";
    });

    document.getElementById("close-day-1").style.display;
  },

  displayDay: function() {

    document.querySelector(".notes-box").style.display = "flex";

  },

  startFromToday: function(number) {
    document.getElementById("name" + number).innerHTML = "TODAY";
  },

  calculateProgress: function() {
    var allTodosOutput = Array.prototype.slice.call(
      document.getElementsByName("todoscb")
    );

    var todosCompletedCount = 0;
    var progressBar = document.getElementById("progressbar");

    for (var i = 0, length = allTodosOutput.length; i < length; i++) {
      if (
        allTodosOutput[i].previousSibling.style.textDecoration ===
        "line-through"
      ) {
        var todosCompletedCount = todosCompletedCount + 1;
      }
    }

    var widthPercentage = Math.round(
      (todosCompletedCount / allTodosOutput.length) * 100
    );

    if (isNaN(widthPercentage) || widthPercentage === 0) {
      progressBar.style.width = "100%";
      progressBar.innerHTML = "0% completed";
      progressBar.style.backgroundColor = "#A4A4A4";
    } else {
      progressBar.style.width = widthPercentage * 1.8;
      progressBar.style.backgroundColor = "orange";
      if (widthPercentage > 40) {
        progressBar.innerHTML = widthPercentage + "% done";
      } else {
        progressBar.innerHTML = widthPercentage + "%";
      }
    }
  },

  clearProgress: function() {
    var progressBar = document.getElementById("progressbar");
    progressBar.style.width = "100%";
    progressBar.innerHTML = "0% completed";
    progressBar.style.backgroundColor = "#A4A4A4";
  }
};


//FORM TODO LIST - TBC, IN PROGRESS...

var input_todo_form = document.getElementById("input_list");
var ul_tasks = document.getElementById("task_list");

function inputLength(element) {
  return element.value.length;
}

function createListForm() {
  var logo_done = document.createElement("img");
  logo_done.setAttribute("src", "images/completed.png");
  logo_done.setAttribute("alt", "logo done");
  logo_done.setAttribute("class", "logo_done");
  logo_done.setAttribute("height", "15px");
  logo_done.setAttribute("width", "15px");
  ul_tasks.appendChild(logo_done);
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input_todo_form.value));
  ul_tasks.appendChild(li);
  input_todo_form.value = "";
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "checkbox_todo";
  checkbox.value = "test";
  checkbox.name = "todoscb";
  ul_tasks.appendChild(checkbox);
  var br = document.createElement("br");
  ul_tasks.appendChild(br);
  document.getElementById("delete_todo_form").style.display = "block";
}

//DAY TODO LIST - TBC, IN PROGRESS...

var input_todo_day = document.getElementById("input_list_output");
var ul_tasks_day = document.getElementById("task_list_output");

function createListDay() {
  var ul_tasks_day = document.getElementById("task_list_output");
  var logo_done = document.createElement("img");
  logo_done.setAttribute("src", "images/completed.png");
  logo_done.setAttribute("alt", "logo done");
  logo_done.setAttribute("class", "logo_done");
  logo_done.setAttribute("height", "15px");
  logo_done.setAttribute("width", "15px");
  ul_tasks_day.appendChild(logo_done);
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input_todo_day.value));
  ul_tasks_day.appendChild(li);
  input_todo_day.value = "";
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "checkbox_todo";
  checkbox.value = "test";
  checkbox.name = "todoscb";
  ul_tasks_day.appendChild(checkbox);
  var br = document.createElement("br");
  ul_tasks_day.appendChild(br);
  document.getElementById("delete_todo_form").style.display = "block";
}


//SEVEN DAYS METHODS OBJECT


var dates = {

date: function() { return new Date(); },
today: function() {  return this.shortToLong(this.date().toDateString()); },
hellotoday: function() { return "Hi, today's " + this.today() },
day: function() { return this.date().getDay(); },

 jumpToNextDay: function(date, numb) {
  var currentDate = this.shortToLong(
    new Date(
      + date + (7 - ((date.getDay() + numb) % 7)) * 86400000
    ).toDateString()
  );
  document.getElementById("background_text").innerHTML = currentDate;
},

jumpToToday: function() {
  document.getElementById("background_text").innerHTML = this.hellotoday();
},

notToday: function (dayNumber) {
  return (
    document.getElementById("btns_" + dayNumber + "_sub").previousSibling
      .previousSibling.previousSibling.previousSibling.firstChild.firstChild
      .innerHTML !== "TODAY"
  );
},

shortToLong: function(el) {
  return el
    .replace(/Mon/g, "Monday,")
    .replace(/Tue/g, "Tuesday,")
    .replace(/Wed/g, "Wednesday,")
    .replace(/Thu/g, "Thursday,")
    .replace(/Fri/g, "Friday,")
    .replace(/Sat/g, "Saturday,")
    .replace(/Sun/g, "Sunday,")
    .replace(/Jan/g, "January")
    .replace(/Feb/g, "February")
    .replace(/Mar/g, "March")
    .replace(/Apr/g, "April")
    .replace(/Jun/g, "June")
    .replace(/Jul/g, "July")
    .replace(/Aug/g, "August")
    .replace(/Sep/g, "September")
    .replace(/Oct/g, "October")
    .replace(/Nov/g, "November")
    .replace(/Dec/g, "December")
    .replace(/2018/g, "")
    .replace(/2019/g, "");
}

}


//CLICK EVENT LISTENER

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
          day1full = new Day();
          day1full.createDayBox(1);
          view.clearTodo();
          break;

        case "btn_2":
          day2full = new Day();
          day2full.createDayBox(2);
          view.clearTodo();
          break;

        case "btn_3":
          day3full = new Day();
          day3full.createDayBox(3);
          view.clearTodo();
          break;

        case "btn_4":
          day4full = new Day();
          day4full.createDayBox(4);
          view.clearTodo();
          break;

        case "btn_5":
          day5full = new Day();
          day5full.createDayBox(5);
          view.clearTodo();
          break;

        case "btn_6":
          day6full = new Day();
          day6full.createDayBox(6);
          view.clearTodo();
          break;

        case "btn_7":
          day7full = new Day();
          day7full.createDayBox(7);
          view.clearTodo();
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
      view.displayDay();
      view.undisplayForm();
      view.disableOpen();
      view.disableAdd();

      var eventbtn_open = event.target.id;

      if (eventbtn_open === "btns_1_sub") {
        if (dates.notToday(1)) {
          dates.jumpToNextDay(dates.date(), 6);
        } else {
          dates.jumpToToday();
        }
        day1full.createDayCard(1);
      } 
      else if (eventbtn_open === "btns_2_sub") {
        if (dates.notToday(2)) {
          dates.jumpToNextDay(dates.date(), 5);
        } else {
          dates.jumpToToday();
        }
        day2full.createDayCard(2);
        view.calculateProgress();
      } 
      else if (eventbtn_open === "btns_3_sub") {
        if (dates.notToday(3)) {
          dates.jumpToNextDay(dates.date(), 4);
        } else {
          dates.jumpToToday();
        }
        day3full.createDayCard(3);
        view.calculateProgress();
      } 
      else if (eventbtn_open === "btns_4_sub") {
        if (dates.notToday(4)) {
          dates.jumpToNextDay(dates.date(), 3);
        } else {
          dates.jumpToToday();
        }
        day4full.createDayCard(4);
        view.calculateProgress();
      } 
      else if (eventbtn_open === "btns_5_sub") {
        if (dates.notToday(5)) {
          dates.jumpToNextDay(dates.date(), 2);
        } else {
          dates.jumpToToday();
        }
        day5full.createDayCard(5);
        view.calculateProgress();
      } 
      else if (eventbtn_open === "btns_6_sub") {
        if (dates.notToday(6)) {
          dates.jumpToNextDay(dates.date(), 1);
        } else {
          dates.jumpToToday();
        }
        day6full.createDayCard(6);
        view.calculateProgress();
      } 
      else if (eventbtn_open === "btns_7_sub") {
        if (dates.notToday(7)) {
          dates.jumpToNextDay(dates.date(), 0);
        } else {
          dates.jumpToToday();
        }
        day7full.createDayCard(7);
        view.calculateProgress();
      } 
      else {
        return;
      }
    } else if (event.target.id.includes("close-day")) {
      var eventbtn_closesave = event.target.id;

      if (eventbtn_closesave === "close-day-1") {
        day1full.updateDay();
      } else if (eventbtn_closesave === "close-day-2") {
        day2full.updateDay();
      } else if (eventbtn_closesave === "close-day-3") {
        day3full.updateDay();
      } else if (eventbtn_closesave === "close-day-4") {
        day4full.updateDay();
      } else if (eventbtn_closesave === "close-day-5") {
        day5full.updateDay();
      } else if (eventbtn_closesave === "close-day-6") {
        day6full.updateDay();
      } else if (eventbtn_closesave === "close-day-7") {
        day7full.updateDay();
      } else {
        return;
      }

      view.undisplayDay();
      view.todoListRemove();
      view.enableAdd();
      view.enableOpen();
      view.clearProgress();
    } else if (event.target.id.includes("close-form")) {
      view.enableAdd();
      view.enableOpen();
      view.undisplayForm();
    } else if (event.target.id.includes("delete_todo_form")) {
      var allTodos = document.getElementsByName("todoscb");
      for (var i = 0, length = allTodos.length; i < length; i++) {
        if (allTodos[i].checked) {
          allTodos[i].previousSibling.remove();
          allTodos[i].nextSibling.remove();
          allTodos[i].remove();
          i--;
        }
      }
    } else if (event.target.id.includes("delete_output")) {
      var allTodos = document.getElementsByName("todoscb");
      for (var i = 0, length = allTodos.length; i < length; i++) {
        if (allTodos[i].checked) {
          allTodos[i].previousSibling.remove();
          allTodos[i].previousSibling.remove();
          allTodos[i].nextSibling.remove();
          allTodos[i].remove();
          i--;
        }
        view.calculateProgress();
      }
    } else if (event.target.id.includes("completed")) {
      var allTodos = document.getElementsByName("todoscb");
      for (var i = 0, length = allTodos.length; i < length; i++) {
        if (allTodos[i].checked) {
          allTodos[i].previousSibling.style.textDecoration =
            "line-through";
            allTodos[i].previousSibling.style.color = "grey";
            allTodos[i].checked = false;
            allTodos[i].previousSibling.previousSibling.style.display =
            "inline-block";
        }
      }
      view.calculateProgress();
    } else if (event.target.id.includes("enter")) {
      if (inputLength(input_todo_form) > 0) {
        createListForm();
      }
    } else if (event.target.id.includes("enter")) {
      if (inputLength(input_todo_form) > 0) {
        createListForm();
      }
    } else if (event.target.id.includes("add")) {
      if (inputLength(input_todo_day) > 0) {
        createListDay();
        view.calculateProgress();
      }
    }
  },
  false
);

document.addEventListener(
  "keypress",
  function(event) {
    if (event.target.id.includes("input_list")) {
      if (inputLength(input_todo_day) > 0 && event.keyCode === 13) {
        createListForm();
        view.calculateProgress();
      }
    }
  },
  false
);

//DAY ORDER ONLOAD

window.onload = function() {
  var dayWeek = new Date();
  var currentDay = dayWeek.getDay();
  var box1 = document.getElementById("box1");
  var box2 = document.getElementById("box2");
  var box3 = document.getElementById("box3");
  var box5 = document.getElementById("box5");
  var box6 = document.getElementById("box6");
  var box7 = document.getElementById("box7");
  if (currentDay === 1) {
    view.startFromToday(1);
  } else if (currentDay === 2) {
    box1.style.order = 8;
    view.startFromToday(2);
  } else if (currentDay === 3) {
    box1.style.order = 8;
    box2.style.order = 9;
    view.startFromToday(3);
  } else if (currentDay === 4) {
    box1.style.order = 8;
    box2.style.order = 9;
    box3.style.order = 10;
    view.startFromToday(4);
  } else if (currentDay === 5) {
    box5.style.order = -3;
    box6.style.order = -2;
    box7.style.order = -1;
    view.startFromToday(5);
  } else if (currentDay === 6) {
    box6.style.order = -2;
    box7.style.order = -1;
    view.startFromToday(6);
  } else if (currentDay === 0) {
    box7.style.order = -1;
    view.startFromToday(7);
  }
};
