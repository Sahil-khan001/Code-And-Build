So we have seen power of UseEffect()

like we want function call only when the length change , when we click on checkbox to include number , special characters

//U will know useCase of useEffect() with the problems u stuck with 

we are using the function call so that we can update the value 
because it render/call the function again and all the code in the function gonna update and at last use effect execute as we know
in that we it gonna update


//LETS TALK ABOUT CLOSURES IN JS AS WE MISSED THIS TOPIC 
//for this checkout closure file.js

//now move to project -- we know everprogramme have to phases 
first is memory execute then code execution 
//what happening in our project when ever any usestate function call then full function execute new memory location and again generatepassword create and execute and all code allocates memory and execute 
//is there any way so that this generatepassword create only one time
//so that less time taken , less memory location &  more optimized code 

suppose when generatepassword create at memory location that is 20002  and in next call it create at 35343  but u want this time it will take the old value then u have to 

  function generatePassword(){
        let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if(numbertick){
            str+= '0123456789'
        }
        if(Charactertick){
            str+= '!@#$%^&*()'
        }

        let pass = "";

        for(let i = 0 ; i<length ; i++){
          pass +=  str[Math.floor(Math.random()*str.length)]
        }
        setPassword(pass);
    }

    this function uses numbertik , charactertick , length not the setpassword 
    if we call the setpassword then can we create this generatePassowrd  again can we use the old one as well 

    if we change any value that is length , numbertik , charactertick then obviously we need to create this function again 

    when we call the setpassword() function then we dont need password generate() function if we give it the old function then there is no issue 
    //but when we need to change the length , number and character tick then we need to call the generatepassword function 

    //he is trying to say when we do change in length , number and character then we need to call the function then we allocate the memory to it otherwise even if we take the old value of function it should be fine there is no need of allocate the memory to it 


//now there is usecallback 

//these  setPassword , setLength , setNumberChanged create only one time and stored as a reference and point and call the passwordGenerator only one reference
but these password , length , numberChanged created everytime when function call / re render 

 WE DO ALL THIS WORK USING THE UseCallback() -- 

 UseCallback() is a react hook that lets u cache a function definition between re -renders

 when re rendering happening it hold the previous function 
eg 

    const generatePassword = useCallback(()=>{
        let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if(numbertick){
            str+= '0123456789'
        }
        if(Charactertick){
            str+= '!@#$%^&*()'
        }

        let pass = "";

        for(let i = 0 ; i<length ; i++){
          pass +=  str[Math.floor(Math.random()*str.length)]
        }
        setPassword(pass);
    },[length , numbertick , Charactertick])

-- in this eg when the length  , numbertick , charactertick then this function create otherwise it uses old function values 

u can write useEffect like this also -- 


    useEffect(()=>{
        generatePassword();
    // }, [length , numbertick , Charactertick])
    <!- }, [generatePassword])  //it means  useEffect only work when there is any change in generateposswod means in length , numbertick , charactertick  -->

NOTE -- SO WE SEE HOW CLOSURE USE IN CALLBACK HOOK 
-- this useCallback() that we used in code work as a closure it stored the old function values with only 1 lenth , 1 property like this and it gives us this old function when there is no change in length , numbertick , charactertick 

  let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if(false){
            str+= '0123456789'
        }
        if(false){
            str+= '!@#$%^&*()'
        }

        let pass = "";

        for(let i = 0 ; i<10 ; i++){
          pass +=  str[Math.floor(Math.random()*str.length)]
        }
        setPassword(pass);

it stored this as reference and give us ...
