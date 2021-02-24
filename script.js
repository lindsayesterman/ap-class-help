function getHrefOfClickedLink() {
  $("a").click(function () {
    $("h4").css("background-color", "transparent")
    let idClicked = $(this).attr("href");
    idClicked = idClicked.substring(1);
    $(`.${idClicked}`).css("background-color", "yellow");
  });
}

$(getHrefOfClickedLink);
