const slider = document.querySelector('.slider');
const list = document.querySelector('.list');
const thumbnail = document.querySelector('.thumbnail');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

// autoplay slider
let runAutoPlay = setTimeout(() => {
  next.clik();
}, 7000);

next.addEventListener('click', () => {
  initSlider('next');
});
prev.addEventListener('click', () => {
  initSlider('prev');
});

const initSlider = (type) => {
  const sliderItems = list.querySelectorAll('.item');
  const thumbnailItems = thumbnail.querySelectorAll('.item');

  if (type === 'next') {
    // membuat list item nya ke belakang
    list.appendChild(sliderItems[0]);
    // membuat thumbnail nya ke belakang
    thumbnail.appendChild(thumbnailItems[0]);
    // mengasih slider nya class baru yaitu next
    slider.classList.add('next');
  } else {
    // nyari posisi terkahir list itemnya
    const lastItemsPosition = sliderItems.length - 1;
    //
    list.prepend(sliderItems[lastItemsPosition]);
    thumbnail.prepend(thumbnailItems[lastItemsPosition]);
    slider.classList.add('prev');
  }

  setTimeout(() => {
    slider.classList.remove('next');
    slider.classList.remove('prev');
  }, 2000);

  clearTimeout(runAutoPlay);
  runAutoPlay = setTimeout(() => {
    next.clik();
  }, 7000);
};
