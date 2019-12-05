var modal = document.getElementById("modal-c");
var modalImg = document.getElementById("img01");
var body = document.body;

function openModal(img) {
  modal.style.display = "block";
  modalImg.src = img.src;
  body.classList.add("no-scroll");

}

var span = document.getElementsByClassName("close")[0];
var body = document.body;

span.onclick = function() {
  modal.style.display = "none";
  body.classList.remove("no-scroll");

} 




$(function(){
  var includes = $('[data-include]');
  jQuery.each(includes, function(){
    var file = '/' + $(this).data('include') + '.html';
    $(this).load(file);
  });
});

$(".slick-slider").slick({
  dots: true,
  /*
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear' */
});
$(".slick-slider-single").slick({
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$("#menu-toggle").click(function (e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});

var leftArrow = document.getElementsByClassName("slick-prev")[0];
var rightArrow = document.getElementsByClassName("slick-next")[0];

rightArrow.onclick = function() {
  leftArrow.style.display = "block";
  leftArrow.style.setProperty('display', 'block', 'important');


} 