// import * as $ from 'jquery';

function saveOptions() {
  // const color = $('#color').val();
  // const likesColor = $('#like').prop('checked');

  chrome.storage.sync.set(
    {
      // favoriteColor: color,
      // likesColor
    },
    () => {
      const status = document.getElementById('status');

      status.textContent = 'Options saved.';

      setTimeout(() => {
        status.textContent = '';
      }, 1000);
    }
  );
}

function restoreOptions() {
  // Use default value color = 'red' and likesColor = true.

  chrome.storage.sync.get(
    {
      // favoriteColor: 'red',
      // likesColor: true
    },
    () => {
      // $('#color').val(items.favoriteColor);
      // $('#like').prop('checked', items.likesColor);
    }
  );
}

document.getElementById('save').addEventListener('click', saveOptions);

document.addEventListener('DOMContentLoaded', restoreOptions);
