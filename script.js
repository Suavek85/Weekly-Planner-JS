//GLOBAL VARS

var dayIndex;
var weekArray = [];


//DAY CLASS

class Day {
  constructor(a) {
    this.a = a;
    this.b = document.getElementById("notes").value;
    var radios = document.getElementsByName("day");
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        var checkedRadio = radios[i].value;
        break;
      }
    }
    this.f = checkedRadio;
    this.g = todos.ul_tasks().innerHTML;
  }

  createDayBox(dayNumber) {
    document.getElementById("btns_" + dayNumber + "_open").style.display =
      "block";

    document.getElementById(
      "box_image_" + dayNumber
    ).style.backgroundImage = this.f;
  }

  createDayCard(dayNumber) {
    document.querySelector("#output8").innerHTML = this.b;
    var word = this.g;
    var todoHtml = `<div id='todolist' class='notes-item'>My tasks:<ul id='task_list_output'>${word}</ul>
    <img src='images/completed.png' class='button_day' id='completed'>
    </img><img src='images/trash.png' class='button_day' id='delete_output'></img></div>`;
    mynotes.insertAdjacentHTML("afterend", todoHtml);
    document.getElementById("close-day-" + dayNumber).style.display = "block";
  }

  updateDay() {
    var ul_tasks_output = document.getElementById("task_list_output").innerHTML;
    this.g = ul_tasks_output;
    this.b = document.querySelector("#output8").innerHTML;
  }
}

//VIEW OBJECT

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
      this.addArray[i].style.visibility = "hidden";
    }
  },

  disableOpen: function() {
    for (var i = 0; i < this.openArray.length; i++) {
      this.openArray[i].style.visibility = "hidden";
    }
  },

  enableAdd: function() {
    for (var i = 0; i < this.addArray.length; i++) {
      this.addArray[i].style.visibility = "visible";
    }
  },

  enableOpen: function() {
    for (var i = 0; i < this.openArray.length; i++) {
      this.openArray[i].style.visibility = "visible";
    }
  },

  displayForm: function() {
    document.getElementById("notes").value = "";
    document.getElementById("work").checked = true;
    document.getElementById("form-container").style.display = "flex";
    document.querySelector(".notes-box").style.display = "none";
    todos.ul_tasks().innerHTML = "";
  },

  clearTodo: function() {
    todos.ul_tasks().innerHTML = "";
  },

  undisplayForm: function() {
    for (var i = 0; i < this.submitArray.length; i++) {
      this.submitArray[i].style.display = "none";
      document.getElementById("form-container").style.display = "none";
    }
  },

  displaySubmit: function(el) {
    document.getElementById("submit_" + el).style.display = "block";
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
        allTodosOutput[i].nextSibling.style.textDecoration === "line-through"
      ) {
        var todosCompletedCount = todosCompletedCount + 1;
      }
    }

    var widthPercentage = Math.round(
      (todosCompletedCount / allTodosOutput.length) * 100
    );

    if (
      isNaN(widthPercentage) ||
      widthPercentage === 0 ||
      widthPercentage === undefined
    ) {
      progressBar.style.width = "100%";
      progressBar.innerHTML = "0% completed";
      progressBar.style.backgroundColor = "#A4A4A4";
    } else {
      progressBar.style.width = widthPercentage * 2.1;
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
  },

  undisplayWelcome: function() {
    var welcome = document.querySelector(".welcome");
    var quotes = document.querySelector(".quotes");
    welcome.style.display = "none";
    quotes.style.display = "none";
  },

  displayWelcome: function() {
    var welcome = document.querySelector(".welcome");
    var quotes = document.querySelector(".quotes");
    welcome.style.display = "block";
    quotes.style.display = "block";
  },

  removeFilter: function(num) {
    document
      .getElementById("box_image_" + num)
      .classList.remove("black_and_white");
  }
};

//TODOS OBJECT

