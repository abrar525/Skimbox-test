$(document).ready(function () {
  $("#fileItem").mouseenter(function () {
    $(".menuCont").empty();
    $(".menuCont-2").empty();
    $(".menuCont-3").empty();
    $(".menuCont-4").empty();
    $(".menuCont-5").empty();

    $(".menuCont").append(`<div class = "bg-white rounded shadow-lg p-2">
    <ul class = "menuItems">
    <li>New</li>
    <li>Open</li>
    <li>Make a Copy</li>
    <hr/>
    <li>Share</li>
    <li>Email</li>
    <li>Download</li>
    <li>Rename</li>
    <li>Move</li>
    <li>Add to shortcut</li>
    <li>Move to trash</li>
    <hr/>
    </ul>
    </div>`);
  });
  $("#editItem").mouseenter(function () {
    $(".menuCont-2").empty();
    $(".menuCont").empty();
    $(".menuCont-3").empty();
    $(".menuCont-4").empty();
    $(".menuCont-5").empty();

    $(".menuCont-2").append(`<div class = "bg-white rounded shadow-lg p-2">
    <ul class = "menuItems">
    <li>New</li>
    <li>Open</li>
    <li>Make a Copy</li>
    <hr/>
    <li>Share</li>
    <li>Email</li>
    <li>Download</li>
    <li>Rename</li>
    <li>Move</li>
    <li>Add to shortcut</li>
    <li>Move to trash</li>
    <hr/>
    </ul>
    </div>`);
  });
  $("#viewItem").mouseenter(function () {
    $(".menuCont-3").empty();
    $(".menuCont").empty();
    $(".menuCont-2").empty();
    $(".menuCont-4").empty();
    $(".menuCont-5").empty();

    $(".menuCont-3").append(`<div class = "bg-white rounded shadow-lg p-2">
    <ul class = "menuItems">
    <li>New</li>
    <li>Open</li>
    <li>Make a Copy</li>
    <hr/>
    <li>Share</li>
    <li>Email</li>
    <li>Download</li>
    <li>Rename</li>
    <li>Move</li>
    <li>Add to shortcut</li>
    <li>Move to trash</li>
    <hr/>
    </ul>
    </div>`);
  });
  $("#toolItem").mouseenter(function () {
    $(".menuCont-4").empty();
    $(".menuCont").empty();
    $(".menuCont-2").empty();
    $(".menuCont-3").empty();
    $(".menuCont-5").empty();

    $(".menuCont-4").append(`<div class = "bg-white rounded shadow-lg p-2">
    <ul class = "menuItems">
    <li>New</li>
    <li>Open</li>
    <li>Make a Copy</li>
    <hr/>
    <li>Share</li>
    <li>Email</li>
    <li>Download</li>
    <li>Rename</li>
    <li>Move</li>
    <li>Add to shortcut</li>
    <li>Move to trash</li>
    <hr/>
    </ul>
    </div>`);
  });
  $("#helpItem").mouseenter(function () {
    $(".menuCont-5").empty();
    $(".menuCont").empty();
    $(".menuCont-2").empty();
    $(".menuCont-3").empty();
    $(".menuCont-4").empty();

    $(".menuCont-5").append(`<div class = "bg-white rounded shadow-lg p-2">
    <ul class = "menuItems">
    <li>New</li>
    <li>Open</li>
    <li>Make a Copy</li>
    <hr/>
    <li>Share</li>
    <li>Email</li>
    <li>Download</li>
    <li>Rename</li>
    <li>Move</li>
    <li>Add to shortcut</li>
    <li>Move to trash</li>
    <hr/>
    </ul>
    </div>`);
  });
});
