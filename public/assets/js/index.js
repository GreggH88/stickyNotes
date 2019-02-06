const $notesList = $("#note-list");
const $noteTitle = $("#note-title");
const $noteText = $("#note-text");
const $submitBtn = $("#submit-btn");

const getAndRenderNotes = function () {
  $.ajax({
    url: "./api/notes",
    method: "GET"
  }).then(function (data) {
    const $noteItems = [];

    for (var i = 0; i < data.length; i++) {
      const note = data[i];

      const $li = $("<li class='list-group-item'>").data(note);
      const $row = $("<div class='row'>");
      const $col11 = $("<div class='col-11'>");
      const $noteTe = $("<p>").text('"' + note.text + '"');
      const $noteTi = $("<p class='float-right'>").text("- " + note.title);
      const $clearFix = $("<div class='clearfix'>");
      var $col1 = $("<div class='col-1'>");
      var $trashCan = $("<i class='fas fa-trash-alt js-delete-note'>");
      $trashCan.attr("data-id", note.id)

      $li.append(
        $row.append(
          $col11.append($noteTe, $noteTi, $clearFix),
          $col1.append($trashCan)
        ));

      $noteItems.push($li);
    }

    $notesList.empty();
    $notesList.append($noteItems);
  });
};

var noteSubmitter = function (event) {
  event.preventDefault();

  var note = {
    title: $noteTitle.val().trim(),
    text: $noteText.val().trim()
  };
  console.log($noteTitle);
  if (!note.title || !note.text) {
    alert("Please complete all of the required text fields.");
    return;
  }

  $.ajax({
      url: "./api/notes",
      method: "POST",
      data: note
    })
    .then(function () {
      getAndRenderNotes();
      $noteTitle.val("");
      $noteText.val("");
    });
};

$(document).on("click", ".js-delete-note", function () {
  $.ajax({
      url: "./api/notes/" + $(this).attr("data-id"),
      method: "DELETE"
    })
    .then(function (data) {
      console.log(data);
      location.reload();
    })
});

getAndRenderNotes();
$submitBtn.on("click", noteSubmitter);