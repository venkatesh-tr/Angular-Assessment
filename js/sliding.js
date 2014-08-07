// JavaScript Document
function shiftLeft(rightArrow, downArrow, rightBox, downBox) {
 var rightArrowID =rightArrow.id;
 var downArrowID =downArrow;
 var rightBoxID =rightBox;
 var downBoxID =downBox;
// alert(rightArrowID);
 
if (  $("#"+ rightArrowID +".glyphicon-circle-arrow-right").is(":visible")){ // checking whether the right-shifting div is visible or not
			$(".shiftLeft").animate({left:'-150px'}).hide(300);
			$(".show a").removeClass("glyphicon-circle-arrow-left").addClass("glyphicon-circle-arrow-right");
 			$(".shiftDown").hide(10).css("height","0");
  			$(".show2 a").removeClass("glyphicon-circle-arrow-up").addClass("glyphicon-circle-arrow-down");


		if ($(".col").is(":visible")) $("*").removeClass("col"); // if rows already there remove everything
				if ($(".row-in").is(":visible")); // if colums are there, no need to make further colomns
				else{                         //   other wise put everything inside columns
					
				  /* $("[rel~='firstCol']").wrapAll('<div class="row-in" />');  
					 $("[rel~='secondCol']").wrapAll('<div class="row-in" />');
					 $("[rel~='thirdCol']").wrapAll('<div class="row-in" />');
					 $("[rel~='fourth']").wrapAll('<div class="row-in" />');  
					 $("[rel~='fifth']").wrapAll('<div class="row-in" />');
					 $("[rel~='sixth']").wrapAll('<div class="row-in" />');
					 $("[rel~='seventh']").wrapAll('<div class="row-in" />');  
					 $("[rel~='eighth']").wrapAll('<div class="row-in" />');
					 $("[rel~='nineth']").wrapAll('<div class="row-in" />'); */
					
					 $("#"+ rightBoxID +".shiftDown").hide(); // if clicked on the column shift, no need to show the row shifts
				}
		//shifting to right
		$(".shiftDown").hide();
		$("#"+ rightBoxID +".shiftLeft").show(300);//.css("display", "inline-block"); //showing the right shift div
		$("#"+ rightBoxID +".shiftLeft").css("left","-150px").css("width", "150px");
		$("#"+ rightBoxID +".shiftLeft").animate({left:'0'});
		
		$("#"+ rightArrowID).removeClass("glyphicon-circle-arrow-right").addClass("glyphicon-circle-arrow-left");
		$("#" + downArrowID).removeClass("glyphicon-circle-arrow-up").addClass("glyphicon-circle-arrow-down");
		}
		else{
			$(".shiftLeft").animate({left:'-150px'}).hide(300);
			$("#"+ rightArrowID).removeClass("glyphicon-circle-arrow-left").addClass("glyphicon-circle-arrow-right");
		}


}
	
// JavaScript Document
function shiftDown(downArrow, rightArrow, rightBox, downBox) {
 var downArrowID =downArrow.id;
 var rightArrowID =rightArrow;
 var rightBoxID =rightBox;
 var downBoxID =downBox;
// var numberOfRows = 3;
  //rowHeads=new String{"firstRow", "secondRow", "thirdRow"};
if (  $("#" + downArrowID + ".glyphicon-circle-arrow-down").is(":visible")){ 
// toggle all open rightShift to close
	$(".shiftLeft").animate({left:'-150px'}).hide(300);
	$(".show a").removeClass("glyphicon-circle-arrow-left").addClass("glyphicon-circle-arrow-right");
// make all bottomShift to toggle
  $(".shiftDown").hide(10).css("height","0");
  $(".show2 a").removeClass("glyphicon-circle-arrow-up").addClass("glyphicon-circle-arrow-down");




if ($(".row-in").is(":visible")) $("*").removeClass("row-in"); // if rows already there remove everything
	if ($(".col").is(":visible"));
	else{
			/*$("[rel~='firstRow']").wrapAll('<div class="col" />');  
			$("[rel~='secondRow']").wrapAll('<div class="col" />');
			$("[rel~='thirdRow']").wrapAll('<div class="col" />'); */
			//$("[rel~='fourthRow']").wrapAll('<div class="col" />');	
			//$("#"+ downBoxID +".shiftDown").hide(); 
			$("#"+ downBoxID +".shiftDown").slideDown(0);
		}
	$(".shiftLeft").hide();
	//$("#"+ downBoxID +".shiftDown").css("top","-130px");
	$("#"+ downBoxID +".shiftDown").css("display","block");
	//$("#"+ downBoxID +".shiftDown").show(1000);
	$("#"+ downBoxID +".shiftDown").css("top","0");
	$("#"+ downBoxID +".shiftDown").animate({height:'80px'});
	$("#" + downArrowID ).removeClass("glyphicon-circle-arrow-down").addClass("glyphicon-circle-arrow-up");
	$("#"+ rightArrowID).removeClass("glyphicon-circle-arrow-left").addClass("glyphicon-circle-arrow-right");
	}
else
{
  $(".shiftDown").animate({height:'0'}).hide(10);
  $("#" + downArrowID).removeClass("glyphicon-circle-arrow-up").addClass("glyphicon-circle-arrow-down");
}
}
