
// // const resturant = ["ck dir", "mk2" , "toto"];

// const { createElement } = require("react");


// // const jsonObj = JSON.stringify({dhabaname : resturant});
// // console.log(jsonObj);


// //basically we convert the data into object form 


// //restu image 
// //restu name
// //restu alcohol 




// const resturant = [];

// const resturantname = ["Urban Tadka",
//   "Spice Villa",
//   "Food Junction",
//   "The Hungry Bowl",
//   "Royal Bites",
//   "Taste Town",
//   "Curry Castle",
//   "Flavour Hub",
//   "Masala Magic",
//   "The Food Spot"]

// const restaurantImages = [
//   "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
//   "https://images.unsplash.com/photo-1552566626-52f8b828add9",
//   "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
//   "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
//   "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
//   "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
//   "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
//   "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
//   "https://images.unsplash.com/photo-1559339352-11d035aa65de",
//   "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17"
// ];

// for(let i = 0  ; i<10 ;i++){
// let obj = {};

// obj["resturantname"] = resturantname[Math.floor(Math.random()*10)];
// // obj.resturant= resturantname[Math.floor(Math.random()*10)];

// obj['restuimage'] = restaurantImages[Math.floor(Math.random()*10)];

// obj['alcoholserves'] = Math.random()  > 0.7 
// //it means it give true or false means only 30% restu serves alcohol serves

// obj['restuopentime'] = Math.floor(Math.random()*24);
// obj['restuclosedtime'] = (obj['restuopentime']+12)%24;
// obj['rating'] = (Math.random()*5+1).toFixed(1);


// resturant.push(obj);
// }


// const fs = require('fs');

// const obj = JSON.stringify(resturant , null , 2);

// fs.writeFile('array.json' , obj , ()=>{
//   console.log("file creation done");
// })

// // console.log(resturant);

// //convert this resturant array into object form using json 

// const fs = require('fs');  //this fs is file system means give me file handling tool so that i can make and read file 


// // const object = JSON.stringify(resturant);
// const object = JSON.stringify(resturant ,null,2);  //convert array into json object  
//null means no filtering 
//2 means space indentation 

// fs.writeFile('array.json' , object , ()=>{
//     console.log("file createdd");
// })

// Yes, mostly developers use it when they want the JSON file to be human-readable.

// JSON.stringify(data, null, 2)


