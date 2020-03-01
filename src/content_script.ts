const WRAPPER_ID = 'dopamine-blocker';
const BANNER_ID = 'dopamine-blocker-banner';
const SECONDS_ID = 'dopamine-blocker-seconds';

function now() {
  return new Date().valueOf();
}

const secondFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});

function hideBlocker() {
  document.body.classList.remove(WRAPPER_ID);
  document.body.removeChild(document.getElementById(WRAPPER_ID));
}

function createBlocker() {
  console.log('createBlocker()');

  document.body.classList.add(WRAPPER_ID);

  const blocker = document.createElement('div');
  blocker.id = 'dopamine-blocker';

  const banner = document.createElement('span');
  banner.id = BANNER_ID;
  banner.innerHTML = `Please wait <span id="${SECONDS_ID}">5</span> seconds...`;

  blocker.prepend(banner);
  document.body.append(blocker);

  const seconds = document.getElementById(SECONDS_ID);
  const finish = now() + 5000;

  let stop = false;

  function update() {
    if (stop) {
      return;
    }

    seconds.textContent = secondFormatter.format(Math.max(0, (finish - now()) / 1000));

    setTimeout(() => requestAnimationFrame(update), 1000);
  }

  update();

  setTimeout(() => {
    stop = true;

    hideBlocker();
  }, 5000);
}

chrome.runtime.onMessage.addListener((request, sender) => {
  if (sender.tab) {
    return;
  }

  if (document.getElementById(WRAPPER_ID)) {
    console.log('Blocker already exists.');
    return;
  }

  createBlocker();
});
