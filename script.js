var addArray, submitArray;

addArray = Array.prototype.slice.call(document.querySelectorAll(".add"));

submitArray = Array.prototype.slice.call(
  document.querySelectorAll(".submit-btn")
);

//OBJECT PROTOTYPE CONSTRUCTOR

function DayList(a, b, c, d, e, f) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
  this.e = e;
  this.f = f;
}

//VIEW METHODS

var view = {
  objectBuilder: function() {
    notes1 = document.getElementById("input2").value;
    morenotes1 = document.getElementById("input3").value;
    task1 = document.getElementById("input4").value;
    task2 = document.getElementById("input5").value;
    task3 = document.getElementById("input6").value;
    radios = document.getElementsByName("day");
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        checkedRadio = radios[i].value;
        break;
      }
    }
  },

  disableAdd: function() {
    for (var i = 0; i < addArray.length; i++) {
      addArray[i].disabled = true;
    }
  },

  enableAdd: function() {
    for (var i = 0; i < addArray.length; i++) {
      addArray[i].disabled = false;
    }
  },

  undisplayForm: function() {
    for (var i = 0; i < submitArray.length; i++) {
      submitArray[i].style.display = "none";

      document.getElementById("form-container").style.display = "none";
    }
  }
};

document.addEventListener(
  "click",
  function(event) {
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
            task1,
            task2,
            task3,
            checkedRadio
          );
          document.getElementById("btns_1_sub").style.display = "block";
          document.querySelector("#output1").innerHTML = day1List.a;
          document.getElementById("box1").style.backgroundImage = day1List.f;
          break;
        case "btn_2":
          day2List = new DayList(
            notes1,
            morenotes1,
            task1,
            task2,
            task3,
            checkedRadio
          );
          document.getElementById("btns_2_sub").style.display = "block";
          document.querySelector("#output1_2").innerHTML = day2List.a;
          document.getElementById("box2").style.backgroundImage = day2List.f;
          break;
        case "btn_3":
          day3List = new DayList(
            notes1,
            morenotes1,
            task1,
            task2,
            task3,
            checkedRadio
          );
          document.getElementById("btns_3_sub").style.display = "block";
          document.querySelector("#output1_3").innerHTML = day3List.a;
          document.getElementById("box3").style.backgroundImage = day3List.f;
          break;
        case "btn_4":
          day4List = new DayList(
            notes1,
            morenotes1,
            task1,
            task2,
            task3,
            checkedRadio
          );
          document.getElementById("btns_4_sub").style.display = "block";
          document.querySelector("#output1_4").innerHTML = day4List.a;
          document.getElementById("box4").style.backgroundImage = day4List.f;
          break;
        case "btn_5":
          day5List = new DayList(
            notes1,
            morenotes1,
            task1,
            task2,
            task3,
            checkedRadio
          );
          document.getElementById("btns_5_sub").style.display = "block";
          document.querySelector("#output1_5").innerHTML = day5List.a;
          document.getElementById("box5").style.backgroundImage = day5List.f;
          break;
        case "btn_6":
          day6List = new DayList(
            notes1,
            morenotes1,
            task1,
            task2,
            task3,
            checkedRadio
          );
          document.getElementById("btns_6_sub").style.display = "block";
          document.querySelector("#output1_6").innerHTML = day6List.a;
          document.getElementById("box6").style.backgroundImage = day6List.f;
          break;
        case "btn_7":
          day7List = new DayList(
            notes1,
            morenotes1,
            task1,
            task2,
            task3,
            checkedRadio
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
      document.getElementById("input4").value = "";
      document.getElementById("input5").value = "";
      document.getElementById("input6").value = "";
      document.getElementById("work").checked = true;
      document.getElementById("form-container").style.display = "flex";
      document.querySelector(".notes-box").style.display = "none";
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
      var eventbtn_open = event.target.id;

      if (eventbtn_open === "btns_1_sub") {
        document.querySelector("#output2").innerHTML = day1List.b;
        document.querySelector("#output3").innerHTML = day1List.c;
        document.querySelector("#output4").innerHTML = day1List.d;
        document.querySelector("#output5").innerHTML = day1List.e;
      } else if (eventbtn_open === "btns_2_sub") {
        document.querySelector("#output2").innerHTML = day2List.b;
        document.querySelector("#output3").innerHTML = day2List.c;
        document.querySelector("#output4").innerHTML = day2List.d;
        document.querySelector("#output5").innerHTML = day2List.e;
      } else if (eventbtn_open === "btns_3_sub") {
        document.querySelector("#output2").innerHTML = day3List.b;
        document.querySelector("#output3").innerHTML = day3List.c;
        document.querySelector("#output4").innerHTML = day3List.d;
        document.querySelector("#output5").innerHTML = day3List.e;
      } else if (eventbtn_open === "btns_4_sub") {
        document.querySelector("#output2").innerHTML = day4List.b;
        document.querySelector("#output3").innerHTML = day4List.c;
        document.querySelector("#output4").innerHTML = day4List.d;
        document.querySelector("#output5").innerHTML = day4List.e;
      } else if (eventbtn_open === "btns_5_sub") {
        document.querySelector("#output2").innerHTML = day5List.b;
        document.querySelector("#output3").innerHTML = day5List.c;
        document.querySelector("#output4").innerHTML = day5List.d;
        document.querySelector("#output5").innerHTML = day5List.e;
      } else if (eventbtn_open === "btns_6_sub") {
        document.querySelector("#output2").innerHTML = day6List.b;
        document.querySelector("#output3").innerHTML = day6List.c;
        document.querySelector("#output4").innerHTML = day6List.d;
        document.querySelector("#output5").innerHTML = day6List.e;
      } else if (eventbtn_open === "btns_7_sub") {
        document.querySelector("#output2").innerHTML = day7List.b;
        document.querySelector("#output3").innerHTML = day7List.c;
        document.querySelector("#output4").innerHTML = day7List.d;
        document.querySelector("#output5").innerHTML = day7List.e;
      } else {
        return;
      }
    }
  },
  false
);

