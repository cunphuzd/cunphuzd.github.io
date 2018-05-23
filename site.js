(function($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */
  
    $.fn.visible = function(partial) {
      
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
      
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  
    };
      
  })(jQuery);

$(document).ready(function () {
    $(window).scroll(function () { // check if scroll event happened
        if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
            $('.navbar').removeClass('navbar-dark');
            $('.navbar').addClass('bg-light navbar-light');
        } else {
            $('.navbar').removeClass('bg-light navbar-light');
            $('.navbar').addClass('navbar-dark');
        }
        $("i").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
              el.addClass("animated bounceIn"); 
            } 
        });
    });
});

var scroll = new SmoothScroll('a[href*="#"]');

let images = [
    {img: '1-2.jpg', title: 'South Lake Tahoe 2016', description: 'Fun in the snow with Jerv, Lyn, and Naroeun'},
    {img: '2-2.jpg', title: 'South Lake Tahoe 2016', description: 'Brothers reunited with Jerv and Mike'},
    {img: '3-2.jpg', title: 'South Lake Tahoe 2016', description: 'On the lifts with Jerv and Lyn'},
    {img: '4-1.jpg', title: 'Macau 2014', description: 'Animals interacting with Fat Pig and Mr. Hamster'},
    {img: '5-2.jpg', title: 'Macau 2016', description: 'First friends with Lauryn and Heihei'},
    {img: '6-2.jpg', title: 'Macau 2016', description: 'Dutty Christmas Party with Dutty team members'},
    {img: '7-1.jpg', title: 'Macau 2017', description: 'Relatives in Macau for CNY with Lauryn, Auntie, and Uncle'},
    {img: '8-1.jpg', title: 'Macau 2017', description: 'Korean food with Katie and Lauryn'},
    {img: '9-2.jpg', title: 'Macau 2017', description: 'Dutty Employee Farewell with Dutty team members'},
    {img: '10-1.jpg', title: 'Macau 2017', description: 'Friends and family'},
    {img: '11-1.jpg', title: 'Bay Area 2018', description: 'Family reunion'},
    {img: '12-1.jpg', title: 'HKIA 2017', description: 'En route to San Francisco with Katie, Lauryn and Mike'},
    {img: '13-2.jpg', title: 'San Francisco 2017', description: 'Christmas in the city with Grandma, Lauryn, Katie, and Mike'},
    {img: '14-1.jpg', title: 'Bay Area c. 1986', description: 'Childhood memories with Jerv, Grandma, and Mike'},
    {img: '15-2.jpg', title: 'San Francisco 2018', description: 'Sightseeing with Lauryn and Grandma'}
]

let randomImgArr = [];

let randomImgGen = function() {
    for (let i = 0; i < 6; i++) {
        let randomImg = images[Math.floor(Math.random() * images.length)]
        randomImgArr.push(randomImg)
        images.splice(images.indexOf(randomImg), 1)
    }
}

randomImgGen();

let insertRandomImg = function() {
    for (let i = 0; i < 6; i++) {
        $('.adven' + (i + 1) + '-img').prepend('<img src="img/adventures/' + randomImgArr[i].img + '">')
        $('.adven' + (i + 1) + '-title').prepend(randomImgArr[i].title)
        $('.adven' + (i + 1) + '-description').prepend(randomImgArr[i].description)
    }
}

insertRandomImg();