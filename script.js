$(document).ready(function() {
    /*Active progress bars of skills. Takes value from tag and fill the bar*/
    function progress($element) {
    	$this=$element;
    	prWidth = $(this).data("value")* $element.width() / 100;
    	$this.find('.bar_filling').each(function(){
    		var progressBarVal = $(this).find('.bar_value').data('value');
    		$(this).find('.bar_value').text(progressBarVal + "% ");

    		var progressBarWidth = progressBarVal*$element.width()/100;
    		$(this).animate({ width: progressBarWidth }, 2500);
    	})  	
    }

    /*showin/hiding the cards with projects from portfolio. Allows to see projects from certain category */
    function showPortfolio(category){
        $("#myWorks").find('li').siblings('li').removeClass('open_categories').children('div').hide();
        $("#myWorks").find('li').each(function(){
            if ($(this).data('category').indexOf(category) >= 0){
                $(this).addClass('open_categories').children('div').show();
            } else if (category == "All") {
                $(this).addClass('open_categories').children('div').show();
            };
        })    
    }



    progress($('#progressBar'));


    $("#myWorks").find('li').not('.active, .open_categories').children('div').hide();
    $('#openCategory').on('click', 'li', function(e){
    	e.preventDefault();
        var activeCategory = $(this).text().substring(0, 3);
        $(this).siblings().removeClass('active');
    	$(this).addClass('active');
        showPortfolio(activeCategory);
    })


    $("#slide_bar").mousedown(function(e){
        $this=$(this);
        $this.mousemove(function (){
            $(this).css({
                "left": e.pageX - ($(this).width() / 2)
            });
            console.log(e.pageX)
        })
    })


    $(window).scroll(function () {
        /* parallax effect */ 
        $(".header").css("background-position","50% " + ($(this).scrollTop() / 1.3) + "px");


        $(".twitter").css("background-position","50% " + ($(this).scrollTop() / 10) + "px");

        /*sticky menu*/
        var headerHight = $(".header").height();
        if ($(window).scrollTop() > headerHight) {
             $(".navigation").addClass("fixed").fadeIn();
             $(".about").css({
                 "margin-top": $(".navigation").height()
            })
        } else {    
             $(".navigation").removeClass("fixed") ;
             $(".about").css({
                 "margin-top": 0
            });
        }
    });

    /*SMOOTH SCROLLING to the anchors
     * find the anchor link and smoothly go to choosen id minus height of fixed menu
     */
    var scroll = function() {
        $('.navigation').on('click', 'a', function() {
            if (location.pathname.replace(/^\//, '') ==
                this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $(
                    '[name=' + this.hash.slice(1) + ']'
                );
                if (target.length) {
                    var position = target.offset().top ;
                    $('html,body').animate({
                        scrollTop: position
                    }, 1000);
                    return false;
                }
            }
        });
    };

    scroll();


     
});