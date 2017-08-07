	//画折线
	function zch(id,o)
	{
	var c=document.getElementsByClassName(id);
	var context1=c[0].getContext("2d");
	var p=46;
	context1.translate(0,c[0].height-p);
	//	比值
	var cw=c[0].width;
	console.log(c[0].height);
	var bz=parseFloat((c[0].height-p))/30000;
	for(var i=0;i<o.y.length;i++)
	{
			context1.beginPath();
			context1.moveTo(p,-o.y[i]*bz+30);
			context1.lineTo(cw-p,-o.y[i]*bz+30);
			context1.strokeStyle="#ccc";
			context1.stroke();
			context1.beginPath();
			context1.strokeText(o.y[i],p-40,-o.y[i]*bz+35);
			context1.font="10px Verdana";
			context1.strokeStyle="#000";
	}
	
	for(var c=0;c<o.x.length;c++)
	{
			context1.strokeText(o.x[c],200*(c+1),p);
			context1.font="10px";
			context1.strokeStyle="#000";
	}
	}
	//画园
	function Hcilcet(id,r,ds,qd,color)
	{
		var c=document.getElementsByClassName(id);
		var context1=c[0].getContext("2d");
		context1.beginPath();
		context1.arc((c[0].width)/2,(c[0].height)/2,r,qd,1.5*Math.PI+Math.PI * 2 * ds/ 100,false);
		context1.strokeStyle=color;
		context1.lineWidth=30;
		context1.stroke();
	}
