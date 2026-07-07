const response1 = await fetch('https://www.apiExample.com');

const response2 = await fetch('https://www.apiExample.com' , {
    method : 'POST',
    headers : {
        'Content-Type' : 'application/json'
    },
    body : JSON.stringify({name : "john" , age : 30})
});

const response3 = await fetch('https://www.apiExample.com' , {
    method : 'PATCH',
    headers : {
        'Content-Type' : 'application/json'
    },
    body : JSON.stringify({name : "Sahil"})
});
