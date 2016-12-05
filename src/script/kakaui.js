/**
 * Created by yaoshining on 2016/11/29.
 */
function initTabs() {
    $(document).on('click', '.kakaui-navbar__item',  function () {
        var $target = $('#' + $(this).data('target'));
        $(this).addClass('kakaui-bar__item_on').siblings('.kakaui-bar__item_on').removeClass('kakaui-bar__item_on');
        $target.addClass('kakaui-tab__content_on').siblings('.kakaui-tab__content').removeClass('kakaui-tab__content_on');
    });
}

function initActionSheet() {
    $(document).on("click", '.kakaui-actionsheet__trigger', function(){
        var $actionSheet = $('#'+$(this).data('target'));
        var style = $(this).data('style') || 'ios';
        var $mask = $actionSheet.siblings('.kakaui-mask');

        if(style === 'ios') {
            initIosActionSheet();
        }
        if(style === 'android') {
            initAndroidActionSheet();
        }

        function initAndroidActionSheet() {
            $mask = $actionSheet.find('.kakaui-mask');
            $actionSheet.fadeIn(200);
            $mask.on('click',function () {
                $actionSheet.fadeOut(200);
            });
        }

        function initIosActionSheet() {
            $actionSheet.addClass('kakaui-actionsheet_toggle');
            function hideActionSheet() {
                $actionSheet.removeClass('kakaui-actionsheet_toggle');
                $mask.fadeOut(200);
            }

            $mask.fadeIn(200, function() {
                $(this).add('.kakaui-actionsheet__cancel').one('click', hideActionSheet);
            });
        }
    });
}

function initMediaBox() {
    $(document).on('change', '.kakaui-media-box .kakaui-check', function() {
        if($(this).is(':checked')) {
            $(this).closest('.kakaui-media-box')
                .addClass('selected')
                .siblings('.kakaui-media-box')
                .removeClass('selected');
        }
    });
}

function initStyle(page) {
    $('.kakaui-square', page).forEach(function(e) {
        $(e).addClass('child-hidden');

        var w = $(e).width(),
              h = $(e).height();

        if(w > h) {
            $(e).height(w);
        }

        if(h > w) {
            $(e).width(h);
        }

        $(e).removeClass('child-hidden');
    });
}

$(document).on('page:afterRender', function(event, page) {
    $('.kakaui-check:checked', page)
        .closest('.kakaui-media-box')
        .addClass('selected');


    setTimeout(function() {
        initStyle(page)
    }, 0);
});

$(function(){
    initTabs();
    initActionSheet();
    initMediaBox();
});