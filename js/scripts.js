// Carousel
$('.carousel-item', '.show-neighbors').each(function(){
  var next = $(this).next();
  if (! next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
}).each(function(){
  var prev = $(this).prev();
  if (! prev.length) {
    prev = $(this).siblings(':last');
  }
  prev.children(':nth-last-child(2)').clone().prependTo($(this));
});
// End Carousel

// Search Bar
$(".search-nav .btn").click(function(e){
  e.preventDefault()
  $(".search-nav").toggleClass("active");
});
// End Search bar

this.rooms = [
    {
      name: 'entrance',
      messages: [
        'At long last you\'ve found the dungeon entrance of Flerb!',
        'You stand before two tunnels. The one on your left is large and appears relatively dry. The tunnel on your right appears narrow and wet.'
      ],
      buttons: [
        {
          text: 'Left Tunnel',
          roomName: 'death1'
        },
        {
          text: 'Right Tunnel',
          roomName: 'wet-tunnel',
          image: 'prison-cell.jpg'
        }
      ]
    },
    this.rooms = [
    {
      name: 'back',
      messages: [
        'At long last you\'ve found the dungeon entrance of Flerb!',
        'You stand before two tunnels. The one on your left is large and appears relatively dry. The tunnel on your right appears narrow and wet.'
      ],
      buttons: [
        {
          text: 'Left Tunnel',
          roomName: 'death1'
        },
        {
          text: 'Right Tunnel',
          roomName: 'FUCK',
          image: 'prison-cell.jpg'
        }
      ]
    }
