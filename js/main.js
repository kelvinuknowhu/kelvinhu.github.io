(function() {
  'use strict';
  var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    }
  };

  var counter = function() {
    $('.js-counter').countTo({
      formatter: function(value, options) {
        return value.toFixed(options.decimals);
      }
    });
  };

  // Animations
  var contentWayPoint = function() {
    var i = 0;
    $('.animate-box').waypoint(
      function(direction) {
        if (direction === 'down' && !$(this.element).hasClass('animated')) {
          i++;

          $(this.element).addClass('item-animate');
          setTimeout(function() {
            $('body .animate-box.item-animate').each(function(k) {
              var el = $(this);
              setTimeout(
                function() {
                  var effect = el.data('animate-effect');
                  el.addClass('fadeInRight animated slow');
                  el.removeClass('item-animate');
                },
                k * 200,
                'easeInOutExpo'
              );
            });
          }, 100);
        }
      },
      { offset: '85%' }
    );
  };

  var burgerMenu = function() {
    $('.js-colorlib-nav-toggle').on('click', function(event) {
      event.preventDefault();
      var $this = $(this);

      if ($('body').hasClass('offcanvas')) {
        $this.removeClass('active');
        $('body').removeClass('offcanvas');
      } else {
        $this.addClass('active');
        $('body').addClass('offcanvas');
      }
    });
  };

  // Reflect scrolling in navigation
  var navActive = function(section) {
    var $el = $('#navbar > ul');
    $el.find('li').removeClass('active');
    $el.each(function() {
      $(this)
        .find('a[data-nav-section="' + section + '"]')
        .closest('li')
        .addClass('active');
    });
  };

  var navigationSection = function() {
    var $section = $('section[data-section]');

    $section.waypoint(
      function(direction) {
        if (direction === 'down') {
          navActive($(this.element).data('section'));
        }
      },
      {
        offset: '150px'
      }
    );

    $section.waypoint(
      function(direction) {
        if (direction === 'up') {
          navActive($(this.element).data('section'));
        }
      },
      {
        offset: function() {
          return -$(this.element).height() + 155;
        }
      }
    );
  };

  // When Document is on load, run the following functions.
  $(function() {
    counter();
    burgerMenu();
    navigationSection();
    // contentWayPoint();
  });
})();

function toggleAside() {
  var navToggle = document.getElementsByClassName('nav-toggle')[0];
  var aside = document.querySelector('#aside');

  function handleAnimationEnd() {
    if (aside.classList.contains('slide-in')) {
      aside.classList.remove('slide-in');
    }
    node.removeEventListener('animationend', handleAnimationEnd);
  }

  aside.addEventListener('animationend', handleAnimationEnd);
  // Make aside element slide in or out
  if (!aside.classList.contains('active')) {
    aside.classList.add('active');
    aside.classList.add('slide-in');
  } else {
    aside.classList.remove('active');
  }
  // Change toggle icon between hamburger and cross
  if (!navToggle.classList.contains('active')) {
    navToggle.classList.add('active');
  } else {
    navToggle.classList.remove('active');
  }
}

function toggleOffAside() {
  var navToggle = document.querySelector('.nav-toggle');
  var aside = document.querySelector('#aside');
  // Toggle off if aside is active
  if (
    aside.classList.contains('active') &&
    navToggle.classList.contains('active')
  ) {
    aside.classList.remove('active');
    navToggle.classList.remove('active');
  }
}
