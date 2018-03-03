$(document).ready(function() {
    $('a[href^="#"]').click(function () {
        linkHref = $(this).attr("href");
        blockTop = $(linkHref).offset().top;
        if($.browser.safari){
            $('body').animate( { scrollTop: blockTop }, 1200 );
        }else{
            $('html').animate( { scrollTop: blockTop }, 1200 );
        }
        return false;
    });
})