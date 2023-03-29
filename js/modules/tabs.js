//Each tab unactive hide content
//Show i tab add active show i content
//Startup init
//Test e.target with toggle
//Add click each if target == tab hide show i
//Make universal and export

function tabs(tabsSelector, tabsContent, tabsParent, activeClass) {
  const tabs = document.querySelectorAll(tabsSelector),
    tabsContainer = document.querySelector(tabsParent),
    tabContent = document.querySelectorAll(tabsContent);

  function hideTabContent() {
    tabs.forEach((tab) => {
      tab.classList.remove(activeClass);
    });

    tabContent.forEach((content) => {
      content.classList.add('sidepanel__hide');
      content.classList.remove('sidepanel__show');
    });
  }

  function showTabContent(i = 0) {
    tabs[i].classList.add(activeClass);

    tabContent[i].classList.remove('sidepanel__hide');
    tabContent[i].classList.add('sidepanel__show');
  }

  hideTabContent();
  showTabContent();

  tabsContainer.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((tab, i) => {
        if (target == tab) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}

export default tabs;
