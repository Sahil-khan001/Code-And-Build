Student schema --
{
  name: "Rahul",
  age: 20,
  city: "Delhi",
  marks: 85,
  skills: ["HTML", "CSS"],
  active: true
}

schema be like this 

we have to use these queries on it == 

create()
✅ find()
✅ findById()
✅ updateOne()
✅ deleteOne()
✅ $set
✅ $inc
✅ $push
✅ $pull
✅ $addToSet
✅ $unset
✅ $gt
✅ $in
✅ $regex
✅ sort()
✅ skip()
✅ limit()

Student Management System - Tasks (Day 1)
Create a new student.
Get all students.
Get the student whose email is rahul@gmail.com.
Get a student using their _id.
Update Rahul's city from Delhi to Mumbai.
Increase Rahul's marks by 5.
Add "Node.js" to Rahul's skills array.
Remove "CSS" from Rahul's skills.
Add "React" to skills, but don't allow duplicates.
Remove the phone field from Rahul's document.
Delete the student whose email is test@gmail.com.
Find all students with marks greater than 80.
Find students whose age is between 18 and 25.
Find students from Delhi or Mumbai.
Find students whose name starts with "A".
Show only name and email of all students.
Show the top 5 students based on marks.
Show page 3 with 10 students per page.
Count how many students are active.
Check if a student with email abc@gmail.com already exists.