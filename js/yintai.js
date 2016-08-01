window.onload=function(){

// 微信
	var top_left2=$(".top_left2")[0];
	var top_item=$(".top_item")[0];
	
		top_left2.onmouseover=function(){
			top_item.style.display="block";
		}
		top_left2.onmouseout=function(){
			top_item.style.display="none";
		}

//手机银泰
	var top_left3=$(".top_left3")[0];
	var top_item1=$(".top_item1")[0];
	
		top_left3.onmouseover=function(){
			top_item1.style.display="block";
		}
		top_left3.onmouseout=function(){
			top_item1.style.display="none";
		}

// 我的银泰
	
	var top_right2=$(".top_right2")[0];
	var right2_item=$(".right2_item")[0];
	
		top_right2.onmouseover=function(){
			right2_item.style.display="block";
		}
		top_right2.onmouseout=function(){
			right2_item.style.display="none";
		}

/*logo*/
	var img2=$(".img2")[0];
	setInterval(aa,300);
	function aa(){
		var imgpath1=img2.getAttribute("imgpath");	
	}

	var gouwuche=$(".gouwuche")[0];
	var gwcitem=$(".gwcitem")[0];
	gouwuche.onmouseover=function(){
		gwcitem.style.display="block";
	}
	gouwuche.onmouseout=function(){
		gwcitem.style.display="none";
	}

/*banner*/
	var win=$(".banner_middle")[0];
    var as=$("a",win);
    var lis=$("li",$(".point")[0]);
    var num=0;
 	as[0].style.zIndex=1;
    var stop=setInterval(lunboR,1000);
    var btn=$(".btn")[0];
    var btnR=$(".btnR")[0];
	var btnL=$(".btnL")[0];
    win.onmouseover=function(){
	  clearInterval(stop);
	  btn.style.display="block";
    }
    win.onmouseout=function(){
		stop=setInterval(lunboR,1000);
		 btn.style.display="none";
    }
    var flag=true;
    lis.onmouseover=function(){
        if (flag) {
        flag=false;
    	lunboR();
     }
    }
    
    btnR.onclick=function(){
		if(flag){
			flag=false;
			lunboR();
		}
	}
	btnL.onclick=function(){
		if(flag){
			flag=false;
			lunboL();
		}
		
	}
	function lunboL(){
	num--;
	if(num<0){
		num=as.length-1;
	}
	for(var i=0;i<as.length;i++){
		// as[i].style.zIndex=5;
		animate(as[i],{opacity:0});
		lis[i].className="";//	让小点的状态初始化
	}
	// as[num].style.zIndex=10;
	animate(as[num],{opacity:1});
	lis[num].className="point_hot";
	animate(as[num],{opacity:1},function(){
		flag=true;
	})
	}
    function lunboR(){
    	num++;
    	// 
    	if(num==as.length){
    		num=0;
    	}
    	for(var i=0;i<as.length;i++){
    		animate(as[i],{opacity:0})
    		lis[i].className="";
    		/*as[i].style.zIndex=5;*/

    	}
    	lis[num].className="point_hot";
    	animate(as[num],{opacity:1},
    		function(){
    		flag=true;
    	})
       
    }


    for(var i=0;i<lis.length;i++){
	lis[i].index=i;
	lis[i].onmouseover=function(){
	for(var j=0;j<as.length;j++){
		animate(as[j],{opacity:0});
		lis[j].className="";
    } 
    lis[this.index].className="point_hot"
   animate(as[this.index],{opacity:1});
   		num=this.index;
    	}

   }

//bannerleft
	var banner_left=$(".banner_left")[0];
	var banneritem=$(".banneritem");
	var banner_l1=$(".banner_l1",banner_left)
	for(var i=0;i<banner_l1.length;i++){
		banner_l1[i].index=i;
		banner_l1[i].onmouseover=function(){
			// for(var j=0;j<banneritem.length;j++){
			banneritem[this.index].style.display="block"
			// }
			
		}
		banner_l1[i].onmouseout=function(){
			// for(var j=0;j<banneritem.length;j++){
				banneritem[this.index].style.display="none"
			// }
			
		}
	}

// banner_right
	var banner_right=$(".banner_right")[0];
	var r_img=$("img",banner_right)[0];
	banner_right.onmouseover=function(){
		animate(banner_right,{right:90})
	}
	banner_right.onmouseout=function(){
		animate(banner_right,{right:80})
	}



/*特卖*/
// 选项卡
	var tmltop=$(".temai_ltop")[0];
	var tmlis=$("li",tmltop);
	var tmlbot=$(".temai_lbot");


	 for(var i=0;i<tmlis.length;i++){	 	
		tmlis[i].index=i;
		tmlis[i].onmouseover=function(){
				for(var j=0;j<tmlbot.length;j++){	
					tmlis[j].className="";
					tmlbot[j].style.display="none";		
	    		} 
		    	tmlis[this.index].className="tmhot";	    	
				tmlbot[this.index].style.display="block";
	   }		    
	}
	
// 专柜

	var zgli=$("li",$(".zgbt_rtop")[0]);

	var zgitem2=$(".zgitem2");
	for(var i=0;i<zgli.length;i++){
		zgli[i].index=i
		// zgli[0].className="zghot";
		zgli[i].onmouseover=function(){
			for (var j = 0; j < zgitem2.length; j++) {
				zgli[j].className=""
				zgitem2[j].style.display="none"
				
			}
			zgli[this.index].className="zghot"
				zgitem2[this.index].style.display="block";		}
					
		}


// 时尚	
//中间图片节点轮播
	var ssbot_m=$(".ssbot_m")[0];
	var ssbotbox=$(".ssbotbox")[0];
	var ssbotl=$(".ssbotl")[0];
	var ssbotr=$(".ssbotr")[0];
	var ssbotflag=true;
	var ssimg=$("img",ssbot_m);
	var sspoint=$(".sspoint")[0];
	var sspointli=$("li",sspoint);
	for(var i=0;i<sspointli.length;i++){
		sspointli[i].onclick=function(){
			ssmoveL();
			sspointli[i].className="";
			sspointli[i].className="sspointhot"
	}

		}
		
	/*sspointli[0].onclick=function(){
		ssmoveL();
		sspointli[0].className="sspointhot";
	}

	sspointli[1].onclick=function(){
		ssmoveR();
		sspointli[1].className="sspointhot";
	}*/
	ssbot_m.onmouseover=function(){
		ssbotl.style.display="block";
		ssbotr.style.display="block";
	}
	ssbot_m.onmouseout=function(){
		ssbotl.style.display="none";
		ssbotr.style.display="none";
	}
	var sbotwidth=parseInt(getStyle(ssimg[0],"width"));
	ssbotbox.style.width=sswidths*ssimg.length+"px";
	ssbotl.onclick=function(){
			if(ssbotflag){
				ssbotflag=false;
				ssmoveL();
			}
			
		}
		ssbotr.onclick=function(){
			if(ssbotflag){
				ssbotflag=false;
				ssmoveR();
			}	
		}
		function ssmoveL(){
			animate(ssbotbox,{left:-sbotwidth},function(){			
				var first=firstChild(ssbotbox);
				ssbotbox.appendChild(first);
				ssbotbox.style.left=0;
				ssbotflag=true;
			});
		}
		function ssmoveR(){
			var last=lastChild(ssbotbox);
			beforeChild(ssbotbox,last);
			ssbotbox.style.left=-sbotwidth+"px";			
			animate(ssbotbox,{left:0},function(){
				ssbotflag=true;
			});
		}
	//左小块节点轮播
		var sbl_b=$(".sbl_b")[0];
		var ssbtnl=$(".ssbtnl")[0];
		var ssbtnr=$(".ssbtnr")[0];
		var sskaiguan=true;
		var sskuaibox=$(".sskuaibox")[0];
		var sskuai=$(".sskuai")
		var sswidths=parseInt(getStyle(sskuai[0],"width"));
		sskuaibox.style.width=sswidths*sskuai.length+"px";
		
		ssbtnl.onclick=function(){
			if(sskaiguan){
				sskaiguan=false;
				moveL();
			}
			
		}
		ssbtnr.onclick=function(){
			if(sskaiguan){
				sskaiguan=false;
				moveR();
			}	
		}
		function moveL(){
			animate(sskuaibox,{left:-sswidths},function(){			
					var first=firstChild(sskuaibox);
					sskuaibox.appendChild(first);
					sskuaibox.style.left=0;
				sskaiguan=true;
			});
		}

		function moveR(){
			
				var last=lastChild(sskuaibox);
				beforeChild(sskuaibox,last);
				sskuaibox.style.left=-sswidths+"px";
			
			animate(sskuaibox,{left:0},function(){
				sskaiguan=true;
			});
		}

	
		

	/*var sslis=$("li",$(".ssbot_r")[0]);
	var ss_lr=$(".ss_lr");
	var ss_lx=$(".ss_lx");
	var ss_rl=$(".ss_rl");
	var ss_rx=$(".ss_rx");
	var ss_rlg=$(".ss_rlg");
	var ss_rxg=$(".ss_rxg");		
	for(var i=0;i<sslis.length;i++){
		sslis[i].index=i;
		sslis[i].onmouseover=function(){

		animate(ss_lr[this.index],{width:272});
		animate(ss_lx[this.index],{height:182});
		animate(ss_rlg[this.index],{width:0});
		animate(ss_rxg[this.index],{height:0});
		}

		sslis[i].onmouseout=function(){

		animate(ss_lr[this.index],{width:0});
		animate(ss_lx[this.index],{height:0});
		animate(ss_rlg[this.index],{width:272});
		animate(ss_rxg[this.index],{height:182});
		}

	}*/

//潮流
//中间图片节点轮播
	var ssbot_m1=$(".ssbot_m")[1];
	var ssbotbox1=$(".ssbotbox")[1];
	var ssbotl1=$(".ssbotl")[1];
	var ssbotr1=$(".ssbotr")[1];
	var ssbotflag1=true;
	var ssimg1=$("img",ssbot_m1);
	var sspoint1=$(".sspoint")[1];
	var sspointli1=$("li",sspoint1);
	for(var i=0;i<sspointli1.length;i++){
		sspointli1[i].onclick=function(){
			ssmoveL1();
			sspointli1[i].className="";
			sspointli1[i].className="sspointhot"
	}

		}

	/*ssbot_m1.onmouseover=function(){
		ssbotl1.style.display="block";
		ssbotr1.style.display="block";
	}
	ssbot_m1.onmouseout=function(){
		ssbotl1.style.display="none";
		ssbotr1.style.display="none";
	}*/
	var sbotwidth1=parseInt(getStyle(ssimg1[0],"width"));
	ssbotbox1.style.width=sswidths1*ssimg1.length+"px";
	ssbotl1.onclick=function(){
			if(ssbotflag1){
				ssbotflag1=false;
				ssmoveL1();
			}
			
		}
		ssbotr1.onclick=function(){
			if(ssbotflag1){
				ssbotflag1=false;
				ssmoveR1();
			}	
		}
		function ssmoveL1(){
			animate(ssbotbox1,{left:-sbotwidth1},function(){			
				var first=firstChild(ssbotbox1);
				ssbotbox1.appendChild(first);
				ssbotbox1.style.left=0;
				ssbotflag1=true;
			});
		}
		function ssmoveR1(){
			var last=lastChild(ssbotbox1);
			beforeChild(ssbotbox1,last);
			ssbotbox1.style.left=-sbotwidth1+"px";			
			animate(ssbotbox1,{left:0},function(){
				ssbotflag1=true;
			});
		}
	//左小块节点轮播
		var sbl_b1=$(".sbl_b")[1];
		var ssbtnl1=$(".ssbtnl")[1];
		var ssbtnr1=$(".ssbtnr")[1];
		var sskaiguan1=true;
		var sskuaibox1=$(".sskuaibox")[1];
		var sskuai1=$(".sskuai")
		var sswidths1=parseInt(getStyle(sskuai1[0],"width"));
		sskuaibox1.style.width=sswidths1*sskuai1.length+"px";
		
		ssbtnl1.onclick=function(){
			if(sskaiguan1){
				sskaiguan1=false;
				moveL1();
			}
			
		}
		ssbtnr1.onclick=function(){
			if(sskaiguan1){
				sskaiguan1=false;
				moveR1();
			}	
		}
		function moveL1(){
			animate(sskuaibox1,{left:-sswidths1},function(){			
					var first=firstChild(sskuaibox1);
					sskuaibox1.appendChild(first);
					sskuaibox1.style.left=0;
				sskaiguan1=true;
			});
		}

		function moveR1(){
			
				var last=lastChild(sskuaibox1);
				beforeChild(sskuaibox1,last);
				sskuaibox1.style.left=-sswidths1+"px";
			
			animate(sskuaibox1,{left:0},function(){
				sskaiguan1=true;
			});
		}

//精品男装
//中间图片节点轮播
	var ssbot_m2=$(".ssbot_m")[2];
	var ssbotbox2=$(".ssbotbox")[2];
	var ssbotl2=$(".ssbotl")[2];
	var ssbotr2=$(".ssbotr")[2];
	var ssbotflag2=true;
	var ssimg2=$("img",ssbot_m2);
	var sspoint2=$(".sspoint")[2];
	var sspointli2=$("li",sspoint2);
	for(var i=0;i<sspointli2.length;i++){
		sspointli2[i].onclick=function(){
			ssmoveL2();
			sspointli2[i].className="";
			sspointli2[i].className="sspointhot"
	}

		}

	/*ssbot_m2.onmouseover=function(){
		ssbotl2.style.display="block";
		ssbotr2.style.display="block";
	}
	ssbot_m2.onmouseout=function(){
		ssbotl2.style.display="none";
		ssbotr2.style.display="none";
	}*/
	var sbotwidth2=parseInt(getStyle(ssimg2[0],"width"));
	ssbotbox2.style.width=sswidths2*ssimg2.length+"px";
	ssbotl2.onclick=function(){
			if(ssbotflag2){
				ssbotflag2=false;
				ssmoveL2();
			}
			
		}
		ssbotr2.onclick=function(){
			if(ssbotflag2){
				ssbotflag2=false;
				ssmoveR2();
			}	
		}
		function ssmoveL2(){
			animate(ssbotbox2,{left:-sbotwidth2},function(){			
				var first=firstChild(ssbotbox2);
				ssbotbox2.appendChild(first);
				ssbotbox2.style.left=0;
				ssbotflag2=true;
			});
		}
		function ssmoveR2(){
			var last=lastChild(ssbotbox2);
			beforeChild(ssbotbox2,last);
			ssbotbox2.style.left=-sbotwidth2+"px";			
			animate(ssbotbox2,{left:0},function(){
				ssbotflag2=true;
			});
		}
	//左小块节点轮播
		var sbl_b2=$(".sbl_b")[2];
		var ssbtnl2=$(".ssbtnl")[2];
		var ssbtnr2=$(".ssbtnr")[2];
		var sskaiguan2=true;
		var sskuaibox2=$(".sskuaibox")[2];
		var sskuai2=$(".sskuai")
		var sswidths2=parseInt(getStyle(sskuai2[0],"width"));
		sskuaibox2.style.width=sswidths2*sskuai2.length+"px";
		
		ssbtnl2.onclick=function(){
			if(sskaiguan2){
				sskaiguan2=false;
				moveR2();
			}
			
		}
		ssbtnr2.onclick=function(){
			if(sskaiguan2){
				sskaiguan2=false;
				moveL2();
			}	
		}
		function moveL2(){
			animate(sskuaibox2,{left:-sswidths2},function(){			
					var first=firstChild(sskuaibox2);
					sskuaibox2.appendChild(first);
					sskuaibox2.style.left=0;
				sskaiguan2=true;
			});
		}

		function moveR2(){
			
				var last=lastChild(sskuaibox2);
				beforeChild(sskuaibox2,last);
				sskuaibox2.style.left=-sswidths2+"px";
			
			animate(sskuaibox2,{left:0},function(){
				sskaiguan2=true;
			});
		}
	
// 时尚鞋靴
//中间图片节点轮播
	var ssbot_m3=$(".ssbot_m")[3];
	var ssbotbox3=$(".ssbotbox")[3];
	var ssbotl3=$(".ssbotl")[3];
	var ssbotr3=$(".ssbotr")[3];
	var ssbotflag3=true;
	var ssimg3=$("img",ssbot_m3);
	var sspoint3=$(".sspoint")[3];
	var sspointli3=$("li",sspoint3);
	for(var i=0;i<sspointli3.length;i++){
		sspointli3[i].onclick=function(){
			ssmoveL3();
			sspointli3[i].className="";
			sspointli3[i].className="sspointhot"
	}

		}

	ssbot_m3.onmouseover=function(){
		ssbotl3.style.display="block";
		ssbotr3.style.display="block";
	}
	ssbot_m3.onmouseout=function(){
		ssbotl3.style.display="none";
		ssbotr3.style.display="none";
	}
	var sbotwidth3=parseInt(getStyle(ssimg3[0],"width"));
	ssbotbox3.style.width=sswidths3*ssimg3.length+"px";
	ssbotl3.onclick=function(){
			if(ssbotflag3){
				ssbotflag3=false;
				ssmoveL3();
			}
			
		}
		ssbotr3.onclick=function(){
			if(ssbotflag3){
				ssbotflag3=false;
				ssmoveR3();
			}	
		}
		function ssmoveL3(){
			animate(ssbotbox3,{left:-sbotwidth3},function(){			
				var first=firstChild(ssbotbox3);
				ssbotbox3.appendChild(first);
				ssbotbox3.style.left=0;
				ssbotflag3=true;
			});
		}
		function ssmoveR3(){
			var last=lastChild(ssbotbox3);
			beforeChild(ssbotbox3,last);
			ssbotbox3.style.left=-sbotwidth3+"px";			
			animate(ssbotbox3,{left:0},function(){
				ssbotflag3=true;
			});
		}
	//左小块节点轮播
		var sbl_b3=$(".sbl_b")[3];
		var ssbtnl3=$(".ssbtnl")[3];
		var ssbtnr3=$(".ssbtnr")[3];
		var sskaiguan3=true;
		var sskuaibox3=$(".sskuaibox")[3];
		var sskuai3=$(".sskuai")
		var sswidths3=parseInt(getStyle(sskuai3[0],"width"));
		sskuaibox3.style.width=sswidths3*sskuai3.length+"px";
		
		ssbtnl3.onclick=function(){
			if(sskaiguan3){
				sskaiguan3=false;
				moveL3();
			}
			
		}
		ssbtnr3.onclick=function(){
			if(sskaiguan3){
				sskaiguan3=false;
				moveR3();
			}	
		}
		function moveL3(){
			animate(sskuaibox3,{left:-sswidths3},function(){			
					var first=firstChild(sskuaibox3);
					sskuaibox3.appendChild(first);
					sskuaibox3.style.left=0;
				sskaiguan3=true;
			});
		}

		function moveR3(){
			
				var last=lastChild(sskuaibox3);
				beforeChild(sskuaibox3,last);
				sskuaibox3.style.left=-sswidths3+"px";
			
			animate(sskuaibox3,{left:0},function(){
				sskaiguan3=true;
			});
		}
	
//潮流箱包
//中间图片节点轮播
	var ssbot_m4=$(".ssbot_m")[4];
	var ssbotbox4=$(".ssbotbox")[4];
	var ssbotl4=$(".ssbotl")[4];
	var ssbotr4=$(".ssbotr")[4];
	var ssbotflag4=true;
	var ssimg4=$("img",ssbot_m4);
	var sspoint4=$(".sspoint")[4];
	var sspointli4=$("li",sspoint4);
	for(var i=0;i<sspointli4.length;i++){
		sspointli4[i].onclick=function(){
			ssmoveL4();
			sspointli4[i].className="";
			sspointli4[i].className="sspointhot"
	}

		}

	ssbot_m4.onmouseover=function(){
		ssbotl4.style.display="block";
		ssbotr4.style.display="block";
	}
	ssbot_m4.onmouseout=function(){
		ssbotl4.style.display="none";
		ssbotr4.style.display="none";
	}
	var sbotwidth4=parseInt(getStyle(ssimg4[0],"width"));
	ssbotbox4.style.width=sswidths4*ssimg4.length+"px";
	ssbotl4.onclick=function(){
			if(ssbotflag4){
				ssbotflag4=false;
				ssmoveL4();
			}
			
		}
		ssbotr4.onclick=function(){
			if(ssbotflag4){
				ssbotflag4=false;
				ssmoveR4();
			}	
		}
		function ssmoveL4(){
			animate(ssbotbox4,{left:-sbotwidth4},function(){			
				var first=firstChild(ssbotbox4);
				ssbotbox4.appendChild(first);
				ssbotbox4.style.left=0;
				ssbotflag4=true;
			});
		}
		function ssmoveR4(){
			var last=lastChild(ssbotbox4);
			beforeChild(ssbotbox4,last);
			ssbotbox4.style.left=-sbotwidth4+"px";			
			animate(ssbotbox4,{left:0},function(){
				ssbotflag4=true;
			});
		}
	//左小块节点轮播
		var sbl_b4=$(".sbl_b")[4];
		var ssbtnl4=$(".ssbtnl")[4];
		var ssbtnr4=$(".ssbtnr")[4];
		var sskaiguan4=true;
		var sskuaibox4=$(".sskuaibox")[4];
		var sskuai4=$(".sskuai")
		var sswidths4=parseInt(getStyle(sskuai4[0],"width"));
		sskuaibox4.style.width=sswidths4*sskuai4.length+"px";
		
		ssbtnl4.onclick=function(){
			if(sskaiguan4){
				sskaiguan4=false;
				moveL4();
			}
			
		}
		ssbtnr4.onclick=function(){
			if(sskaiguan4){
				sskaiguan4=false;
				moveR4();
			}	
		}
		function moveL4(){
			animate(sskuaibox4,{left:-sswidths4},function(){			
					var first=firstChild(sskuaibox4);
					sskuaibox4.appendChild(first);
					sskuaibox4.style.left=0;
				sskaiguan4=true;
			});
		}

		function moveR4(){
			
				var last=lastChild(sskuaibox4);
				beforeChild(sskuaibox4,last);
				sskuaibox4.style.left=-sswidths4+"px";
			
			animate(sskuaibox4,{left:0},function(){
				sskaiguan4=true;
			});
		}
	
//美容护肤
//中间图片节点轮播
	var ssbot_m5=$(".ssbot_m")[5];
	var ssbotbox5=$(".ssbotbox")[5];
	var ssbotl5=$(".ssbotl")[5];
	var ssbotr5=$(".ssbotr")[5];
	var ssbotflag5=true;
	var ssimg5=$("img",ssbot_m5);
	var sspoint5=$(".sspoint")[5];
	var sspointli5=$("li",sspoint5);
	for(var i=0;i<sspointli5.length;i++){
		sspointli5[i].onclick=function(){
			ssmoveL5();
			sspointli5[i].className="";
			sspointli5[i].className="sspointhot"
	}

		}

	ssbot_m5.onmouseover=function(){
		ssbotl5.style.display="block";
		ssbotr5.style.display="block";
	}
	ssbot_m5.onmouseout=function(){
		ssbotl5.style.display="none";
		ssbotr5.style.display="none";
	}
	var sbotwidth5=parseInt(getStyle(ssimg5[0],"width"));
	ssbotbox5.style.width=sswidths5*ssimg5.length+"px";
	ssbotl5.onclick=function(){
			if(ssbotflag5){
				ssbotflag5=false;
				ssmoveL5();
			}
			
		}
		ssbotr5.onclick=function(){
			if(ssbotflag5){
				ssbotflag5=false;
				ssmoveR5();
			}	
		}
		function ssmoveL5(){
			animate(ssbotbox5,{left:-sbotwidth5},function(){			
				var first=firstChild(ssbotbox5);
				ssbotbox5.appendChild(first);
				ssbotbox5.style.left=0;
				ssbotflag5=true;
			});
		}
		function ssmoveR5(){
			var last=lastChild(ssbotbox5);
			beforeChild(ssbotbox5,last);
			ssbotbox5.style.left=-sbotwidth5+"px";			
			animate(ssbotbox5,{left:0},function(){
				ssbotflag5=true;
			});
		}
	//左小块节点轮播
		var sbl_b5=$(".sbl_b")[5];
		var ssbtnl5=$(".ssbtnl")[5];
		var ssbtnr5=$(".ssbtnr")[5];
		var sskaiguan5=true;
		var sskuaibox5=$(".sskuaibox")[5];
		var sskuai5=$(".sskuai")
		var sswidths5=parseInt(getStyle(sskuai5[0],"width"));
		sskuaibox5.style.width=sswidths5*sskuai5.length+"px";
		
		ssbtnl5.onclick=function(){
			if(sskaiguan5){
				sskaiguan5=false;
				moveL5();
			}
			
		}
		ssbtnr5.onclick=function(){
			if(sskaiguan5){
				sskaiguan5=false;
				moveR5();
			}	
		}
		function moveL5(){
			animate(sskuaibox5,{left:-sswidths5},function(){			
					var first=firstChild(sskuaibox5);
					sskuaibox5.appendChild(first);
					sskuaibox5.style.left=0;
				sskaiguan5=true;
			});
		}

		function moveR5(){
			
				var last=lastChild(sskuaibox5);
				beforeChild(sskuaibox5,last);
				sskuaibox5.style.left=-sswidths5+"px";
			
			animate(sskuaibox5,{left:0},function(){
				sskaiguan5=true;
			});
		}		

//户外运动
//中间图片节点轮播
	var ssbot_m6=$(".ssbot_m")[6];
	var ssbotbox6=$(".ssbotbox")[6];
	var ssbotl6=$(".ssbotl")[6];
	var ssbotr6=$(".ssbotr")[6];
	var ssbotflag6=true;
	var ssimg6=$("img",ssbot_m6);
	var sspoint6=$(".sspoint")[6];
	var sspointli6=$("li",sspoint6);
	for(var i=0;i<sspointli6.length;i++){
		sspointli6[i].onclick=function(){
			ssmoveL6();
			sspointli6[i].className="";
			sspointli6[i].className="sspointhot"
	}

		}

	ssbot_m6.onmouseover=function(){
		ssbotl6.style.display="block";
		ssbotr6.style.display="block";
	}
	ssbot_m6.onmouseout=function(){
		ssbotl6.style.display="none";
		ssbotr6.style.display="none";
	}
	var sbotwidth6=parseInt(getStyle(ssimg6[0],"width"));
	ssbotbox6.style.width=sswidths6*ssimg6.length+"px";
	ssbotl6.onclick=function(){
			if(ssbotflag6){
				ssbotflag6=false;
				ssmoveL6();
			}
			
		}
		ssbotr6.onclick=function(){
			if(ssbotflag6){
				ssbotflag6=false;
				ssmoveR6();
			}	
		}
		function ssmoveL6(){
			animate(ssbotbox6,{left:-sbotwidth6},function(){			
				var first=firstChild(ssbotbox6);
				ssbotbox6.appendChild(first);
				ssbotbox6.style.left=0;
				ssbotflag6=true;
			});
		}
		function ssmoveR6(){
			var last=lastChild(ssbotbox6);
			beforeChild(ssbotbox6,last);
			ssbotbox6.style.left=-sbotwidth6+"px";			
			animate(ssbotbox6,{left:0},function(){
				ssbotflag6=true;
			});
		}
	//左小块节点轮播
		var sbl_b6=$(".sbl_b")[6];
		var ssbtnl6=$(".ssbtnl")[6];
		var ssbtnr6=$(".ssbtnr")[6];
		var sskaiguan6=true;
		var sskuaibox6=$(".sskuaibox")[6];
		var sskuai6=$(".sskuai")
		var sswidths6=parseInt(getStyle(sskuai6[0],"width"));
		sskuaibox6.style.width=sswidths6*sskuai6.length+"px";
		
		ssbtnl6.onclick=function(){
			if(sskaiguan6){
				sskaiguan6=false;
				moveL6();
			}
			
		}
		ssbtnr6.onclick=function(){
			if(sskaiguan6){
				sskaiguan6=false;
				moveR6();
			}	
		}
		function moveL6(){
			animate(sskuaibox6,{left:-sswidths6},function(){			
					var first=firstChild(sskuaibox6);
					sskuaibox6.appendChild(first);
					sskuaibox6.style.left=0;
				sskaiguan6=true;
			});
		}

		function moveR6(){
			
				var last=lastChild(sskuaibox6);
				beforeChild(sskuaibox6,last);
				sskuaibox6.style.left=-sswidths6+"px";
			
			animate(sskuaibox6,{left:0},function(){
				sskaiguan6=true;
			});
		}		

//内衣配饰
//中间图片节点轮播
	var ssbot_m7=$(".ssbot_m")[7];
	var ssbotbox7=$(".ssbotbox")[7];
	var ssbotl7=$(".ssbotl")[7];
	var ssbotr7=$(".ssbotr")[7];
	var ssbotflag7=true;
	var ssimg7=$("img",ssbot_m7);
	var sspoint7=$(".sspoint")[7];
	var sspointli7=$("li",sspoint7);
	for(var i=0;i<sspointli7.length;i++){
		sspointli7[i].onclick=function(){
			ssmoveL7();
			sspointli7[i].className="";
			sspointli7[i].className="sspointhot"
	}

		}

	/*ssbot_m7.onmouseover=function(){
		ssbotl7.style.display="block";
		ssbotr7.style.display="block";
	}
	ssbot_m7.onmouseout=function(){
		ssbotl7.style.display="none";
		ssbotr7.style.display="none";
	}*/
	var sbotwidth7=parseInt(getStyle(ssimg7[0],"width"));
	ssbotbox7.style.width=sswidths7*ssimg7.length+"px";
	ssbotl7.onclick=function(){
			if(ssbotflag7){
				ssbotflag7=false;
				ssmoveL7();
			}
			
		}
		ssbotr7.onclick=function(){
			if(ssbotflag7){
				ssbotflag7=false;
				ssmoveR7();
			}	
		}
		function ssmoveL7(){
			animate(ssbotbox7,{left:-sbotwidth7},function(){			
				var first=firstChild(ssbotbox7);
				ssbotbox7.appendChild(first);
				ssbotbox7.style.left=0;
				ssbotflag7=true;
			});
		}
		function ssmoveR7(){
			var last=lastChild(ssbotbox7);
			beforeChild(ssbotbox7,last);
			ssbotbox7.style.left=-sbotwidth7+"px";			
			animate(ssbotbox7,{left:0},function(){
				ssbotflag7=true;
			});
		}
	//左小块节点轮播
		var sbl_b7=$(".sbl_b")[7];
		var ssbtnl7=$(".ssbtnl")[7];
		var ssbtnr7=$(".ssbtnr")[7];
		var sskaiguan7=true;
		var sskuaibox7=$(".sskuaibox")[7];
		var sskuai7=$(".sskuai")
		var sswidths7=parseInt(getStyle(sskuai7[0],"width"));
		sskuaibox7.style.width=sswidths7*sskuai7.length+"px";
		
		ssbtnl7.onclick=function(){
			if(sskaiguan7){
				sskaiguan7=false;
				moveL7();
			}
			
		}
		ssbtnr7.onclick=function(){
			if(sskaiguan7){
				sskaiguan7=false;
				moveR7();
			}	
		}
		function moveL7(){
			animate(sskuaibox7,{left:-sswidths7},function(){			
					var first=firstChild(sskuaibox7);
					sskuaibox7.appendChild(first);
					sskuaibox7.style.left=0;
				sskaiguan7=true;
			});
		}

		function moveR7(){
			
				var last=lastChild(sskuaibox7);
				beforeChild(sskuaibox7,last);
				sskuaibox7.style.left=-sswidths7+"px";
			
			animate(sskuaibox7,{left:0},function(){
				sskaiguan7=true;
			});
		}		

//婴童家居
//中间图片节点轮播
	var ssbot_m8=$(".ssbot_m")[8];
	var ssbotbox8=$(".ssbotbox")[8];
	var ssbotl8=$(".ssbotl")[8];
	var ssbotr8=$(".ssbotr")[8];
	var ssbotflag8=true;
	var ssimg8=$("img",ssbot_m8);
	var sspoint8=$(".sspoint")[8];
	var sspointli8=$("li",sspoint8);
	for(var i=0;i<sspointli8.length;i++){
		sspointli8[i].onclick=function(){
			ssmoveL8();
			sspointli8[i].className="";
			sspointli8[i].className="sspointhot"
	}

		}

	ssbot_m8.onmouseover=function(){
		ssbotl8.style.display="block";
		ssbotr8.style.display="block";
	}
	ssbot_m8.onmouseout=function(){
		ssbotl8.style.display="none";
		ssbotr8.style.display="none";
	}
	var sbotwidth8=parseInt(getStyle(ssimg8[0],"width"));
	ssbotbox8.style.width=sswidths8*ssimg8.length+"px";
	ssbotl8.onclick=function(){
			if(ssbotflag8){
				ssbotflag8=false;
				ssmoveL8();
			}
			
		}
		ssbotr8.onclick=function(){
			if(ssbotflag8){
				ssbotflag8=false;
				ssmoveR8();
			}	
		}
		function ssmoveL8(){
			animate(ssbotbox8,{left:-sbotwidth8},function(){			
				var first=firstChild(ssbotbox8);
				ssbotbox8.appendChild(first);
				ssbotbox8.style.left=0;
				ssbotflag8=true;
			});
		}
		function ssmoveR8(){
			var last=lastChild(ssbotbox8);
			beforeChild(ssbotbox8,last);
			ssbotbox8.style.left=-sbotwidth8+"px";			
			animate(ssbotbox8,{left:0},function(){
				ssbotflag8=true;
			});
		}
	//左小块节点轮播
		var sbl_b8=$(".sbl_b")[8];
		var ssbtnl8=$(".ssbtnl")[8];
		var ssbtnr8=$(".ssbtnr")[8];
		var sskaiguan8=true;
		var sskuaibox8=$(".sskuaibox")[8];
		var sskuai8=$(".sskuai")
		var sswidths8=parseInt(getStyle(sskuai8[0],"width"));
		sskuaibox8.style.width=sswidths8*sskuai8.length+"px";
		
		ssbtnl8.onclick=function(){
			if(sskaiguan8){
				sskaiguan8=false;
				moveL8();
			}
			
		}
		ssbtnr8.onclick=function(){
			if(sskaiguan8){
				sskaiguan8=false;
				moveR8();
			}	
		}
		function moveL8(){
			animate(sskuaibox8,{left:-sswidths8},function(){			
					var first=firstChild(sskuaibox8);
					sskuaibox8.appendChild(first);
					sskuaibox8.style.left=0;
				sskaiguan8=true;
			});
		}

		function moveR8(){
			
				var last=lastChild(sskuaibox8);
				beforeChild(sskuaibox8,last);
				sskuaibox8.style.left=-sswidths8+"px";
			
			animate(sskuaibox8,{left:0},function(){
				sskaiguan8=true;
			});
		}		


// 楼层跳转
	//点击相应楼层按钮，让scrolltop=arr[i];
	var flag=true;
	var sflag=true;
	var lia=$("li",$(".jump")[0]);
	var gdnav=$(".gdnav")[0];
	for(var i=0;i<lia.length;i++){
		lia[i].index=i;
		lia[i].onclick=function(){
			for(var j=0;j<lia.length;j++){
				flag=false;
				lia[j].style.background="#ececec";
			}
			lia[this.index].style.background="#e5004f";
			//var obj=document.body.scrollTop?document.body:document.documentElement;
			animate(document.body,{scrollTop:arr[this.index]},function(){
				flag=true;
			})
			animate(document.documentElement,{scrollTop:arr[this.index]},function(){
				flag=true;
			})
		}
	}
// 按需加载
var floor=$(".floor");

	var arr=[];
	var heights=document.documentElement.clientHeight;
	for(var i=0;i<floor.length;i++){
		arr.push(floor[i].offsetTop);
	}
	window.onscroll=function(){
		
	var obj=document.body.scrollTop?document.body:document.documentElement;
	var scrolltop=obj.scrollTop;

	for(var i=0;i<floor.length;i++){
		if(scrolltop+heights>=arr[i]){
			var img=$("img",floor[i]);

			for(var j=0;j<img.length;j++){
				img[j].src=img[j].getAttribute("imgpath");

			}
		}
	}
	if(scrolltop>=arr[0]){
		if(sflag){
			sflag=false;
			animate(gdnav,{top:100});
		}
		
	}else{
		if(!sflag){
			sflag=true;
			animate(gdnav,{top:-550});
		}
		
	}

	
	if(!flag){
		return;
	}
	for(var i=0;i<floor.length;i++){
		if(scrolltop+heights>=arr[i]+400){
			for(var j=0;j<lia.length;j++){
				lia[j].style.background="#ececec";
			}
			lia[i].style.background="#e5004f";
		}
	}

}















}






