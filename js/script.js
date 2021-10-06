$(function () {
  // sticky menu 

  var offset = $('.main_menu').offset().top;

  $(window).scroll(function(){
      var scrolling = $(this).scrollTop();
    if(scrolling>offset){
        $('.main_menu').addClass('menu_fix');
    }
    else{
        $('.main_menu').removeClass('menu_fix');
    }

  });

  $('navbar-nav').on('click','li',function(){
    $('navbar-nav li.active').removeClass('active');
    $(this).addClass('active');
  });

  //animation scroll js
  var html_body = $('html, body');
  $('nav a').on('click', function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              html_body.animate({
                  scrollTop: target.offset().top - 70
              }, 1500,);
              return false;
          }
      }
  });

  // Navbar-toggler

  $('.navbar-toggler').click(function(){
    $('.collapse').toggle(200);
  });


  // COunter
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function( itemElem ) {
        var weight = $( itemElem ).find('.weight').text();
        return parseFloat( weight.replace( /[\(\)]/g, '') );
      }
    }
  });
  
  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };
  
  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  
 /*  // bind sort button click
  $('#sorts').on( 'click', 'button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $grid.isotope({ sortBy: sortByValue });
  }); */
  
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
    

  //Brand slider

  
  $('.slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					autoplay:true,
					infinity:true,
          slidesToScroll: 1,
          dots: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					autoplay:false,
					infinity:true,
					dots: false,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					autoplay:true,
					infinity:true,
					dots: false,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 2,
					autoplay:true,
					infinity:true,
					dots: false,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 321,
				settings: {
					slidesToShow: 1,
					autoplay:true,
					infinity:true,
					dots: false,
					slidesToScroll: 1
				}
			}
		]
  });


  // scroll top
  $('.scrollTop').click(function(){
    $('html,body').animate({
        scrollTop: 0,
    },2000);
  });
  $(window).scroll(function(){
    var scrolling2 = $(this).scrollTop();

    if(scrolling2>150){
        $('.scrollTop').fadeIn();
    }
    else{
        $('.scrollTop').fadeOut();
    }
  });


});
