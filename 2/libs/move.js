function move(ele,target,attr){
	clearInterval(ele.timer);
	ele.timer = setInterval(function(){
		if(attr == "opacity"){
			//透明度的iNow的获取;
			var iNow = parseInt(getStyle(ele,attr) * 100)
		}else{
			//除透明度其他的获取
			var iNow = parseInt(getStyle(ele,attr));
		}
		var speed = (target - iNow) / 6;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(iNow == target){
			clearInterval(ele.timer)
		}else{

			if(attr == "opacity"){
				iNow = iNow + speed ;
				ele.style.opacity = iNow / 100;
			}else{
				ele.style[attr] = iNow + speed + "px";
			}
		}
	}, 50)
}

function getStyle(ele,attr){//获取元素的属性
	if(getComputedStyle){
		return getComputedStyle(ele)[attr]
	}else{
		return ele.currentStyle[attr]
	}
}
