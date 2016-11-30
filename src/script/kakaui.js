/**
 * Created by yaoshining on 2016/11/29.
 */
function initTabs() {
    $(document).on('click', '.kakaui-navbar__item',  function () {
        $(this).addClass('kakaui-bar__item_on').siblings('.kakaui-bar__item_on').removeClass('kakaui-bar__item_on');
    });
}


$(function(){
    initTabs();
});