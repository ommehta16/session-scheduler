clicked = false

function init() {
    window.addEventListener("mousedown",()=>{clicked=true;});
    window.addEventListener("mouseup",()=>{clicked=false;});
    window.addEventListener("resize",switchOrientation);
    addBoxes();
}

function switchOrientation() {
    grid = document.getElementsByClassName("container")[0];
    rightPanel = document.getElementsByClassName("controls-wrapper")[0];
    console.log(grid.offsetWidth, rightPanel.offsetWidth, document.body.offsetWidth);
    // if ((grid.offsetWidth + rightPanel.offsetWidth) > window.innerWidth) console.log("lol");
    // else (console.log("lol1"))
}

function addBoxes() {
    container = document.getElementsByClassName("container")[0];
    for (var i = 0; i < 2500; i++) container.innerHTML += "<div class=\"box\" ></div>";
    
    boxes = document.getElementsByClassName("box");
    for (var j = 0; j < 2500; j++) {
        const c = j;
        boxes[j].addEventListener("mouseover",() => {if(clicked) toggleBox(c)});
        boxes[j].addEventListener("mousedown",() => toggleBox(c));
        boxes[j].style.backgroundColor = "white";
    }
}

function toggleBox(a) {
    el = document.getElementsByClassName("box")[a];
    if (el.style.backgroundColor == "white") el.style.backgroundColor = "darkgray";
    else el.style.backgroundColor = "white";
}

function saveFrame() {
    boxes = document.getElementsByClassName("box");
    saveText = "";
    num = 0;
    for (var i = 0; i < boxes.length; i++) {
        num*=2;
        if (boxes[i].style.backgroundColor != "white") num += 1;
        if (i%5 == 4) {
            saveText+=num.toString(32);
            num = 0;
        }
    }
    document.getElementById("in").value = saveText;
    navigator.clipboard.writeText(saveText)
}

function loadFrame() {
    saveText = document.getElementById("in").value;
    console.log(saveText);
    boxes = document.getElementsByClassName("box");
    for (var i = 0; i < saveText.length; i++) {
        tmp = parseInt(saveText[i],32);
        for (var j = 0; j<5;j++) {
            if (tmp%2==0) boxes[5*i+5-j-1].style.backgroundColor="white";
            else boxes[5*i+5-j-1].style.backgroundColor="darkgray";
            tmp=Math.floor(tmp/2);
        }
    }
}