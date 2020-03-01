// chrome.runtime.onInstalled.addListener(() => {});

function showDimmer(details) {
  if (details.frameId !== 0) {
    return;
  }

  chrome.tabs.sendMessage(details.tabId, { action: 'show-dimmer' });
}

const onComittedListener = details => {
  console.log('background: onComittedListener', { details });

  showDimmer(details);
};

const onCompletedListener = details => {
  console.log('background: onCompletedListener', { details });

  showDimmer(details);
};

const onDOMContentLoadedListener = details => {
  console.log('background: onDOMContentLoadedListener', { details });

  showDimmer(details);
};

const onErrorOccurredListener = error => {
  console.log('background: onErrorOccurredListener', { error });
};

// onTabReplaced?

const onChangedListener = (changes, namespace) => {
  console.log('background onChangedListener', { changes, namespace });
};

chrome.storage.onChanged.addListener(onChangedListener);

chrome.webNavigation.onCommitted.addListener(onComittedListener);
chrome.webNavigation.onCompleted.addListener(onCompletedListener);
chrome.webNavigation.onDOMContentLoaded.addListener(onDOMContentLoadedListener);

chrome.webNavigation.onErrorOccurred.addListener(onErrorOccurredListener);
