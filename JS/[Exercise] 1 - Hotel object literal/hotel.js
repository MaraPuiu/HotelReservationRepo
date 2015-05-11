function Hotel(id, name, description, country, city, addedDate, startPrice, type, price) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.country = country;
    this.city = city;
    this.addedDate = addedDate;
    this.startPrice = startPrice;
}

Hotel.prototype.Display = function () {
    console.log(this.name + " " + this.country);
}

var hotel = new Hotel(12, "name", "desc", "country1", "city1", new Date(), 100.2);
var hotel2 = new Hotel(23, "name2", "desc2", "country2", "city2", new Date(), 102.2);
var hotel3 = new Hotel(233, "name3", "desc3", "country3", "city1", new Date(), 100.2);
var hotel4 = new Hotel(34, "name4", "desc4", "country4", "city2", new Date(), 102.2);
var hotel5 = new Hotel(23, "name5", "desc5", "country5", "city2", new Date(), 102.2);

var hotelArray =[];
hotelArray.push(hotel);
hotelArray.push(hotel2);
hotelArray.push(hotel3);

function addHotel(hotel) {
    hotelArray.push(hotel);
}

function updateHotel(hotel) {
    for (var i = 0; i < hotelArray.length; i++) {
        if (hotelArray[i].id === hotel.id)
            hotelArray[i] = hotel;
    }
}

function remove(hotelID) {
    for (var i = 0; i < hotelArray.length; i++) {
        if (hotelArray[i].id === hotelID)
            hotelArray.splice(i, 1);
    }
}

function maxHotelID() {
    var max = 0;
    for (var i = 0; i < hotelArray.length; i++) {
        if (hotelArray[i].id > max)
            max = hotelArray[i].id;
    }
    return max;
}

function returnHotel(hotelID) {
    for (var i = 0; i < hotelArray.length; i++) {
        if (hotelArray[i].id === hotelID)
            return hotelArray[i];
    }
}

function reverseArray() {
    hotelArray.reverse();
}

function reverseArrayClassic(input) {
    var ret = new Array;
    for (var i = input.length - 1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}

console.log(hotelArray);

addHotel(hotel4);
console.log(hotelArray);

updateHotel(hotel5);
console.log(hotelArray);

remove(23);
console.log(hotelArray);

console.log(maxHotelID());

console.log(returnHotel(34));

reverseArray();
console.log(hotelArray);

console.log(JSON.stringify(hotelArray));

//js
//console.log(document.querySelector('#hotelsContainer'));
//console.log(document.querySelectorAll('.right'));
//console.log(document.querySelectorAll('#third span'));

//console.log(document.getElementById('hotelsContainer'));
//console.log(document.getElementsByClassName('right'));
//console.log(document.getElementById('third').getElementsByTagName('span'));


//jQuery
//console.log($("#hotelsContainer"));
//console.log($(".right"));
//console.log($("#third span"));


//$('div').each(function (index, element) { console.log(index + ": " + $(element).text());});
//$('div').each(function (index, element) { console.log(index + ": " + $(this).text());});
//$('div').each(function (index, element) { console.log(index + ": " + $(this).attr('class')); });


//$('div').each(function (index, element) { $(this).attr("class", 'sss'); console.log($(this).attr('class')); });


//var div = $('<div><span>ss</span></div>')
//console.log(div.text());

//var div = $('<div/>', { 'class': 'sss' });
//console.log(div.attr('class'));


//var div = $('<div/>', { 'class': 'sss' });

//var span = $('<span/>', { 'text': 'sdf' });

//div.append(span);
//span.remove();
//console.log(div.text());


//var div = $('<div/>', { 'class': 'sss' });
//console.log(div.hasClass('sss'));

//div.addClass('asd');
//div.removeClass('sss');
//console.log(div.attr('class'));
