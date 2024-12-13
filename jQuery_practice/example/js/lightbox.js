$(function () {
    //點小圖，要避免連到另一頁
    //點小圖，要取得a的href的路徑連結            
    //大圖的img(light-img)的src要換成href的路徑
    //點小圖，要打開lightbox-overlay(show)
    //點 X 符號，要把lightbox-overlay(hide)隱藏
    $('.lightbox').on('click', function (event) {
        //點小圖，要避免連到另一頁
        event.preventDefault();
        //點小圖，要取得a的href的路徑連結
        console.log($(this).attr("href"));//從console.log看是否取得正確路徑
        //大圖的img(light-img)的src要換成href的路徑
        let url = $(this).attr("href");
        $('.lightbox-img').attr('src', url);
        //點小圖，要打開lightbox-overlay(show)
        $('.lightbox-overlay').fadeIn();
    })
    //點 X 符號，要把lightbox-overlay(hide)隱藏
    $('.lightbox-close').on('click', function () {
        $('.lightbox-overlay').fadeOut();
    })

    $('.lightbox').on('mouseenter', function () {
        $(this).css({ 'transform': 'scale(1.1)' }, 500)
    }).on('mouseleave', function () {
        $(this).css({ 'transform': 'scale(1)' }, 500)
    })
})