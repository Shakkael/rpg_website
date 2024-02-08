// Thank you to Laurence for question and Gigy for an answer on stackoverflow, which I implemented in here.
// https://stackoverflow.com/questions/17992543/how-do-i-drag-an-image-smoothly-around-the-screen-using-pure-javascript

function startDrag(e) {
  // determine event object
  if (!e) {
      var e = window.event;
  }
  if(e.preventDefault) e.preventDefault();

  // IE uses srcElement, others use target
  targ = e.target ? e.target : e.srcElement;

  if (targ.className != 'dragme') {return};
  
      offsetX = e.clientX;
      offsetY = e.clientY;

  if(!targ.style.left) { targ.style.left='0px'};
  if (!targ.style.top) { targ.style.top='0px'};

  coordX = parseInt(targ.style.left);
  coordY = parseInt(targ.style.top);
  drag = true;

  // move div element
      document.onmousemove=dragDiv;
  return false;

}
function dragDiv(e) {
  if (!drag) {return};
  if (!e) { var e= window.event};

  targ.style.left=coordX+e.clientX-offsetX+'px';
  targ.style.top=coordY+e.clientY-offsetY+'px';
  return false;
}
function stopDrag(e) {
  if (!e) {
      var e = window.event;
  }
  if(e.preventDefault) e.preventDefault();

  // IE uses srcElement, others use target
  targ = e.target ? e.target : e.srcElement;
  eHeight = parseInt(getComputedStyle(targ).height);
  eWidth = parseInt(getComputedStyle(targ).width);
  eLeft = parseInt(getComputedStyle(targ).left);
  eTop = parseInt(getComputedStyle(targ).bottom);
  if(eTop > 0){
    targ.style.top = 0;
  }
  if(eLeft < 0){
    targ.style.left = 0;
  }
  drag=false;
  return true
}
window.onload = function() {
  document.onmousedown = startDrag;
  document.onmouseup = stopDrag;
}