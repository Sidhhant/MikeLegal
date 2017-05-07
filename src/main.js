import $ from "jquery";

function createNoty(message, type) {
    var html = '<div class="alert alert-' + type + ' alert-dismissable page-alert">';    
    html += '<button type="button" class="close"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>';
    html += message;
    html += '</div>';
    setTimeout(function(){ $(html).hide().prependTo('#noty-holder').slideDown(); },	 1000);    
    //$(html).hide().prependTo('#noty-holder').slideDown();
};

$(function(){
    //createNoty('Creating a case allows you to save your research to view later. This can be accessed from your workspace.', 'info');
   //createNoty('Clicking the heart next to answer will save that answer to your briefcase.', 'info');
    //createNoty('Answer saved in your briefcase.', 'info');
    $('.page-alert .close').click(function(e) {
        e.preventDefault();
        $(this).closest('.page-alert').slideUp();
    });

    setTimeout(function(){ $('.page-alert .close').closest('.page-alert').slideUp(); },	 8000);
});

$(function(){
    createNoty('Clicking the heart next to answer will save that answer to your briefcase.', 'info');
    $(".heartImg").on("click", function(){
    	createNoty('Answer saved in your briefcase.', 'info');
    	setTimeout(function(){ $('.page-alert .close').closest('.page-alert').slideUp(); },	 8000);	
	});
    $('.page-alert .close').click(function(e) {
        e.preventDefault();
        $(this).closest('.page-alert').slideUp();
    });

    setTimeout(function(){ $('.page-alert .close').closest('.page-alert').slideUp(); },	 8000);
});


/*
$(document).ready(function() {
    var win = $(window);

    // Each time the user scrolls
    win.scroll(function() {
        // End of the document reached?
        if ($(document).height() - win.height() == win.scrollTop()) {
            $('#loading').show();

            $.ajax({
                url: '',
                dataType: '',
                success: function(html) {
                    $('#posts').append(html);
                    $('#loading').hide();
                }
            });
        }
    });
}); */