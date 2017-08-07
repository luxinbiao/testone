$(function()
{
	var all="";
	//时间获取;
	var time=new Date();
	var H=time.getHours();
	//渲染ZhuangZai的数据
	var list1=[
	["img/user2-160x160.jpg","Support Team","Why not buy a new awesome theme?"],
	["img/user3-128x128.jpg","AdminLTE Design Team","Why not buy a new awesome theme?"],
	["img/user4-128x128.jpg"," Developers","Why not buy a new awesome theme?"],
	["img/user3-128x128.jpg"," AdminLTE Design Team","Why not buy a new awesome theme?"],
	["img/user4-128x128.jpg", "Developers","Why not buy a new awesome theme?"],
	];
	
	var list2=[
	["glyphicon glyphicon-cloud	"," 5 new members joined today","red"],
	["glyphicon glyphicon-pencil","Very long description","#00c0ef"],
	["glyphicon glyphicon-glass	","5 new members joined","#dd4b39"],
	["glyphicon glyphicon-music"," 25 sales made","#00c0ef"],
	["glyphicon glyphicon-heart	", "You changed your username","#00a65a"],
	];
	
	var list3=
	[
	"20",
	"40",
	"60",
	"80",
	"100",
	];
	//ZhuangZai的鼠标经过效果
	$(".ZhuangZai").hide();
	$(".ZhuangZai").hover(function()
	{
		$(".ZhuangZai").show();
	},function()
	{
		$(".ZhuangZai").hide();
	})
	$(".Hv>li").hover(function()
	{
		
		if($(this).index()<3)
		{
			var allwidth=$(this).prop("offsetLeft")-$(".ZhuangZai").outerWidth(true)+$(".nav-pills>li").outerWidth(true);
			$(".ZhuangZai").css({left:allwidth});
			$(".ZhuangZai").removeClass("hidden");
			$(".ZhuangZai").show();
		}
		
		if($(this).index()==0)
		{
			$(".ZhuangZai>ul").html(" ");
			all="";
			$(".ZhuangZai>p:first").html("You have 4 messages");
			$(".ZhuangZai>p:last").html("See All Messages");
			if($(".ZhuangZai>ul>li").length<=0)
			{
			for(var i=0;i<list1.length;i++)
			{
				var h41="<li><a href='#'><img src="+list1[i][0]+"><h4>"+list1[i][1]+"<span class=wy><i class='glyphicon glyphicon-time'></i><p>"+H+"时</p></span></h4>";
				var sj="<p>"+list1[i][2]+"</p></a></li>";
				all=all+h41+sj;
			}
			$(".ZhuangZai>ul").append(all);
			}
		}
		
		if($(this).index()==1)
		{
			$(".ZhuangZai>ul").html(" ");
			tt="";
			$(".ZhuangZai>p:first").html("You have 10 notifications");
			$(".ZhuangZai>p:last").html("View all");
			if($(".ZhuangZai>ul>li").length==0)
			{
			for(var i=0;i<list2.length;i++)
			{
				var h41="<li><a href='#'><i class='"+list2[i][0]+" qq' style='color:"+list2[i][2]+"'></i>";
				var sj="<b>"+list2[i][1]+"</b></a></li>";
				var tt=tt+h41+sj;
			}
			$(".ZhuangZai>ul").append(tt);
			}
		}
		
		if($(this).index()==2)
		{
			$(".ZhuangZai>ul").html(" ");
			cc="";
			$(".ZhuangZai>p:first").html("You have 9 tasks");
			$(".ZhuangZai>p:last").html("View all tasks");
			if($(".ZhuangZai>ul>li").length==0)
			{
				
			for(var i=0;i<list3.length;i++)
			{
				if(list3[i]==100)
				{
					var ys=" progress-bar-success";
				}
				if(list3[i]<=100 && list3[i]>=80)
				{
					var ys="progress-bar-info";
				}
				if(list3[i]<=80 && list3[i]>=60)
				{
					var ys="progress-bar-info";
				}
				if(list3[i]<=60 && list3[i]>=40)
				{
					var ys="progress-bar-warning";
				}
				if(list3[i]<=20)
				{
					var ys="progress-bar-danger";
				}
				var cc=cc+"<li><a href=#><h3>Design some buttons<span class=pull-right>"+list3[i]+"%</span></h3><div class='progress'><div class='progress-bar "+ys+"' style='width: "+list3[i]+"%;'></div></div></a></li>";
			}
			
			$(".ZhuangZai>ul").append(cc);
			}
		}
	}
	,function()
	{
		$(".ZhuangZai").hide();
	})
	
	
	//当鼠标经过用户图像时显示信息
	
	$(".nav-pills>li:eq(3)").hover(function()
	{
			var allwidth=$(this).prop("offsetLeft")-($(this).outerWidth(true)/2)-25;
			$(".ZZtwo").css({left:allwidth});
			$(".ZZtwo").show()
	},function()
	{
		$(".ZZtwo").hide();
	})
	$(".ZZtwo").hover(function()
	{
		$(".ZZtwo").show();
		
	},function()
	{
		$(".ZZtwo").hide();
	})
	var lis=$(".ll>li:eq(0)").outerHeight(true);
	//左边内容被选中效果
	function uu(obj,jd,m)
	{
		$(""+obj+">"+jd+m+"").click(function()
	{
		console.log($(""+obj+">"+jd+m+""));
		$(this).addClass("axzl");
		$(this).parents().siblings().find("a").removeClass("axzl");
		if($(this).parent().index()>0 && $(this).parent().index()<13)
		{
			$(this).parent().addClass("xzl").siblings().removeAttr("class");
		}
	if($(this).parent().attr("tt")==undefined)
	{
		$(this).parent().children().children(".glyphicon-chevron-right").css("transform","rotate(90deg)");
		$(this).parent().find("ul").animate({height:$(this).parent().find("ul>li").length*lis});
		$(this).parent().attr("tt","0");
		$(this).parent().siblings().find("ul").stop().animate({height:"0"},500);
	}
	else
	{
		$(this).parent().children().children(".glyphicon-chevron-right").removeAttr("style");
		$(this).parent().find("ul").stop().animate({height:"0"},500);
		$(this).parent().removeAttr("tt");
	}
		$(this).parent().siblings().children().children(".glyphicon-chevron-right").removeAttr("style");
	})
	$(".k>a").on("touchend",function()
	{
		$(this).addClass("axzl");
		$(this).parents().siblings().find("a").removeClass("axzl");
		if($(this).parent().index()>0 && $(this).parent().index()<13)
		{
			$(this).parent().addClass("xzl").siblings().removeAttr("class");
		}
	if($(this).parent().attr("tt")==undefined)
	{
		$(this).parent().children().children(".glyphicon-chevron-right").css("transform","rotate(90deg)");
		$(this).parent().find("ul").animate({height:$(this).parent().find("ul>li").length*lis});
		$(this).parent().attr("tt","0");
		$(this).parent().siblings().find("ul").stop().animate({height:"0"},500);
	}
	else
	{
		$(this).parent().children().children(".glyphicon-chevron-right").removeAttr("style");
		$(this).parent().find("ul").stop().animate({height:"0"},500);
		$(this).parent().removeAttr("tt");
	}
		$(this).parent().siblings().children().children(".glyphicon-chevron-right").removeAttr("style");
	})
	//组织子元素冒泡
	$(".ll>li").click(function(event){
            return false;
       });
	}
	uu(".k","a","");
	//隐藏导子航条
	$(".ll").css("height","0");
	$(".ll").eq(0).removeAttr("style");
	//判断消息的颜色
	$(".leftContent>ul>li>a>.badge").each(function(i)
	{
		if($(".leftContent>ul>li>a>.badge").eq(i).text()>=10)
	{
		$(".leftContent>ul>li>a>.badge").eq(i).css({background:"#00a65a"});
	}
	if($(".leftContent>ul>li>a>.badge").eq(i).text()<=10 && $(".leftContent>ul>li>a>.badge").eq(i).text()>=4)
	{
		$(".leftContent>ul>li>a>.badge").eq(i).css("background","#0073b7");
	}
	if($(".leftContent>ul>li>a>.badge").eq(i).text()<4)
	{
		$(".leftContent>ul>li>a>.badge").eq(i).css("background","#dd4b39");
	}
	})
//	整体伸展效果
	var uls=
	[
	"glyphicon glyphicon-cloud	haha",
	"glyphicon glyphicon-tags	haha",
	"glyphicon glyphicon-eye-open	haha",
	"glyphicon glyphicon-exclamation-sign haha",
	"glyphicon glyphicon-gift	haha",
	"glyphicon glyphicon-cloud	haha",
	"glyphicon glyphicon-cloud	haha",
	"glyphicon glyphicon-cloud	haha",
	"glyphicon glyphicon-cloud	haha",
	"glyphicon glyphicon-cloud	haha",
	"glyphicon glyphicon-cloud	haha",
	]
	//拿出数据
	var alluls=[];
	for(var i=0;i<$(".dianji>li").length;i++)
	{
		if($(".dianji>li").eq(i).index()!=0 && $(".dianji>li").eq(i).index()!=12)
		{
			alluls.push("<li>"+$(".dianji>li").eq(i).html()+"</li>");
		}
		
	}
	var b="";
	var hy=$(".leftContent").html();
	var yzt=$(".leftnav").html();
	var Fs=0;
	var zj=true;
	$(".zk").click(function()
	{
		//移动端点击效果
		if($(window).width()<768)
		{
			if(zj)
			{
				$(".leftContent").stop().animate({marginLeft:0},500);
				zj=false;
				return;
			}
			if(!zj)
			{
				$(".leftContent").stop().animate({marginLeft:"-253px"},500);
				zj=true;
			}
		}
		if($(window).width()>768)
		{
			
		if(Fs==0)
		{
			$(".topfont").animate({marginLeft:"50px"},500)
		$(".sige").animate({marginLeft:"50px"},500)
		$(".allht").animate({marginLeft:"50px"},500)
			b="";
		$(this).parent().prev().html("<b>ALT</b>");
		$(this).parent().prev().animate({width:"50px",height:"50px",padding:"10px 5px"},500);
		$(".leftContent").animate({width:"50px"},500);
		$(".leftContent").html("<ul class=nav nav-stacked style=padding:0;margin:0></ul>");
			for(var i=0;i<uls.length;i++)
		{
			b=b+"<li><a href=#><i class='"+uls[i]+"'></i></a></li>";
		}
		$(".leftContent>ul").html("<li><a href=#><img img src=img/user2-160x160.jpg alt=用户头像></a></li>"+b+"<li><a href=#><span class=l1></span></a></li><li><a href=#><span class=l2></span></a></li><li><a href=#><span class=l3></span></a></li>");
			Fs=1;
			//为动态创建的ul添加事件
			$("body").append("<ul class='nav nav-divider jj'></ul>");
			$(".leftContent>ul>li").hover(function()
			{
				if($(this).index()!=0)
				{
				var top=$(this).prop("offsetTop");
				$(".jj").html(alluls[$(this).index()-1]);
				$(".jj").show();
				$(".jj>ul").removeAttr("style");
				$(".jj>li>ul").removeAttr("style");
				$(".jj").css("top",top);
				}
				$(".jj .haha").hide();
				uu(".jj","li","a");
			},function()
			{
				$(".jj").hide();
			})
			$(".jj").hover(function()
			{
				$(".jj").show();
			},function()
			{
				$(".jj").hide();
			});
			return;
			
		}
		if(Fs==1)
		{
			$(".topfont").animate({marginLeft:"230px"},500)
			$(".sige").animate({marginLeft:"230px"},500)
			$(".allht").animate({marginLeft:"230px"},500)
			$(".leftContent").animate({width:"230px"},500);
			$(this).parent().prev().html(yzt);
			$(this).parent().prev().animate({width:"230px",height:"50px",padding:"11px 15px"},500);
			$(".leftContent").removeAttr("style");
			$(".leftContent").html(hy);
			Fs=0;
			uu(".k","a","");
		}
		
		
		}//if
	})
})