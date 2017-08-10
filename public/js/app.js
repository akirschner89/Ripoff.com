// When user clicks an item from the home page, the database ID of the listing is captured in a variable.
// a call is passed to the API route to retrieve a single listing via ID
// this will result in a GET request to the database that will retrieve the Listing's object
// the object will then be rendered with all images in a handlebars page

$(document).on('click', '.listingItem', function(){
  var clickedId = $(this).attr('id');
  console.log(clickedId)
  window.location.replace("/api/listing/" + clickedId);
})