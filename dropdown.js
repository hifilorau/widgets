

/// wrapper div
var menuDiv = document.querySelector('.menu-wrapper');

var adminButton = document.querySelector('.admin-button');

/// the actual flyout
var flyoutMenu = document.querySelector('.flyout');

//used to remove the flyout with a body click
var bodyClick = document.querySelector('body');






//toggle class function
function toggleClass(element, className) {
  var currentClasses = element.className;

  if (currentClasses.indexOf(className) >= 0) {
    element.className = currentClasses.replace(className, '').trim();
  } else {
    element.className += ' ' + className;
  }
}

adminButton.addEventListener('click',  function(e){
  e.stopPropagation();
  toggleClass(menuDiv, 'menu-show');
});

bodyClick.addEventListener('click',  function() {
  var closeFlyout = document.querySelector('.menu-show');
  if (closeFlyout) {
    toggleClass(adminButton.parentNode, 'menu-show');
  }
});
