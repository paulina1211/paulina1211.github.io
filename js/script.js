$(function() {

var topoffset= 55;

    $('.navbar a[href*=\\#]:not([href=\\#])').click(function() {
        if (location.pathname.replace(/^\//,'') === 
          this.pathname.replace(/^\//,'') && 
          location.hostname === this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top-topoffset+2
            }, 500);
            return false;
          } //target.length
        } //click function
      }); //smooth scrolling

    $(window).on('activate.bs.scrollspy', 
        function() {
            var hash = $('.site-nav')
            .find('a.active')
            .attr('href');

            if (hash !== '#page-hero') {
                $('header nav').addClass('inbody');
            } else {
                $('header nav').removeClass('inbody');
            }

            $('#page-media .layout-animation').css(
                'visibility: hidden'
            );

            if (hash === '#page-media') {
                $('#page-media .layout-animation').addClass('animated fadeInRight');
            }
        });

    // when site is triggered, do something on event
    $('#site-modal').on('show.bs.modal', function(event) {
        // this is the current element
        $(this)
        // find the modal element
            .find('.modal-content img')
            // replace the src element with the high res attribute from the trigger
            .attr('src', $(event.relatedTarget).data('highres'));
    }); 
});