const restaurants = [
    {
        "image": "second",
        "name": "Fusion Feast",
        "rating": 5,
        "food_type": "Japanese",
        "price_for_two": 1582,
        "location": "Safdarjung Tomb",
        "distance_from_Customer_house": "5.1",
        "offers": 20,
        "alcohol": true,
        "restaurant_open_time": 16,
        "restaurant_close_time": 4
    },
    {
        "image": "nine",
        "name": "The Foodie's Hub",
        "rating": 1,
        "food_type": "Chinese",
        "price_for_two": 1631,
        "location": "Khan Market",
        "distance_from_Customer_house": "7.7",
        "offers": 9,
        "alcohol": true,
        "restaurant_open_time": 16,
        "restaurant_close_time": 4
    },
    {
        "image": "First",
        "name": "Flavor Junction",
        "rating": 5,
        "food_type": "Mexican",
        "price_for_two": 299,
        "location": "Jama Masjid",
        "distance_from_Customer_house": "4.1",
        "offers": 29,
        "alcohol": false,
        "restaurant_open_time": 2,
        "restaurant_close_time": 14
    },
    {
        "image": "third",
        "name": "The Hungry Fork",
        "rating": 5,
        "food_type": "Japanese",
        "price_for_two": 1320,
        "location": "Delhi Zoo",
        "distance_from_Customer_house": "2.0",
        "offers": 12,
        "alcohol": false,
        "restaurant_open_time": 18,
        "restaurant_close_time": 6
    },
    {
        "image": "fifth",
        "name": "Bistro Bliss",
        "rating": 2,
        "food_type": "Japanese",
        "price_for_two": 2298,
        "location": "Red Fort",
        "distance_from_Customer_house": "1.3",
        "offers": 18,
        "alcohol": true,
        "restaurant_open_time": 19,
        "restaurant_close_time": 7
    },
    {
        "image": "Eigth",
        "name": "Zesty Bites",
        "rating": 4,
        "food_type": "Indian",
        "price_for_two": 163,
        "location": "ISKCON Temple",
        "distance_from_Customer_house": "5.5",
        "offers": 23,
        "alcohol": true,
        "restaurant_open_time": 3,
        "restaurant_close_time": 15
    },
    {
        "image": "second",
        "name": "Taste Haven",
        "rating": 3,
        "food_type": "Indian",
        "price_for_two": 1119,
        "location": "Red Fort",
        "distance_from_Customer_house": "3.6",
        "offers": 23,
        "alcohol": false,
        "restaurant_open_time": 15,
        "restaurant_close_time": 3
    },
    {
        "image": "second",
        "name": "Urban Eatery",
        "rating": 1,
        "food_type": "Chinese",
        "price_for_two": 2458,
        "location": "Khan Market",
        "distance_from_Customer_house": "3.9",
        "offers": 3,
        "alcohol": false,
        "restaurant_open_time": 21,
        "restaurant_close_time": 9
    },
    {
        "image": "seventh",
        "name": "The Culinary Table",
        "rating": 2,
        "food_type": "Chinese",
        "price_for_two": 2294,
        "location": "Purana Qila",
        "distance_from_Customer_house": "1.8",
        "offers": 6,
        "alcohol": false,
        "restaurant_open_time": 14,
        "restaurant_close_time": 2
    },
    {
        "image": "tenth",
        "name": "Sizzle & Spice",
        "rating": 2,
        "food_type": "Chinese",
        "price_for_two": 761,
        "location": "Dilli Haat",
        "distance_from_Customer_house": "5.8",
        "offers": 17,
        "alcohol": false,
        "restaurant_open_time": 6,
        "restaurant_close_time": 18
    },
    {
        "image": "Eigth",
        "name": "The Hungry Fork",
        "rating": 1,
        "food_type": "Indian",
        "price_for_two": 682,
        "location": "Connaught Place",
        "distance_from_Customer_house": "8.6",
        "offers": 17,
        "alcohol": false,
        "restaurant_open_time": 16,
        "restaurant_close_time": 4
    },
    {
        "image": "tenth",
        "name": "Wholesome Cravings",
        "rating": 2,
        "food_type": "Japanese",
        "price_for_two": 2276,
        "location": "Khan Market",
        "distance_from_Customer_house": "3.1",
        "offers": 26,
        "alcohol": false,
        "restaurant_open_time": 20,
        "restaurant_close_time": 8
    },
    {
        "image": "seventh",
        "name": "Sizzle & Spice",
        "rating": 1,
        "food_type": "Thai",
        "price_for_two": 824,
        "location": "Safdarjung Tomb",
        "distance_from_Customer_house": "6.4",
        "offers": 3,
        "alcohol": true,
        "restaurant_open_time": 2,
        "restaurant_close_time": 14
    },
    {
        "image": "nine",
        "name": "Gourmet Delight",
        "rating": 3,
        "food_type": "Chinese",
        "price_for_two": 1012,
        "location": "Khan Market",
        "distance_from_Customer_house": "0.9",
        "offers": 22,
        "alcohol": false,
        "restaurant_open_time": 13,
        "restaurant_close_time": 1
    },
    {
        "image": "Eigth",
        "name": "Spice Symphony",
        "rating": 4,
        "food_type": "Chinese",
        "price_for_two": 1406,
        "location": "Purana Qila",
        "distance_from_Customer_house": "0.3",
        "offers": 25,
        "alcohol": true,
        "restaurant_open_time": 7,
        "restaurant_close_time": 19
    },
    {
        "image": "second",
        "name": "Epicurean Escape",
        "rating": 1,
        "food_type": "Italian",
        "price_for_two": 254,
        "location": "National Museum",
        "distance_from_Customer_house": "1.9",
        "offers": 20,
        "alcohol": true,
        "restaurant_open_time": 10,
        "restaurant_close_time": 22
    },
    {
        "image": "nine",
        "name": "Wholesome Cravings",
        "rating": 1,
        "food_type": "Mexican",
        "price_for_two": 297,
        "location": "Connaught Place",
        "distance_from_Customer_house": "1.5",
        "offers": 26,
        "alcohol": false,
        "restaurant_open_time": 9,
        "restaurant_close_time": 21
    },
    {
        "image": "seventh",
        "name": "Epicurean Escape",
        "rating": 1,
        "food_type": "Italian",
        "price_for_two": 2445,
        "location": "Hauz Khas Village",
        "distance_from_Customer_house": "8.9",
        "offers": 16,
        "alcohol": false,
        "restaurant_open_time": 3,
        "restaurant_close_time": 15
    },
    {
        "image": "third",
        "name": "Epicurean Escape",
        "rating": 3,
        "food_type": "Japanese",
        "price_for_two": 783,
        "location": "Jama Masjid",
        "distance_from_Customer_house": "6.2",
        "offers": 24,
        "alcohol": false,
        "restaurant_open_time": 15,
        "restaurant_close_time": 3
    },
    {
        "image": "seventh",
        "name": "Zesty Bites",
        "rating": 3,
        "food_type": "Mexican",
        "price_for_two": 2410,
        "location": "Gurudwara Bangla Sahib",
        "distance_from_Customer_house": "2.8",
        "offers": 17,
        "alcohol": false,
        "restaurant_open_time": 14,
        "restaurant_close_time": 2
    },
    {
        "image": "First",
        "name": "The Foodie's Hub",
        "rating": 1,
        "food_type": "Thai",
        "price_for_two": 2306,
        "location": "Humayun's Tomb",
        "distance_from_Customer_house": "8.3",
        "offers": 11,
        "alcohol": true,
        "restaurant_open_time": 3,
        "restaurant_close_time": 15
    },
    {
        "image": "second",
        "name": "Spice Symphony",
        "rating": 2,
        "food_type": "Japanese",
        "price_for_two": 300,
        "location": "Humayun's Tomb",
        "distance_from_Customer_house": "0.4",
        "offers": 6,
        "alcohol": true,
        "restaurant_open_time": 17,
        "restaurant_close_time": 5
    },
    {
        "image": "seventh",
        "name": "Fusion Feast",
        "rating": 4,
        "food_type": "Thai",
        "price_for_two": 326,
        "location": "India Gate",
        "distance_from_Customer_house": "0.2",
        "offers": 0,
        "alcohol": true,
        "restaurant_open_time": 23,
        "restaurant_close_time": 11
    },
    {
        "image": "third",
        "name": "Crispy Corner",
        "rating": 1,
        "food_type": "Thai",
        "price_for_two": 374,
        "location": "Safdarjung Tomb",
        "distance_from_Customer_house": "9.9",
        "offers": 27,
        "alcohol": false,
        "restaurant_open_time": 9,
        "restaurant_close_time": 21
    },
    {
        "image": "second",
        "name": "The Hungry Fork",
        "rating": 1,
        "food_type": "Japanese",
        "price_for_two": 671,
        "location": "Connaught Place",
        "distance_from_Customer_house": "9.5",
        "offers": 21,
        "alcohol": false,
        "restaurant_open_time": 7,
        "restaurant_close_time": 19
    },
    {
        "image": "second",
        "name": "Tasty Treats",
        "rating": 5,
        "food_type": "Thai",
        "price_for_two": 2349,
        "location": "India Gate",
        "distance_from_Customer_house": "1.7",
        "offers": 6,
        "alcohol": false,
        "restaurant_open_time": 22,
        "restaurant_close_time": 10
    },
    {
        "image": "Eigth",
        "name": "Taste Haven",
        "rating": 4,
        "food_type": "Thai",
        "price_for_two": 1809,
        "location": "Khan Market",
        "distance_from_Customer_house": "9.8",
        "offers": 12,
        "alcohol": false,
        "restaurant_open_time": 15,
        "restaurant_close_time": 3
    },
    {
        "image": "fourth",
        "name": "Fusion Feast",
        "rating": 5,
        "food_type": "Indian",
        "price_for_two": 589,
        "location": "ISKCON Temple",
        "distance_from_Customer_house": "9.0",
        "offers": 4,
        "alcohol": true,
        "restaurant_open_time": 22,
        "restaurant_close_time": 10
    },
    {
        "image": "Eigth",
        "name": "Golden Plate",
        "rating": 5,
        "food_type": "Chinese",
        "price_for_two": 1638,
        "location": "Hauz Khas Village",
        "distance_from_Customer_house": "2.0",
        "offers": 0,
        "alcohol": false,
        "restaurant_open_time": 6,
        "restaurant_close_time": 18
    },
    {
        "image": "Eigth",
        "name": "Zesty Bites",
        "rating": 5,
        "food_type": "Mexican",
        "price_for_two": 901,
        "location": "Gurudwara Bangla Sahib",
        "distance_from_Customer_house": "0.9",
        "offers": 28,
        "alcohol": false,
        "restaurant_open_time": 20,
        "restaurant_close_time": 8
    },
    {
        "image": "First",
        "name": "The Dining Den",
        "rating": 5,
        "food_type": "Thai",
        "price_for_two": 291,
        "location": "India Gate",
        "distance_from_Customer_house": "1.8",
        "offers": 27,
        "alcohol": true,
        "restaurant_open_time": 10,
        "restaurant_close_time": 22
    },
    {
        "image": "fifth",
        "name": "The Hungry Fork",
        "rating": 2,
        "food_type": "Chinese",
        "price_for_two": 594,
        "location": "Delhi Zoo",
        "distance_from_Customer_house": "2.8",
        "offers": 17,
        "alcohol": true,
        "restaurant_open_time": 8,
        "restaurant_close_time": 20
    },
    {
        "image": "nine",
        "name": "Wholesome Cravings",
        "rating": 5,
        "food_type": "Italian",
        "price_for_two": 1026,
        "location": "Chandni Chowk",
        "distance_from_Customer_house": "4.8",
        "offers": 11,
        "alcohol": false,
        "restaurant_open_time": 13,
        "restaurant_close_time": 1
    },
    {
        "image": "fifth",
        "name": "Bistro Bliss",
        "rating": 1,
        "food_type": "Italian",
        "price_for_two": 2014,
        "location": "Akshardham Temple",
        "distance_from_Customer_house": "7.0",
        "offers": 30,
        "alcohol": true,
        "restaurant_open_time": 3,
        "restaurant_close_time": 15
    },
    {
        "image": "Eigth",
        "name": "Urban Eatery",
        "rating": 2,
        "food_type": "Indian",
        "price_for_two": 1379,
        "location": "ISKCON Temple",
        "distance_from_Customer_house": "5.9",
        "offers": 29,
        "alcohol": true,
        "restaurant_open_time": 10,
        "restaurant_close_time": 22
    },
    {
        "image": "fifth",
        "name": "The Rustic Spoon",
        "rating": 2,
        "food_type": "Mexican",
        "price_for_two": 1804,
        "location": "Chandni Chowk",
        "distance_from_Customer_house": "7.4",
        "offers": 3,
        "alcohol": true,
        "restaurant_open_time": 11,
        "restaurant_close_time": 23
    },
    {
        "image": "tenth",
        "name": "Crispy Corner",
        "rating": 1,
        "food_type": "Thai",
        "price_for_two": 1107,
        "location": "Delhi Zoo",
        "distance_from_Customer_house": "3.7",
        "offers": 27,
        "alcohol": true,
        "restaurant_open_time": 20,
        "restaurant_close_time": 8
    },
    {
        "image": "Eigth",
        "name": "Flavor Junction",
        "rating": 5,
        "food_type": "Thai",
        "price_for_two": 2071,
        "location": "India Gate",
        "distance_from_Customer_house": "3.2",
        "offers": 7,
        "alcohol": false,
        "restaurant_open_time": 3,
        "restaurant_close_time": 15
    },
    {
        "image": "nine",
        "name": "Flavor Junction",
        "rating": 4,
        "food_type": "Italian",
        "price_for_two": 1020,
        "location": "Qutub Minar",
        "distance_from_Customer_house": "2.0",
        "offers": 14,
        "alcohol": false,
        "restaurant_open_time": 1,
        "restaurant_close_time": 13
    },
    {
        "image": "second",
        "name": "Savory Spot",
        "rating": 2,
        "food_type": "Mexican",
        "price_for_two": 392,
        "location": "Raj Ghat",
        "distance_from_Customer_house": "7.8",
        "offers": 15,
        "alcohol": true,
        "restaurant_open_time": 21,
        "restaurant_close_time": 9
    },
    {
        "image": "second",
        "name": "Epicurean Escape",
        "rating": 5,
        "food_type": "Japanese",
        "price_for_two": 2453,
        "location": "ISKCON Temple",
        "distance_from_Customer_house": "1.6",
        "offers": 28,
        "alcohol": true,
        "restaurant_open_time": 11,
        "restaurant_close_time": 23
    },
    {
        "image": "fourth",
        "name": "The Hungry Fork",
        "rating": 2,
        "food_type": "Mexican",
        "price_for_two": 282,
        "location": "Gurudwara Bangla Sahib",
        "distance_from_Customer_house": "2.2",
        "offers": 21,
        "alcohol": true,
        "restaurant_open_time": 22,
        "restaurant_close_time": 10
    },
    {
        "image": "fifth",
        "name": "Zesty Bites",
        "rating": 2,
        "food_type": "Chinese",
        "price_for_two": 967,
        "location": "Safdarjung Tomb",
        "distance_from_Customer_house": "9.2",
        "offers": 23,
        "alcohol": false,
        "restaurant_open_time": 8,
        "restaurant_close_time": 20
    },
    {
        "image": "seventh",
        "name": "Fusion Feast",
        "rating": 4,
        "food_type": "Mexican",
        "price_for_two": 1112,
        "location": "Jama Masjid",
        "distance_from_Customer_house": "3.4",
        "offers": 5,
        "alcohol": false,
        "restaurant_open_time": 22,
        "restaurant_close_time": 10
    },
    {
        "image": "third",
        "name": "Spice Symphony",
        "rating": 3,
        "food_type": "Japanese",
        "price_for_two": 2103,
        "location": "Jama Masjid",
        "distance_from_Customer_house": "2.2",
        "offers": 9,
        "alcohol": false,
        "restaurant_open_time": 18,
        "restaurant_close_time": 6
    },
    {
        "image": "fourth",
        "name": "Taste Haven",
        "rating": 4,
        "food_type": "Italian",
        "price_for_two": 1898,
        "location": "Lotus Temple",
        "distance_from_Customer_house": "1.1",
        "offers": 3,
        "alcohol": false,
        "restaurant_open_time": 10,
        "restaurant_close_time": 22
    },
    {
        "image": "third",
        "name": "Bistro Bliss",
        "rating": 4,
        "food_type": "Japanese",
        "price_for_two": 1663,
        "location": "Akshardham Temple",
        "distance_from_Customer_house": "8.4",
        "offers": 13,
        "alcohol": true,
        "restaurant_open_time": 8,
        "restaurant_close_time": 20
    },
    {
        "image": "third",
        "name": "Golden Plate",
        "rating": 4,
        "food_type": "Japanese",
        "price_for_two": 832,
        "location": "Connaught Place",
        "distance_from_Customer_house": "0.4",
        "offers": 18,
        "alcohol": true,
        "restaurant_open_time": 5,
        "restaurant_close_time": 17
    },
    {
        "image": "fourth",
        "name": "Urban Eatery",
        "rating": 5,
        "food_type": "Japanese",
        "price_for_two": 2301,
        "location": "Lotus Temple",
        "distance_from_Customer_house": "5.0",
        "offers": 8,
        "alcohol": true,
        "restaurant_open_time": 11,
        "restaurant_close_time": 23
    },
    {
        "image": "First",
        "name": "Bistro Bliss",
        "rating": 3,
        "food_type": "Thai",
        "price_for_two": 1765,
        "location": "Humayun's Tomb",
        "distance_from_Customer_house": "6.6",
        "offers": 3,
        "alcohol": false,
        "restaurant_open_time": 3,
        "restaurant_close_time": 15
    },
    {
        "image": "sixth",
        "name": "The Foodie's Hub",
        "rating": 1,
        "food_type": "Mexican",
        "price_for_two": 1292,
        "location": "Khan Market",
        "distance_from_Customer_house": "9.6",
        "offers": 9,
        "alcohol": false,
        "restaurant_open_time": 5,
        "restaurant_close_time": 17
    },
    {
        "image": "seventh",
        "name": "The Foodie's Hub",
        "rating": 5,
        "food_type": "Chinese",
        "price_for_two": 849,
        "location": "Gurudwara Bangla Sahib",
        "distance_from_Customer_house": "5.8",
        "offers": 28,
        "alcohol": false,
        "restaurant_open_time": 17,
        "restaurant_close_time": 5
    },
    {
        "image": "fourth",
        "name": "Savory Spot",
        "rating": 3,
        "food_type": "Indian",
        "price_for_two": 108,
        "location": "ISKCON Temple",
        "distance_from_Customer_house": "4.3",
        "offers": 18,
        "alcohol": true,
        "restaurant_open_time": 21,
        "restaurant_close_time": 9
    },
    {
        "image": "second",
        "name": "Crispy Corner",
        "rating": 3,
        "food_type": "Italian",
        "price_for_two": 2028,
        "location": "Connaught Place",
        "distance_from_Customer_house": "7.3",
        "offers": 13,
        "alcohol": true,
        "restaurant_open_time": 0,
        "restaurant_close_time": 12
    },
    {
        "image": "tenth",
        "name": "Gourmet Delight",
        "rating": 2,
        "food_type": "Japanese",
        "price_for_two": 1397,
        "location": "India Gate",
        "distance_from_Customer_house": "5.6",
        "offers": 20,
        "alcohol": true,
        "restaurant_open_time": 20,
        "restaurant_close_time": 8
    },
    {
        "image": "First",
        "name": "Bistro Bliss",
        "rating": 5,
        "food_type": "Japanese",
        "price_for_two": 2094,
        "location": "Hauz Khas Village",
        "distance_from_Customer_house": "7.9",
        "offers": 4,
        "alcohol": false,
        "restaurant_open_time": 1,
        "restaurant_close_time": 13
    },
    {
        "image": "tenth",
        "name": "Bistro Bliss",
        "rating": 2,
        "food_type": "Indian",
        "price_for_two": 606,
        "location": "Khan Market",
        "distance_from_Customer_house": "8.2",
        "offers": 1,
        "alcohol": true,
        "restaurant_open_time": 14,
        "restaurant_close_time": 2
    },
    {
        "image": "First",
        "name": "Sizzle & Spice",
        "rating": 5,
        "food_type": "Italian",
        "price_for_two": 1450,
        "location": "Dilli Haat",
        "distance_from_Customer_house": "4.3",
        "offers": 13,
        "alcohol": false,
        "restaurant_open_time": 9,
        "restaurant_close_time": 21
    },
    {
        "image": "second",
        "name": "Gourmet Delight",
        "rating": 2,
        "food_type": "Mexican",
        "price_for_two": 508,
        "location": "Red Fort",
        "distance_from_Customer_house": "7.8",
        "offers": 21,
        "alcohol": false,
        "restaurant_open_time": 4,
        "restaurant_close_time": 16
    },
    {
        "image": "First",
        "name": "Wholesome Cravings",
        "rating": 4,
        "food_type": "Chinese",
        "price_for_two": 1191,
        "location": "Safdarjung Tomb",
        "distance_from_Customer_house": "6.5",
        "offers": 2,
        "alcohol": true,
        "restaurant_open_time": 19,
        "restaurant_close_time": 7
    },
    {
        "image": "fifth",
        "name": "Epicurean Escape",
        "rating": 2,
        "food_type": "Japanese",
        "price_for_two": 824,
        "location": "Gurudwara Bangla Sahib",
        "distance_from_Customer_house": "8.1",
        "offers": 24,
        "alcohol": false,
        "restaurant_open_time": 9,
        "restaurant_close_time": 21
    },
    {
        "image": "fourth",
        "name": "Crispy Corner",
        "rating": 4,
        "food_type": "Japanese",
        "price_for_two": 1702,
        "location": "Humayun's Tomb",
        "distance_from_Customer_house": "4.3",
        "offers": 13,
        "alcohol": true,
        "restaurant_open_time": 22,
        "restaurant_close_time": 10
    },
    {
        "image": "Eigth",
        "name": "Wholesome Cravings",
        "rating": 2,
        "food_type": "Italian",
        "price_for_two": 1504,
        "location": "Lotus Temple",
        "distance_from_Customer_house": "7.3",
        "offers": 0,
        "alcohol": true,
        "restaurant_open_time": 17,
        "restaurant_close_time": 5
    },
    {
        "image": "second",
        "name": "Bistro Bliss",
        "rating": 3,
        "food_type": "Mexican",
        "price_for_two": 765,
        "location": "Qutub Minar",
        "distance_from_Customer_house": "8.2",
        "offers": 18,
        "alcohol": false,
        "restaurant_open_time": 5,
        "restaurant_close_time": 17
    },
    {
        "image": "second",
        "name": "The Foodie's Hub",
        "rating": 1,
        "food_type": "Japanese",
        "price_for_two": 1924,
        "location": "National Museum",
        "distance_from_Customer_house": "3.9",
        "offers": 14,
        "alcohol": false,
        "restaurant_open_time": 12,
        "restaurant_close_time": 0
    },
    {
        "image": "tenth",
        "name": "Crispy Corner",
        "rating": 5,
        "food_type": "Japanese",
        "price_for_two": 1502,
        "location": "Lotus Temple",
        "distance_from_Customer_house": "0.1",
        "offers": 7,
        "alcohol": false,
        "restaurant_open_time": 8,
        "restaurant_close_time": 20
    },
    {
        "image": "tenth",
        "name": "Crispy Corner",
        "rating": 4,
        "food_type": "Mexican",
        "price_for_two": 1600,
        "location": "Chandni Chowk",
        "distance_from_Customer_house": "7.8",
        "offers": 7,
        "alcohol": false,
        "restaurant_open_time": 14,
        "restaurant_close_time": 2
    },
    {
        "image": "nine",
        "name": "Flavor Junction",
        "rating": 3,
        "food_type": "Thai",
        "price_for_two": 2487,
        "location": "Jama Masjid",
        "distance_from_Customer_house": "7.6",
        "offers": 19,
        "alcohol": true,
        "restaurant_open_time": 11,
        "restaurant_close_time": 23
    },
    {
        "image": "sixth",
        "name": "Taste Haven",
        "rating": 3,
        "food_type": "Thai",
        "price_for_two": 2213,
        "location": "Humayun's Tomb",
        "distance_from_Customer_house": "1.7",
        "offers": 24,
        "alcohol": false,
        "restaurant_open_time": 20,
        "restaurant_close_time": 8
    },
    {
        "image": "First",
        "name": "The Culinary Table",
        "rating": 3,
        "food_type": "Japanese",
        "price_for_two": 1579,
        "location": "Delhi Zoo",
        "distance_from_Customer_house": "2.3",
        "offers": 26,
        "alcohol": false,
        "restaurant_open_time": 1,
        "restaurant_close_time": 13
    },
    {
        "image": "tenth",
        "name": "Epicurean Escape",
        "rating": 3,
        "food_type": "Indian",
        "price_for_two": 1122,
        "location": "Raj Ghat",
        "distance_from_Customer_house": "3.8",
        "offers": 10,
        "alcohol": true,
        "restaurant_open_time": 1,
        "restaurant_close_time": 13
    },
    {
        "image": "fifth",
        "name": "The Hungry Fork",
        "rating": 4,
        "food_type": "Thai",
        "price_for_two": 1321,
        "location": "Raj Ghat",
        "distance_from_Customer_house": "6.0",
        "offers": 21,
        "alcohol": false,
        "restaurant_open_time": 11,
        "restaurant_close_time": 23
    },
    {
        "image": "First",
        "name": "Epicurean Escape",
        "rating": 4,
        "food_type": "Japanese",
        "price_for_two": 508,
        "location": "Qutub Minar",
        "distance_from_Customer_house": "8.3",
        "offers": 18,
        "alcohol": true,
        "restaurant_open_time": 6,
        "restaurant_close_time": 18
    },
    {
        "image": "tenth",
        "name": "Wholesome Cravings",
        "rating": 2,
        "food_type": "Chinese",
        "price_for_two": 1197,
        "location": "Dilli Haat",
        "distance_from_Customer_house": "3.9",
        "offers": 25,
        "alcohol": false,
        "restaurant_open_time": 2,
        "restaurant_close_time": 14
    },
    {
        "image": "third",
        "name": "The Culinary Table",
        "rating": 5,
        "food_type": "Indian",
        "price_for_two": 212,
        "location": "Chandni Chowk",
        "distance_from_Customer_house": "6.9",
        "offers": 0,
        "alcohol": true,
        "restaurant_open_time": 21,
        "restaurant_close_time": 9
    },
    {
        "image": "fifth",
        "name": "The Foodie's Hub",
        "rating": 4,
        "food_type": "Thai",
        "price_for_two": 712,
        "location": "Lotus Temple",
        "distance_from_Customer_house": "5.5",
        "offers": 5,
        "alcohol": false,
        "restaurant_open_time": 2,
        "restaurant_close_time": 14
    },
    {
        "image": "third",
        "name": "Epicurean Escape",
        "rating": 4,
        "food_type": "Thai",
        "price_for_two": 2280,
        "location": "Dilli Haat",
        "distance_from_Customer_house": "4.5",
        "offers": 7,
        "alcohol": false,
        "restaurant_open_time": 3,
        "restaurant_close_time": 15
    },
    {
        "image": "seventh",
        "name": "The Foodie's Hub",
        "rating": 2,
        "food_type": "Chinese",
        "price_for_two": 327,
        "location": "Akshardham Temple",
        "distance_from_Customer_house": "4.4",
        "offers": 30,
        "alcohol": true,
        "restaurant_open_time": 3,
        "restaurant_close_time": 15
    },
    {
        "image": "seventh",
        "name": "Wholesome Cravings",
        "rating": 3,
        "food_type": "Indian",
        "price_for_two": 1901,
        "location": "Jama Masjid",
        "distance_from_Customer_house": "4.3",
        "offers": 29,
        "alcohol": false,
        "restaurant_open_time": 15,
        "restaurant_close_time": 3
    },
    {
        "image": "fifth",
        "name": "Sizzle & Spice",
        "rating": 3,
        "food_type": "Indian",
        "price_for_two": 920,
        "location": "Akshardham Temple",
        "distance_from_Customer_house": "8.0",
        "offers": 15,
        "alcohol": false,
        "restaurant_open_time": 3,
        "restaurant_close_time": 15
    },
    {
        "image": "sixth",
        "name": "Zesty Bites",
        "rating": 4,
        "food_type": "Thai",
        "price_for_two": 1364,
        "location": "Humayun's Tomb",
        "distance_from_Customer_house": "1.5",
        "offers": 8,
        "alcohol": false,
        "restaurant_open_time": 2,
        "restaurant_close_time": 14
    },
    {
        "image": "third",
        "name": "Urban Eatery",
        "rating": 2,
        "food_type": "Indian",
        "price_for_two": 2430,
        "location": "Lodi Gardens",
        "distance_from_Customer_house": "9.8",
        "offers": 25,
        "alcohol": false,
        "restaurant_open_time": 17,
        "restaurant_close_time": 5
    },
    {
        "image": "nine",
        "name": "Flavor Junction",
        "rating": 3,
        "food_type": "Italian",
        "price_for_two": 212,
        "location": "Dilli Haat",
        "distance_from_Customer_house": "0.3",
        "offers": 22,
        "alcohol": true,
        "restaurant_open_time": 1,
        "restaurant_close_time": 13
    },
    {
        "image": "Eigth",
        "name": "Golden Plate",
        "rating": 2,
        "food_type": "Chinese",
        "price_for_two": 1858,
        "location": "Red Fort",
        "distance_from_Customer_house": "4.9",
        "offers": 6,
        "alcohol": false,
        "restaurant_open_time": 0,
        "restaurant_close_time": 12
    },
    {
        "image": "First",
        "name": "Urban Eatery",
        "rating": 4,
        "food_type": "Japanese",
        "price_for_two": 1211,
        "location": "Qutub Minar",
        "distance_from_Customer_house": "3.7",
        "offers": 15,
        "alcohol": false,
        "restaurant_open_time": 17,
        "restaurant_close_time": 5
    },
    {
        "image": "fifth",
        "name": "The Foodie's Hub",
        "rating": 3,
        "food_type": "Indian",
        "price_for_two": 1880,
        "location": "Red Fort",
        "distance_from_Customer_house": "2.3",
        "offers": 9,
        "alcohol": true,
        "restaurant_open_time": 2,
        "restaurant_close_time": 14
    },
    {
        "image": "fifth",
        "name": "Taste Haven",
        "rating": 1,
        "food_type": "Japanese",
        "price_for_two": 261,
        "location": "Qutub Minar",
        "distance_from_Customer_house": "0.4",
        "offers": 9,
        "alcohol": false,
        "restaurant_open_time": 20,
        "restaurant_close_time": 8
    },
    {
        "image": "third",
        "name": "Bistro Bliss",
        "rating": 3,
        "food_type": "Thai",
        "price_for_two": 221,
        "location": "ISKCON Temple",
        "distance_from_Customer_house": "8.1",
        "offers": 25,
        "alcohol": false,
        "restaurant_open_time": 15,
        "restaurant_close_time": 3
    },
    {
        "image": "seventh",
        "name": "Flavor Junction",
        "rating": 5,
        "food_type": "Chinese",
        "price_for_two": 2469,
        "location": "India Gate",
        "distance_from_Customer_house": "5.9",
        "offers": 16,
        "alcohol": false,
        "restaurant_open_time": 20,
        "restaurant_close_time": 8
    },
    {
        "image": "third",
        "name": "Fusion Feast",
        "rating": 2,
        "food_type": "Japanese",
        "price_for_two": 1722,
        "location": "Dilli Haat",
        "distance_from_Customer_house": "2.4",
        "offers": 14,
        "alcohol": false,
        "restaurant_open_time": 7,
        "restaurant_close_time": 19
    },
    {
        "image": "fifth",
        "name": "Tasty Treats",
        "rating": 1,
        "food_type": "Japanese",
        "price_for_two": 1264,
        "location": "Delhi Zoo",
        "distance_from_Customer_house": "6.0",
        "offers": 26,
        "alcohol": true,
        "restaurant_open_time": 4,
        "restaurant_close_time": 16
    },
    {
        "image": "second",
        "name": "The Hungry Fork",
        "rating": 4,
        "food_type": "Mexican",
        "price_for_two": 667,
        "location": "Raj Ghat",
        "distance_from_Customer_house": "2.7",
        "offers": 13,
        "alcohol": true,
        "restaurant_open_time": 8,
        "restaurant_close_time": 20
    },
    {
        "image": "Eigth",
        "name": "Zesty Bites",
        "rating": 1,
        "food_type": "Thai",
        "price_for_two": 501,
        "location": "Raj Ghat",
        "distance_from_Customer_house": "0.1",
        "offers": 7,
        "alcohol": true,
        "restaurant_open_time": 1,
        "restaurant_close_time": 13
    },
    {
        "image": "third",
        "name": "Sizzle & Spice",
        "rating": 3,
        "food_type": "Japanese",
        "price_for_two": 981,
        "location": "Akshardham Temple",
        "distance_from_Customer_house": "0.8",
        "offers": 5,
        "alcohol": false,
        "restaurant_open_time": 12,
        "restaurant_close_time": 0
    },
    {
        "image": "fourth",
        "name": "The Dining Den",
        "rating": 1,
        "food_type": "Japanese",
        "price_for_two": 1084,
        "location": "Gurudwara Bangla Sahib",
        "distance_from_Customer_house": "6.0",
        "offers": 10,
        "alcohol": false,
        "restaurant_open_time": 14,
        "restaurant_close_time": 2
    },
    {
        "image": "Eigth",
        "name": "Epicurean Escape",
        "rating": 4,
        "food_type": "Thai",
        "price_for_two": 1469,
        "location": "Qutub Minar",
        "distance_from_Customer_house": "9.8",
        "offers": 1,
        "alcohol": false,
        "restaurant_open_time": 1,
        "restaurant_close_time": 13
    },
    {
        "image": "sixth",
        "name": "Flavor Junction",
        "rating": 4,
        "food_type": "Indian",
        "price_for_two": 1821,
        "location": "Humayun's Tomb",
        "distance_from_Customer_house": "7.6",
        "offers": 21,
        "alcohol": true,
        "restaurant_open_time": 9,
        "restaurant_close_time": 21
    },
    {
        "image": "seventh",
        "name": "The Foodie's Hub",
        "rating": 4,
        "food_type": "Japanese",
        "price_for_two": 1319,
        "location": "Purana Qila",
        "distance_from_Customer_house": "6.8",
        "offers": 20,
        "alcohol": false,
        "restaurant_open_time": 10,
        "restaurant_close_time": 22
    },
    {
        "image": "fifth",
        "name": "Bistro Bliss",
        "rating": 3,
        "food_type": "Chinese",
        "price_for_two": 1160,
        "location": "Jama Masjid",
        "distance_from_Customer_house": "2.2",
        "offers": 5,
        "alcohol": true,
        "restaurant_open_time": 16,
        "restaurant_close_time": 4
    },
    {
        "image": "Eigth",
        "name": "The Dining Den",
        "rating": 2,
        "food_type": "Indian",
        "price_for_two": 2255,
        "location": "Jama Masjid",
        "distance_from_Customer_house": "8.5",
        "offers": 2,
        "alcohol": false,
        "restaurant_open_time": 2,
        "restaurant_close_time": 14
    }
]


