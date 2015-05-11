$(function() {
	var hotelsContainer = $('#hotelsContainer');
	
	generateTable(hotelsContainer, window.hotels);

	//$.ajax({
	//    url: 'http://zth.tuiasi.ro/hotels.json',
	//    dataType: 'json',
	//    success: function (result) {
	//        generateTable(hotelsContainer, result);
	//    },
	//    error: function () {
	//        alert('Nu a mers!');
	//    }
	//});
});