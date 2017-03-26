$(document).ready(function() {
  // Mobile menu icon toggle
  $(".menu-icon").click(function() {
    $(".menu").slideToggle("slow");
    console.log("works");
  });
});
