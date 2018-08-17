(function($) {
	'use strict';
	/*
	Variable
	=========================== */
	var $window_w = $(window).width(),
        $body = $("body"),
        $nav = $("nav");

    /*
	Features
	=========================== */
    $("ul.feature-two").each(function(){
        var $this = $(this),
            $window_w = $(window).width(),
            $gHeight = $this.height();

        $this.append("<span class='line'></span>");
        $("li", this).last().css("margin-bottom","-19px");
    });
	
     /*	pricing
	=========================== */

$(  "ul.list-feature li:first-child" ).addClass( "current" );
$(  "ul.list-feature li:nth-child(3)" ).addClass( "current" );
$(  "ul.list-feature li:nth-child(5)" ).addClass( "current" );
$(  "ul.list-feature li:nth-child(7)" ).addClass( "current" );
$(  "ul.list-feature li:nth-child(9)" ).addClass( "current" );
$(  "ul.list-feature li:nth-child(11)" ).addClass( "current" );
$(  "ul.list-feature li:nth-child(13)" ).addClass( "current" );



$(  "#secondary-menu li.active a" ).prepend( '<span></span>' );
$(  ".tagcloud a" ).prepend( '<i class="fa fa-tags"></i>' );
$(  ".tagcloud a" ).wrapAll( '<ul class="tags"><li></li></ul>' );


 
  $(".cat-item a").prepend('<i class="fa fa-angle-double-right"></i>');   
  $(".cat-item a").wrap('<ul class="cat"><li></li></ul>');   
    /*
	Gallery
	=========================== */
    $(".wrap-gallery").each(function(){
        var $this = $(this);
        $(".img-wrapper", this).append("<span class='bg-gallery'></span>");
        $this.on("mouseenter", function() {
            $("a.hover", this).stop().fadeIn({queue:false});
            $(".bg-gallery", this).stop().fadeIn({queue:false});
            return false;
        });
        $this.on("mouseleave", function() {
            $("a.hover", this).stop().fadeOut({queue:false});
            $(".bg-gallery", this).stop().fadeOut({queue:false});
            return false;
        });
    });
    
    /*
	Animated Scroll
	=========================== */   
    $(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop != 0){
			$("nav.navbar").addClass("nav-fixed");
            $(".scroll.top").fadeIn(1000);
            $(".submenu").slideUp(1000);
			return false;
		} else {
			$("nav.navbar").removeClass("nav-fixed");
            $(".scroll.top").fadeOut(1000);
            $(".submenu").slideDown(1000);
			return false;
		}
	});
    
    /*
	Blog Current
	=========================== */
    function blog_current(){
        $(".post.current").each(function(){
            var $window_w = $(window).width();
            if( $window_w < 981 && $window_w > 641 ){
                $(".img-post", this).addClass("col-sm-push-6");
                $(".content-post", this).addClass("col-sm-pull-6");
            }else{
                $(".img-post", this).removeClass("col-sm-push-6");
                $(".content-post", this).removeClass("col-sm-pull-6");
            }
        });
    }
    $(window).on("load", blog_current);
    $(window).on("resize", blog_current);
    
})(jQuery);

