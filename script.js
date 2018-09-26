
    
    var addArray, openArray, submitArray;

    addArray = Array.prototype.slice.call(document.querySelectorAll('.add'));

    submitArray = Array.prototype.slice.call(document.querySelectorAll('.submit-btn'));
    
    openArray = Array.prototype.slice.call(document.querySelectorAll('.open'));


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


            notes1 = document.getElementById('input2').value;

            morenotes1 = document.getElementById('input3').value;

            task1 = document.getElementById('input4').value;

            task2 = document.getElementById('input5').value;

            task3 = document.getElementById('input6').value;

            radios = document.getElementsByName('day');

            for (var i = 0, length = radios.length; i < length; i++) {
                if (radios[i].checked) {

                    checkedRadio = radios[i].value

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
                submitArray[i].style.display = 'none';

                document.getElementById('form-container').style.display = 'none';
            }
        },

    }


    //DISPLAY FORM 


    for (var i = 0; i < addArray.length; i++)

        addArray[i].onclick = function(event)

    {

        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';
        document.getElementById('input6').value = '';
        document.getElementById('work').checked = true;
            

        document.getElementById('form-container').style.display = 'flex';

        document.querySelector('.notes-box').style.display = 'none';

        view.disableAdd();
            
       var eventbtn = event.target.id;

        switch (eventbtn) {
            case "day1-button":
                document.getElementById('btn_1').style.display = 'block';
                break;
            case "day2-button":
                document.getElementById('btn_2').style.display = 'block';
                break;
            case "day3-button":
                document.getElementById('btn_3').style.display = 'block';
                break;
            case "day4-button":
                document.getElementById('btn_4').style.display = 'block';
                break;
            case "day5-button":
                document.getElementById('btn_5').style.display = 'block';
                break;
            case "day6-button":
                document.getElementById('btn_6').style.display = 'block';
                break;
            case "day7-button":
                document.getElementById('btn_7').style.display = 'block';
                break;
            default:
                break;
        }
    }


    //SUBMIT OBJECT 


    document.getElementById('submit-btns').addEventListener('click', function(evt) {

        view.enableAdd();

        view.undisplayForm();
        
        view.objectBuilder();


        var target = evt.target;

        switch (target.id) {
            case 'btn_1':
                day1List = new DayList(notes1, morenotes1, task1, task2, task3, checkedRadio);
                document.getElementById('btn_1_sub').style.display = 'block';
                document.querySelector('#output1').innerHTML = day1List.a;
                document.getElementById('box1').style.backgroundImage = day1List.f;
                break;
            case "btn_2":
                day2List = new DayList(notes1, morenotes1, task1, task2, task3, checkedRadio);
                document.getElementById('btn_2_sub').style.display = 'block';
                document.querySelector('#output1_2').innerHTML = day2List.a;
                document.getElementById('box2').style.backgroundImage = day2List.f;
                break;
            case "btn_3":
                day3List = new DayList(notes1, morenotes1, task1, task2, task3, checkedRadio);
                document.getElementById('btn_3_sub').style.display = 'block';
                document.querySelector('#output1_3').innerHTML = day3List.a;
                document.getElementById('box3').style.backgroundImage = day3List.f;
                break;
            case 'btn_4':
                day4List = new DayList(notes1, morenotes1, task1, task2, task3, checkedRadio);
                document.getElementById('btn_4_sub').style.display = 'block';
                document.querySelector('#output1_4').innerHTML = day4List.a;
                document.getElementById('box4').style.backgroundImage = day4List.f;
                break;
            case "btn_5":
                day5List = new DayList(notes1, morenotes1, task1, task2, task3, checkedRadio);
                document.getElementById('btn_5_sub').style.display = 'block';
                document.querySelector('#output1_5').innerHTML = day5List.a;
                document.getElementById('box5').style.backgroundImage = day5List.f;
                break;
            case "btn_6":
                day6List = new DayList(notes1, morenotes1, task1, task2, task3, checkedRadio);
                document.getElementById('btn_6_sub').style.display = 'block';
                document.querySelector('#output1_6').innerHTML = day6List.a;
                document.getElementById('box6').style.backgroundImage = day6List.f;
                break;
            case "btn_7":
                day7List = new DayList(notes1, morenotes1, task1, task2, task3, checkedRadio);
                document.getElementById('btn_7_sub').style.display = 'block';
                document.querySelector('#output1_7').innerHTML = day7List.a;
                document.getElementById('box7').style.backgroundImage = day7List.f;
                break;


            default:
                break;
        }

    }, false);




    //DISPLAY-OPEN OBJECT 


    for (var i = 0; i < openArray.length; i++)
        openArray[i].onclick = function(event)

    {

        document.querySelector('.notes-box').style.display = 'flex';

        view.undisplayForm();


        if (event.target.id === 'btn_1_sub') {

            document.querySelector('#output2').innerHTML = day1List.b;
            document.querySelector('#output3').innerHTML = day1List.c;
            document.querySelector('#output4').innerHTML = day1List.d;
            document.querySelector('#output5').innerHTML = day1List.e;


        } else if (event.target.id === 'btn_2_sub') {

            document.querySelector('#output2').innerHTML = day2List.b;
            document.querySelector('#output3').innerHTML = day2List.c;
            document.querySelector('#output4').innerHTML = day2List.d;
            document.querySelector('#output5').innerHTML = day2List.e;


        } else if (event.target.id === 'btn_3_sub') {

            document.querySelector('#output2').innerHTML = day3List.b;
            document.querySelector('#output3').innerHTML = day3List.c;
            document.querySelector('#output4').innerHTML = day3List.d;
            document.querySelector('#output5').innerHTML = day3List.e;
        } else if (event.target.id === 'btn_4_sub') {

            document.querySelector('#output2').innerHTML = day4List.b;
            document.querySelector('#output3').innerHTML = day4List.c;
            document.querySelector('#output4').innerHTML = day4List.d;
            document.querySelector('#output5').innerHTML = day4List.e;
        } else if (event.target.id === 'btn_5_sub') {

            document.querySelector('#output2').innerHTML = day5List.b;
            document.querySelector('#output3').innerHTML = day5List.c;
            document.querySelector('#output4').innerHTML = day5List.d;
            document.querySelector('#output5').innerHTML = day5List.e;
        } else if (event.target.id === 'btn_6_sub') {

            document.querySelector('#output2').innerHTML = day6List.b;
            document.querySelector('#output3').innerHTML = day6List.c;
            document.querySelector('#output4').innerHTML = day6List.d;
            document.querySelector('#output5').innerHTML = day6List.e;
        } else if (event.target.id === 'btn_7_sub') {

            document.querySelector('#output2').innerHTML = day7List.b;
            document.querySelector('#output3').innerHTML = day7List.c;
            document.querySelector('#output4').innerHTML = day7List.d;
            document.querySelector('#output5').innerHTML = day7List.e;
        } else {
            return;
        }



    }


    //CLOSE DAY NOTES


    document.getElementById('close').onclick = function() {

        document.querySelector('.notes-box').style.display = 'none';

        view.enableAdd();

    }

    //CLOSE FORM

    document.getElementById('close-form').onclick = function() {

        view.enableAdd();

        view.undisplayForm();

    }
