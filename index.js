// copied from w3school
// Make the DIV element draggable:
var draggableElements = document.getElementsByClassName("draggable");

for(var i = 0; i < draggableElements.length; i++){
    dragElement(draggableElements[i]);
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }
    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = parseInt(e.clientX);
        pos4 = parseInt(e.clientY);
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        return false;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - parseInt(e.clientX);
        pos2 = pos4 - parseInt(e.clientY);
        pos3 = parseInt(e.clientX);
        pos4 = parseInt(e.clientY);
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        console.log(elmnt.offsetTop)
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// copied from stackoverflow
document.getElementById("close").addEventListener("click", function() {
    // Close in direct response to a user action
    console.log("Calling window.close");
    window.close();
    console.log("Done calling window.close");
}, false);

function display_c(){
  var refresh=1; // Refresh rate in milli seconds
  mytime=setTimeout('display_ct()',refresh)
}

function display_ct() {
  var x = new Date()
  var minutes=x.getMinutes().toString()
  minutes=minutes.length==1 ? 0+minutes : minutes;

  var seconds=x.getSeconds().toString()
  seconds=seconds.length==1 ? 0+seconds : seconds;

  var hours=x.getHours().toString()
  hours=hours.length==1 ? 0+hours : hours;

  document.getElementById('ct').innerHTML = hours + ":" +  minutes + ":" +  seconds;
  display_c();
}

let hasTouchScreen = false;
if ("maxTouchPoints" in navigator) {
  hasTouchScreen = navigator.maxTouchPoints > 0;
} else if ("msMaxTouchPoints" in navigator) {
  hasTouchScreen = navigator.msMaxTouchPoints > 0;
} else {
  const mQ = matchMedia?.("(pointer:coarse)");
  if (mQ?.media === "(pointer:coarse)") {
    hasTouchScreen = !!mQ.matches;
  } else if ("orientation" in window) {
    hasTouchScreen = true; // deprecated, but good fallback
  } else {
    // Only as a last resort, fall back to user agent sniffing
    const UA = navigator.userAgent;
    hasTouchScreen =
      /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
      /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
  }
}

if (hasTouchScreen) {
window.location.href = "mobile.html";
}

function showDiv() {
  var div = document.getElementById('donate');
  if (div.style.display !== 'none') {
      div.style.display = 'none';
  }
  else {
      div.style.display = 'block';
  }
};