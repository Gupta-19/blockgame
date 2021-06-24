var m = 0;
var n = 0;
var a;
var b;
var c = "";
var rannum = 1;
var numbers = [];
var box;
var breaker = 0;
var ktj;
var e;
var f;
var vark;
var divs = [];
var clna;
var img, fullimg;
var newvare;
var movecount = 0;
var movecountcheck = 0;
var clsnm;
var shuffler;
var time, timecount = 0, timemin, timesec, settimer;
var extras;
var move;
var space;
var crowtaken, ccoltaken, crowemp, ccolemp, ctaken, cemp, ctakenarr, cemparray, cempchanger, cempchangerclna;
var wincounter;
var positioner1, positioner2;
var frreezeblock, ranfrz, freid, frezclsnm, frezrow, frezcol;
var newvar;
var show;
var displayer;
var leadmoves = [70, 75, 78];
var leadtime = [70, 80, 85];
var leaderboardrow, leaderboardcoloum, leaderboardcont;
var leadmin, leadsec;
var h6writer;
var popup;
var k;
var nearnewvar;
//var freezetime=-4,freezecount=0,frzcolchan;
function creater() {
    k = document.getElementById("selection").value;

    if (k == "3") {
        m = 3;
        n = 3;
    }
    if (k == "4" || k == "image") {
        m = 4;
        n = 4;
    }
    if (k == "5") {
        m = 5;
        n = 5;
    }
    if (k != "custum") {
        var t = document.getElementById("direct-create");
        t.className = "btn btn-primary btn-sm shower";
        var select = document.getElementById("selector");
        select.setAttribute("class", "container-sm g-3 hidder");
    }
    if (k == "custum") {
        var select = document.getElementById("selector");
        select.setAttribute("class", "container-sm g-3 shower");
        var t = document.getElementById("direct-create");
        t.className = "btn btn-primary btn-sm hidder";

    }
}
function createM() {
    var flagm = document.getElementById("validationCustom04").value;
    m = parseInt(flagm);
    if (m != 0 && n != 0) {
        var flagc = document.getElementById("custum-create");
        flagc.className = "btn btn-primary btn-sm shower";
    }
}
function createn() {
    var flagn = document.getElementById("validationCustom05").value;
    n = parseInt(flagn);
    if (m != 0 && n != 0) {
        var flagc = document.getElementById("custum-create");
        flagc.className = "btn btn-primary btn-sm shower";
    }
}
window.onload = function () {
    box = document.getElementById("content");

}
function create() {
    box.innerHTML = "";
    rannum = 1;
    timecount = 0;
    movecount = 0;
    extras = document.createElement("div");
    extras.className = "row justify-content-md-center extra";
    extras.setAttribute("style", "{background-color: none;}")
    box.appendChild(extras);
    time = document.createElement("div");
    time.className = "col-2 col-sm-2 time";
    time.innerHTML = "Time: 0:00";
    extras.appendChild(time);

    move = document.createElement("div");
    move.className = "col-2 col-sm-2 time";
    move.innerHTML = "moves:" + movecount;
    extras.appendChild(move);
    for (j = 0; j < n; j++) {
        b = document.createElement("div");
        b.className = "row justify-content-md-center rownum" + j;

        box.appendChild(b);
        for (i = 0; i < m; i++) {

            numbers.push(rannum);
            if (rannum === (m * n)) {
                a = document.createElement("div");
                a.className = "col-1 col-sm-1 boxes " + rannum;
                a.id = rannum;
                if (k == "image") {
                    img = document.createElement("img");
                    img.setAttribute("src", "#");
                    img.setAttribute("alt", "");
                    a.appendChild(img);
                }
            }
            else {
                a = document.createElement("div");
                a.className = "col-1 col-sm-1 boxes number " + rannum;
                a.id = rannum;
                if (k == "image") {
                    img = document.createElement("img");
                    img.setAttribute("src", (j * m + i + 1) + ".jpg");
                    img.setAttribute("alt", "");
                    a.appendChild(img);
                    a.style.borderRadius = "1px";
                }
                else
                    a.innerHTML = rannum;
                rannum++;
            }
            b.appendChild(a);
        }
    }
    createArray();
    clearInterval(settimer);
    settimer = setInterval(timer, 1000);
    if (k == "image") {
        fullimg = document.getElementsByClassName("img")[0];
        fullimg.className = "img shower";
    }
    else {
        fullimg = document.getElementsByClassName("img")[0];
        fullimg.className = "img hidder";
    }
    

}

