function openNav(){
    document.getElementById("sidenav_main").style.width = "250px";
    document.getElementById("sidenav_iconbars").style.visibility = "hidden";
}

function closeNav(){
    document.getElementById("sidenav_main").style.width = "0px";
    document.getElementById("sidenav_iconbars").style.visibility = "visible";
}

function hoverOverNav(){
    document.getElementById("sidenav_iconbar").style.backgroundColor = "gray";
}

function hoverOutNav(){
    document.getElementById("sidenav_iconbar").style.backgroundColor = "transparent";
}