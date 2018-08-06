/*
* @Author: Sing-V
* @Date:   2018-07-30 22:16:58
* @Last Modified by:   Sing-V
* @Last Modified time: 2018-07-30 23:10:46
*/
window.onload=function () {
	let pull1=document.querySelector(".pull1");
	let zhi=document.querySelector(".zhi");
	let case1=document.querySelector(".case1")
	let pull2=document.querySelector(".pull2")
	let ye=document.querySelector(".ye")
	let prize=document.querySelector(".prize")
	let turn1=document.querySelector(".prize .turn1")
	let turn2=document.querySelector(".prize .turn2")
	

	
	console.log(ye,prize,turn1,turn2);	

	zhi.onmouseenter=function(){
		pull1.style.height="400px";
		pull1.style.border="1px solid #ccc"
		pull1.style.borderTop=0;
		pull1.style.opacity=1;
	}
	zhi.onmouseleave=function(){
		pull1.style.height="0";
		pull1.style.border="";
		pull1.style.opacity=0;
	}

	case1.onmouseenter=function(){
		pull2.style.height="185px";
		pull2.style.border="1px solid #ccc"
		pull2.style.borderTop=0;
		pull2.style.opacity=1;
	}
	case1.onmouseleave=function(){
		pull2.style.height="0";
		pull2.style.border="";
		pull2.style.opacity=0;
	}


	let Width=parseInt(getComputedStyle(ye,null).width)/2;
	console.log(Width)
	let time=0
    turn2.onclick=function () {
		time++;
		if(time>=1){
			time=1;
		}

		ye.style.transform=`translateX(${-Width*time}px)`;

	}
	turn1.onclick=function () {
        time--;
        if(time<0){
			time=0;
        }

        ye.style.transform=`translateX(${-Width*time}px)`;

    }





}