function getrestaurant(restaurants){

    const root = document.getElementById('root');
    
    restaurants.forEach(restaurant => {
         
        // Create a card
        // 1: Image
        // 2: Card_content
    //        i: Card_header (Name and rating)
    //        ii: Card_footer (Food_type and price)
    //        iii: card_location (Restaurant location, distance)




    //   create a card
        const card = document.createElement('div');  
        card.classList.add('card');


    // create Image
        const image = document.createElement("img");
        image.src = `Images/${restaurant.image}.jpeg`;

    // card-content
       const Card_content = document.createElement('div');
       Card_content.classList.add('card-content');

    // Card header
       const Card_header = document.createElement('div');
       Card_header.classList.add('card-header');

       const h3 = document.createElement('h3');
       h3.textContent = restaurant.name;

       const rate = document.createElement('span');
       rate.textContent = "Rating: " + restaurant.rating;
       rate.classList.add('rating');


       Card_header.appendChild(h3);
       Card_header.appendChild(rate);


    
    


    // Card footer
       const Card_footer = document.createElement('div');
       Card_footer.classList.add('card-footer');
       
       const food = document.createElement('span');
       food.textContent = restaurant.food_type;

       const price = document.createElement('span');
       price.textContent = "₹"+restaurant.price_for_two;

       Card_footer.appendChild(food);
       Card_footer.appendChild(price);





    //  Card Location
    const card_location = document.createElement('div');
    card_location.classList.add('card-location');
 
    const location = document.createElement('span');
    location.textContent = restaurant.location;

    const distance = document.createElement('span');
    distance.textContent = restaurant.distance_from_Customer_house+"km";
    

    card_location.appendChild(location);
    card_location.appendChild(distance);


    Card_content.appendChild(Card_header);
    Card_content.appendChild(Card_footer);
    Card_content.appendChild(card_location);


    card.appendChild(image);
    card.appendChild(Card_content);

    root.appendChild(card);
    
    });

}


