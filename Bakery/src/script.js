/* First Slider */
$('.slider-one')
  .not('.slick-initialized')
  .slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    prevArrow: '.site-slider .slider-btn .prev',
    nextArrow: '.site-slider .slider-btn .next'
  });

window.onload = function () {
  document.getElementById('1C').onclick = chocolatePage;
  document.getElementById('1V').onclick = vanillaPage;
  document.getElementById('1F').onclick = fruitPage;
  document.getElementById('gridRadios3').onclick = orderCheck;
};



function chocolatePage() {
  var chocolate1 = document.querySelector('#chocolate1');
  var chocolate2 = document.querySelector('#chocolate2');
  var chocolate3 = document.querySelector('#chocolate3');
  var chocolate4 = document.querySelector('#chocolate4');

  var vanilla1 = document.querySelector('#vanilla1');
  var vanilla2 = document.querySelector('#vanilla2');
  var vanilla3 = document.querySelector('#vanilla3');

  var fruit1 = document.querySelector('#fruit1');
  var fruit2 = document.querySelector('#fruit2');
  var fruit3 = document.querySelector('#fruit3');

  chocolate1.style.display = 'block';
  chocolate2.style.display = 'block';
  chocolate3.style.display = 'block';
  chocolate4.style.display = 'block';

  vanilla1.style.display = 'none';
  vanilla2.style.display = 'none';
  vanilla3.style.display = 'none';

  fruit1.style.display = 'none';
  fruit2.style.display = 'none';
  fruit3.style.display = 'none';
}

function vanillaPage() {
  var chocolate1 = document.querySelector('#chocolate1');
  var chocolate2 = document.querySelector('#chocolate2');
  var chocolate3 = document.querySelector('#chocolate3');
  var chocolate4 = document.querySelector('#chocolate4');

  var vanilla1 = document.querySelector('#vanilla1');
  var vanilla2 = document.querySelector('#vanilla2');
  var vanilla3 = document.querySelector('#vanilla3');

  var fruit1 = document.querySelector('#fruit1');
  var fruit2 = document.querySelector('#fruit2');
  var fruit3 = document.querySelector('#fruit3');

  chocolate1.style.display = 'none';
  chocolate2.style.display = 'none';
  chocolate3.style.display = 'none';
  chocolate4.style.display = 'none';

  vanilla1.style.display = 'block';
  vanilla2.style.display = 'block';
  vanilla3.style.display = 'block';

  fruit1.style.display = 'none';
  fruit2.style.display = 'none';
  fruit3.style.display = 'none';
}

function fruitPage() {

  var chocolate1 = document.querySelector('#chocolate1');
  var chocolate2 = document.querySelector('#chocolate2');
  var chocolate3 = document.querySelector('#chocolate3');
  var chocolate4 = document.querySelector('#chocolate4');

  var vanilla1 = document.querySelector('#vanilla1');
  var vanilla2 = document.querySelector('#vanilla2');
  var vanilla3 = document.querySelector('#vanilla3');

  var fruit1 = document.querySelector('#fruit1');
  var fruit2 = document.querySelector('#fruit2');
  var fruit3 = document.querySelector('#fruit3');

  chocolate1.style.display = 'none';
  chocolate2.style.display = 'none';
  chocolate3.style.display = 'none';
  chocolate4.style.display = 'none';

  vanilla1.style.display = 'none';
  vanilla2.style.display = 'none';
  vanilla3.style.display = 'none';

  fruit1.style.display = 'block';
  fruit2.style.display = 'block';
  fruit3.style.display = 'block';
}


function orderCheck() {
  if (document.getElementById('gridRadios3').checked) {
    document.getElementById('orderNumber').style.display = 'block';
  } else document.getElementById('orderNumber').style.display = 'none';
}

