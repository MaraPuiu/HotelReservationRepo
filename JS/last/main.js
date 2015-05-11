$(function() {
	var hotelsContainer = $('#hotelsContainer');
	
	generateTable(hotelsContainer, window.hotels);

	var deleteButton = $('.delete');
	deleteButton.on('click',function () {
	    var r = confirm("Are you sure?");
	    if (r == true) {
	        console.log($(this).attr("data-id"));
	        remove($(this).attr("data-id"));
	        generateTable(hotelsContainer, window.hotels)
	    }
	});

	deleteButton.on('click', function () {
	    var r = confirm("Are you sure?");
	    if (r == true) {
	        console.log($(this).attr("data-id"));
	        remove($(this).attr("data-id"));
	        generateTable(hotelsContainer, window.hotels)
	    }
	});

	var addButton = $('.add');
	addButton.on('click',function () {
	    var continut = $('thead');
	    var addRow = $('<tr><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><button class="confirm">Confirm</button><button class="cancel">Cancel</button></td></tr>');
	    continut.append(addRow);
	});

	var cancelButton = $('.cancel');
	cancelButton.on('click',function () {
	    generateTable(hotelsContainer, window.hotels);
	});

	var confirmButton = $('.confirm');
	confirmButton.on('click', function () {
	    generateTable(hotelsContainer, window.hotels);
	});
});
