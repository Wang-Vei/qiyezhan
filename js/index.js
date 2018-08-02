/*
* @Author: Sing-V
* @Date:   2018-07-30 22:16:58
* @Last Modified by:   Sing-V
* @Last Modified time: 2018-07-30 23:10:46
*/
window.onload=function () {
	let pull1=document.querySelector(".pull1");
	let zhi=document.querySelector(".zhi")
	console.log(pull1,zhi);	

	zhi.onmouseenter=function(){
		pull1.style.height="400px";
		pull1.style.border="1px solid #ccc"
		pull1.style.borderTop=0;
	}
	zhi.onmouseleave=function(){
		pull1.style.height="0";
		pull1.style.border="";
	}



}