const bcrypt = require('bcrypt');

async function Hashing() {
    
    const password = "Sahil@123";

    //encryption -
    const hashcode = await bcrypt.hash(password , 10);
    
    //decryption -
    const ans = await bcrypt.compare("Sahil@123" , hashcode);
    console.log(ans);
}