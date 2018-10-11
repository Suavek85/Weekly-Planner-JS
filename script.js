var addArray, submitArray, openArray ;

addArray = Array.prototype.slice.call(document.querySelectorAll(".add"));

submitArray = Array.prototype.slice.call(
  document.querySelectorAll(".submit-btn")
);

openArray = Array.prototype.slice.call(
  document.querySelectorAll(".open")
);


class DayList {
  constructor(a, b, f, g) {
    this.a = a;
    this.b = b;
    this.f = f;
    this.g = g;
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

  objectBuilder: function () {
    notes1 = document.getElementById("input2").value;
    morenotes1 = document.getElementById("input3").value;
    radios = document.getElementsByName("day");
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        checkedRadio = radios[i].value;
        break;
      }
    };
    tasks4 = ul_tasks.innerHTML;
  },

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
      view.objectBuilder();

      var eventbtn_submit = event.target;

      switch (eventbtn_submit.id) {
        case "btn_1":
          day1List = new DayList(
            notes1,
            morenotes1,
            checkedRadio,
            tasks4
          );
          document.getElementById("btns_1_sub").style.display = "block";
          document.querySelector("#output1").innerHTML = day1List.a;
          document.getElementById("box1").style.backgroundImage = day1List.f;
          break;
        case "btn_2":
          day2List = new DayList(
            notes1,
            morenotes1,
            checkedRadio,
            tasks4
          );
          document.getElementById("btns_2_sub").style.display = "block";
          document.querySelector("#output1_2").innerHTML = day2List.a;
          document.getElementById("box2").style.backgroundImage = day2List.f;
          break;
        case "btn_3":
          day3List = new DayList(
            notes1,
            morenotes1,
            checkedRadio,
            tasks4
          );
          document.getElementById("btns_3_sub").style.display = "block";
          document.querySelector("#output1_3").innerHTML = day3List.a;
          document.getElementById("box3").style.backgroundImage = day3List.f;
          break;
        case "btn_4":
          day4List = new DayList(
            notes1,
            morenotes1,
            checkedRadio,
            tasks4
          );
          document.getElementById("btns_4_sub").style.display = "block";
          document.querySelector("#output1_4").innerHTML = day4List.a;
          document.getElementById("box4").style.backgroundImage = day4List.f;
          break;
        case "btn_5":
          day5List = new DayList(
            notes1,
            morenotes1,
            checkedRadio,
            tasks4
          );
          document.getElementById("btns_5_sub").style.display = "block";
          document.querySelector("#output1_5").innerHTML = day5List.a;
          document.getElementById("box5").style.backgroundImage = day5List.f;
          break;
        case "btn_6":
          day6List = new DayList(
            notes1,
            morenotes1,
            checkedRadio,
            tasks4
          );
          document.getElementById("btns_6_sub").style.display = "block";
          document.querySelector("#output1_6").innerHTML = day6List.a;
          document.getElementById("box6").style.backgroundImage = day6List.f;
          break;
        case "btn_7":
          day7List = new DayList(
            notes1,
            morenotes1,
            checkedRadio,
            tasks4
          );
          document.getElementById("btns_7_sub").style.display = "block";
          document.querySelector("#output1_7").innerHTML = day7List.a;
          document.getElementById("box7").style.backgroundImage = day7List.f;
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
      var word = day1List.g;
      var todoHtml = `<div id='todolist' class='notes-item'>Your tasks:<ul>${word}</ul></div>`;

      if (eventbtn_open === "btns_1_sub") {
        
        document.querySelector("#output2").innerHTML = day1List.b;
        mynotes.insertAdjacentHTML('afterend', todoHtml);
      } else if (eventbtn_open === "btns_2_sub") {
        document.querySelector("#output2").innerHTML = day2List.b;
        mynotes.insertAdjacentHTML('afterend', "<div id='todolist'  class='notes-item'>Your tasks:<ul>" + day2List.g + "</ul></div>");
        
      } else if (eventbtn_open === "btns_3_sub") {
        document.querySelector("#output2").innerHTML = day3List.b;
        mynotes.insertAdjacentHTML('afterend', "<div id='todolist' class='notes-item'>Your tasks:<ul>" + day3List.g + "</ul></div>");
        
      } else if (eventbtn_open === "btns_4_sub") {
        document.querySelector("#output2").innerHTML = day4List.b;
        mynotes.insertAdjacentHTML('afterend', "<div id='todolist' class='notes-item'>Your tasks:<ul>" + day4List.g + "</ul></div>");
        
      } else if (eventbtn_open === "btns_5_sub") {
        document.querySelector("#output2").innerHTML = day5List.b;
        mynotes.insertAdjacentHTML('afterend', "><div id='todolist' class='notes-item'>Your tasks:<ul>" + day5List.g + "</ul></div>");
        
      } else if (eventbtn_open === "btns_6_sub") {
        document.querySelector("#output2").innerHTML = day6List.b;
        mynotes.insertAdjacentHTML('afterend', "<div id='todolist' class='notes-item'Your tasks:><ul>" + day6List.g + "</ul></div>");
        
      } else if (eventbtn_open === "btns_7_sub") {
        document.querySelector("#output2").innerHTML = day7List.b;
        mynotes.insertAdjacentHTML('afterend', "><div id='todolist' class='notes-item'>Your tasks:<ul>" + day7List.g + "</ul></div>");
        
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