getrestaurant(restaurants);

//BASICALLY WE MADE THIS FUNCTION TO SHOWCASE U THAT WE JUST PASSED AN ARRAY INTO IT AND WHATEVER THE OBJECT INSIDE INTO IT IT CREATES CARD OF IT OR TAKING  RESTURANT DETAILS IN OJBECT FORM AND THIS FUNCTION CREATE A CARD OF IT 
//LIKE A FULLY FLEGED CARD 


//Class list -- you can add multiple classes into it 
//class Name -- you can add only one class


// //NOTE --- BUTTON FUNCTIONALITIES 
// //ADD FUNCTIONALITIES TO ALCOHOL BUTTON 
// document.querySelector('#Alcohol').addEventListener('click' , ()=>{

//     //we want those resturant which allow alcohol so for this we use filter we filter it from resturant data 
//   //it gives u true or false 
//     const result = restaurants.filter((obj)=> obj.alcohol ) //if true then stores in result 
//     //this result gives the resturant which have alchol 
//     //now we have to print these restaurant like this but before calling the function we have to remove the previous display resturant on the screen also so for this we do
//     // document.querySelector('#root').innerHTML = "";
//     document.querySelector('#root').replaceChildren();
//     //INSTEAD OF .innerHTML = ""; u can use .replaceChildren() it also remove all the children /  resturants
//     //now no restu is there now we call the function like this 
//     getrestaurant(result);
// })

