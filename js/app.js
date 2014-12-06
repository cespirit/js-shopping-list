 $(document).ready(function(){

 	$(".add-item").on("click", ".add",  function(){
 		var $item = $("#new-item").val();
 		$item = $.trim($item); 
 		if($item === "") {
 			alert("Please type in an item to add.");
 			return;
 		}

 		var $newItem = $('<li class="item"><input type="checkbox">' + 
 			            '<button class="delete fa fa-times"></button>' 
 			            + $item + "</li>");
 		$("#items-list").append($newItem);
 	});



 });