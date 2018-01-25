'use strict';

 const store = (function() {
  // bookmarks: [
  //   {  id: "cjcuzl21l00290k05253okaoh",
  //   title: "Woolworths to stop selling pesticide linked to global bee decline",
  //   url: "https://www.theguardian.com/environment/2018/jan/23/woolworths-to-stop-selling-pesticide-linked-to-global-bee-decline",
  //   desc: "Australian grocery giant will join Bunnings to withdraw Yates Confidor from sale",
  //   rating: 4}
  // ]}

  //add bookmarks to the store
  const addBookmark = function(bookmark) {
    console.log('addBookmark ran');
    this.bookmarks.push(bookmark);
  };

  const findByID = function(id) {
    console.log('findByID ran');
    return store.bookmarks.find(bookmark => bookmark.id === id);
  };

  return {
    bookmarks: [],
    // minRating: null,

    findByID,
    addBookmark
  };

})();