var todos = {
  input_todo_form: function() {
    return document.getElementById("input_list");
  },

  input_todo_day: function() {
    return document.getElementById("input_list_output");
  },

  ul_tasks: function() {
    return document.getElementById("task_list");
  },

  ul_tasks_day: function() {
    return document.getElementById("task_list_output");
  },

  inputLength: function(element) {
    return element.value.length;
  },

  createIconDone: function(el) {
    var logo_done = document.createElement("img");
    logo_done.setAttribute("src", "images/completed.png");
    logo_done.setAttribute("alt", "logo done");
    logo_done.setAttribute("class", "logo_done");
    logo_done.setAttribute("height", "16px");
    logo_done.setAttribute("width", "16px");
    el.appendChild(logo_done);
  },

  createCheckbox: function(el) {
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox_todo";
    checkbox.value = "test";
    checkbox.name = "todoscb";
    el.appendChild(checkbox);
  },

  createLi: function(el, el2) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(el2.value));
    el.appendChild(li);
  },

  createListForm: function() {
    this.createCheckbox(this.ul_tasks());
    this.createLi(this.ul_tasks(), this.input_todo_form());
    this.input_todo_form().value = "";
    this.createIconDone(this.ul_tasks());

    var br = document.createElement("br");
    this.ul_tasks().appendChild(br);
    document.getElementById("delete_todo_form").style.display = "block";
  },

  createListDay: function() {
    this.createCheckbox(this.ul_tasks_day());
    this.createLi(this.ul_tasks_day(), this.input_todo_day());
    this.input_todo_day().value = "";
    this.createIconDone(this.ul_tasks_day());

    var br = document.createElement("br");
    this.ul_tasks_day().appendChild(br);
    document.getElementById("delete_todo_form").style.display = "block";
  },

  countWeeklyTodos: function() {
    var todosDoneArray = [];
    var todosAllArray = [];
    

    for (i = 0; i < weekArray.length; i++) {
      var done_per_day = (weekArray[i].g.match(/through/g) || []).length;
      todosDoneArray.push(done_per_day);

     var all_per_day = (weekArray[i].g.match(/todoscb/g) || []).length;
     todosAllArray.push(all_per_day);
    }

    if(todosDoneArray.length === 0 && todosAllArray.length === 0) {
      document.getElementById('outstanding_tasks').innerHTML = "You have no outstanding tasks.";
    } else {

      countDone = todosDoneArray.reduce(function(a, b) {
        return a + b;
      });
  
      countAll = todosAllArray.reduce(function(a, b) {
        return a + b;
      });
      document.getElementById('outstanding_tasks').innerHTML = countDone + " out of " + countAll + " tasks done for the next 7 days.";
    }

  }
};

//DATES AND TIME OBJECT

