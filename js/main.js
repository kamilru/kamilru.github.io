//animation
//<![CDATA[
$(function(){
            function onScrollInit( items, trigger ) {
                items.each( function() {
                var osElement = $(this),
                    osAnimationClass = osElement.attr('data-os-animation'),
                    osAnimationDelay = osElement.attr('data-os-animation-delay');
                  
                    osElement.css({
                        '-webkit-animation-delay':  osAnimationDelay,
                        '-moz-animation-delay':     osAnimationDelay,
                        'animation-delay':          osAnimationDelay
                    });
                    var osTrigger = ( trigger ) ? trigger : osElement;
                    
                    osTrigger.waypoint(function() {
                        osElement.addClass('animated').addClass(osAnimationClass);
                        },{
                            triggerOnce: false,
                            offset: '85%'
                    });
                });
            }
            onScrollInit( $('.os-animation') );
            onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );
});//]]>  


//spinner

document.querySelector('.dnone').style.visibility='hidden';
        document.querySelector('.main').classList.add('spinner');
        setTimeout(() => {
        document.querySelector('.main').classList.remove('spinner');
        document.querySelector('.dnone').style.visibility="visible";
        }, 800);


//modal content

$('.img-fluid').click( function(){
            $('.modal-body').empty();
            $($(this).parents('div').html()).appendTo('.modal-body');
            $('#firstimage').modal({show:true});
        }
        )