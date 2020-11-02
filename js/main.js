//tabs
const parentTabs = document.body.querySelector('.tabheader__items'),
  tabs = parentTabs.querySelectorAll('.tabheader__item'),
  tabsContent = document.body.querySelectorAll('.tabcontent');

function hideTabContent() {

  tabsContent.forEach(item => {
    item.classList.remove('show', 'fade');
    item.classList.add('hide');
  });

  tabs.forEach(item => {
    item.classList.remove('tabheader__item_active');
  });
}
hideTabContent();

function showTabContent(i = 0) {
  tabsContent[i].classList.remove('hide');
  tabsContent[i].classList.add('show', 'fade');
  tabs[i].classList.add('tabheader__item_active');
}
showTabContent();

parentTabs.addEventListener('click', (e) => {
  let target = e.target;
  if (target && target.classList.contains('tabheader__item')) {
    tabs.forEach((el, index) => {
      if (target == el) {
        hideTabContent();
        showTabContent(index);
      }
    });
  }
});

//timer

const deadline = '2020-11-03';

function getTimeRemaining(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date()),
    days = Math.floor(t / (1000 * 60 * 60 * 24)),
    hours = Math.floor((t / (1000 * 60 * 60)) % 24),
    minutes = Math.floor((t / (1000 * 60)) % 60),
    seconds = Math.floor((t / 1000) % 60);

  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

// ф-я добавления нуля если число в таймере однозначное
function getZero(num) {
  if (num >= 0 && num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}

// ф-я вставки времени в dom документ
function setClock(selector, endtime) {
  const timer = document.querySelector(selector),
    days = timer.querySelector('#days'),
    hours = timer.querySelector('#hours'),
    minutes = timer.querySelector('#minutes'),
    seconds = timer.querySelector('#seconds'),

    //запуск ф-ии обновления времени
    timeInterval = setInterval(updateClock, 1000);

  // первое обновление параметров времени
  updateClock();

  // ф-я обновления времени
  function updateClock() {
    const t = getTimeRemaining(endtime);

    days.textContent = getZero(t.days);
    hours.textContent = getZero(t.hours);
    minutes.textContent = getZero(t.minutes);
    seconds.textContent = getZero(t.seconds);

    // проверка таймера на отрицательные значения
    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }

}

setClock('.timer', deadline);
