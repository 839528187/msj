$(document).ready(function(){
    var div2 = $(".hot-msg"),foter = $(".all_common_footer"),divtop = div2.offset().top;
    var bott = $(window).outerHeight() - div2.outerHeight() - 10;
    $(window).scroll(function(){
        var scroh = $(this).scrollTop()+10;
        if(scroh > divtop){
            var bottom = $(window).height() - (foter.offset().top - $(window).scrollTop() - 10);
            if(bottom < 350){
                div2.css({'position':'fixed','bottom':bott+'px'});
            }else{
                div2.css({'position':'fixed','bottom':bottom + 'px'});
            }
        }else{
            div2.css({'position':'relative','bottom':'auto'});
        }
    });
})