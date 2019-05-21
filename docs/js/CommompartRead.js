//ヘッダ用読み込み関数
function header(rootDir){
    $.ajax({
        url: rootDir + "include/header.html", // 読み込むHTMLファイル/ディレクトリー変更
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir); 
            document.write(html);
        }
    });
}

//メニューバー用読み込み関数
function menubar(rootDir){
    $.ajax({
        url: rootDir + "include/menubar.html", // 読み込むHTMLファイル/ディレクトリー変更
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir); 
            document.write(html);
        }
    });
}
