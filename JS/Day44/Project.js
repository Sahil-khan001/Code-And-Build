const id1 = document.querySelector('.days');
const id2 = document.querySelector('.hours');
const id3 = document.querySelector('.minutes');
const id4 = document.querySelector('.seconds');




function timing(){
const date1 = new Date();
const date2 = new Date("2028-07-14");
const date = date2-date1;
const days = Math.floor((date/(1000*60*60*24)));
const hours = Math.floor((date/(1000*60*60))%24);
 const minute = Math.floor((date/(1000*60))%60);
 const seconds = Math.floor((date/(1000))%60);
 id1.innerHTML = days;
 id2.innerHTML = hours;
 id3.innerHTML = minute;
 id4.innerHTML = seconds;
}
timing();

// setInterval(timing , 1000); 