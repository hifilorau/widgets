/// grab the tabs
/// put event listener on tabs that adds a .selected class to the div that corresponds to the correct div

var tabs = document.querySelectorAll(".tab-link");
var myDivs = document.querySelectorAll(".tab-div");
var selectedDiv = document.querySelector(".selected-div");


  for (var i= 0; i < tabs.length; ++i){
    // console.log("fire");
    tabs[i].addEventListener("click", myFunc, false);
 }


 function myFunc(){
   alert("start");
   for (var i=0; i < myDivs.length; ++i){
     myDivs[i].className = "selected-div";
   }
}
