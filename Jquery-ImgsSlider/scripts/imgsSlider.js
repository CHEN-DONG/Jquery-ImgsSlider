(function ($) {

    $.fn.extend({
        ImgsSlider: function ImgsSlider(options) {
            var element = this;
            var defaults = {
                curimg: "",//第一张图片的url
                imgarray: []//所有图片url的集合
            };
            options = $.extend(defaults, options);

            var methods = {

                render: function render() {
                    var html = '';
                    //将当前照片在第一个显示
                    var imgListHtml = '<img src="' + options.curimg + '" id="0" style="left:0">';
                    $.each(options.imgarray, function (index) {

                        // 计算之后每一个图片的位置
                        var leftNumber = ((parseInt(index) + 1) * 20) + "%";
                        imgListHtml += '<img src="' + this + '" id="' + parseInt(index + 1) + '" style="left:' + leftNumber + '">'

                    });
                    // 渲染HTML
                    html = '<div class="img-slider">\
                                    <div class="cur-img">\
                                        <div id="preimg-btn">\
                                            <img src="assets/left-arrow.png">\
                                        </div>\
                                        <img class="now-img" src="'+ options.curimg + '" id="0">\
                                        <div id="nextimg-btn">\
                                            <img src="assets/right-arrow.png">\
                                        </div>\
                                    </div>\
                                     <div class="wd-list">\
                                        <div class="wd-control"></div>\
                                     </div>\
                                </div>';
                    $(element).append(html);
                    // 渲染图片列表
                    $('.wd-control').append(imgListHtml);
                },
                // 左右按钮点击事件
                btnClick: function () {

                    //点击下一张图片按钮
                    $('#nextimg-btn').click(function () {

                        var curNumber = parseInt($('.now-img').attr('id'));
                        var nextNumber = curNumber + 1;
                        var curId = "#" + curNumber;
                        var nextId = "#" + nextNumber;
                        var nextUrl = $('.wd-control').find(nextId).attr("src");
                        // 判断是否为最后一张图片
                        if (curNumber < options.imgarray.length) {

                            $('.now-img').attr({ 'src': nextUrl, 'id': nextNumber });
                            var moveNumber = nextNumber * -20 + "%";
                            $('.wd-control').animate({ left: moveNumber }, "slow")

                        }

                    });

                    //点击上一张图片按钮
                    $('#preimg-btn').click(function () {

                        var curNumber = parseInt($('.now-img').attr('id'));
                        var preNumber = curNumber - 1;
                        var curId = "#" + curNumber;
                        var preId = "#" + preNumber;
                        var preUrl = $('.wd-control').find(preId).attr("src");

                        // 判断是否为第一张图片
                        if (curNumber > 0) {

                            $('.now-img').attr({ 'src': preUrl, 'id': preNumber });
                            var moveNumber = preNumber * -20 + "%";
                            $('.wd-control').animate({ left: moveNumber }, "slow");

                        }
                    });

                },
                // 点击小图片触发的事件
                imgClick: function () {

                    $('.wd-control').find('img').click(function () {

                        var clickNumber = parseInt($(this).attr('id'));
                        var clickUrl = $(this).attr('src');
                        $('.now-img').attr({ 'src': clickUrl, 'id': clickNumber });
                        var moveNumber = clickNumber * -20 + "%";
                        $('.wd-control').animate({ left: moveNumber }, "slow");

                    });
                }
            };
            (function init(options) {
                methods.render();
                methods.btnClick();
                methods.imgClick();
            })(options);
        }
    });
})($)