 $(document).ready(function(){

	 var addItem = function(event) {
		event.preventDefault();
		var $item = $("#new-item").val();
		$item = $.trim($item); 
		if($item === "") {
			alert("Please type in an item to add.");
			return;
		}

		var $newItem = $('<li class="item"><input type="checkbox">' + 
            '<button class="delete fa fa-times"></button>' + 
            '<div class="item-text">'+
            '<form class="edit-form"><input class="item-edit hidden" type="text" value="'+ $item +'"></form>' + 
            '<span class="item-name">' + $item + '</span></div></li>');			
		$("#items-list").append($newItem);
		$("#new-item").val("");
	};

	var toggleComplete = function(gotChecked, $item) {
		if(gotChecked) {
			$item.addClass("checked");
			$("#completed-list").append( $item ); 			
		} else {
			$item.removeClass("checked");
			$("#items-list").append( $item ); 
			}	
		};
	 		
 	/* Add item to not completed list */
 	$("#add-form").submit(addItem);

 	/* Move items between completed and not completed list */
 	$(".lists").on("click", "input[type='checkbox']", function() {
 		var $item = $(this).closest(".item");
 		toggleComplete($(this).prop("checked"), $item);
 	});

 	/* Enable editing of an item */
 	$(".lists").on("click", ".item-text", function(event) {
 		event.preventDefault();
 		$(this).find(".item-name").addClass("hidden");
 		$(this).find(".item-edit").removeClass("hidden").focus(); 		
 	});
 	
 	/* Save changes to edited item */
 	$(".lists").on("submit",".edit-form", function(event) {
 		event.preventDefault();
 		var newItem = $(this).find(".item-edit").val();
 		$(this).find(".item-edit").addClass("hidden"); 		
		$(this).closest(".item-text").find(".item-name").removeClass("hidden").text(newItem); 
 	});
 	
 	/* Delete item from list */
 	$(".lists").on("click", ".delete", function() {
 		$(this).closest(".item").remove();
 	});

 });

