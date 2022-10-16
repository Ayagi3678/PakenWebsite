var headerH = $("#header").outerHeight(true);//headerの高さを取得    

//スクロール途中からヘッダーの高さを変化させるための設定を関数でまとめる
function FixedAnime() {
	//ヘッダーの高さを取得
	var scroll = $(window).scrollTop();
	if (scroll >= headerH){//ヘッダーの高さを超えたら
        $('#header').addClass('HeightMin');//#headerについているHeightMinというクラス名を付与
	}else{
        $('#header').removeClass('HeightMin');//HeightMinというクラス名を除去
	}    
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	FixedAnime();//スクロール途中からヘッダーの高さを変化させる関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	FixedAnime();//スクロール途中からヘッダーの高さを変化させる関数を呼ぶ
});
$('#page-link a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top;	//idの上部の距離を取得
	$('body,html').animate({scrollTop: pos}, 400); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
});