
//DAY 11 LEARNING
//DATE IN JS

// const d = new Date();
// console.log(d.toDateString());
// console.log(d.toString());
// console.log(d.toISOString());

// console.log(typeof d);
//type of this is object as you know 

//as you know it give us correct time and date using our system clock which means our own time -- 
//it give answer using the millisecond from the date
//the more the millisecond increase the date time will increase eventually like 
// let take = new Date(1000); 
//this 1000 represent millisecond we calculate the date from fixed 1970-01-01 and add 1000 millisecond then it give the date calculate from this date
// console.log(take); // the ouput is 1970-01-01T00:00:01.000Z



//for current date and time we use
// let curr = new Date();
// console.log(curr);

// //for specific date use 
// console.log(curr.getDate());
// console.log(curr.getDay());
// // sun , mon , tues , wed , thur , fri ,sat 
// // 0  ,  1 ,  2  ,  3   , 4 , 5 , 6

// console.log(curr.getMonth());
// // jan/feb/mar/apr
// // 0/1/2/3

// console.log(curr.getFullYear());
// console.log(curr.getMilliseconds());
// console.log(curr.getMinutes());
// console.log(curr.getTime()); //give full time in milleseconds 
// console.log(curr.getHours());


// const noww = Date.now();
// console.log(noww);

//other format to write a date
// const d = new Date("2022-10-20");
// console.log(d.toDateString());


// year / month / days / hours / seconds / millisecond
//if you give single value then it act as millisecond 

//Number : 0 based start honge
//String : 1 based start honge
// const dd = new Date(2024 , 4 , 28);
// console.log(dd.toString());

//DATE AND TIME COMPONENTS -- 
// const now = new Date();
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());

//SETTING DATE COMPONENTS
// const now = new Date();
// now.setDate(20);
// now.setMinutes(21);
// now.setHours(3);
// now.setFullYear(2023);
// console.log(now);
// console.log(now.toString());

// //ANOTHER FORMAT
// //new Date(year , month , day  , hours , minutes , seconds , milleseconds);
// const neww = new Date(2024 , 4);
// console.log(neww.toString());

//DATE CALCULATIONS 
// const date1 = new Date();
// const date2 = new Date("2024-4-2");
// console.log(date2 - date1); //their difference show in millieseconds
// //means the difference between these dates is in millieseconds


//COUNTDOWN TIMER
//FOR UPCOMING OLYMPIC 
// const date1 = new Date();
// const date2 = new Date("2028-07-14");
// const date = date2-date1;
// const days = Math.floor((date/(1000*60*60*24)));
// const hours = Math.floor((date/(1000*60*60))%24);
// // how this 24 will come lets take an example like 80%24 then it answer is 3 days 8 hour left the days its already calculated the real 8 hour is this hope you understand 
// const minute = Math.floor((date/(1000*60))%60);
// const seconds = Math.floor((date/(1000))%60);

// console.log(`THE OLYMPIC COUNTDOWNTIMER IS ${days} days ${hours} hours ${minute} minutes ${seconds} seconds remaining`);
