/*window.onload=function(){
	var win=$(".win")[0];
	var wins=$(".banner_middle")[0];*/
/*	nodeLunbo(win,2);
	wufengLunbo(wins);*/
	function nodeLunbo(obj,num){

		var imgBox=$(".imgBox")[0];
		var as=$("a",imgBox);
		var widths=parseInt(getStyle(as[0],"width"))+10;
		var btnL=$(".btnL",obj)[0];
		var btnR=$(".btnR",obj)[0];
		var flag=true;

		/*
		设置imgBox宽度
		*/
		imgBox.style.width=widths*as.length+"px";
		var t=setInterval(moveR,1000);
		obj.onmouseover=function(){
			clearInterval(t)
		}
		obj.onmouseout=function(){
			t=setInterval(moveR,1000)
		}
		btnL.onclick=function(){
			if(flag){
				flag=false;
				moveL();
			}
			
		}
		btnR.onclick=function(){
			if(flag){
				flag=false;
				moveR();
			}
			
		}
		/*
		向左移动：
		1、先移动imgBox
		2、把第一张图片放到最后
		*/
		function moveL(){
			animate(imgBox,{left:-num*widths},function(){
				for(var i=0;i<num;i++){
					var first=firstChild(imgBox);
					imgBox.appendChild(first);
					imgBox.style.left=0;
					
				}
				flag=true;
			});
		}

		function moveR(){
			for(var i=0;i<num;i++){
				var last=lastChild(imgBox);
				beforeChild(imgBox,last);
				imgBox.style.left=-num*widths+"px";
			}
			animate(imgBox,{left:0},function(){
				flag=true;
			});
		}

	}
	

	// 无缝轮播封装
	function wufengLunbo(obj){
		var as=$("a",obj);
		var lis=$("li",$(".point")[0]);
		var num=0;
		var next=0;
		var widths=parseInt(getStyle(as[0],"width"));
		var btnR=$(".btnR",obj)[0];
		var btnL=$(".btnL",obj)[0];
		var kaiguan=true;
			//初始化状态
		for(var i=0;i<as.length;i++){
			if(i==0){
				continue;//跳过当前这次循环
			}
			as[i].style.left=widths+"px";//初始化其余候位的图片
		}
		var t=setInterval(moveL,2000);

		obj.onmouseover=function(){
		clearInterval(t);
		}
		obj.onmouseout=function(){
		t=setInterval(moveL,2000);
		}
		btnR.onclick=function(){
		if(kaiguan){
			kaiguan=false;
			moveL();
		}
		}
		btnL.onclick=function(){
		if(kaiguan){
			kaiguan=false;
			moveR();
		}
		
		}
		
		//选项卡
		for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			//当前的还是num，下一张next相当于this.index;
			if(num==this.index){
				return;
			}
			if(num<this.index){
				as[this.index].style.left=widths+"px";
			lis[num].className="";
			lis[this.index].className="point_hot";
			animate(as[num],{left:-widths});
			animate(as[this.index],{left:0});
			next=this.index;
			num=this.index;	
			}
			if(num>this.index){
				as[this.index].style.left=-widths+"px";
			lis[num].className="";
			lis[this.index].className="point_hot";
			animate(as[num],{left:widths});
			animate(as[this.index],{left:0});
			next=this.index;
			num=this.index;	
			}
			
		}

	}


		function moveL(){
			next++;
			//限定边界
			if(next==as.length){
				next=0;
			}
			//就位
			as[next].style.left=widths+"px";
			//按钮
			lis[num].className="";
			lis[next].className="point_hot";
			//开始动画，当前图片向左离开
			animate(as[num],{left:-widths});
			//下张图片移动到当前窗口
			animate(as[next],{left:0},function(){
				kaiguan=true;
			});
			//更新下标
			num=next;
			
		}
		function moveR(){
			next--;
			//限定边界
			if(next<0){
				next=as.length-1;
			}
			//就位
			as[next].style.left=-widths+"px";
			//按钮
			lis[num].className="";
			lis[next].className="point_hot";
			//开始动画，当前图片向左离开
			animate(as[num],{left:widths});
			//下张图片移动到当前窗口
			animate(as[next],{left:0},function(){
				kaiguan=true;
			});
			//更新下标
			num=next;
			
		}
	}

	// 选项卡item
	/*function item(){
		
	}
*/
