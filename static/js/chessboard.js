 $(document).ready(function()
{
 	chessids = new Array("A","B","C","D","E","F","G","H");
 	// $('#A8').css('background-color','black');
 	for(j=0;j<chessids.length;j+=2)
 	{
 		for(i=1;i<=8;i+=2)
 		{
 			var tempid ="#" + chessids[j] + i.toString();
 			$(tempid).css('background-color','yellow');
 	 	 } 
 	} 	
 	for(j=1;j<chessids.length;j+=2)
 	{
 		for(i=2;i<=8;i+=2)
 		{
 			var tempid ="#" + chessids[j] + i.toString();
 			$(tempid).css('background-color','yellow');
 	 	 } 
 	} 	
 	$('.bishopblack').click(function(){
 		var possibleids = possibleids();
 		
 		for(l=0;l<possibleids.length;l++)
 		{
 			$(tempid).css('outline-color','blue');
 		}
 	});
});

$(function() {
    bpos = new Array("0","82","164","246","328","410","492","574");
 	bposeverse = new Array("574","492","410","328","246","164","82","0");
    var boardposinit;
    var startindexleft;
    var startindextop;
    var boardposstart;	
    var pieceid;
    $('a').draggable({
    	start: function( event, ui )
    	{
    	var Startpos = $(this).position();
    	startindexleft = bpos.indexOf((Startpos.left-1).toString());     	
    	startindextop = bposeverse.indexOf((Startpos.top-1).toString());
    	
    	boardposstart = chessids[startindexleft] + (startindextop+1).toString();

		var tempidd ="#" + boardposstart.toString();
        pieceid = $(tempidd).children().eq(0); 
         
    	},

    	stop: function(event, ui) 
    	{
    		//$("#"+pieceid.attr("id")).remove();     // Removes the element from the div where the piece originally was
    	}
	});
    $('div').droppable({
      drop: function( event, ui ) 
      {
      	var droppedOn = $(this);
    	var dropped = ui.draggable;
        $(droppedOn).droppable("disable");
        $(dropped).parent().droppable("enable");
        $(dropped).detach().css({top: 0, left: 0}).appendTo(droppedOn);
        $(droppedOn).css('outline-color','red');
        $(droppedOn).css('box-shadow','inset 1px 1px 1px 2px blue');   
        // alert("Offset : " + ui.offset.top.toString() + "," + ui.offset.left.toString());
       	indexleft = bpos.indexOf(droppedOn.position().left.toString());
      	indextop = bposeverse.indexOf(droppedOn.position().top.toString());
      	boardpos = chessids[indexleft] + (indextop+1).toString();

      	      	
      	if(boardposstart!=boardpos)
      		$("<li>" + pieceid.attr("id").toString() + " from : "+ boardposstart + " To  " + boardpos + "</li>").appendTo("ol");

      	var newpos = "#" + boardpos.toString();
      	$(newpos).append("<a href=\"#\" class=\"bishopblack\" id=\"" + pieceid.attr("id").toString() + "\">" + pieceid.text() +"</a>")
      	}
    });
  });
	$('div').not('div:empty').droppable("disable");
