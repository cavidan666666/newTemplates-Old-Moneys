var myButoon = document.querySelector(".bOPW");


myButoon.style.border = "none";
myButoon.style.backgroundColor = "rgba(0,0,0,0.0)";
myButoon.style.border = "2px solid yellowgreen";
myButoon.style.color = "white";
myButoon.style.fontSize = "17px";
myButoon.style.outline = "none";

myButoon.addEventListener("mouseover" , function(){

	this.style.backgroundColor = "yellowgreen";
	this.style.transition = "0.3s ease-in";
	
})



myButoon.addEventListener("mouseleave" , function(){

	this.style.backgroundColor = "rgba(0,0,0,0.0)";
})

$(function(){

var liLength = $(".slider ul li").length;
var currentPx = 780;
var totalLength = liLength * currentPx;
var liCount = 0;
$(".slider ul").css("width" , totalLength + "px");

$("input.Next").click(function(){

	if (liCount < liLength-1) {

		liCount++;

		newWidth = currentPx * liCount;

		$(".slider ul").animate({ marginLeft: "-" + newWidth + "px" }, 350);
	} else {

            liCount = 0;
            $(".slider ul").animate({ marginLeft: "0" }, 350);
        }
        return false;
    })


    $("input.Prew").click(function() {
        if (liCount > 0) {
            liCount--;
            newWidth = currentPx * liCount;
            $(".slider ul").animate({ marginLeft: "-" + newWidth + "px" }, 350);
        } else {


        }
        return false;
})
});
