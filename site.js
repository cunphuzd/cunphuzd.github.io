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
    {img: '1.jpg', title: 'Macau 2012', description: 'Dog in the park with Fat Pig and Mike'},
    // {img: '2.jpg', title: 'Macau 2012', description: 'Gathering with original Team Dutty'},
    {img: '3.jpg', title: 'Macau 2012', description: 'Fat Pig'},
    // {img: '6.jpg', title: 'Macau 2013', description: 'Mahjong gathering with Team Dutty'},
    {img: '7.jpg', title: 'Macau 2013', description: 'Fat Pig'},
    {img: '8.jpg', title: 'San Francisco 2013', description: 'High school friends'},
    {img: '9.jpg', title: 'Bay Area 2013', description: 'Dinner with old friends'},
    {img: '10.jpg', title: 'Macau 2014', description: 'Fat Pig'},
    {img: '11.jpg', title: 'Macau 2014', description: 'Fat Pig'},
    // {img: '12.jpg', title: 'Hong Kong 2014', description: 'Katie'},
    {img: '13.jpg', title: 'Macau 2014', description: 'Dutty back office'},
    {img: '14.jpg', title: 'Macau 2014', description: 'Fat Pig observing Mr. Hamster'},
    {img: '15.jpg', title: 'Macau 2014', description: 'Fat Pig observing Mr. Hamster'},
    // {img: '16.jpg', title: 'Macau 2014', description: 'Dutty back office with Katie'},
    // {img: '17.jpg', title: 'Malaysia 2014', description: 'Coffee break with Katie and Mike'},
    {img: '18.jpg', title: 'Macau 2014', description: 'Fat Pig'},
    // {img: '19.jpg', title: 'Macau 2014', description: 'BBQ gathering with Team Dutty'},
    {img: '20.jpg', title: 'Macau 2014', description: 'Patio BBQ'},
    // {img: '21.jpg', title: 'Macau 2014', description: 'Dinner for Katie\'s birthday'},
    // {img: '22.jpg', title: 'Macau 2014', description: 'Portuguese fare with Katie\'s college friends.'},
    {img: '23.jpg', title: 'Macau 2014', description: 'Cunha bazaar in Old Taipa'},
    // {img: '24.jpg', title: 'Macau 2014', description: 'KTV gathering with Team Dutty'},
    // {img: '25.jpg', title: 'Macau 2014', description: 'KTV gathering with Team Dutty'},
    {img: '26.jpg', title: 'Macau 2014', description: 'Fat Pig chillin'},
    {img: '27.jpg', title: 'Hong Kong 2014', description: 'Hong Kong skyline from TST'},
    // {img: '28.jpg', title: 'Hong Kong 2014', description: 'Christmas in Hong Kong'},
    {img: '29.jpg', title: 'Macau 2014', description: 'Fat Pig'},
    // {img: '30.jpg', title: 'Macau 2015', description: 'KTV gathering with Team Dutty'},
    {img: '31.jpg', title: 'Macau 2015', description: 'Fat Pig'},
    {img: '32.jpg', title: 'Macau 2015', description: 'Fat Pig in dog carrier'},
    {img: '33.jpg', title: 'Macau 2015', description: 'Fat Pig in dog carrier'},
    {img: '34.jpg', title: 'Macau 2015', description: 'Fat Pig in dog carrier'},
    {img: '35.jpg', title: 'Macau 2015', description: 'Fat Pig dropping one'},
    // {img: '36.jpg', title: 'Macau 2015', description: 'Dutty back office'},
    {img: '37.jpg', title: 'Macau 2015', description: 'Dutty back office'},
    // {img: '38.jpg', title: 'Macau 2015', description: 'BBQ with friends'},
    {img: '40.jpg', title: 'Macau 2015', description: 'Fat Pig'},
    {img: '41.jpg', title: 'Macau 2015', description: 'KTV gathering with Team Dutty'},
    // {img: '42.jpg', title: 'Hong Kong 2015', description: 'Lunch with Aubrey and Katie'},
    // {img: '43.jpg', title: 'Macau 2015', description: 'Mexican food with Aubrey and Katie'},
    // {img: '44.jpg', title: 'Macau 2015', description: 'Dutty reunion'},
    // {img: '45.jpg', title: 'Macau 2015', description: 'Dutty reunion'},
    // {img: '46.jpg', title: 'Macau 2015', description: 'Dutty reunion'},
    {img: '47.jpg', title: 'Macau 2015', description: 'Fat Pig'},
    {img: '48.jpg', title: 'Macau 2015', description: 'Fat Pig'},
    {img: '49.jpg', title: 'Macau 2015', description: 'Fat Pig'},
    {img: '50.jpg', title: 'Macau 2015', description: 'Fat Pig'},
    {img: '51.jpg', title: 'Macau 2015', description: 'Fat Pig'},
    {img: '52.jpg', title: 'Macau 2016', description: 'Fat Pig yawning'},
    {img: '53.jpg', title: 'South Lake Tahoe, 2016', description: 'Snowboarding with Jerv, Lyn, and Naroeun'},
    {img: '54.jpg', title: 'South Lake Tahoe, 2016', description: 'Snowboarding with Jerv and Mike'},
    {img: '55.jpg', title: 'South Lake Tahoe, 2016', description: 'Snowboarding with Naroeun, Lyn, Jerv, and Mike'},
    {img: '57.jpg', title: 'South Lake Tahoe, 2016', description: 'On the lifts with Lyn and Jerv'},
    {img: '58.jpg', title: 'Bay Area 2016', description: 'Round Table Pizza'},
    {img: '59.jpg', title: 'Berkeley 2016', description: 'Peking Duck with Mom'},
    {img: '60.jpg', title: 'Berkeley 2016', description: 'Peking Duck with George'},
    {img: '61.jpg', title: 'Macau 2016', description: 'Fat Pig sleeping'},
    {img: '62.jpg', title: 'Macau 2016', description: 'Fat Pig sleeping'},
    {img: '63.jpg', title: 'Macau 2016', description: 'Lauryn @ 5 days old sleeping'},
    {img: '64.jpg', title: 'Macau 2016', description: 'Grandma putting Lauryn to sleep'},
    {img: '65.jpg', title: 'Macau 2016', description: 'Lauryn\'s celebration dinner with relatives and friends'},
    // {img: '66.jpg', title: 'Macau 2016', description: 'Lauryn\'s celebration dinner with relatives and friends'},
    {img: '67.jpg', title: 'Macau 2016', description: 'Grandma holding Lauryn at celebration dinner'},
    {img: '68.jpg', title: 'Macau 2016', description: 'Lauryn\'s celebration dinner with Jason, Naroeun, Lyn, and Jerv'},
    {img: '69.jpg', title: 'Macau 2016', description: 'Jerv and Lyn visiting'},
    {img: '70.jpg', title: 'Macau 2016', description: 'Friends visiting with Grandma and Lauryn'},
    {img: '71.jpg', title: 'Macau 2016', description: 'Grandma feeding Lauryn'},
    {img: '72.jpg', title: 'Macau 2016', description: 'Lauryn sleeping'},
    // {img: '73.jpg', title: 'Macau 2016', description: 'Katie holding Lauryn'},
    {img: '74.jpg', title: 'Macau 2016', description: 'Lauryn curious about the world'},
    {img: '75.jpg', title: 'Macau 2016', description: 'Lei holding Fat Pig'},
    {img: '76.jpg', title: 'Macau 2016', description: 'Lauryn learning how to crawl'},
    {img: '77.jpg', title: 'Macau 2016', description: 'Lauryn smiling'},
    {img: '78.jpg', title: 'Macau 2016', description: 'Lauryn sitting'},
    // {img: '79.jpg', title: 'Macau 2016', description: 'Christmas party with Team Dutty'},
    {img: '80.jpg', title: 'Macau 2016', description: 'Christmas party with Team Dutty'},
    {img: '81.jpg', title: 'Macau 2016', description: 'Lauryn and Mike'},
    // {img: '82.jpg', title: 'Macau 2016', description: 'Lauryn bundled up'},
    {img: '83.jpg', title: 'Macau 2017', description: 'Lauryn in baby carrier'},
    {img: '84.jpg', title: 'Macau 2017', description: 'Lauryn at Dutty factory'},
    {img: '85.jpg', title: 'Macau 2017', description: 'Lauryn'},
    {img: '86.jpg', title: 'Macau 2017', description: 'Lauryn with Auntie and Uncle'},
    {img: '87.jpg', title: 'Macau 2017', description: 'Lauryn chomping down'},
    {img: '88.jpg', title: 'Macau 2017', description: 'Lauryn sleeping with stuffed turtle'},
    {img: '89.jpg', title: 'Macau 2017', description: 'Lauryn chillin'},
    {img: '90.jpg', title: 'Macau 2017', description: 'Lauryn playing'},
    // {img: '91.jpg', title: 'Macau 2017', description: 'Katie feeding Lauryn'},
    // {img: '92.jpg', title: 'Macau 2017', description: 'Korean BBQ with Lauryn and Katie'},
    // {img: '93.jpg', title: 'Macau 2017', description: 'Korean BBQ with Lauryn and Katie'},
    // {img: '94.jpg', title: 'Macau 2017', description: 'Katie and Lauryn with friends'},
    {img: '95.jpg', title: 'Macau 2017', description: 'Fat Pig dropping one'},
    {img: '96.jpg', title: 'Macau 2017', description: 'Lauryn sleeping'},
    {img: '97.jpg', title: 'Macau 2017', description: 'Lauryn playing'},
    // {img: '98.jpg', title: 'Macau 2017', description: 'Lauryn and Katie sleeping'},
    // {img: '99.jpg', title: 'Macau 2017', description: 'Katie taking Lauryn for a stroll'},
    {img: '100.jpg', title: 'Macau 2017', description: 'Lauryn sleeping'},
    {img: '101.jpg', title: 'Macau 2017', description: 'Lauryn playing with Fat Pig'},
    {img: '102.jpg', title: 'Macau 2017', description: 'Lauryn playing with Fat Pig'},
    // {img: '103.jpg', title: 'Macau 2017', description: 'Thai food with Grandma, Lauryn, and Katie'},
    // {img: '104.jpg', title: 'Macau 2017', description: 'Gathering with Team Dutty'},
    {img: '105.jpg', title: 'Macau 2017', description: 'Lauryn\'s mess'},
    {img: '106.jpg', title: 'Macau 2017', description: 'Lauryn in baby carrier'},
    // {img: '107.jpg', title: 'Macau 2017', description: 'Dinner with friends'},
    {img: '108.jpg', title: 'Macau 2017', description: 'Lauryn and Mike sleeping'},
    {img: '109.jpg', title: 'Macau 2017', description: 'Lauryn clapping'},
    {img: '111.jpg', title: 'Macau 2017', description: 'Lauryn\'s mistletoe'},
    {img: '112.jpg', title: 'HKIA 2017', description: 'Lauryn playing'},
    // {img: '113.jpg', title: 'HKIA 2017', description: 'En route to San Francisco with Katie, Lauryn, and Mike'},
    // {img: '114.jpg', title: 'San Francisco 2017', description: 'Christmas dinner with Grandma, Lauryn, Katie, and Mike'},
    // {img: '115.jpg', title: 'Bay Area 2017', description: 'Hot Pot family gathering with Jerv, Lyn, Lauryn, Mike, Grandma, and Katie'},
    {img: '116.jpg', title: 'San Francisco 2018', description: 'Exploring Pier 39 with Grandma and Lauryn'},
    // {img: '117.jpg', title: 'San Francisco 2018', description: 'Exploring Pier 39 with Grandma, Lauryn, and Katie'},
    // {img: '118.jpg', title: 'San Francisco 2018', description: 'Exploring Pier 39 with Mike, Lauryn, and Katie'},
    // {img: '119.jpg', title: 'San Francisco 2018', description: 'Exploring Ghirardelli square with Katie'},
    // {img: '120.jpg', title: 'San Francisco 2018', description: 'Exploring Pier 39 with Mike and Katie'},
    {img: '121.jpg', title: 'Bay Area 2018', description: 'Lauryn jetlagged'},
    {img: '122.jpg', title: 'Bay Area c. 1988', description: 'Childhood memories'},
    // {img: '123.jpg', title: 'Anaheim 2018', description: 'Disneyland with Mike, Katie, Lauryn, and Grandma'},
    // {img: '124.jpg', title: 'Bay Area 2018', description: 'Family picture with Lyn, Lauryn, Mike, Grandma, Jerv, and Katie'},
    {img: '125.jpg', title: 'Anaheim 2018', description: 'Disneyland\'s Tomorrowland'},
    {img: '126.jpg', title: 'Anaheim 2018', description: 'Lauryn eating'},
    {img: '127.jpg', title: 'San Francisco 2018', description: 'Exploring the city with Lauryn and Grandma'},
    {img: '128.jpg', title: 'SFO 2018', description: 'Lauryn sleeping in flight'},
    {img: '129.jpg', title: 'Macau 2018', description: 'Friends in Macau with Arlito and Doug'},
    // {img: '130.jpg', title: 'Macau 2018', description: 'Friends in Macau with Arlito, Doug, Mike, and Katie'},
    // {img: '131.jpg', title: 'Macau 2018', description: 'CNY dinner with Mike, Katie, Lauryn, Grandma, Grandpa, and Hugo'},
    // {img: '132.jpg', title: 'Macau 2018', description: 'Relaxing with Katie, Lauryn, and Mike'},
    // {img: '133.jpg', title: 'Macau 2018', description: 'Afternoon tea with Lauryn and Katie'},
    // {img: '134.jpg', title: 'Macau 2018', description: 'KTV gathering with Team Dutty'},
    // {img: '135.jpg', title: 'Macau 2018', description: 'Lauryn and Katie at the park'},
    // {img: '136.jpg', title: 'Macau 2018', description: 'Katie and Lauryn sleeping'},
    // {img: '137.jpg', title: 'Macau 2018', description: 'At the park with Lauryn, Mike, and Katie'},
    {img: '138.jpg', title: 'Macau 2018', description: 'Lauryn playing'},
    // {img: '139.jpg', title: 'Macau 2018', description: 'Lauryn and Katie'}
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