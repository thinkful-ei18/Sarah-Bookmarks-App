'use strict';
/*Global api, store*/

//Only access the exposed methods from bookmarks-list
// $(document).ready(function() {
//   (something I write like bookmarksList).bindEventListeners();
//   (something I write like bookmarksList.render();
// });


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

$.getJSON('https://thinkful-list-api.herokuapp.com/sarah/bookmarks', (response) => {
  console.log('api response: ', response);
});