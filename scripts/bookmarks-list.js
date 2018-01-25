/* global store api */

const bookmarksList = (function(){

  //Below: inject HTML, create bookmark string to render, render to the DOM

  function generateBookmarkElement(bookmark) {
  //HTML goes here

    return `<div class='bookmark-list-item condensed' data-id=${bookmark.id}>
    <p><h3 class='bookmark-title'>${bookmark.title}</h3>
    <span class='bookmark-rating'>${bookmark.rating}</span></p>
    </div>`;
  }
    
  const addNewBookmarkHTML = `
  <form action='#' id='add-new-bookmark-form'>
  <h2>Add a new bookmark</h2>
  <label>Title</label>
  <input type="text" name="title" id="new-bookmark-title" placeholder="add title">
  <label>Web Address</label>
  <input type="text" name="url" id="new-bookmark-url" placeholder="Enter web address">
  <label>Description</label>
  <input type="text" name="desription" id="new-bookmark-desc" placeholder="Enter a description">
  <form action='' id='new-bookmark-rating'>
    <label>Rate site</>
    <input type='radio' name='new-bookmark-rating-select' value='0' checked><label for='new-bookmark-rating-select-null'>null</label>
    <input type='radio' name='new-bookmark-rating-select' value='1'><label for='new-bookmark-rating-select-1'>1</label>
    <input type='radio' name='new-bookmark-rating-select' value='2'><label for='new-bookmark-rating-select-2'>2</label>
    <input type='radio' name='new-bookmark-rating-select' value='3'><label for='new-bookmark-rating-select-3'>3</label>
    <input type='radio' name='new-bookmark-rating-select' value='4'><label for='new-bookmark-rating-select-4'>4</label>
    <input type='radio' name='new-bookmark-rating-select' value='5'><label for='new-bookmark-rating-select-5'>5</label>
  <button type="submit" id='new-bookmark-submit'> Submit<button>
  <input type="button" name='cancel' value='cancel' onClick='https://thinkful-list-api.herokuapp.com/sarah/bookmarks' />
  `;

  // const expandedHTML

  // const ratingHTML
  

  // Generate bookmark string to render
  function generateBookmarkListString(bookmarksList) {
    const bookmarks = bookmarksList.map((bookmark) => generateBookmarkElement(bookmark));
    return bookmarks.join('');
    console.log('generate string ran');
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
    $('.js-add-bookmark-button');
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