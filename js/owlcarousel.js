// First carousel
$('.slide-one').owlCarousel({
    items: 6,
    stagePadding: 20,
    loop:false,
    margin:5,
    nav:false,
})
// First carousel custom buttons
const owl = $('.slide-one');
$('.customNextBtn').click(function() {
  owl.trigger('next.owl.carousel');
});
$('.customPreviousBtn').click(function() {
  owl.trigger('prev.owl.carousel', [300]);
});
// Second carousel
$('.slide-two').owlCarousel({
  items: 4,
  stagePadding: 20,
  loop:true,
  margin:32,
  nav:false,
})
// Three carousel custom buttons
const owlTwo = $('.slide-two');
$('.customNextBtnTwo').click(function() {
  owlTwo.trigger('next.owl.carousel');
 });
 $('.customPreviousBtnTwo').click(function() {
  owlTwo.trigger('prev.owl.carousel', [300]);
});
// Three carousel
$('.slide-three').owlCarousel({
  items: 4,
  stagePadding: 20,
  loop:true,
  margin:48,
  nav:false,
})
// Four carousel custom buttons
const owlThree = $('.slide-three');
$('.customNextBtnThree').click(function() {
  owlThree.trigger('next.owl.carousel');
 });
 $('.customPreviousBtnThree').click(function() {
  owlThree.trigger('prev.owl.carousel', [300]);
});
// Four carousel
$('.slide-four').owlCarousel({
  items: 3,
  stagePadding: 20,
  loop:false,
  margin:50,
  nav:false,
})
// Four carousel custom buttons
const owlFour = $('.slide-four');
$('.customNextBtnFour').click(function() {
  owlFour.trigger('next.owl.carousel');
 });
 $('.customPreviousBtnFour').click(function() {
  owlFour.trigger('prev.owl.carousel', [300]);
});