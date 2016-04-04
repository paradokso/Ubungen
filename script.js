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
progress($('#progressBar'));

$("#myWorks").find('li').not('.active, .open_categories').children('div').hide();

$('#openCategory').on('click', 'li', function(e){
	e.preventDefault();

    var activeCategory = $(this).text().substring(0, 3);
    
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
    showPortfolio(activeCategory);
})

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