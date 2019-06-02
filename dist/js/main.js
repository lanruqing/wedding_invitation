if (document.body.clientWidth <= 580) {
  document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth / 12 + 'px';
  console.log('mobile');
} else if (document.body.clientWidth <= 1000) {
  document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth / 15 + 'px';
  console.log('tablet');
} else {
  document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth / 20 + 'px';
  console.log('pc');
}

var images = ['2019-02-09 10.45.04 1.jpg', '6V2A6431.jpg', '6V2A6745.jpg', 'bg.jpg', 'bg4.jpg', 'lanruqing.jpg', 'mmexport1550158700031.jpg', 'msy.jpg', 'pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic4b.jpg', 'pic5.jpg', 'pic6.jpg', 'pic7.jpg', 'pic8.jpg'];

window.onload = () => {
  images.forEach((img, index) => {
    var image = new Image();
    image.src = "dist/img/" + img;
    image.addEventListener('load', () => {
      console.log(image.src + 'loaded');
    });
  });
  var main_swiper = new Swiper('#main_swiper', {
    direction: 'vertical',
    on: {
      init: function () {
        swiperAnimateCache(this);
        swiperAnimate(this);
        var wi_swiper = new Swiper('#our_story', {
          centeredSlides: true,
          spaceBetween: 20,
          slidesPerView: 1.1,
          width: 310,
          pagination: {
            el: '.our_story_pagination',
            clickable: true,
            renderBullet: (index, className) => {
              return '<span class="ourStory_pagination ' + className + '"></span>';
            }
          },
          on: {
            init() {
              var storys = Array.from(document.querySelectorAll('.storys'));
              storys.forEach((s, i) => {
                s.onclick = () => {
                  wi_swiper.slideTo(i);
                };
              });
            }

          }
        });
      },
      slideChangeTransitionEnd: function () {
        swiperAnimate(this);
      }
    }
  });
};