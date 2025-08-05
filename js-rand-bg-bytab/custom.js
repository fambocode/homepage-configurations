(function () {
  const backgroundDiv = document.getElementById('background');
  if (!backgroundDiv) return;

  // Define tab IDs mapped to background image filenames
  const tabBackgrounds = {
    'Monitoring-tab': 'monitoring.jpg',
    'Main-tab': 'main.jpg',
    'Media-tab': 'media.gif',
    'Site Shortcuts-tab': 'shortcuts.jpg',
  };

  // Update background when a tab is selected
  function setTabBackground(tabId) {
    const image = tabBackgrounds[tabId];
    if (image) {
      backgroundDiv.style.backgroundImage =
        `linear-gradient(rgb(var(--bg-color) / 0.5), rgb(var(--bg-color) / 0.5)), url('/images/${image}')`;
    }
  }

  // Attach event listeners to all tab buttons
  Object.keys(tabBackgrounds).forEach(tabId => {
    const tab = document.getElementById(tabId);
    if (tab) {
      tab.addEventListener('click', () => setTabBackground(tabId));
    }
  });

// Optional: enable the following lines to keep your main page from loading random images
// when using the js-rand-bg/custom.js file in tandem
//   // Set background based on currently active tab on load
//   const activeTab = document.querySelector('[role="tab"][aria-selected="true"]');
//   if (activeTab && activeTab.id) {
//     setTabBackground(activeTab.id);
//   }
  
})();
