/* First Slider */
$('.slider-one')
  .not('.slick-initialized')
  .slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    prevArrow: '.site-slider .slider-btn .prev',
    nextArrow: '.site-slider .slider-btn .next'
  });
