document.addEventListener('DOMContentLoaded', function () {
  if (typeof bulmaCarousel === 'undefined') {
    return;
  }

  bulmaCarousel.attach('.demo-carousel', {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
    infinite: false,
    autoplay: false,
    pagination: true,
    navigation: true
  });
});
