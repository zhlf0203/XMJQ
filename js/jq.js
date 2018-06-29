/*
* @Author: msi-pc
* @Date:   2018-06-22 22:15:35
* @Last Modified by:   msi-pc
* @Last Modified time: 2018-06-27 23:01:42
*/
$(function(){
	// 下拉
	$("#qqq1").mouseenter(function(){
		$("#qqq2").stop(true);
		$("#qqq2").slideDown("normal");
	})
	console.log($("#qqq1"));
	$("#qqq1").mouseleave(function(){
		$("#qqq2").slideUp("normal");
	})
	console.log($("#qqq2"));
	// 下拉
	$(".aa").mouseenter(function(){
		$(".xialabox").css({"display":"none"});
		$(this).children(".xialabox").css("display","block");
		$(".xiala").css({"display":"block"});
	})
	console.log($(".aa"));
	$(".aa").mouseleave(function(){
		$(".xialabox").css({"display":"none"});
		$(".xiala").css({"display":"none"});
	})

	// 側拉
	$(".lunbotu .box ul li").mouseenter(function(){
		$(".chz").css({"display":"none"});
		$(this).children(".chz").css("display","block");
	})
	$(".lunbotu .box ul li").mouseleave(function(){
		$(".chz").css({"display":"none"});
	})


	// 家電
	// 
	$(".zhineng:eq(0) .top ul li").mouseenter(function(){
		$(".zhineng:eq(0) .hez111").css({"display":"none"});
		// 下面这句不懂
		let index=$(this).index() 
		$(".zhineng:eq(0) .hez111").eq(index).css({"display":"block"})
		$(".zhineng:eq(0) .top ul li").removeClass('hot1');
		$(this).addClass('hot1')
	})
	console.log($(".zhineng:eq(0) .top ul li"));
	$(".zhineng:eq(1) .top ul li").mouseenter(function(){
		$(".zhineng:eq(1) .hez111").css({"display":"none"});
		// 下面这句不懂
		let index=$(this).index() 
		$(".zhineng:eq(1) .hez111").eq(index).css({"display":"block"})
		$(".zhineng:eq(1) .top ul li").removeClass('hot1');
		$(this).addClass('hot1')
	})
	console.log($(".zhineng:eq(1) .top ul li"));
	$(".zhineng:eq(2) .top ul li").mouseenter(function(){
		$(".zhineng:eq(2) .hez111").css({"display":"none"});
		// 下面这句不懂
		let index=$(this).index() 
		$(".zhineng:eq(2) .hez111").eq(index).css({"display":"block"})
		$(".zhineng:eq(2) .top ul li").removeClass('hot1');
		$(this).addClass('hot1')
	})
	console.log($(".zhineng:eq(2) .top ul li"));



	// 轮播图
	// 
	let img=$(".lunbotu .bt1 img");
	let dian=$(".lunbotu .dian li");
	console.log(img,dian);

	let index=0;
	let t=setInterval(move,2000);
	img.first().css({"zIndex":10});
	dian.first().addClass('hot');
	function move(){
		index++;
		if(index==img.length){
			index=0;
		}
		img.css({"zIndex":5});
		dian.removeClass('hot');
		img.eq(index).css({"zIndex":10});
		dian.eq(index).addClass('hot');

	}
	function movel(){
		index--;
		if(index<0){
			index=img.length-1;
		}
		img.css({"zIndex":5});
		dian.removeClass('hot');
		img.eq(index).css({"zIndex":10});
		dian.eq(index).addClass('hot');
	}
	dian.mousemove(function(){
		let index=$(this).index();
		dian.removeClass('hot').eq(index).addClass('hot');
		img.css({"zIndex":5}).eq(index).css({"zIndex":10});
	})

	$(".lunbotu").mousemove(function(event){
     	clearInterval(t);
	});
	$(".lunbotu").mouseleave(function(event){
     	t=setInterval(move,2000);
	});
	$(".sanjiao").click(function(){
		movel();
	});
	$(".sanjiao1").click(function(){
		move();
	});



	// 双下标  内容
	// let img1=$(".neirong .bottom .box:eq(0) li");
	// let dian1=$(".neirong .bottom .box:eq(0) .dian dl");
	// let aaaa=$(".axxx").eq(0)
	function hahaa(aaaa){
		let img1=aaaa.find("li");
		let dian1=aaaa.find("dl");
		let left1=aaaa.find(".hez1");
		let left2=aaaa.find(".hez2");
		console.log(img1,dian1,left1);
		let boxwidth1=$(".neirong .bottom .box").width();
		console.log(dian1);
		let index1=0;
		let next1=0;
		let flag1=true;
		// let t=setInterval(move,3000);
		img1.css({"left":boxwidth1+"px"});
		img1.first().css({"left":0});
		dian1.first().addClass('hot');
		function move1(){
			next1++;
			if(next1==img1.length){
				next1=0;
			}
			img1.eq(next1).css({"left":boxwidth1+"px"});
			img1.eq(index1).animate({"left":-boxwidth1});
			img1.eq(next1).animate({"left":"0"},function(){
	 			flag1=true;
	 		});
			dian1.eq(index1).removeClass('hot1');
			dian1.eq(next1).addClass('hot1');
			index1=next1;
		}
		function movel1(){
			next1--;
			if(next1<0){
				next1=img1.length-1;
			}
			img1.eq(next1).css({"left":-boxwidth1+"px"});
			img1.eq(index1).animate({"left":boxwidth1});
			img1.eq(next1).animate({"left":"0"},function(){
	 			flag1=true;
	 		});
			dian1.eq(index1).removeClass('hot1');
			dian1.eq(next1).addClass('hot1');
			index1=next1;
		}
		dian1.click(function(){
			let aa1=$(this).index();
			console.log(aa1);
			if(aa1>index1){
				img1.eq(aa1).css({"left":boxwidth1+"px"});
				img1.eq(index1).animate({"left":-boxwidth1});
				img1.eq(aa1).animate({"left":"0"})
			}
			if(aa1<index1){
				img1.eq(aa1).css({"left":-boxwidth1+"px"});
				img1.eq(index1).animate({"left":boxwidth1});
				img1.eq(aa1).animate({"left":"0"})
			}
			
			dian1.eq(index1).removeClass("hot1");
			dian1.eq(aa1).addClass('hot1');
			index1=next1=aa1;
		})

		// $(".lunbotu").mousemove(function(event){
	 //     	clearInterval(t);
		// });
		// $(".lunbotu").mouseleave(function(event){
	 //     	t=setInterval(move,2000);
		// });
		left1.click(function(){
			if(!flag1){
	 			return;
	 		}
	 		if(next1<=0){
	 			return;
	 		}
	 		flag1=false;
			movel1();
		});
		left2.click(function(){
			if(!flag1){
	 			return;
	 		}
	 		if(next1==img1.length-1){
	 			return;
	 		}
	 		flag1=false;
			move1();
		});
	}
		
	let aaaa=$(".axxx");
	console.log(aaaa);
	hahaa(aaaa.eq(0));
	hahaa(aaaa.eq(1));
	hahaa(aaaa.eq(2));
	hahaa(aaaa.eq(3));



	// 小米明星单品
	let wd=$(".xiangou").width();
	let bottom2=$(".xiangou .bottom");
	let times=0;
	$(".xiangou .box span").eq(1).click(function(){
		times++;
		if(times==3){
			times=2;
		}
		bottom2.css({transform:`translateX(${-wd*times}px)`});
	})

	$(".xiangou .box span").eq(0).click(function(){
		times--;
		if(times<0){
			times=0;
		}
		
		bottom2.css({transform:`translateX(${-wd*times}px)`});
	})	
	console.log(bottom2)
	
});
