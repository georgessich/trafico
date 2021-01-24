
$('.tab-title').on('click', function() {
    $('.tab-title .panel').not($(this).next()).slideUp(250);
    $(this).next().slideToggle(500);
});

