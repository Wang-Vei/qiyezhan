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
	console.log(pull1,zhi,case1,pull2);	

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


}