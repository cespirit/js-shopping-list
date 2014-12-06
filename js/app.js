 $(document).ready(function(){

 	/* Add item to list*/
 	$(".add-item").on("click", ".add",  addItem);

 	$("#new-item").on('keyup', function(e){
 		if(e.keyCode === 13){
 			addItem();
 		}
 	});

 	/* Move items between completed and not completed list */
 	$(".lists").on("click", "input[type='checkbox']", function(){
 		var $item = $(this).closest(".item");
 		
 		if( $(this).prop("checked") ) {
 			$item.addClass("checked");
 			$("#completed-list").append( $item ); 			
 		} else {
 			$item.removeClass("checked");
 			$("#items-list").append( $item ); 
 		}
 	});

 	/* Delete item from list */
 	$(".lists").on("click", ".delete", function(){
 		$(this).closest(".item").remove();
 	});

 });

function addItem() {
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
	$("#new-item").val("");
}