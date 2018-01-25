/* global store api */

const bookmarksList = (function(){

  //Below: inject HTML, create bookmark string to render, render to the DOM

  function generateBookmarkElement(bookmark) {
  //HTML goes here
      return `<div class='bookmark-list-item condensed' data-id=${bookmark.id}>
    <p><h3 class='bookmark-title'>${bookmark.title}</h3>
    <span class='bookmark-rating'>${bookmark.rating}</span></p>
    </div>`;
    };
    
  

  // const expandedHTML

  // const ratingHTML
  

  // Generate bookmark string to render
  function generateBookmarkListString(bookmarksList) {
    const bookmarks = bookmarksList.map((bookmark) => generateBookmarkElement(bookmark));
    return bookmarks.join('');
    console.log(`generate string ran`);
  }

  // //This is what will be rendered to the DOM
  function render() {
    let bookmarks = store.bookmarks;
    console.log('`render` ran');
    const bookmarksString = generateBookmarkListString(bookmarks);
   
    // inserts HTML into the DOM
    $('.js-bookmarks-list').html(bookmarksString);
  }
  
  //Event Handlers below this line

  function handleAddBookmark() {
    $('.js-add-bookmark-button')
  }



  //   function bindEventListeners() {
  //     //all eventListener functions go here
  // };
  //Methods that are exposed
  return {
    render: render,
  // //   bindEventListeners: bindEventListeners,
  };
})();