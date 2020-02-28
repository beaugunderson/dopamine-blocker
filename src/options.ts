import * as $ from 'jquery';

// Saves options to chrome.storage.sync.
function saveOptions() {
  const color = $('#color').val();
  const likesColor = $('#like').prop('checked');

  chrome.storage.sync.set(
    {
      favoriteColor: color,
      likesColor
    },
    () => {
      // Update status to let user know options were saved.
      const status = $('#status');
      status.text('Options saved.');
      setTimeout(() => {
        status.text('');
      }, 750);
    }
  );
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restoreOptions() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get(
    {
      favoriteColor: 'red',
      likesColor: true
    },
    (items: { favoriteColor; likesColor }) => {
      $('#color').val(items.favoriteColor);
      $('#like').prop('checked', items.likesColor);
    }
  );
}

$('#save').click(saveOptions);
$(restoreOptions); // document.addEventListener('DOMContentLoaded', restore_options);
