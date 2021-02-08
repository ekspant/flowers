$(document).ready(function () {
  const flowersSlider = new Swiper('.flowers-slider', {
    // Параметры слайдера
    loop: true,
    slidesPerView: 6,

    // Подключаем стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    //Настройки адаптивной версии
    breakpoints: {
      // если браузер >= 320px
      320: {
        slidesPerView: 2,
      },
      // если браузер >= 480px
      480: {
        slidesPerView: 3,
      },
      // если браузер>= 992px
      992: {
        slidesPerView: 6,
      },
    },
  })

  const reviewsSlider = new Swiper('.reviews-slider', {
    // Параметры слайдера
    loop: true,
    slidesPerView: 1,

    // Подключаем стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  $('#review-1').on('click', function () {
    $.fancybox.open(
      [
        {
          src: 'https://d.radikal.ru/d31/2102/57/2cb2e106dedb.jpg',
          opts: {
            caption: 'First caption',
            thumb: 'https://b.radikal.ru/b08/2102/f2/fb06bbb40c9b.jpg ',
          },
        },
        {
          src: 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
          opts: {
            caption: 'Second caption',
            thumb: 'https://source.unsplash.com/0JYgd2QuMfw/240x160',
          },
        },
      ],
      {
        loop: true,
        thumbs: {
          autoStart: true,
        },
      }
    )
  })

  $('#review-2').on('click', function () {
    $.fancybox.open(
      [
        {
          src: 'https://d.radikal.ru/d10/2102/7a/d75713dd12d6.jpg',
          opts: {
            caption: 'First caption',
            thumb: 'https://c.radikal.ru/c34/2102/d6/881b36513bc5.jpg',
          },
        },
        {
          src: 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
          opts: {
            caption: 'Second caption',
            thumb: 'https://source.unsplash.com/0JYgd2QuMfw/240x160',
          },
        },
      ],
      {
        loop: true,
        thumbs: {
          autoStart: true,
        },
      }
    )
  })

  $('#review-3').on('click', function () {
    $.fancybox.open(
      [
        {
          src: 'https://c.radikal.ru/c14/2102/5e/b46e31a6ffb9.jpg',
          opts: {
            caption: 'First caption',
            thumb: 'https://d.radikal.ru/d16/2102/13/928972c49134.jpg',
          },
        },
        {
          src: 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
          opts: {
            caption: 'Second caption',
            thumb: 'https://source.unsplash.com/0JYgd2QuMfw/240x160',
          },
        },
      ],
      {
        loop: true,
        thumbs: {
          autoStart: true,
        },
      }
    )
  });

})


let buttonCountPlus = document.getElementById("buttonCountPlus");
let buttonCountMinus = document.getElementById("buttonCountMinus");
let count = document.getElementById("buttonCountNumber");
let number = document.getElementById('buttonCountNumber').value;

buttonCountPlus.onclick = function() {
if (number <= 14) {
  number++;
  count.innerHTML = number;
  document.getElementById('buttonCountNumber').value =number;
  console.log('прибавили');
  console.log(number);
} else {
  alert ('ОЧЕНЬ БОЛЬШОЙ БУКЕТ');
};
};

buttonCountMinus.onclick = function() {
  if (number >= 2) {
    number--;
    count.innerHTML = number;
    document.getElementById('buttonCountNumber').value =number;
    console.log('отняли');
  console.log(number);
  } else {
    alert ('В БУКЕТЕ НЕ БУДЕТ ЦВЕТОВ');
  };
};
