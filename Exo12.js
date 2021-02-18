var windows;

function openwindows(){
    windows = window.open("","","width=250, height=250");
}
function resizeTo(){
    windows.resizeTo(100, 100);
    windows.focus();
}
function moveTo(){
    windows.moveTo(50, 50);
    windows.focus();
}
function moveBy(){
    windows.moveBy(50, 50);
    windows.focus();
}