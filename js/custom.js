
        // navbar collapse
        (function ($) {
        
        "use strict";

          // NAVBAR
          $('.navbar-nav .nav-link').click(function(){
              $(".navbar-collapse").collapse('hide');
          });
          
        })(window.jQuery);


        // Wrap every letter in a span
        var textWrapper = document.querySelector('.ml3');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: true})
          .add({
            targets: '.ml3 .letter',
            opacity: [0,1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: (el, i) => 150 * (i+1)
          }).add({
            targets: '.ml3',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000000000000000
          });


          // moving animated txt block
          var tl = gsap.timeline({ repeat: -1 });
            tl.to("h1", 30, { backgroundPosition: "-960px 0" });


