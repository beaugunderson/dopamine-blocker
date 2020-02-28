import * as $ from 'jquery';
import * as moment from 'moment';

let count = 0;

$(() => {
  const queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, tabs => {
    $('#url').text(tabs[0].url);
    $('#time').text(moment().format('YYYY-MM-DD HH:mm:ss'));
  });

  chrome.browserAction.setBadgeText({ text: count.toString() });
  $('#countUp').click(() => {
    chrome.browserAction.setBadgeText({ text: (++count).toString() });
  });

  $('#changeBackground').click(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          color: '#555555'
        },
        msg => {
          console.log('result message:', msg);
        }
      );
    });
  });
});
