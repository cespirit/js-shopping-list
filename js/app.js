 $(document).ready(function(){

 	/* Add item to not completed list */
 	$("#add-form").submit(addItem);

 	/* Move items between completed and not completed list */
 	$(".lists").on("click", "input[type='checkbox']", function(){
 		var $item = $(this).closest(".item");
 		toggleComplete($(this).prop("checked"), $item);
 	});

 	/* Delete item from list */
 	$(".lists").on("click", ".delete", function(){
 		$(this).closest(".item").remove();
 	});

 });

function addItem() {
	event.preventDefault()
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

function toggleComplete(gotChecked, $item) {
	if(gotChecked) {
		$item.addClass("checked");
		$("#completed-list").append( $item ); 			
	} else {
		$item.removeClass("checked");
		$("#items-list").append( $item ); 
	}	
}