//CLOSE DAY NOTES

document.getElementById("close").onclick = function() {
document.querySelector(".notes-box").style.display = "none";
view.enableAdd();
};

//CLOSE FORM

document.getElementById("close-form").onclick = function() {
view.enableAdd();
view.undisplayForm();
};


window.onload = function() {

  var dayWeek = new Date();
  var currentDay = dayWeek.getDay();
  

if(currentDay === 2) {

document.getElementById('box1').style.order = 8;

} else if(currentDay === 3) {

  document.getElementById('box1').style.order = 8;
  document.getElementById('box2').style.order = 9;
  
} else if(currentDay === 4) {

  document.getElementById('box1').style.order = 8;
  document.getElementById('box2').style.order = 9;
  document.getElementById('box3').style.order = 10;
} else if(currentDay === 5) {

  document.getElementById('box5').style.order = -3;
  document.getElementById('box6').style.order = -2;
  document.getElementById('box7').style.order = -1;

} else if(currentDay === 6) {

  document.getElementById('box6').style.order = -2;
  document.getElementById('box7').style.order = -1;
} else if(currentDay === 7) {

  document.getElementById('box7').style.order = -1;
}
}


/*

//GET DAY OF THE WEEK

function myFunction() {
    var d = new Date();
    var n = d.getDay()
    document.getElementById("demo").innerHTML = n;
}

//GET MONTH

var d = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("demo").innerHTML = months[d.getMonth()];

//GET DAY OF THE MONTH

var d = new Date();
document.getElementById("demo").innerHTML = d.getDate();


*/


/*
    for (var i = 0; i < addArray.length; i++)
        addArray[i].onclick = function(event)
    {}

    document.getElementById('submit-btns').addEventListener('click', function(evt) {}, false);

    for (var i = 0; i < openArray.length; i++)
        openArray[i].onclick = function(event)
    {}
*/
