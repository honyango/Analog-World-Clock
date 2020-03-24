function startTime() {

  var ttime = new Date();
  var tusaTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
  tusaTime = new Date(tusaTime);
  var tindiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
  tindiaTime = new Date(tindiaTime);
  var tlondonTime = new Date().toLocaleString("en-US", {timeZone: "Europe/London"});
  tlondonTime = new Date(tlondonTime);

  var thr = ttime.getHours();
  var tmin = ttime.getMinutes();
  var tsec = ttime.getSeconds();
  var tusahr = tusaTime.getHours();
  var tusamin = tusaTime.getMinutes();
  var tusasec = tusaTime.getSeconds();
  var tindiahr = tindiaTime.getHours();
  var tindiamin = tindiaTime.getMinutes();
  var tindiasec = tindiaTime.getSeconds();
  var tlondonhr = tlondonTime.getHours();
  var tlondonmin = tlondonTime.getMinutes();
  var tlondonsec = tlondonTime.getSeconds();

  tmin = checkTime(tmin);
  tsec = checkTime(tsec);
  tusamin = checkTime(tusamin);
  tusasec = checkTime(tusasec);
  tindiamin = checkTime(tindiamin);
  tindiasec = checkTime(tindiasec);
  tlondonmin = checkTime(tlondonmin);
  tlondonsec = checkTime(tlondonsec);

  document.getElementById('time1').innerHTML =  thr + ":" + tmin + ":" + tsec;
  document.getElementById('time2').innerHTML =  tusahr + ":" + tusamin + ":" + tusasec;
  document.getElementById('time3').innerHTML =  tindiahr + ":" + tindiamin + ":" + tindiasec;
  document.getElementById('time4').innerHTML =  tlondonhr + ":" + tlondonmin + ":" + tlondonsec;

  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10)
  {
    i = "0" + i // add zero
  };
  return i;
}
