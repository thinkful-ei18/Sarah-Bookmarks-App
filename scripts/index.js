'use strict';
/*Global api, store*/
//tests
api.createBookmark('Great Western Power Company', 'https://touchstoneclimbing.com/gwpower-co/', (newBookmark) => {
  api.getBookmarks((bookmarks) => {
    console.log(bookmarks);
  });
});

$.getJSON('https://thinkful-list-api.herokuapp.com/sarah/bookmarks', (response) => {
  console.log('api response: ', response);
});