function createArray() {
    for (adap = 0; adap <= (m * n); adap++) {
        divs[adap] = document.getElementById(adap);
    }
    for (inf = 1; inf < m * n; inf++) {
        divs[inf].setAttribute("onclick", "complete(\"" + divs[inf].className + "\");");
    }
    shuffle();
    wincheck();
}
/*function complete(abc) {
    swap(abc);
}*/
function swap(clna) {
    newvare = document.getElementsByClassName(clna);
    e = newvare[0];

    f = document.getElementsByClassName("col-1 col-sm-1 boxes " + m * n);
    if ((parseInt(f[0].id) == parseInt(e.id) + 1 && parseInt(e.id) % m != 0) || (parseInt(f[0].id) == parseInt(e.id) - 1 && parseInt(f[0].id) % m != 0) || parseInt(f[0].id) == parseInt(e.id) + m || parseInt(f[0].id) == parseInt(e.id) - m) {
        newvar = f[0];
        if (k == "image") {
            var h = e.childNodes[0];
            var h1 = newvar.childNodes[0];
            var h2 = h.getAttribute("src");
            var h3 = h1.getAttribute("src");
            h.setAttribute("src", h3);
            h1.setAttribute("src", h2);

        }
        else {
            var h = e.innerHTML;
            e.innerHTML = "";
            newvar.innerHTML = h;
        }
        var g = e.className;
        e.className = newvar.className;
        newvar.className = g;
        e.setAttribute("onclick", "");
        newvar.setAttribute("onclick", "complete(\"" + newvar.className + "\");");
        newvar.style.animation="animator";
        newvar.style.animationDuration="0.5s";
        
    }
}
function complete(abs) {
    slide(abs);
    wincheck();
}
function slide(clsnm) {

    console.log("function is running");
    ctakenarr = document.getElementsByClassName(clsnm);
    ctaken = ctakenarr[0];
    cemparray = document.getElementsByClassName("col-1 col-sm-1 boxes " + m * n);
    cemp = cemparray[0];
    crowtaken = (parseInt(ctaken.id) - 1) % m + 1;
    ccoltaken = (parseInt(ctaken.id) - crowtaken) / m + 1;
    
    crowemp = (parseInt(cemp.id) - 1) % m + 1;
    ccolemp = (parseInt(cemp.id) - crowemp) / m + 1;
    /*if(timecount>=1)
    {
    frezrow=(parseInt(freid)-1)%m+1;
    frezcol=(parseInt(freid)-frezrow)/m+1;
    if((crowtaken==frezrow==crowemp) && (ccoltaken<=frezcol<=ccolemp))
    freezecount=1;
    else if((crowtaken==frezrow==crowemp) && (ccoltaken>=frezcol>=ccolemp))
    freezecount=1;
    else if((crowtaken<=frezrow<=crowemp) && (ccoltaken==frezcol==ccolemp))
    freezecount=1;
    else if((crowtaken>=frezrow>=crowemp) && (ccoltaken==frezcol==ccolemp))
    freezecount=1;
    }
    if(freezecount)
    {
        freezecount=0;
    }*/
    if ((crowtaken == crowemp) && (ccoltaken == (ccolemp + 1))) {

        cempchanger = document.getElementById((parseInt(cemp.id) + m));
        cempchangerclna = cempchanger.className;
        swap(cempchangerclna);
        movecount++;
        move.innerHTML = "moves:" + movecount;
    }
    else if ((crowtaken == crowemp) && (ccoltaken == (ccolemp - 1))) {

        cempchanger = document.getElementById((parseInt(cemp.id) - m));
        cempchangerclna = cempchanger.className;
        swap(cempchangerclna);
        movecount++;
        move.innerHTML = "moves:" + movecount;
    }
    else if ((crowtaken == (crowemp + 1)) && (ccoltaken == ccolemp)) {

        cempchanger = document.getElementById((parseInt(cemp.id) + 1));
        cempchangerclna = cempchanger.className;
        swap(cempchangerclna);
        movecount++;
        move.innerHTML = "moves:" + movecount;
    }
    else if ((crowtaken == (crowemp - 1)) && (ccoltaken == ccolemp)) {

        cempchanger = document.getElementById((parseInt(cemp.id) - 1));
        cempchangerclna = cempchanger.className;
        swap(cempchangerclna);
        movecount++;
        move.innerHTML = "moves:" + movecount;
    }
    else if ((crowtaken == crowemp) && (ccoltaken >= ccolemp)) {

        cempchanger = document.getElementById((parseInt(cemp.id) + m));
        cempchangerclna = cempchanger.className;
        swap(cempchangerclna);
        slide(clsnm);
    }
    else if ((crowtaken == crowemp) && (ccoltaken <= ccolemp)) {

        cempchanger = document.getElementById((parseInt(cemp.id) - m));
        cempchangerclna = cempchanger.className;
        swap(cempchangerclna);
        slide(clsnm);
    }
    else if ((crowtaken >= crowemp) && (ccoltaken == ccolemp)) {

        cempchanger = document.getElementById((parseInt(cemp.id) + 1));
        cempchangerclna = cempchanger.className;
        swap(cempchangerclna);
        slide(clsnm);
    }
    else if ((crowtaken <= crowemp) && (ccoltaken == ccolemp)) {

        cempchanger = document.getElementById((parseInt(cemp.id) - 1));
        cempchangerclna = cempchanger.className;
        swap(cempchangerclna);
        slide(clsnm);
    }

}
function shuffle() {
    for (i = 0; i < 1000; i++) {
        shuffler = Math.floor(Math.random() * (m * n - 1)) + 1;
        slide("col-1 col-sm-1 boxes number " + shuffler);
    }
    movecount = 0;
    move.innerHTML = "moves:" + movecount;
}
function timer() {
    timecount++;
    timesec = timecount % 60;
    timemin = (timecount - timesec) / 60;
    if (timesec < 10)
        time.innerHTML = "Time: " + timemin + ":0" + timesec;
    else
        time.innerHTML = "Time: " + timemin + ":" + timesec;
    /*if(timecount%5==1)
    {
        freeze();
    }
    if(timecount>1)
    {
    frreezeblock.style.backgroundColor="lightblue";
    }*/
}
function wincheck() {
    wincounter = 0;
    for (check = 1; check <= m * n; check++) {
        if (parseInt(divs[check].id) == parseInt(divs[check].innerHTML)) {
            wincounter++;
            divs[check].style.backgroundColor = "blue";
        }
        else {
            divs[check].style.backgroundColor = "lightgreen";
        }

    }
    if (wincounter == (m * n - 1)) {
        clearInterval(settimer);
        displayer = document.getElementById("Congratulations");
        displayer.className = "card shower positioner";
        h6writer = document.getElementsByClassName("card-subtitle mb-2 text-muted")[0];
        if (timesec < 10)
            h6writer.innerHTML = "you have completed the puzzle in " + movecount + "moves" + timemin + ":0" + timesec + "time";
        else
            h6writer.innerHTML = "you have completed the puzzle in " + movecount + "moves" + timemin + ":" + timesec + "time";
        show = document.getElementById("move");
        if (timesec < 10)
            show.innerHTML = "you have completed the puzzle in " + movecount + "moves and in " + timemin + ":0" + timesec + "time";
        else
            show.innerHTML = "you have completed the puzzle in " + movecount + "moves and in " + timemin + ":" + timesec + "time";
        leaderboardupdate();

        popup = document.getElementsByClassName("popup hidder")[0];
        popup.className = "popup shower";
        //popup.className=popup.className+"shower";
    }
    document.getElementsByClassName("col-1 col-sm-1 boxes " + m * n)[0].style.backgroundColor = "brown";
    /*if(timecount>=1)
    {
        frzcolchan = frreezeblock.style.backgroundColor;
        frreezeblock.style.backgroundColor="lightblue";
    }*/
}
/*function freeze()
{
    console.log("started");
    if(timecount>1)
    {
    frreezeblock.className=frezclsnm;
    frreezeblock.style.backgroundColor=frzcolchan;
    }
    ranfre=Math.floor(Math.random() * (m*n-1)) + 1;
    frreezeblock=document.getElementById(ranfre);
    frezclsnm=frreezeblock.className;
    freid=frreezeblock.id;
    frreezeblock.className=frreezeblock.className + "freeze";
    
}*/

