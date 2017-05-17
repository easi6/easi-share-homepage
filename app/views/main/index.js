/**
 * Created by klsayhtg on 2017. 5. 16..
 */

// 언어팩 선언.
$.lang = {};

$.lang.ko = {
    'hello': 'Hello, World.',
    'hi': '안녕하세요.'
};

$.lang.en = {
    'hello': 'Hello, World.',
    'hi': 'Hello.'
};

/**
 * setLanguage
 * use $.lang[currentLanguage][languageNumber]
 */
function setLanguage(currentLanguage) {
    $('[data-langStr]').each(function() {
        var $this = $(this);
        $this.html($.lang[currentLanguage][$this.data('langstr')]);
    });
}

// 언어 변경
$('button').click(function() {
    var lang = $(this).data('lang');
    setLanguage(lang);
});

setLanguage('ko');

/*
 추가적으로 유용한 처리.
 1. 브라우저 언어에 따라 최초 언어 셋팅하기
 2. 외부에서 URL ?lang=ja 접근시 셋팅하기
 3. 언어 변경시 쿠키에 언어코드 저장해서 재접속시 쿠키 기준으로 언어 셋팅.
 */