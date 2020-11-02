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
