$(function() {
  // elemek összegyűjtése
  let $button = $('button#createPost');
  let $postList = $('div#postList');
  let $postTitle = $('input#postTitle');
  let $postBody = $('textarea#postBody');
  let $modal = $('#exampleModal');

  // gombnyomásra reagálás
  $button.click(function() {
    
    // értékek összegyűjtése
    let postTitle = $postTitle.val();
    let postBody = $postBody.val();

    // bejegyzés létrehozása
    CreatePost(postTitle, postBody);

    // mezők ürítése
    $postTitle.val('');
    $postBody.val('');

    // modal bezárása
    $modal.modal('hide');
  });

  //////////////////////////////////////////////////

  // új bejegyzés létrehozása
  function CreatePost(title, body) {
    let postHTML =
      '<div class="mb-4"><header><strong>' +
      title +
      '</strong></header><main>' +
      body +
      '</main></div>';

    $postList.prepend(postHTML);
  }
});
