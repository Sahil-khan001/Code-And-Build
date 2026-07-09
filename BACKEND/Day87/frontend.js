const response1 = await fetch('https://localhost:4000');

const response2 = await fetch('https://localhost:4000' , {
    method : 'POST',
    headers : {
        'Content-Type' : 'application/json'
    },
    body : JSON.stringify({name : "john" , age : 30})
});

const response3 = await fetch('https://localhost:4000' , {
    method : 'PATCH',
    headers : {
        'Content-Type' : 'application/json'
    },
    body : JSON.stringify({name : "Sahil"})
});
