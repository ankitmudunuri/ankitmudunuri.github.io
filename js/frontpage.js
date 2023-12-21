
function mobileCheck(){
let details = navigator.userAgent;
let regexp = /android|iphone|kindle|ipad/i; 
  
let isMobileDevice = regexp.test(details); 
  
if (isMobileDevice) { 
    document.getElementsByClassName("main_header1").style.visibility = "hidden";
    document.getElementsByClassName("main_header2").style.visibility = "visible";
    document.getElementsByClassName("topsection_mainpage").style.backgroundPosition = "50% -70px";
    document.getElementsByClassName("profile").style.top = "100%";
    document.getElementsByClassName("profile").style.left = "8.5%";
    document.getElementsByClassName("description").style.paddingLeft = "5%";
    document.getElementsByClassName("description").style.paddingRight = "5%";
    document.getElementsByClassName("description").style.top = "95%";
    document.getElementsByClassName("description").style.paddingTop = "10%";
}
}