// //ADD FUNCTIONALITIES TO RATING BUTTON 
// document.querySelector('#Rating').addEventListener('click', ()=>{

// const fullrate = restaurants.filter((obj)=> obj.rating > 4);

// document.querySelector('#root').replaceChildren();

// getrestaurant(fullrate);

// //LOGIC SAME LIKE PREVIOUS
// })

// //NOW WE SEE HOW TO MAKE POP UP FILTERS FUNCTIONALITIES LIKE -- 

// //lets access filter button 

// document.querySelector('#Filters').addEventListener('click' , ()=>{

//   document.querySelector('#filterPopup').classList.remove("hidden");

// })


// //now whenever we click on filter the filters popup
// //now we add functionalites into filters inside like apply or remove functionalities 

// document.querySelector('#applyFilter').addEventListener('click' , ()=>{
  
//     //now we want functionalities on the element which is been selected 
//     //like when we click on apply the element which is been selected we want that so for this 
//   //we do this using name attribute why because all input have same name attribute we also add which is been checked code be like this 


//   const element = document.querySelector('input[name = "filterOption"]:checked');

//   // on the basis of attribute if u want to select any element use this 
// //now we want the value of element which is select so that we can add functionalities in that selected element 

// const answer = element.value;

// if(answer === "rating"){
//     // document.querySelector('#root').innerHTML = "";
//    restaurants.sort((a,b)=> b.rating - a.rating)  //if we do b-a means we got result in Descending order  if a-b then got in ascending order
// }   //make sure u write .rating  means on the basis of what u want result 

