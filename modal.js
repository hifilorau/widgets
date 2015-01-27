


var modalButton = document.querySelector('.modal-button');
var theModal = document.querySelector('.modal-wrap');
var innerModalButton = document.querySelector('.inner-modal-button');
var theXButton = document.querySelector('.the-x-button');

modalButton.addEventListener('click',  function(){
  theModal.style.visibility = "visible";
});


innerModalButton.addEventListener('click',  function(){
  theModal.style.visibility = "hidden";
});

theXButton.addEventListener('click',  function(){
  theModal.style.visibility = "hidden";
});
