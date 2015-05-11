var hotel = {
    id: 123,
    name: "asdName",
    description: "asdDesc",
    country: "asdCountry",
    city: "asdCity",
    addedDate: new Date(1993, 5, 5, 5, 5, 5, 5),
    startPrice: 100.002,
    camera: {
        type:"single",
        price: 123.003,
        furniture: {
            bed: "waterbed",
            bath: "shower"
        }
    }
};


//console.log(hotel.id);
//console.log(hotel.name);
//console.log(hotel.description);
//console.log(hotel.country);
//console.log(hotel.addedDate);
//console.log(hotel.startPrice);
//console.log(hotel.camera.type);
//console.log(hotel.camera.furniture.bed);

function Hotel(id, name, description, country, city, addedDate, startPrice, type, price) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.country = country;
    this.city = city;
    this.addedDate = addedDate;
    this.startPrice = startPrice;
    //this.camera.type = type;
    //this.camera.price = price;
}

Hotel.prototype.Display = function () {
    console.log(this.name + " " + this.country);
}

var hotel = new Hotel(12, "name", "desc", "country1", "city1", new Date(), 100.2);
var hotel2 = new Hotel(12, "name2", "desc2", "country2", "city2", new Date(), 102.2);
var hotel3 = new Hotel(12, "name3", "desc3", "country3", "city1", new Date(), 100.2);
var hotel4 = new Hotel(12, "name4", "desc4", "country4", "city2", new Date(), 102.2);

//console.log(hotel);
//console.log(hotel2.Display());

var hotelArray = [];
hotelArray.push(hotel);
hotelArray.push(hotel2);
hotelArray.push(hotel3);
hotelArray.push(hotel4);

//console.log(hotelArray);

hotelArray.pop();
//console.log(hotelArray);

hotelArray.shift();
//console.log(hotelArray);

hotelArray.unshift(hotel);
//console.log(hotelArray);

//console.log(JSON.stringify(hotelArray));
//JSON.parse((JSON.stringify(hotelArray)));