// else if(answer === "highLow"){
// restaurants.sort((a,b) => b.price_for_two - a.price_for_two)
// }

// else if(answer === "costLowHigh"){
//     restaurants.sort((a,b) => a.price_for_two - b.price_for_two);
// }  //it sort result in ASCENDING ORDER

// else if(answer === "distance"){
//     restaurants.sort((a,b) => a.distance_from_Customer_house - b.distance_from_Customer_house);
// }

// document.querySelector('#root').replaceChildren();
// getrestaurant(restaurants);
// document.querySelector('#filterPopup').classList.add("hidden"); //we use this when we click on apply the changes will apply just to remove filterpopup we use this 

// })

// //NOW we add functionalities for the close button in the filters -- 

// document.querySelector('#closeFilter').addEventListener('click' , ()=>{
// document.querySelector('#filterPopup').classList.add("hidden");
// //or 
// // document.querySelector('#filterPopup').className = "hidden";
// })




//NOTE -- BASICALLY THIS IS DOM MANIPULATION LIKE WE SHOW NEW DATA IN UI
//BUT FIRST REMOVE THE PREVIOUSLY DATA 


//we have also other option like we create another page for this then redirect to that page 


//like when u click on any specific card then full details of that resturant will show 
//to do this u have 2 option i said 
//u can do dom manipulation first remove previous data then show the new data acc to requirement 



