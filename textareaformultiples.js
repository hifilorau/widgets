(function (){


maxLengthTextArea(textarea);

var textareas = document.querySelectorAll('textarea[maxlength]');
  // for (i = 0; i <) need to finish this for loop

function maxLengthTextArea() {


  var status = textarea.parentNode.querySelector('.maxlength-status');
  var maxlength = Number(textarea.getAttribute('maxlength'));



  // status.textContent = String(charsRemaining) + ' characters remaining';

  function updateCharsRemaining(){
    // how many characters are remaining
    var charsRemaining = maxlength - textarea.value.length;

    status.textContent = charsRemaining + ' characters remaining';
  }

  textarea.addEventListener('keyup', updateCharsRemaining);


// if you wanted to stop them from typing youc an do this but a better way would
// be to let them go over and then turn the box red and not let them submit the
// form

  // textarea.addEventListener('keydown', function (e){
  //   var length = textarea.value.length;
  //   var deleteKey = 46;
  //   var backSpace = 8;
  //
  //     if (length >= maxlength && e.keycode !== deleteKey && e.keycode !== backSpace) {
  //       e.preventDefault;
  //     }
  //
  // });


updateCharsRemaining();

}





})();
