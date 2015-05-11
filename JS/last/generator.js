function generateTable(container, initialHotels) {

    var hotels = initialHotels;
    var tableContainer;
    init();

    function init() {
        container.empty();

        tableContainer = $('<table/>')
        container.append(tableContainer);
		
        generateTableContent();

    }

    function addTableHeaderRow() {
        var headerRowHtml = '<thead><tr>' +
			'<th>Name</th>' +
			'<th>Description</th>' +
			'<th>Country</th>' +
			'<th>City</th>' +
			'<th>Added date</th>' +
			'<th>Start price</th>' +
            '<th>Operations</th>' +
			'</tr>';

        var headerRow = $(headerRowHtml);
        tableContainer.append(headerRow);
    }

    function generateTableContent() {
        addTableHeaderRow();

        for (var i = 0; i < hotels.length; i++) {
            var hotel = hotels[i];

            var row = $('<tr/>', {
                'data-id': hotel.id
            });

            var hotelAddedDate = $.type(hotel.addedDate) == "date"
				? hotel.addedDate.toDateString()
				: hotel.addedDate;

            addTextTableCellToRow(row, hotel.name);
            addTextTableCellToRow(row, hotel.description);
            addTextTableCellToRow(row, hotel.country);
            addTextTableCellToRow(row, hotel.city);
            addTextTableCellToRow(row, hotelAddedDate);
            addTextTableCellToRow(row, hotel.startPrice);

            

            var button = $('<button>Delete</button>');
            button.attr({ 'data-id': hotels[i].id, 'class': 'delete' });
            row.append(button);

            tableContainer.append(row);
        }

        var buttonAdd = $('<button class="add">Add</button>');
        tableContainer.append(buttonAdd);
    }

    function addTextTableCellToRow(row, text) {
        var cellToAdd = $('<td/>', {
            text: text
        });
        row.append(cellToAdd);
    }
};

















