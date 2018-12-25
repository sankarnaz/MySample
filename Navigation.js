var x=0;
var menu;
var menuPos;

function startDrag(el,event)
{
	x = event.clientX;
	menu = document.getElementById("DragMenu");
	menuPos = menu.getBoundingClientRect();
	document.body.addEventListener("mousemove",dragging,false);
	document.body.addEventListener("mouseup",stopDrag,false);
	el.style.display="none";
}

function dragging(event)
{
	menu.style.width=event.clientX;
	console.log(event.clientX);
}

function stopDrag()
{
	document.body.removeEventListener("mousemove",dragging);
	document.body.removeEventListener("mouseup",stopDrag);
}
