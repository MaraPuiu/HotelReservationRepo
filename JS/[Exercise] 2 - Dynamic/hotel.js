function generateHotelView(container, hotelArray) {
    var table = $('<table></table>')
    var head = $('<thead><tr><th>Name</th><th>Description</th><th>Country</th><th>City</th><th>Added date</th><th>Start price</th><th>Operations</th></tr></thead>');

    table.append(head);

    for (var i = 0; i < hotelArray.length; i++) {
        var row = $('<tr></tr>');
        for (var propertyName in hotelArray[i]) {
            if (hotelArray[i].hasOwnProperty(propertyName) && propertyName !== "id")
            {
                var data = $('<td/>', { 'text': hotelArray[i][propertyName] });
                row.append(data);
                //console.log(hotelArray[i][propertyName]);
            }
        }
        var button = $('<button>Delete</button>');
        button.attr({ 'data-id': hotelArray[i].id , 'class':'delete'});
        row.append(button);
        table.append(row);
    }

    container.append(table);
    var buttonAdd = $('<button class="add">Add</button>');
    container.append(buttonAdd);
};

$(document).ready(function () {
    function Hotel(id, name, description, country, city, addedDate, startPrice, type, price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.country = country;
        this.city = city;
        this.addedDate = addedDate;
        this.startPrice = startPrice;
    }

    var hotel = new Hotel(12, "name", "desc", "country1", "city1", new Date(), 100.2);
    var hotel2 = new Hotel(23, "name2", "desc2", "country2", "city2", new Date(), 102.2);
    var hotel3 = new Hotel(233, "name3", "desc3", "country3", "city1", new Date(), 100.2);
    var hotel4 = new Hotel(34, "name4", "desc4", "country4", "city2", new Date(), 102.2);
    var hotel5 = new Hotel(23, "name5", "desc5", "country5", "city2", new Date(), 102.2);

    function remove(hotelID) {
        for (var i = 0; i < hotelArray.length; i++) {
            if (hotelArray[i].id == hotelID)
                hotelArray.splice(i, 1);
        }
    }

    function addHotel(hotel) {
        hotelArray.push(hotel);
    }

    var hotelArray = [];
    hotelArray.push(hotel);
    hotelArray.push(hotel2);
    hotelArray.push(hotel3);
    hotelArray.push(hotel4);
    console.log(hotelArray);

    generateHotelView($('#hotelsContainer'), hotelArray);
    $('table').css({ border: '1px solid black', 'text-align': 'center', padding: '10px' });

    var deleteButton = $('.delete');
    deleteButton.on('click', function () {
        var r = confirm("Are you sure?");
        if (r == true) {
            console.log($(this).attr("data-id"));
            remove($(this).attr("data-id"));
            generateHotelView($('#hotelsContainer'), hotelArray);
        }
    });

    var addButton = $('.add');
    addButton.on('click', function () {
        var continut = $('thead');

        var addRow = $('<tr><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><button class="confirm">Confirm</button><button class="cancel">Cancel</button></td></tr>');
        continut.append(addRow);      
    });

    var cancelButton = $('.cancel');
    cancelButton.on('click', function () {
        generateHotelView($('#hotelsContainer'), hotelArray);
    });

});



//$('#a').click(function (e) {
//    console.log('click');
//    $('#hello').click();
//});
//$('#hello').click(function (e) {
//    console.log('click2');
//});