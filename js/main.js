/*!
 * project-name v0.0.1
 * A description for your project.
 * (c) 2019 YOUR NAME
 * MIT License
 * http://link-to-your-git-repo.com
 */

(function() {



/**
 * Tabbed interface
 */
const introP = document.querySelector('#intro-span');
const tabListItems = document.querySelectorAll('.menu-items');
const tabPanels = document.querySelectorAll('.tab-panel-details');

const clearActiveClass = (nodeList) =>
  nodeList.forEach(el =>
    el.classList.remove('active')
  );

const tabListHandler = function(event) {
  const el = event.target;
  const newIndex = parseInt(el.id.replace('tablist', ''));
  const parent = event.target.parentElement;
  // clear active tab
  clearActiveClass(tabListItems);
  // set new active tab
  parent.classList.add('active');
  // set intro subtitle
  introP.textContent = el.textContent;
  // close open tab panel
  tabPanels.forEach(el => el.classList.remove('open'));
  // open newly-selected tab panel
  tabPanels[newIndex].classList.add('open');
}
const setTabListItemHandlers = function() {
  const tabListInnerItems = document.querySelectorAll('.tab-list-item');
  tabListInnerItems.forEach(el =>
    el.onclick = tabListHandler
  );
}

/**
 * Services section
 */

const serviceIcons = document.querySelectorAll('.icon-wrapper');

const serviceHandler = function(event) {
  clearActiveClass(serviceIcons);
  event.target.parentElement.classList.add('active');
}

const setServiceHandlers = function() {
  serviceIcons.forEach(el =>
    el.onclick = serviceHandler  
  );
}
/**
 * 
 */
setTabListItemHandlers();
setServiceHandlers();

})()