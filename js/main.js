 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: true
 });

jQuery(document).ready(function($) {

	"use strict";


  // loader
  var loader = function() {
    setTimeout(function() { 
      if($('#loader').length > 0) {
        $('#loader').removeClass('show');
      }
    }, 1);
  };
  loader();

	

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	
	var siteCarousel = function () {

		if ( $('.hero-slide').length > 0 ) {
			$('.hero-slide').owlCarousel({
				items: 1,
				loop: true,
				margin: 0,
				autoplay: true,
				nav: true,
				dots: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
				smartSpeed: 1000
			});
		}

		if ( $('.owl-slide-3').length > 0 ) {
			$('.owl-slide-3').owlCarousel({
				center: false,
				items: 1,
				loop: true,
				stagePadding: 0,
				margin: 30,
				autoplay: true,
				smartSpeed: 500,
				nav: true,
				dots: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
				responsive:{
					600:{
						items: 2
					},
					1000:{
						items: 2
					},
					1200:{
						items: 3
					}
				}
			});
		}

		if ( $('.owl-slide').length > 0 ) {
			$('.owl-slide').owlCarousel({
		    center: false,
		    items: 2,
		    loop: true,
				stagePadding: 0,
		    margin: 30,
		    autoplay: true,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	
	        	stagePadding: 0,
	        	nav: true,
	          items: 2
	        },
	        1200:{
	        	
	        	stagePadding: 0,
	        	nav: true,
	          items: 2
	        }
		    }
			});
		}


		if ( $('.nonloop-block-14').length > 0 ) {
			$('.nonloop-block-14').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 20,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 30,
	        	stagePadding: 0,
	        	nav: true,
	          items: 2
	        },
	        1200:{
	        	margin: 30,
	        	stagePadding: 0,
	        	nav: true,
	          items: 3
	        }
		    }
			});
		}

		$('.slide-one-item').owlCarousel({
			center: false,
			items: 1,
			loop: true,
			stagePadding: 0,
			margin: 0,
			autoplay: true,
			pauseOnHover: false,
			nav: true,
			navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
		});
	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
	    responsive: false,
	    parallaxBackgrounds: true,
	    parallaxElements: true,
	    horizontalScrolling: false,
	    hideDistantElements: false,
	    scrollProperty: 'scroll'
	  });
	};
	siteStellar();

	var siteCountDown = function() {

		$('#date-countdown').countdown('2020/10/10', function(event) {
		  var $this = $(this).html(event.strftime(''
		    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
		    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
		    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});
				
	};
	siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	// navigation
  var OnePageNavigation = function() {
    var navToggler = $('.site-menu-toggle');
   	$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
      e.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        'scrollTop': $(hash).offset().top
      }, 600, 'easeInOutCirc', function(){
        window.location.hash = hash;
      });

    });
  };
//   OnePageNavigation();

  var siteScroll = function() {

  	

  	$(window).scroll(function() {

  		var st = $(this).scrollTop();

  		if (st > 100) {
  			$('.js-sticky-header').addClass('shrink');
  		} else {
  			$('.js-sticky-header').removeClass('shrink');
  		}

  	}) 

  };
	siteScroll();
	

	$(function () {
		// $("#bgndVideo").YTPlayer();
	});

});


//////////////////////
//book
///////////////////////


$(document).ready(function() {

    $(function() {
      $("#datepicker").datepicker();
    });
  
    $(function() {
      $("#timepicker").timepicker();
    });
  
    var tnum, tnam, ttime, tcost, classname;
    var from, to, date, availableCities = [
      "Mumbai",
      "Kolkata",
      "Delhi",
      "Chennai",
      "Bangalore",
      "Hyderabad",
      "Ahmadabad",
      "Pune",
      "Surat",
      "Kanpur",
      "Jaipur",
      "Lucknow",
      "Nagpur",
      "Patna",
      "Indore",
      "Vadodara",
      "Bhopal",
      "Coimbatore",
      "Ludhiana",
      "Kochi",
      "Visakhapatnam",
      "Agra",
      "Varanasi",
      "Madurai",
      "Meerut",
      "Nashik",
      "Jabalpur",
      "Jamshedpur",
      "Asansol",
      "Dhanbad",
      "Faridabad",
      "Allahabad",
      "Amritsar",
      "Vijayawada",
      "Rajkot"
    ];
    $("#from").autocomplete({
      source: availableCities
    });
    $("#to").autocomplete({
      source: availableCities
    });
  
    $(".invis").hide();
    $("#page2").hide();
    $(".final").hide();
  
    $("#search").click(function() {
      from = $("#from").val();
      to = $("#to").val();
      date = $("#datepicker").val();
      if (!(from && to && date)) {
        alert("Please Select All Fields !");
        return False;
      } else if (from == to) {
        alert("From and To can't be same");
        return False;
      }
      $("#page1").hide();
      $("#page2").show();
  
      $("#trainname1").html(from + " Express");
      $("#trainname2").html(to + " Express");
      $("#trainname3").html(from + " Passenger");
      $("#trainname4").html(to + " Passenger");
      $("#trainname5").html(from + " - " + to + " Super Fast Train");
  
      $("tbody > tr").mouseover(function() {
        $(this).css("backgroundColor", "rgba(41, 103, 182, 0.89)");
  
      }).mouseout(function() {
        $(this).css("backgroundColor", "");
      });
  
      $("tbody > tr").click(function() {
        $(this).parent().children().removeClass("selected");
        $(this).addClass("selected");
      });
  
      $(".book").click(function() {
        tcost = $(".selected").find(".tcost")
          .text();
        tnum = $(".selected").find(".tnum").text();
  
        tnam = $(".selected").find(".tnam").text();
  
        ttime = $(".selected").find(".ttime").text();
        /* alert(tnum);*/
        if (!tnum) {
          alert("Please Select Your Train !")
          return False;
        }
        $(".invis").show();
  
        $(".booknow").click(function() {
          classname = document.querySelector('input[name="toggle"]:checked+span').innerHTML;
  
          $(".invis").hide(function() {
            $("#page2").hide()
          });
          $(".index").hide();
          $(".final").show();
  
        });
        $(".bookcancel").click(function() {
  
          $(".invis").hide();
        })
  
        $("#From").html(from);
        $("#To").html(to);
        $(".trainname").html(tnam);
        $("#number").html(tnum);
  
        var d = new Date();
        var n = d.toLocaleDateString();
        document.getElementById("date").innerHTML = n;
  
        var code = '1101001000010011101100101110111101101000111010111001100110111001001011110111011100101100100100001101100011101011';
  
        table = $('#barcodes tr');
        for (var i = 0; i < code.length; i++) {
          if (code[i] == 1) {
            table.append('<td bgcolor="black">')
          } else {
            table.append('<td bgcolor="white">')
          }
        }
  
      });
  
    })
  
  });