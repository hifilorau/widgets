var text = document.querySelector('.text-area');
var siblingText = document.querySelector('.textarea-sibling');

text.addEventListener('input', function() {
  siblingText.innerText = text.value;
});





// var theMessage = text.value;

// set the message to the sibling div in order to push out the main div.

// siblingText.textContent = theMessage;
