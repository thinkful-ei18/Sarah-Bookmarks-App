'use strict';
/*Global api, store*/

//Only access the exposed methods from bookmarks-list
$(document).ready(function() {
  //bookmarksList.bindEventListeners();
  bookmarksList.render();
});

//Need this on index for initial getdata 

$.getJSON('https://thinkful-list-api.herokuapp.com/sarah/bookmarks', (response) => {
  console.log('api response: ', response);
  response.forEach(bookmark => {
    store.addBookmark(bookmark);
  });
  // response.forEach(store.addBookmark); troubleshoot 'this' later
    bookmarksList.render();
  console.log(store);
});

//tests

//api tests
// api.getBookmarks((bookmarks) => {
//   const myBookmark = bookmarks[2];

//   api.deleteBookmark(myBookmark.id, () => {
//     console.log(bookmarks);
//   });
// });

// api.getBookmarks((bookmarks) => {
//   const myBookmark = bookmarks[0];

//   api.updateBookmark(myBookmark.id, {title: 'Save the bees'}, () => {
//     console.log(bookmarks);
//   });
// });

// api.createBookmark('Great Western Power Company', 'https://touchstoneclimbing.com/gwpower-co/', (newBookmark) => {
//   api.getBookmarks((bookmarks) => {
//     console.log(bookmarks);
//   });
// });