var dates = {
  date: function() {
    return new Date();
  },
  today: function() {
    return this.shortToLong(this.date().toDateString());
  },
  hellotoday: function() {
    return "Today's " + this.today();
  },
  day: function() {
    return this.date().getDay();
  },

  nowHour: function() {
    return this.date().getHours();
  },

  welcomeMessage: function(el) {
    return (document.getElementById("welcoming").innerHTML = "Good " + el);
  },

  morQuote: function() {
    return (document.getElementById("quotes_text").innerHTML =
      "I opened two gifts this morning. They were my eyes.");
  },

  aftQuote: function() {
    return (document.getElementById("quotes_text").innerHTML =
      "Get busy living or get busy dying. - Stephen King");
  },

  eveQuote: function() {
    return (document.getElementById("quotes_text").innerHTML =
      "Eighty percent of success is showing up. – Woody Allen");
  },

  jumpToNextDay: function(date, numb) {
    var currentDate = this.shortToLong(
      new Date(
        +date + (7 - ((date.getDay() + numb) % 7)) * 86400000
      ).toDateString()
    );
    document.getElementById("background_text").innerHTML = currentDate;
  },

  jumpToToday: function() {
    document.getElementById("background_text").innerHTML = this.hellotoday();
  },

  notToday: function(dayNumber) {
    return (
      document.getElementById("btns_" + dayNumber + "_open").previousSibling
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
  },

  nowTime: function() {
    if (this.nowHour() >= 5 && this.nowHour() <= 11) {
      this.welcomeMessage("morning.");
      this.morQuote();
      this.randomPicGen("mor_1", "mor_2");
    } else if (this.nowHour() >= 12 && this.nowHour() <= 17) {
      this.welcomeMessage("afternoon.");
      this.aftQuote();
      this.randomPicGen("after_1", "after_2");
    } else {
      this.welcomeMessage("evening.");
      this.eveQuote();
      this.randomPicGen("eve_1", "eve_2");
    }
  },

  orderDays: function() {
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");
    var box3 = document.getElementById("box3");
    var box5 = document.getElementById("box5");
    var box6 = document.getElementById("box6");
    var box7 = document.getElementById("box7");
    if (this.day() === 1) {
      view.startFromToday(1);
    } else if (this.day() === 2) {
      box1.style.order = 8;
      view.startFromToday(2);
    } else if (this.day() === 3) {
      box1.style.order = 8;
      box2.style.order = 9;
      view.startFromToday(3);
    } else if (this.day() === 4) {
      box1.style.order = 8;
      box2.style.order = 9;
      box3.style.order = 10;
      view.startFromToday(4);
    } else if (this.day() === 5) {
      box5.style.order = -3;
      box6.style.order = -2;
      box7.style.order = -1;
      view.startFromToday(5);
    } else if (this.day() === 6) {
      box6.style.order = -2;
      box7.style.order = -1;
      view.startFromToday(6);
    } else if (this.day() === 0) {
      box7.style.order = -1;
      view.startFromToday(7);
    }
  },

  randomPicGen: function(pic1, pic2) {
    var randomPic = Math.floor(Math.random() * 2 + 1);

    if (randomPic === 1) {
      document.getElementById("main_pic").style.backgroundImage =
        "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(images/" +
        pic1 +
        ".jpg";
    } else {
      document.getElementById("main_pic").style.backgroundImage =
        "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(images/" +
        pic2 +
        ".jpg";
    }
  },

  addAttribute: function() {
    return event.target.getAttribute("day-name");
  }
};

//CLICK EVENT LISTENERS & ONLOADS

document.addEventListener(
  "click",
  function(event) {
    var day_name = event.target.getAttribute("day-name");

    if (event.target.id.includes("submit_")) {
      view.enableAdd();
      view.undisplayForm();
      view.displayWelcome();
      view.enableOpen();
      var numberSubmit = event.target.id.slice(-1);
      dayfull = new Day(day_name);
      weekArray.push(dayfull);
      todos.countWeeklyTodos();
      dayIndex = weekArray.findIndex(function(element) {
        return element.a === event.target.getAttribute("day-name");
      });
      weekArray[dayIndex].createDayBox(numberSubmit);
      view.clearTodo();
    } else if (event.target.id.includes("-add")) {
      view.displayForm();
      view.disableAdd();
      view.undisplayWelcome();
      var eventbtn_add = event.target.id;
      var numberAdd = eventbtn_add.slice(3, 4);
      view.displaySubmit(numberAdd);
      view.removeFilter(numberAdd);
    } else if (event.target.id.includes("_open")) {
      view.displayDay();
      view.undisplayForm();
      view.disableOpen();
      view.disableAdd();
      view.undisplayWelcome();
      todos.countWeeklyTodos();
      var eventbtn_open = event.target.id;
      dayIndex = weekArray.findIndex(function(element) {
        return element.a === day_name;
      });

      if (eventbtn_open === "btns_1_open") {
        if (dates.notToday(1)) {
          dates.jumpToNextDay(dates.date(), 6);
        } else {
          dates.jumpToToday();
        }
      } else if (eventbtn_open === "btns_2_open") {
        if (dates.notToday(2)) {
          dates.jumpToNextDay(dates.date(), 5);
        } else {
          dates.jumpToToday();
        }
      } else if (eventbtn_open === "btns_3_open") {
        if (dates.notToday(3)) {
          dates.jumpToNextDay(dates.date(), 4);
        } else {
          dates.jumpToToday();
        }
      } else if (eventbtn_open === "btns_4_open") {
        if (dates.notToday(4)) {
          dates.jumpToNextDay(dates.date(), 3);
        } else {
          dates.jumpToToday();
        }
      } else if (eventbtn_open === "btns_5_open") {
        if (dates.notToday(5)) {
          dates.jumpToNextDay(dates.date(), 2);
        } else {
          dates.jumpToToday();
        }
      } else if (eventbtn_open === "btns_6_open") {
        if (dates.notToday(6)) {
          dates.jumpToNextDay(dates.date(), 1);
        } else {
          dates.jumpToToday();
        }
      } else if (eventbtn_open === "btns_7_open") {
        if (dates.notToday(7)) {
          dates.jumpToNextDay(dates.date(), 0);
        } else {
          dates.jumpToToday();
        }
      } else {
        return;
      }

      var numberOpen = event.target.id.slice(5, 6);
      weekArray[dayIndex].createDayCard(numberOpen);
      view.calculateProgress();
      
    } else if (event.target.id.includes("close-day")) {
      dayIndex = weekArray.findIndex(function(element) {
        return element.a === day_name;
      });
      weekArray[dayIndex].updateDay();
      todos.countWeeklyTodos();
      view.displayWelcome();
      view.undisplayDay();
      view.todoListRemove();
      view.enableAdd();
      view.enableOpen();
      view.clearProgress();
  
    } else if (event.target.id.includes("close-form")) {
      view.displayWelcome();
      view.enableAdd();
      view.enableOpen();
      view.undisplayForm();
      view.addFilter();
    } else if (event.target.id.includes("delete_todo_form")) {
      var allTodos = document.getElementsByName("todoscb");
      for (var i = 0, length = allTodos.length; i < length; i++) {
        if (allTodos[i].checked) {
          allTodos[i].nextSibling.remove();
          allTodos[i].nextSibling.remove();
          allTodos[i].nextSibling.remove();
          allTodos[i].remove();
          i--;
        }
      }
    } else if (event.target.id.includes("delete_output")) {
      var allTodos = document.getElementsByName("todoscb");
      for (var i = 0, length = allTodos.length; i < length; i++) {
        if (allTodos[i].checked) {
          allTodos[i].nextSibling.remove();
          allTodos[i].nextSibling.remove();
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
          allTodos[i].nextSibling.style.textDecoration = "line-through";
          allTodos[i].nextSibling.style.color = "grey";
          allTodos[i].checked = false;
          allTodos[i].nextSibling.nextSibling.style.display = "inline-block";
        }
      }
      view.calculateProgress();
    } else if (event.target.id.includes("enter")) {
      if (todos.inputLength(todos.input_todo_form()) > 0) {
        todos.createListForm();
      }
    } else if (event.target.id.includes("enter")) {
      if (todos.inputLength(todos.input_todo_form()) > 0) {
        todos.createListForm();
      }
    } else if (event.target.id.includes("add")) {
      if (todos.inputLength(todos.input_todo_day()) > 0) {
        todos.createListDay();
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
      if (
        todos.inputLength(todos.input_todo_day()) > 0 &&
        event.keyCode === 13
      ) {
        todos.createListForm();
        view.calculateProgress();
      }
    }
  },
  false
);

window.onload = function() {
  dates.nowTime();
  dates.orderDays();
  todos.countWeeklyTodos();
};
