function tabs() {
  //Tabs
  const tabs = document.querySelectorAll('.tabheader__item'),
    tabsContainer = document.querySelector('.tabheader__items'),
    tabContent = document.querySelectorAll('.tabcontent');

  function hideTabContent() {
    tabs.forEach((tab) => {
      tab.classList.remove('tabheader__item_active');
    });

    tabContent.forEach((content) => {
      content.classList.add('sidepanel__hide');
      content.classList.remove('sidepanel__show');
    });
  }

  function showTabContent(i = 0) {
    tabs[i].classList.add('tabheader__item_active');

    tabContent[i].classList.remove('sidepanel__hide');
    tabContent[i].classList.add('sidepanel__show');
  }

  hideTabContent();
  showTabContent();

  tabsContainer.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((tab, i) => {
        if (target == tab) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}

module.exports = tabs;
