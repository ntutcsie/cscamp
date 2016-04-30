(function($) {
    $('a[title]').tooltip();

    $('#countdown_dashboard').countDown({
        targetDate: {
        'day': 4,
        'month': 7,
        'year': 2016,
        'hour': 9,
        'min': 0,
        'sec': 0
        },
        omitWeeks: true
    });

    $('img').lazyload();

})(jQuery);

wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    mobile: true
});
wow.init();
