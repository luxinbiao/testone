$(function()
{
		var option={
	        	   x:[2017,2018],
	        	   y:[0,7500,15000,22500,30000],
	        }
	var sj1=[2666,2778,4912,3767,6810,5670,4820,15073,10687,8432];
	var sj2=[0,2294,1969,3977,4290,4000,15073,8888,4444,5555];
	//第一个图
		var b=document.getElementsByClassName("htleft");
		var c=document.getElementsByClassName("cnv1");
		var context1=c[0].getContext("2d");
		c[0].style.width=b[0].offsetWidth+"px";
		Hcilcet("cnv1",120,30,1.2*Math.PI,"rgb(245, 105, 84)");
		Hcilcet("cnv1",120,50,1.5*Math.PI+Math.PI * 2 * 30/ 100,"rgb(60, 141, 188)");
		Hcilcet("cnv1",120,90,1.5*Math.PI+Math.PI * 2 * 50/ 100,"rgb(0, 166, 90)");
	window.onresize=function()
	{
		var b=document.getElementsByClassName("htleft");
		var c=document.getElementsByClassName("cnv1");
		var context1=c[0].getContext("2d");
		c[0].style.width=b[0].offsetWidth+"px";
		return;
	}
	function arrto(arr,color)
	{
		var p=46;
		var bz=parseFloat((c[0].height-p))/30000;
		for(var j=0;j<arr.length;j++)
		{
		context1.beginPath();
		context1.arc(55*(j+1),-(arr[j])*bz+30,3,0,Math.PI*2,true);
		context1.fillStyle=color;
		context1.fill();
		}
		context1.beginPath();
		context1.moveTo(55*(1),-(arr[0])*bz+30);
		for(var k=1;k<arr.length;k++)
		{
			context1.lineTo(55*(k+1),-(arr[k])*bz+30);
			context1.strokeStyle=color;
			context1.stroke();
		}
	}
	//清空图片
	$(".Uu>li").click(function()
	{
		if($(this).index()>0)
		{
			 c[0].height=c[0].height;  
			$(this).addClass("active").siblings().removeClass("active");
			if($(this).index()==1)
			{
				zch("cnv1",option);
				arrto(sj1,"blue");
				arrto(sj2,"#000");
			}
			if($(this).index()==2)
			{
				Hcilcet("cnv1",120,30,1.2*Math.PI,"rgb(245, 105, 84)");
				Hcilcet("cnv1",120,50,1.5*Math.PI+Math.PI * 2 * 30/ 100,"rgb(60, 141, 188)");
				Hcilcet("cnv1",120,90,1.5*Math.PI+Math.PI * 2 * 50/ 100,"rgb(0, 166, 90)");
			}
		}
	})
})
