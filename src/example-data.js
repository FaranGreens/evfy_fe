let car = {
    "make": "Maruti Suzuki",
    "model": "Fronx",
    "year": 2023,
    "mileage": 21,
    "transmission": "automatic",
    "engine": 1190,
    "bhp":98.66,
    "interior_color": "gray",
    "fuel_type": "petrol",
    "price": 800000,
    "images":["https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/FRONX/9243/1673943130006/front-left-side-47.jpg?tr=w-456", "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/FRONX/9243/1673943130006/side-view-(left)-90.jpg"],
    "colors":{
        "white": "https://stimg.cardekho.com/images/car-images/930x620/Maruti/FRONX/9243/1674108902046/222_arctic-white_b7b9ba.jpg",
        "red":"https://stimg.cardekho.com/images/car-images/930x620/Maruti/FRONX/9243/1674108445763/226_opulent-red_ee4641.jpg",
        "blue": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/FRONX/9243/1673943130006/front-left-side-47.jpg?tr=w-456"
    },
    "page": "https://www.cardekho.com/maruti/fronx"
    
}

car.images = [...car.images, ...car.images, ...car.images];

export default car;