//公共头部
$("#wrap_header").load("common.html #hd_common_header",function(){
	$(".hd_xl").mouseenter(function(){
	//console.log($(this))
		$("#wzdh").show();
		
	})
	$("#wzdh").mouseleave(function(){
		$("#wzdh").hide();		
	})
	//二级菜单
	$(".hd_banTopL p:first").mouseenter(function(){	
		$(".hd_banTopR_ul").css("display","block");
		$(".hd_banTopR_ul").mouseenter(function(){
			$(".hd_banTopR_ul li").mouseenter(function(){
				$(this).css({
					"background":"#333"
				})
				$(this).find("h5").css({
					"color":"#fff",
					
				}).end().find("a").css({
					"color":"#fff",
				})
				$(this).find("img:first").css({
					"display":"none",
					
				})
				$(this).find("h5 img:last").css({
					"display":"block",
					
				})
				//console.log($(this).find("h5 img:last"))
				$(this).find("i").animate({"margin-left":"12px"},50)
				
				
				$(this).on("mouseenter","a",function(){
					//console.log($(this))
					$(this).css({
						"border-bottom":"1px solid #fff"
					})
				}).on("mouseleave","a",function(){
					$(this).css({
						"border-bottom":"0"
					})
				})
				//ej
				$("#ej").show()
				$("#ej5 a,h6").css({
					"color":"",
					"border":0
				})	
				//$("#ej5").show()
				
			}).mouseleave(function(){
				//console.log($(this))
				$(this).css({
					"background":""
				})
				$(this).find("h5").css({
					"color":"#000",
				}).end().find("a").css({
					"color":"#555",
				})
				$(this).find("img:first").css({
					"display":"block",
					
				})
				$(this).find("h5 img:last").css({
					"display":"none",
					
				})
				$(this).find("i").animate({"margin-left":0},50)
				$("#ej").hide()
				//$("#ej5").hide()
			})
		}).mouseleave(function(){
			$(".hd_banTopR_ul").css("display","none");
		})
		
	})
})
	//console.log("1")
$("#detail_bottom").on("click","li",function(){
	//console.log($("#detail_bottom").find("s"));
	var index = $(this).index();
	$("#detail_bottom").find("s").hide();
	$(this).find("s").show();
	
	$(this).css({
		"border-color":"#c80a28",
	}).siblings().css({
		"border-color":"#fff",
	})
	$("#detail_small img").eq(index).show().siblings().hide();
	$("#detail_big img").eq(index).show().siblings().hide();
})
$("#detail_small").mouseenter(function(){
	//console.log($(this))
	$("#detail_big").show();
	$("#mask").show();
	$("#layer").show();
	
}).mouseleave(function(){
	$("#detail_big").hide();
	$("#mask").hide();
	$("#layer").hide();
}).mousemove(function(e){
	var e = e||event;
		var x = e.pageX-$("#detail_small").offset().left-$("#mask").outerWidth()/2;
		var y = e.pageY-$("#detail_small").offset().top-$("#mask").outerHeight()/2;
		var maxL= $("#detail_small").outerWidth()-$("#mask").outerWidth();
		var maxT= $("#detail_small").outerHeight()-$("#mask").outerHeight();
		x=Math.min(maxL,Math.max(0,x));
		y=Math.min(maxT,Math.max(0,y));
		$("#mask").css({
			"left":x,
			"top":y,
		})
		var bigImgX = x*$(".bigImage").width()/$("#detail_small").width();
		var bigImgY = y*$(".bigImage").height()/$("#detail_small").height();
		
		$(".bigImage").css({
			"left":-bigImgX,
			"top":-bigImgY
		})
		
})
//选择尺码
console.log("li")
$(".sel_size").on("click","li:not(li:last)",function(){
	$(".sel_size").find("li").css({
		"border":"1px solid #ddd"
	})
	$(this).css({
		"border":"1px solid #c80a28"
	})
	$(this).parent().find("s").hide();
	$(this).find("s").show();	
})
