function pageInit() {
  var MusicStatus = false;
  let images = ['6V2A6431.jpg', '6V2A6745.jpg', 'bg.jpg', 'bg2.jpg', 'bg4.jpg', 'pic2.jpg', 'pic3.jpg', 'pic5.jpg', 'pic8.jpg'];
  images.forEach((img, index) => {
    var image = new Image();
    image.src = "dist/img/" + img;
    image.addEventListener('load', () => {
      if (index == images.length - 1) {
        var bgm = document.getElementById('bgm');

        bgm.oncanplaythrough = () => {
          setTimeout(function () {
            document.getElementById('loading').classList.remove('swiper-no-swiping');
            document.getElementById('loading_container').style.display = 'none';
            document.getElementById('need_music').classList.add('active');
            var music_init = Array.from(document.querySelectorAll('.music_init'));
            music_init.forEach((m, i) => {
              let val = m.getAttribute('value');
              console.log(val);

              m.onclick = () => {
                MusicStatus = JSON.parse(val);
                music_init[0].classList.remove('choosed');
                music_init[1].classList.remove('choosed');
                m.classList.add('choosed');

                if (MusicStatus) {
                  bgm.play();
                } else {
                  bgm.pause();
                }

                setTimeout(function () {
                  document.getElementById('loading').display = 'none';
                }, 1000);
              };
            });
          }, 3000);
        };
      }
    });
  });
}

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

var bgm = document.getElementById('bgm');

bgm.oncanplaythrough = () => {
  setTimeout(function () {
    document.getElementById('loading_container').style.display = 'none';
    document.getElementById('need_music').classList.add('active');
    var music_init = Array.from(document.querySelectorAll('.music_init'));
    music_init.forEach((m, i) => {
      let val = m.getAttribute('value');
      console.log(val);

      m.onclick = () => {
        MusicStatus = JSON.parse(val);
        music_init[0].classList.remove('choosed');
        music_init[1].classList.remove('choosed');
        m.classList.add('choosed');

        if (MusicStatus) {
          bgm.play();
        } else {
          bgm.pause();
        }

        document.getElementById('loading').classList.add('slideOutUp');
      };
    });
  }, 3000);
};

var main_swiper = new Swiper('#main_swiper', {
  direction: 'vertical',
  noSwiping: true,
  updateOnImagesReady: true,
  lazy: {
    loadPrevNext: true,
    loadPrevNextAmount: 2
  },
  on: {
    init: function () {
      swiperAnimateCache(this);
      swiperAnimate(this);
      var wi_swiper = new Swiper('#our_story', {
        centeredSlides: true,
        spaceBetween: 20,
        slidesPerView: 1.1,
        width: 350,
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
    slideChangeTransitionStart: function () {
      swiperAnimate(this);
    }
  }
});
var phones = Array.from(document.querySelectorAll('.phone'));
phones.forEach((p, i) => {
  p.onclick = () => {
    var number = p.getAttribute('title');
    window.open(number);
  };
});

window.onload = () => {};