//CONVERT ARRAY INTO JSON 

// const fs = require('fs');

// const jsondata = JSON.stringify(restaurants , null , 4);
// fs.writeFileSync('array.json' , jsondata , 'utf8');

// or 
// fs.writeFileSync('array.json' , jsondata , ()=>{
//     console.log("file is created");
// });





//JUST FOR REVISION 

// document.querySelector('#Alcohol').addEventListener('click' , ()=>{

//     const result = restaurants.filter((obj) => obj.alcohol);

//     document.querySelector('#root').replaceChildren();

//     getrestaurant(result);
// })

// document.querySelector('#Rating').addEventListener('click' , ()=>{

//     const result = restaurants.filter((obj) => obj.rating > 4.5);

//     document.querySelector('#root').replaceChildren();

//     getrestaurant(result);
// })


// document.querySelector('#Filters').addEventListener('click' , ()=>{


//     document.querySelector('#filterPopup').classList.remove('hidden');

// })

// document.querySelector('#applyFilter').addEventListener('click' , ()=>{

//     const element = document.querySelector('input[name = "filterOption"]:checked');
//     const value = element.value;

    
// //a-b -- IS USED FOR ASCENDING  ,  b-a -- IS USED  FOR DESCENDING
//     if(value === "rating"){
//         restaurants.sort((a,b) => b.rating - a.rating);
//     }
//     else if(value === "highLow"){
//         restaurants.sort((a,b) => b.price_for_two - a.price_for_two);
//     }
//     else if(value === "costLowHigh"){
//         restaurants.sort((a,b) => a.price_for_two - b.price_for_two);
//     }
//     else if(value === "distance"){
//         restaurants.sort((a,b) => a.distance_from_Customer_house - b.distance_from_Customer_house);
//     }

