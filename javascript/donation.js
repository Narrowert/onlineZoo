const $donation__input = data => document.querySelector('#donation__input').value = data;
 
  let $selectors = document.querySelectorAll('.donation-price__list input[type="radio"]');
  $selectors.forEach($radio => {
    $radio.addEventListener('change', function() {
      $donation__input(this.getAttribute('data-price'));
    });
  });

  function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }