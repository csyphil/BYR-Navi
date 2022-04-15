// hitokoto.js

$.getJSON('https://international.v1.hitokoto.cn', function (data) {
    $('#hitokoto').attr({
        'href': `//hitokoto.cn?id=${data.id}`,
        'target': '_blank'
    }).append(data.hitokoto).append(
        $('<div>').addClass('detail').text(data.from)
    );
}).fail(function () {
    $('#hitokoto').attr({
        'href': 'https://google.com/',
        'target': '_blank'
    }).html('<i class="lightbulb icon"></i>一言获取失败...<div class="detail">错误</div>');
});
