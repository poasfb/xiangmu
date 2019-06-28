"use strict";

var count = 1;
setInterval(function () {
	if ($(".lun li").length == count) {
		count = 0;
	}

	$(".lun li").eq(count).addClass("touming").siblings().removeClass();

	$(".lundao li").eq(count).addClass("lundao01").siblings().removeClass();
	count++;
}, 1500);
$(".lundao li").click(function () {
	if ($(".lun li").length == count) {
		count = 0;
	}
	$(".lun li").eq(count).addClass("touming").siblings().removeClass();
});
//轮播JS

//$(".lunlie li:has(ul)").mouseover(function(){
//	$(this).children("ul").css("display","block")
//}).mouseout(function(){
//	$(this).children("ul").css("display","none")
//})
console.log($(".lunlie"));
$(".lunlie li").click(function () {
	console.log($(this).eq());
	$(".yin01").eq($(this).eq()).fadeIn();
});

var lun = document.querySelectorAll(".lunlie")[0];
console.log(lun);
var nei1 = document.querySelectorAll(".nei1");
console.log(nei1);