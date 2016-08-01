$(function(){
	/*var xian=$(".xian");
	for(var i=0;i<xian.length;i++){
		wx(xian[i]);
	}
	var hehe=$(".hehe");
	for(var i=0;i<hehe.length;i++){
		wx(hehe[i]);
	}
*/
var tm_lb1=$(".tm_lb1");
	for(var i=0;i<tm_lb1.length;i++){
			xian(tm_lb1[i]);
		};
var zglili=$("li",$(".zgitem2")[1]);
for(var i=0;i<zglili.length;i++){
			xian(zglili[i]);
		}
var ssbotrli=$(".ssbot_rli");
for(var i=0;i<ssbotrli.length;i++){
			xian(ssbotrli[i]);
		}
	
	function xian(obj){
	var widths=obj.offsetWidth;
	var heights=obj.offsetHeight;

	var lefts=$((".left"),obj)[0];
	var rights=$(".right",obj)[0];
	var tops=$(".top",obj)[0];
	var bottoms=$(".bottom",obj)[0];

	obj.onmouseover=function(){
		animate(lefts,{height:heights});
		animate(rights,{height:heights});
		animate(tops,{width:widths});
		animate(bottoms,{width:widths});
	  }
	obj.onmouseout=function(){
		animate(lefts,{height:0});
		animate(rights,{height:0});
		animate(tops,{width:0});
		animate(bottoms,{width:0});
	  }
    }


})