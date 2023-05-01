// panel
$(document).ready(function(){
    var panel = '.panel';
    var btn = '.panel_btn';
    var close = '.close_btn';
    var main = '.main_nav';
    var sub = '.sub_nav';
    var speed = 300;

    $(btn).click(function(){
        var has = $(this).hasClass('active');
        if(has){ 
            setTimeout(function(){
                $(main).removeClass('active');
                $(sub).stop().slideUp(0);
            }, 400);
        }
        $(this).add(panel).toggleClass('active');
    });
    $(close).click(function(){
        $(panel).removeClass('active');
        $(this).toggleClass('active');
        $('body').css('overflow','visible');
        setTimeout(function(){
            $(main).removeClass('active');
            $(sub).stop().slideUp(0);
       },600);
    });
    $(main).click(function(){
        $(sub).stop().slideUp(speed);
        $(this).next().slideToggle(speed);
        var has = $(this).hasClass('active');
        if(has){
            $(this).removeClass('active');
            $(sub).stop().slideUp(speed);
        } else{
            $(main).removeClass('active');
            $(this).addClass('active');
        }
    });
});

// close btn
$(document).ready(function(){
    $('.panel .close_btn').click(function(){
        $(this).toggleClass('active');
    });
});

// familysite
$(document).ready(function(){
    var dropMenu = '.family_site';
    var btn = 'button';
    var speed = 'fast';

    $(btn).click(function(){
        $(this).next().stop().slideToggle(speed);
        $(this).toggleClass('active');
    });

    $(dropMenu).mouseleave(function(){
        $(dropMenu).find('ul').stop().slideUp(speed);
        $(dropMenu).find('button').removeClass('active');
    })  
});