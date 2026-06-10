Today we talk about state Lifting -- 

lets take an example -- 
suppose u make a funtion in which u have count useState which is used to update the count as a Parent 

then what u do is u can't make button in parent u make in the child 
as a parent u passed ur state variable as a props in child so that child can access count , setcount state variable then ur child access it 

now the child have that statevariable too now parent have nothing 
Also remember only parent can call their child and give him props not vice versa

now u have a condition suppose this parent have other child 2 and he wants child one statevariable access of counts how can he do it
there is no acccess between these 2 sibling 
even child 1 can't give anything to parent too 

if u import child 2 into child 1 
and in child 1 u call child 2 with props 
it will not work it creates 2 decrement button 

we know in child 1 we have state variable of count like const [count , setcount] = usestate(0);
what we do is we put this state variable into the parent now both child will access 

OR 
basically what we are doing we make state variable for child but we declare it in parent basically we are doing the state lifing 
so that other child2 also get same variable 


this u will face in real life problems like u want to access a variable of a specific child then u put that statevariable into the parent one so that other can access

THIS IS CALLED STATE LIFTING 
