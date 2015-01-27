

/// wrapper div
var menuDiv = document.querySelector('.menu-wrapper');

var adminButton = document.querySelector('.admin-button');

/// the actual flyout
var flyoutMenu = document.querySelector('.flyout');

var theBody = document.querySelector('body');





//toggle class function
function toggleClass(element, className) {
  var currentClasses = element.className;

  if (currentClasses.indexOf(className) >= 0) {
    element.className = currentClasses.replace(className, '').trim();
  } else {
    element.className += ' ' + className;
  }
}

adminButton.addEventListener('click',  function(){
  toggleClass(menuDiv, 'menu-show');
});

theBody.addEventListener('click',  function() {
  console.log(the);
  flyoutMenu.className = flyoutMenu.className.replace(className, '');
});
