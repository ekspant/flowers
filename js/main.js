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
  })
})


/* Выбираем цвет */
const colorValue = document.querySelectorAll("input[name=color]");
/* const inpColor = document.body; */

const inpColor = document.getElementById("only_num");

colorValue.forEach((el)=> {
  
  el.addEventListener('input',()=>{
    if (el.checked){
      console.log(el.value);
      if (inpColor != el.value) {
        inpColor.style.backgroundColor = el.value;
        console.log('применения цвета от радиобаттон');
        }
    }
    });
  });

/* ./выбираем цвет */


/* Стрелка ::after  меняет направление после нажатия */
var btn1 = document.getElementById('lmore')
function example() {
  document.getElementById('more').classList.add('more.active')
}
btn1.onclick = example

/* ./ ::after Стрелка меняет направление после нажатия */

/* открытие по нажатию "Все цветы" */
let coll = document.getElementsByClassName('collapsibe')
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active')
    let loadmore = this.nextElementSibling
    if (loadmore.style.maxHeight) {
      loadmore.style.maxHeight = null
    } else {
      loadmore.style.maxHeight = loadmore.scrollHeight + 'px'
    }
  })
}
/* /. "Все цветы"*/

const counter = function () {
  const btns = document.querySelectorAll('.counter_button')
  btns.forEach((btn) => {
    btn.addEventListener('click', function () {
      const direction = this.dataset.direction
      const inp = this.parentElement.querySelector(
        '.counter_value'
      ) /* кликнули, подняись к родителю, и внутри родителя ищем инпут */
      const currentValue = +inp.value /* текущее значение инпута в числовом виде*/
      let newValue

      if (direction === 'Plus') {
        newValue = currentValue + 1
      } else {
        newValue = currentValue - 1 > 0 ? currentValue - 1 : 0 /* ПРОВЕРКА НА 0 */
      }
      inp.value = newValue
    })
  })
}
counter();
