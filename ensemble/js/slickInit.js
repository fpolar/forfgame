/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    $('.slideshow').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        autoplaySpeed: 4000,
        autoplay: true,
        arrows: true
    });
});
$(document).ready(function () {
    $('#crew').slick({
        slidesToShow: 5,
        slidesToScroll: 4,
        dots: true,
        autoplaySpeed: 6000,
        autoplay: true,
        arrows: true
    });
});
