'use strict';
/*Global store*/

const api = function () {

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/sarah';

  
  const getBookmarks = (callback) => {
    
    $.getJSON(`${BASE_URL}/bookmarks`,callback);
  };  

  const createBookmark = (title, url, callback) => {
    let newBookmark = JSON.stringify({
      title:title,
      url: url
    });

    $.ajax({
      url:`${BASE_URL}/bookmarks`,
      method:'POST', 
      contentType:'application/json',
      data:newBookmark, 
      success: callback});
  };


//   const updateItem = (id, updateData, callback)=> {

//     $.ajax({
//       url:`${BASE_URL}/items/${id}`,
//       method:'PATCH',
//       contentType:'application/json',
//       data:JSON.stringify(updateData),
//       success:callback
//     });
//   };


//   const deleteItem = (id, callback)=> {

//     $.ajax({
//       url:`${BASE_URL}/items/${id}`,
//       method:'DELETE',
//       // contentType:'application/json',
//       success:callback
//     });
//   };


  return {
    getBookmarks,
    createBookmark
  };

}();
