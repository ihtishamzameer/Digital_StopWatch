var IsStop = true; //it will check the state of the stopwatch either start or stop
var min = 0;
var s = 0;
var hr = 0;
//variables initialization
function initialization() {
  if (hr < 10) hr = "0" + hr;
  if (min < 10) min = "0" + min;
}
initialization();//calling the above
button1.onclick = function () {//for start button
  if (IsStop == true) {
    IsStop = false;
    Timer();
  }
};
button2.onclick = function () {//for stop button
  if (IsStop == false) {
    IsStop = true;
  }
};
button3.onclick = function () {//for reset button
  IsStop = true;
  s = 0;
  min = 0;
  hr = 0;
  time.innerHTML = "00 :  00  :  00";
};
function Timer() {//for computation
  //   s=parseInt(s);
  //   min=parseInt(min);
  //   hr=parseInt(hr);
  if (IsStop == false) {
    s++;
    setTimeout("Timer()", 1000);//for time Updation

    if (s == 60) {
      s = 0;
      min++;
    }
    if (min == 60) {
      min = 0;
      hr++;
    }
    if (hr == 12) {
      s = 0;
      min++;
      hr += 1;
    }
    //check to Seconds either single zero or double zeros needed here
    if (s < 10) {
      s = "0" + s;
    }
    time.innerHTML = hr + " : " + min + " : " + s;//for writing into the div name StopeWatch
    //console.log(hr + "," + min + "," + s);
  }
}
