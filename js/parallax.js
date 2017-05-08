// parallax scrolling

 $(document).on("scroll", function() {

  var pixels = $(document).scrollTop()

  $("img.img-1").css("top", pixels * -1 + 70)
  $("img.img-2").css("top", pixels * -1.5 + 100)
  $("img.img-3").css("top", pixels * -2 + 800)
  $("img.img-4").css("top", pixels * -1.1 + 900)
  $("img.img-5").css("top", pixels * -1 + 2300)
  $("img.img-6").css("top", pixels * -1.3 + 2300)
  $("img.img-7").css("top", pixels * -1 + 3300)
  $("img.img-8").css("top", pixels * -1.5 + 4100)
  $("img.img-9").css("top", pixels * -1 + 5000)
  $("img.img-10").css("top", pixels * -1 + 5600)

})

// fade in images

function showImages(el) {
        var windowHeight = jQuery( window ).height();
        $(el).each(function(){
            var thisPos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (topOfWindow + windowHeight - 200 > thisPos ) {
                $(this).addClass("fadeIn");
            }
        });
    }

    // if the image in the window of browser when the page is loaded, show that image
    $(document).ready(function(){
            showImages('img');
    });

    // if the image in the window of browser when scrolling the page, show that image
    $(window).scroll(function() {
            showImages('img');
    });