function newgame() {
    displayer = document.getElementById("Congratulations");
    displayer.className = "card hidder positioner";
    shuffle();
    timecount = 0;
    setInterval(timer, 1000);
    leaderboardcont = document.getElementsByClassName("leader")[0];
    leaderboardcont.className = "container-sm hidder leader";
    wincheck();
    popup.className = "popup hidder";
}
function leaderboardupdate() {
    if (localStorage.getItem("lead0")) {
        leadtime[0] = localStorage.getItem("lead0");
        leadtime[1] = localStorage.getItem("lead1");
        leadtime[2] = localStorage.getItem("lead2");
        leadmoves[0] = localStorage.getItem("move0");
        leadmoves[1] = localStorage.getItem("move1");
        leadmoves[2] = localStorage.getItem("move2");
    }
    if (timecount < leadtime[0]) {
        leadtime[2] = leadtime[1];
        leadtime[1] = leadtime[0];
        leadtime[0] = timecount;
    }
    else if (timecount < leadtime[1]) {
        leadtime[2] = leadtime[1];
        leadtime[1] = timecount;
    }
    else if (timecount < leadtime[2]) {
        leadtime[2] = timecount;
    }
    if (movecount < leadmoves[0]) {
        leadmoves[2] = leadmoves[1];
        leadmoves[1] = leadmoves[0];
        leadmoves[0] = movecount;
    }
    else if (movecount < leadmoves[1]) {
        leadmoves[2] = leadmoves[1];
        leadmoves[1] = movecount;
    }
    else if (movecount < leadmoves[2]) {
        leadmoves[2] = movecount;
    }
    localStorage.setItem("lead0",leadtime[0]);
    localStorage.setItem("lead1",leadtime[1]);
    localStorage.setItem("lead2",leadtime[2]);
    localStorage.setItem("move0",leadmoves[0]);
    localStorage.setItem("move1",leadmoves[1]);
    localStorage.setItem("move2",leadmoves[2]);
    
}
function showleaderboard() {
    leaderboardcont = document.getElementsByClassName("leader")[0];
    leaderboardcont.className = "container-sm shower leader";
    leaderboardcont.innerHTML = "";
    leaderboardrow = document.createElement("div");
    leaderboardcont.appendChild(leaderboardrow);
    leaderboardrow.className = "row";
    leaderboardcoloum = document.createElement("div");
    leaderboardcoloum.className = "col-2 cell rank";
    leaderboardcoloum.innerHTML = "Rank";
    leaderboardrow.appendChild(leaderboardcoloum);
    leaderboardcoloum = document.createElement("div");
    leaderboardcoloum.className = "col-4 cell";
    leaderboardcoloum.innerHTML = "Moves";
    leaderboardrow.appendChild(leaderboardcoloum);
    leaderboardcoloum = document.createElement("div");
    leaderboardcoloum.className = "col-4 cell";
    leaderboardcoloum.innerHTML = "Timing";
    leaderboardrow.appendChild(leaderboardcoloum);
    for (i = 0; i <= 2; i++) {

        leaderboardrow = document.createElement("div");
        leaderboardcont.appendChild(leaderboardrow);
        leaderboardrow.className = "row";
        leaderboardcoloum = document.createElement("div");
        leaderboardcoloum.className = "col-2 cell rank";
        leaderboardcoloum.innerHTML = (i + 1);
        leaderboardrow.appendChild(leaderboardcoloum);
        leaderboardcoloum = document.createElement("div");
        leaderboardcoloum.className = "col-4 cell";
        leaderboardcoloum.innerHTML = leadmoves[i];
        leaderboardrow.appendChild(leaderboardcoloum);
        leaderboardcoloum = document.createElement("div");
        leaderboardcoloum.className = "col-4 cell";
        leadsec = leadtime[i] % 60;
        leadmin = (leadtime[i] - leadsec) / 60;
        if (leadsec < 10)
            leaderboardcoloum.innerHTML = leadmin + ":0" + leadsec;
        else
            leaderboardcoloum.innerHTML = leadmin + ":" + leadsec;
        leaderboardrow.appendChild(leaderboardcoloum);

    }
}
window.addEventListener("keydown", keypresser, false);
function keypresser(key) {
    console.log(key.keyCode);
    if (key.keyCode == 38 || key.keyCode == 87) {
        if (!(parseInt(e.id) / m > (n - 1))) {
            nearnewvar = document.getElementById((parseInt(e.id) + m));
            complete(nearnewvar.className);
        }
    }
    if (key.keyCode == 40 || key.keyCode == 83) {
        if ((parseInt(e.id) / m > 1)) {
            nearnewvar = document.getElementById((parseInt(e.id) - m));
            complete(nearnewvar.className);
        }
    }
    if (key.keyCode == 37 || key.keyCode == 65) {
        if (!(parseInt(e.id) % m == 0)) {
            nearnewvar = document.getElementById((parseInt(e.id) + 1));
            complete(nearnewvar.className);
        }
    }
    if (key.keyCode == 39 || key.keyCode == 68) {
        if (!(parseInt(e.id) % m == 1)) {
            nearnewvar = document.getElementById((parseInt(e.id) - 1));
            complete(nearnewvar.className);
        }
    }
}