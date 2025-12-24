chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: "https://puzzlefree.game/" });
});
