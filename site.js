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

/*let images = [
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
]*/

let images = [
    {img: '1.jpg', title: 'Macau 2012', description: 'Dog in the park with Fat Pig and Mike'},
    {img: '2.jpg', title: 'Macau 2012', description: 'Gathering with original Team Dutty'},
    {img: '3.jpg', title: 'Macau 2012', description: 'Fat Pig'},
    {img: '6.jpg', title: 'Macau 2013', description: 'Mahjong gathering with Team Dutty'},
    {img: '7.jpg', title: 'Macau 2013', description: 'Fat Pig'},
    {img: '8.jpg', title: 'San Francisco 2013', description: 'High school friends'},
    {img: '9.jpg', title: 'Bay Area 2013', description: 'Dinner with old friends'},
    {img: '10.jpg', title: 'Macau 2014', description: 'Fat Pig'},
    {img: '11.jpg', title: 'Macau 2014', description: 'Fat Pig'},
    {img: '12.jpg', title: 'Hong Kong 2014', description: 'Katie'},
    {img: '13.jpg', title: 'Macau 2014', description: 'Dutty back office'},
    {img: '14.jpg', title: 'Macau 2014', description: 'Fat Pig observing Mr. Hamster'},
    {img: '15.jpg', title: 'Macau 2014', description: 'Fat Pig observing Mr. Hamster'},
    {img: '16.jpg', title: 'Macau 2014', description: 'Dutty back office with Katie'},
    {img: '17.jpg', title: 'Malaysia 2014', description: 'Coffee break with Katie and Mike'},
    {img: '18.jpg', title: 'Macau 2014', description: 'Fat Pig'},
    {img: '19.jpg', title: 'Macau 2014', description: 'BBQ gathering with Team Dutty'},
    {img: '20.jpg', title: 'Macau 2014', description: 'Patio BBQ'},
    {img: '21.jpg', title: 'Macau 2014', description: 'Dinner for Katie\'s birthday'},
    {img: '22.jpg', title: 'Macau 2014', description: 'Portuguese fare with Katie\'s college friends.'},
    {img: '23.jpg', title: 'Macau 2014', description: 'Cunha bazaar in Old Taipa'},
    {img: '24.jpg', title: 'Macau 2014', description: 'KTV gathering with Team Dutty'},
    {img: '25.jpg', title: 'Macau 2014', description: 'KTV gathering with Team Dutty'},
    {img: '26.jpg', title: 'Macau 2014', description: 'Fat Pig chillin'},
    {img: '27.jpg', title: 'Hong Kong 2014', description: 'Hong Kong skyline from TST'},
    {img: '28.jpg', title: 'Hong Kong 2014', description: 'Christmas in Hong Kong'},
    {img: '29.jpg', title: 'Macau 2014', description: 'Fat Pig'},
    {img: '30.jpg', title: 'Macau 2014', description: 'KTV gathering with Team Dutty'},
    {img: '31.jpg', title: 'Bay Area c. 1986', description: 'Childhood memories with Jerv, Grandma, and Mike'},
    {img: '32.jpg', title: 'San Francisco 2018', description: 'Sightseeing with Lauryn and Grandma'},
    {img: '33.jpg', title: 'South Lake Tahoe 2016', description: 'Fun in the snow with Jerv, Lyn, and Naroeun'},
    {img: '34.jpg', title: 'South Lake Tahoe 2016', description: 'Brothers reunited with Jerv and Mike'},
    {img: '35.jpg', title: 'South Lake Tahoe 2016', description: 'On the lifts with Jerv and Lyn'},
    {img: '36.jpg', title: 'Macau 2014', description: 'Animals interacting with Fat Pig and Mr. Hamster'},
    {img: '37.jpg', title: 'Macau 2016', description: 'First friends with Lauryn and Heihei'},
    {img: '38.jpg', title: 'Macau 2016', description: 'Dutty Christmas Party with Dutty team members'},
    {img: '40.jpg', title: 'Macau 2017', description: 'Korean food with Katie and Lauryn'},
    {img: '41.jpg', title: 'Macau 2017', description: 'Dutty Employee Farewell with Dutty team members'},
    {img: '42.jpg', title: 'Macau 2017', description: 'Friends and family'},
    {img: '43.jpg', title: 'Bay Area 2018', description: 'Family reunion'},
    {img: '44.jpg', title: 'HKIA 2017', description: 'En route to San Francisco with Katie, Lauryn and Mike'},
    {img: '45.jpg', title: 'San Francisco 2017', description: 'Christmas in the city with Grandma, Lauryn, Katie, and Mike'},
    {img: '46.jpg', title: 'Bay Area c. 1986', description: 'Childhood memories with Jerv, Grandma, and Mike'},
    {img: '47.jpg', title: 'San Francisco 2018', description: 'Sightseeing with Lauryn and Grandma'},
    {img: '48.jpg', title: 'South Lake Tahoe 2016', description: 'Fun in the snow with Jerv, Lyn, and Naroeun'},
    {img: '49.jpg', title: 'South Lake Tahoe 2016', description: 'Brothers reunited with Jerv and Mike'},
    {img: '50.jpg', title: 'South Lake Tahoe 2016', description: 'On the lifts with Jerv and Lyn'},
    {img: '51.jpg', title: 'Macau 2014', description: 'Animals interacting with Fat Pig and Mr. Hamster'},
    {img: '52.jpg', title: 'Macau 2016', description: 'First friends with Lauryn and Heihei'},
    {img: '53.jpg', title: 'Macau 2016', description: 'Dutty Christmas Party with Dutty team members'},
    {img: '54.jpg', title: 'Macau 2017', description: 'Relatives in Macau for CNY with Lauryn, Auntie, and Uncle'},
    {img: '55.jpg', title: 'Macau 2017', description: 'Korean food with Katie and Lauryn'},
    {img: '57.jpg', title: 'Macau 2017', description: 'Friends and family'},
    {img: '58.jpg', title: 'Bay Area 2018', description: 'Family reunion'},
    {img: '59.jpg', title: 'HKIA 2017', description: 'En route to San Francisco with Katie, Lauryn and Mike'},
    {img: '60.jpg', title: 'San Francisco 2017', description: 'Christmas in the city with Grandma, Lauryn, Katie, and Mike'},
    {img: '61.jpg', title: 'Bay Area c. 1986', description: 'Childhood memories with Jerv, Grandma, and Mike'},
    {img: '62.jpg', title: 'San Francisco 2018', description: 'Sightseeing with Lauryn and Grandma'},
    {img: '63.jpg', title: 'South Lake Tahoe 2016', description: 'Fun in the snow with Jerv, Lyn, and Naroeun'},
    {img: '64.jpg', title: 'South Lake Tahoe 2016', description: 'Brothers reunited with Jerv and Mike'},
    {img: '65.jpg', title: 'South Lake Tahoe 2016', description: 'On the lifts with Jerv and Lyn'},
    {img: '66.jpg', title: 'Macau 2014', description: 'Animals interacting with Fat Pig and Mr. Hamster'},
    {img: '67.jpg', title: 'Macau 2016', description: 'First friends with Lauryn and Heihei'},
    {img: '68.jpg', title: 'Macau 2016', description: 'Dutty Christmas Party with Dutty team members'},
    {img: '69.jpg', title: 'Macau 2017', description: 'Relatives in Macau for CNY with Lauryn, Auntie, and Uncle'},
    {img: '70.jpg', title: 'Macau 2017', description: 'Korean food with Katie and Lauryn'},
    {img: '71.jpg', title: 'Macau 2017', description: 'Dutty Employee Farewell with Dutty team members'},
    {img: '72.jpg', title: 'Macau 2017', description: 'Friends and family'},
    {img: '73.jpg', title: 'Bay Area 2018', description: 'Family reunion'},
    {img: '74.jpg', title: 'HKIA 2017', description: 'En route to San Francisco with Katie, Lauryn and Mike'},
    {img: '75.jpg', title: 'San Francisco 2017', description: 'Christmas in the city with Grandma, Lauryn, Katie, and Mike'},
    {img: '76.jpg', title: 'Bay Area c. 1986', description: 'Childhood memories with Jerv, Grandma, and Mike'},
    {img: '77.jpg', title: 'San Francisco 2018', description: 'Sightseeing with Lauryn and Grandma'},
    {img: '78.jpg', title: 'South Lake Tahoe 2016', description: 'Fun in the snow with Jerv, Lyn, and Naroeun'},
    {img: '79.jpg', title: 'South Lake Tahoe 2016', description: 'Brothers reunited with Jerv and Mike'},
    {img: '80.jpg', title: 'South Lake Tahoe 2016', description: 'On the lifts with Jerv and Lyn'},
    {img: '81.jpg', title: 'Macau 2014', description: 'Animals interacting with Fat Pig and Mr. Hamster'},
    {img: '82.jpg', title: 'Macau 2016', description: 'First friends with Lauryn and Heihei'},
    {img: '83.jpg', title: 'Macau 2016', description: 'Dutty Christmas Party with Dutty team members'},
    {img: '84.jpg', title: 'Macau 2017', description: 'Relatives in Macau for CNY with Lauryn, Auntie, and Uncle'},
    {img: '85.jpg', title: 'Macau 2017', description: 'Korean food with Katie and Lauryn'},
    {img: '86.jpg', title: 'Macau 2017', description: 'Dutty Employee Farewell with Dutty team members'},
    {img: '87.jpg', title: 'Macau 2017', description: 'Friends and family'},
    {img: '88.jpg', title: 'Bay Area 2018', description: 'Family reunion'},
    {img: '89.jpg', title: 'HKIA 2017', description: 'En route to San Francisco with Katie, Lauryn and Mike'},
    {img: '90.jpg', title: 'San Francisco 2017', description: 'Christmas in the city with Grandma, Lauryn, Katie, and Mike'},
    {img: '91.jpg', title: 'Bay Area c. 1986', description: 'Childhood memories with Jerv, Grandma, and Mike'},
    {img: '92.jpg', title: 'San Francisco 2018', description: 'Sightseeing with Lauryn and Grandma'},
    {img: '93.jpg', title: 'South Lake Tahoe 2016', description: 'Fun in the snow with Jerv, Lyn, and Naroeun'},
    {img: '94.jpg', title: 'South Lake Tahoe 2016', description: 'Brothers reunited with Jerv and Mike'},
    {img: '95.jpg', title: 'South Lake Tahoe 2016', description: 'On the lifts with Jerv and Lyn'},
    {img: '96.jpg', title: 'Macau 2014', description: 'Animals interacting with Fat Pig and Mr. Hamster'},
    {img: '97.jpg', title: 'Macau 2016', description: 'First friends with Lauryn and Heihei'},
    {img: '98.jpg', title: 'Macau 2016', description: 'Dutty Christmas Party with Dutty team members'},
    {img: '99.jpg', title: 'Macau 2017', description: 'Relatives in Macau for CNY with Lauryn, Auntie, and Uncle'},
    {img: '100.jpg', title: 'Macau 2017', description: 'Korean food with Katie and Lauryn'},
    {img: '101.jpg', title: 'Macau 2017', description: 'Dutty Employee Farewell with Dutty team members'},
    {img: '102.jpg', title: 'Macau 2017', description: 'Friends and family'},
    {img: '103.jpg', title: 'Bay Area 2018', description: 'Family reunion'},
    {img: '104.jpg', title: 'HKIA 2017', description: 'En route to San Francisco with Katie, Lauryn and Mike'},
    {img: '105.jpg', title: 'San Francisco 2017', description: 'Christmas in the city with Grandma, Lauryn, Katie, and Mike'},
    {img: '106.jpg', title: 'Bay Area c. 1986', description: 'Childhood memories with Jerv, Grandma, and Mike'},
    {img: '107.jpg', title: 'San Francisco 2018', description: 'Sightseeing with Lauryn and Grandma'},
    {img: '108.jpg', title: 'South Lake Tahoe 2016', description: 'Fun in the snow with Jerv, Lyn, and Naroeun'},
    {img: '109.jpg', title: 'South Lake Tahoe 2016', description: 'Brothers reunited with Jerv and Mike'},
    {img: '111.jpg', title: 'Macau 2014', description: 'Animals interacting with Fat Pig and Mr. Hamster'},
    {img: '112.jpg', title: 'Macau 2016', description: 'First friends with Lauryn and Heihei'},
    {img: '113.jpg', title: 'Macau 2016', description: 'Dutty Christmas Party with Dutty team members'},
    {img: '114.jpg', title: 'Macau 2017', description: 'Relatives in Macau for CNY with Lauryn, Auntie, and Uncle'},
    {img: '115.jpg', title: 'Macau 2017', description: 'Korean food with Katie and Lauryn'},
    {img: '116.jpg', title: 'Macau 2017', description: 'Dutty Employee Farewell with Dutty team members'},
    {img: '117.jpg', title: 'Macau 2017', description: 'Friends and family'},
    {img: '118.jpg', title: 'Bay Area 2018', description: 'Family reunion'},
    {img: '119.jpg', title: 'HKIA 2017', description: 'En route to San Francisco with Katie, Lauryn and Mike'},
    {img: '120.jpg', title: 'San Francisco 2017', description: 'Christmas in the city with Grandma, Lauryn, Katie, and Mike'},
    {img: '121.jpg', title: 'Macau 2014', description: 'Animals interacting with Fat Pig and Mr. Hamster'},
    {img: '122.jpg', title: 'Macau 2016', description: 'First friends with Lauryn and Heihei'},
    {img: '123.jpg', title: 'Macau 2016', description: 'Dutty Christmas Party with Dutty team members'},
    {img: '124.jpg', title: 'Macau 2017', description: 'Relatives in Macau for CNY with Lauryn, Auntie, and Uncle'},
    {img: '125.jpg', title: 'Macau 2017', description: 'Korean food with Katie and Lauryn'},
    {img: '126.jpg', title: 'Macau 2017', description: 'Dutty Employee Farewell with Dutty team members'},
    {img: '127.jpg', title: 'Macau 2017', description: 'Friends and family'},
    {img: '128.jpg', title: 'Bay Area 2018', description: 'Family reunion'},
    {img: '129.jpg', title: 'HKIA 2017', description: 'En route to San Francisco with Katie, Lauryn and Mike'},
    {img: '130.jpg', title: 'San Francisco 2017', description: 'Christmas in the city with Grandma, Lauryn, Katie, and Mike'},
    {img: '131.jpg', title: 'Macau 2014', description: 'Animals interacting with Fat Pig and Mr. Hamster'},
    {img: '132.jpg', title: 'Macau 2016', description: 'First friends with Lauryn and Heihei'},
    {img: '133.jpg', title: 'Macau 2016', description: 'Dutty Christmas Party with Dutty team members'},
    {img: '134.jpg', title: 'Macau 2017', description: 'Relatives in Macau for CNY with Lauryn, Auntie, and Uncle'},
    {img: '135.jpg', title: 'Macau 2017', description: 'Korean food with Katie and Lauryn'},
    {img: '136.jpg', title: 'Macau 2017', description: 'Dutty Employee Farewell with Dutty team members'},
    {img: '137.jpg', title: 'Macau 2017', description: 'Friends and family'},
    {img: '138.jpg', title: 'Bay Area 2018', description: 'Family reunion'},
    {img: '139.jpg', title: 'Bay Area 2018', description: 'Family reunion'}
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