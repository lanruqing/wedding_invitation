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

window.onload = () => {
  var main_swiper = new Swiper('#main_swiper', {
    direction: 'vertical'
  });
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
    }
  });
};