//       document.querySelector('#root').replaceChildren();
//       getrestaurant(restaurants);
//       document.querySelector('#filterPopup').classList.add('hidden');

// })















































// const resturant = [
//   {
//     "resturantname": "Food Junction",
//     "restuimage": "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
//     "alcoholserves": true,
//     "restuopentime": 10,
//     "restuclosedtime": 22,
//     "rating": "5.5"
//   },
//   {
//     "resturantname": "The Food Spot",
//     "restuimage": "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
//     "alcoholserves": false,
//     "restuopentime": 4,
//     "restuclosedtime": 16,
//     "rating": "3.3"
//   },
//   {
//     "resturantname": "The Hungry Bowl",
//     "restuimage": "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
//     "alcoholserves": true,
//     "restuopentime": 4,
//     "restuclosedtime": 16,
//     "rating": "2.6"
//   },
//   {
//     "resturantname": "The Food Spot",
//     "restuimage": "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
//     "alcoholserves": true,
//     "restuopentime": 12,
//     "restuclosedtime": 0,
//     "rating": "2.4"
//   },
//   {
//     "resturantname": "The Hungry Bowl",
//     "restuimage": "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
//     "alcoholserves": true,
//     "restuopentime": 7,
//     "restuclosedtime": 19,
//     "rating": "5.3"
//   },
//   {
//     "resturantname": "Urban Tadka",
//     "restuimage": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
//     "alcoholserves": true,
//     "restuopentime": 2,
//     "restuclosedtime": 14,
//     "rating": "3.8"
//   },
//   {
//     "resturantname": "Urban Tadka",
//     "restuimage": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
//     "alcoholserves": false,
//     "restuopentime": 18,
//     "restuclosedtime": 6,
//     "rating": "2.1"
//   },
//   {
//     "resturantname": "Masala Magic",
//     "restuimage": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
//     "alcoholserves": false,
//     "restuopentime": 4,
//     "restuclosedtime": 16,
//     "rating": "1.4"
//   },
//   {
//     "resturantname": "Curry Castle",
//     "restuimage": "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
//     "alcoholserves": false,
//     "restuopentime": 19,
//     "restuclosedtime": 7,
//     "rating": "5.4"
//   },
//   {
//     "resturantname": "Spice Villa",
//     "restuimage": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
//     "alcoholserves": true,
//     "restuopentime": 0,
//     "restuclosedtime": 12,
//     "rating": "5.3"
//   }
// ];

// //BASICALLY WE CREATED THE DUMMY DATA FROM BASICS 



// function getresturant(resturant){


//   resturant.forEach(resturant => {
    

//     //create a card 
//     //1. image 
//     //2. Card content 
//     //  i. card header  name and rating 
//     // ii. Cazd footer  food type and price 
//     // iii. card location  Resturaant location , distance 


//     //create a card
//    const card =  document.createElement('div');
//    card.className = "card";


//    //create an image
//    const image =  document.createElement('img');
//   //  image.src = `Images/${resturant.image}.jpeg`;
//    //REMEMBER THIS IF U HAVE IMAGES IN UR SELF FOLDER instead of online link or ohter online source then u have to use this syntax 
//    //u have to write folder name and at last .jpeg

//    image.src = resturant.restuimage; //because we have online links that why we use this 



//    // card-content
//        const Card_content = document.createElement('div');
//        Card_content.classList.add('card-content');

//     // Card header
//        const Card_header = document.createElement('div');
//        Card_header.classList.add('card-header');

//        const h3 = document.createElement('h3');
//        h3.textContent = restaurant.resturantname;

//        const rate = document.createElement('span');
//        rate.textContent = "Rating: " + restaurant.rating;
//        rate.classList.add('rating');


//        Card_header.appendChild(h3);
//        Card_header.appendChild(rate);

//     // Card footer
//        const Card_footer = document.createElement('div');
//        Card_footer.classList.add('card-footer');
       
//        const food = document.createElement('span');
//        food.textContent = restaurant.food_type;

//        const price = document.createElement('span');
//        price.textContent = "₹"+restaurant.price_for_two;

//        Card_footer.appendChild(food);
//        Card_footer.appendChild(price);





//     //  Card Location
//     const card_location = document.createElement('div');
//     card_location.classList.add('card-location');
 
//     const location = document.createElement('span');
//     location.textContent = restaurant.location;

//     const distance = document.createElement('span');
//     distance.textContent = restaurant.distance_from_Customer_house+"km";
    

//     card_location.appendChild(location);
//     card_location.appendChild(distance);


//     Card_content.appendChild(Card_header);
//     Card_content.appendChild(Card_footer);
//     Card_content.appendChild(card_location);


//     card.appendChild(image);
//     card.appendChild(Card_content);

//     root.appendChild(card);






   

  
  
//   });

// }

// getresturant(resturant);



// -----------------------------------------------------------------------------------------
//ONLY FOR DATA UNDERTSTANDING -- ]

//we have 2 option either use gpt for data then gpt gives data in the form of object in an array 

//so we have to copy the data and paste in js file 

//2nd option is we make this random data by ourself using 
//first we create empty array then the we make empty object then add data in these object then 
//then using normal loop to create required objects 
//at last push into an array 
//now we have object data in an array now we have to convert those array data into object one 
//for this we use -- 
//file sytem , json.stringify , fs.writefile  -- use 3 to 4 comments of these lines to make a json file with all the data only in the object form 
//now copy these data and put it into normal JS file 
// -------------------------------------------------------------------------------------------------/























































// MYSELF SIMPLE RENDERING -- 

// resturant.forEach((obj) =>{

// const finalcard = document.createElement('div');
// finalcard.className = "card";

// const imagediv = document.createElement('div');
// imagediv.className = "image"

// const realimage = document.createElement('img');
// realimage.src = obj.restuimage;

// finalcard.appendChild(imagediv);
// imagediv.appendChild(realimage);

// const restudiv = document.createElement('div');
// restudiv.className = "restuname";

// const restunameediv = document.createElement('div');
// restunameediv.className = "restunamee";

// const h2tag = document.createElement('h2');
// h2tag.textContent = obj.resturantname;

// restunameediv.appendChild(h2tag);

// const ratingdiv = document.createElement('div');
// ratingdiv.className = "rating";

// const ptag = document.createElement('p');
// ptag.textContent = obj.rating;
// ratingdiv.appendChild(ptag);

// restudiv.appendChild(restunameediv);
// restudiv.appendChild(ratingdiv);

// finalcard.appendChild(restudiv);


// const  finalcontainer  = document.querySelector('.container');
// finalcontainer.appendChild(finalcard);

// })