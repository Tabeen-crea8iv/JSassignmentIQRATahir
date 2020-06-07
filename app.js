//Chapter no.1
document.write("<h1>Chapter no.1</h1>")

//1. Write a script to greet your website visitor using JS alert box.
window.alert("Welcome to my website!");

//2. Write a script to display following message on your web page:
window.alert("Welcome to JS land...\nHappy coding!");

//3. Write a script to display following message on your web page: (Hint : Use line break)
window.alert("Welcome to JS land...");

//4. Write a script to display following messages in sequence:
window.alert("Happy Coding!\nPrevent this page from creating additional dialogue");

//5. Generate the following message through browser’s developer console:
window.alert("Error! Please enter a valid password!");

//Chapter no.2
document.write("<h1>Chapter no.2</h1>")
  //1. Declare a variable called username.
  var username;
  //2. Declare a variable called myName & assign to it a string that represents your Full Name.
  var myName="Iqra Tahir";

  //3. Write script to
  //a) Declare a JS variable, titled message
  var message;
  //b) Assign “Hello World” to variable message
  message="Hello World!";
  //c) Display the message in alert box.
  alert(message);

 //4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
  var Name= prompt("What's your name?");
  var age= prompt("What's your age?");
  var course= prompt("In which course you wanna enroll?");
  alert(Name + "\n" + age + "\n" + course);

  //5. Write a script to display the following alert using one JS variable:
  alert("     pizza     \n     pizz     \n     piz     \n     pi     \n     p     ");

  //6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)
  var Email="example@example.com";
  alert("My Email Address is "+Email);

  //7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
  var book="A smarter way to learn JavaScript";
  alert("I am trying to learn from a book "+book);

  //8. Write a script to display this in browser through JS
  document.write("Heah! I can write HTML content through JavaScript.<br>");

  //9. Store following string in a variable and show in alert and browser through JS
  var str="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
       alert(str);



//Chapter no.3
document.write("<h1>Chapter no.3</h1>")
//1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age="23";
alert("I am "+age+" years old.")

//2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page.
var timesvisit = 14;
alert("You have visited this site "+timesvisit+" times.")

//3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser
document.write("<h4>3) Declare a variable called birthYear & assign to it your birth year.</h4>");
var birthyear=1997;
document.write("My birth year is "+birthyear+"<br>");

//4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
document.write("<h4>4) Write a script to store in variables the following information:</h4>");
var visitor = prompt("Dear visitor what's your name?");
var productTitle = prompt("Which product you want to order?");
var quantity = prompt("How many products you want to order?");
document.write(visitor+ " ordered "+productTitle+ quantity+" from XYZ clothing store.");


//Chapter no.4
document.write("<h1>Chapter no.4</h1>")
//1. Declare 3 variables in one statement.
var name,age,city;

//2. Declare 5 legal & 5 illegal variable names.
var s1,$ptr,num,first_customer,Animals;
var prompt,8sum,alert,first customer,Animation;

//3. Display this in your browser
document.write=("Rules for naming JS variables.");
document.write("Variable names can only contain number,$ and _.For example $my_1stVariable.");
document.write("Variables must begin with a letter,$ or_. For example $name, _name or name.");
document.write("Variable names are case sensitive.");
document.write("Variable names should not be JS variables.");

//Chapter no.5
document.write("<h1>Chapter no.5</h1>")
//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
document.write("<h4>1).Write a program that take two numbers & add them in a new variable.<h4>");
var a=5;
var b=10;
var c=a+b;
document.write("The sum of 5 and 10 is :"+c+"<br><br><br>");

//2. Repeat task1 for subtraction, multiplication, division & modulus.
document.write("<h4>2).Repeat task1 for subtraction, multiplication, division & modulus.</h4>");
var d=a-b;
document. write("The subtraction of 5 and 10 is : "+d+"<br>");
var e=a*b;
document. write("The multiplication of 5 and 10 is : "+e+"<br>");
var f=a/b;
document.write("The division of 5 and 10 is : "+f+"<br>");
var g=b%3;
document. write("The modulus of 5 and 10 is : "+g+"<br><br><br>");

//3. Do the following using JS Mathematic Expressions
document.write("<h4>3).Do the following using JS Mathematic Expressions.<h4>");
//a. Declare a variable.
var a;

//b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.write("Value after variable declaration is: ??<br>");

//c. Initialize the variable with some number.
var a=5;

//d. Show the value of variable in your browser like “Initial value: 5”.
document. write(`initial value : ${a}<br>`);

//e. Increment the variable
var b=++a;

//f. Show the value of variable in your browser like “Value after increment is: 6”.
document. write(`after increment value :${b}<br>`);

//g. Add 7 to the variable.
var c=b+7;

//h. Show the value of variable in your browser like “Value after addition is: 13”.
document. write(`Value after addition of 7 is : ${c}<br>`);

//i. Decrement the variable
var b=--a;

//j. Show the value of variable in your browser like “Value after decrement is: 12”.
document. write(`after decrement value :${b}<br>`);

//k. Show the remainder after dividing the variable’s value by 3. 
var b=a%3;

//l. Output : “The remainder is : 0”.
document. write(`after division remainder is :${b}<br><br><br>`);

//4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
document.write("<h4>4).Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie..<h4>");
var tp1=600;
var tp6=tp1*5;
document. write(`Total cost to buy 5 tickets to a movie is ${tp6} PKR<br><br><br>`);

//5. Write a script to display multiplication table of any number in your browser.
document.write("<h4>5).Write a script to display multiplication table of any number in your browser.<h4>");
for (var i = 1; i <= 10; i++) 
document. write(`2x${i}=${2 * i}<br>`);

//6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//a. Store a Celsius temperature into a variable.
document.write("<h4>6).The Temperature Converter:.<h4>");
var c=25;

//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
var f=70;

//c. Now store a Fahrenheit temperature into a variable.
document.write(`<br><br><br>${c}&#8451 is ${(f - 32) * 5 / 9}&#8457<br>`);

//d. Convert it to Celsius & output “NNoF is NNoC”.
document.write(`${f}&#8457 is ${(c * 9 / 5) + 32}&#8451<br><br><br>`);


//7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
document.write("<h4>7).Write a program to implement checkout process of a shopping cart system for an e-commerce website.<h4>");
document.write("<h1>"+"Shopping Cart"+"</h1>");
//a. Price of item 1
var p1=650;
document.write("Price of item#1 = Rs."+p1+"<br>");

//b. Price of item 2
var p2=100;
document.write("Price of item#2 = Rs."+p2+"<br>");

//c. Ordered quantity of item 1
var q1=prompt("How many of item#1 you want?");

//d. Ordered quantity of item 2
var q2=prompt("How many of item#2 you want?");

//e. Shipping charges
var s=100;
document.write("Shipping Charges= Rs."+s+"<br>");

//Compute the total cost & show the receipt in your browser
document.write(`Total cost of your order is = ${(p1 * q1) + (p2 * q2) + s}<br><br><br>`);

//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
document.write("<h4>8).Write a script to convert the total currency to Pakistani Rupees.<h4>");
document.write("<h1>"+"Marks Sheet"+"</h1>");
var tmarks=980;
var omarks=804;
document.write(`Total Marks = ${tmarks}<br>`);
document.write(`Total Marks = ${omarks}<br>`);
document.write(`Percentage = ${omarks/tmarks*100} % <br><br></br>`);

//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 
document.write("<h4>9).Write a script to convert the total currency to Pakistani Rupees.</h4>");
document.write("<h1>"+"Currency in pkr"+"</h1>");
var usd1 = 104.8;
var sr1  = 28;
var usd = 10;
var sr = 25;
document.write("Total currency in pkr = Rs."+(usd*usd1+sr*sr1)+"<br><br><br>");

//10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5 
//b. Multiply by 10 
//c. Divide the result by 2 Perform all calculations in a single expression
document.write("<h4>10) Write a program to initialize a variable with some number and do arithmetic in following sequence: <br>a. Add 5 <br>b. Multiply by 10 <br>c. Divide the result by 2 <br>Perform all calculations in a single expression</h4>");
var a=5;
document.write("Result = "+(((a+5)*10)/2)+"<br><br></br>");

//11. The Age Calculator: Forgot how old someone is? Calculate it!
document.write("<h4>11) The Age Calculator: Forgot how old someone is? Calculate it!</h4>");
var cuurent_year=prompt("Current year: ");
var year_of_birth=prompt("Your year of birth: ");
var age=cuurent_year-year_of_birth ;
document.write("Your age is "+(age-1)+" or "+age+" years old."+"<br><br>");

//12. The Geometrizer: Calculate properties of a circle.
document.write("<h4>12).The Geometrizer: Calculate properties of a circle.</h4>");

//a. Store a radius into a variable.
var r=5;

//b. Calculate the circumference based on the radius, and output “The circumference is NN”. Calculate the area based on the radius, and output “The area is NN”.
document.write("Circumference is = "+(2*3.14*r)+"<br>");
document.write("Area is = "+(3.14*r*r)+"<br><br>");

//13. The Lifetime Supply Calculator:
document.write("<h4>13).The Lifetime Supply Calculator:</h4>");
//a. Store your favorite snack into a variable
var snack="Lays";
//b. Store your current age into a variable.
var current_age=23;
//c. Store a maximum age into a variable.
var maximun_age=70;
//d. Store an estimated amount per day (as a number)
var per_day=3;
//e. Calculate how many would you eat total for the rest of your life.
var t=((maximun_age-current_age)*365)*3;
document.write("You will need "+t+snack+" to last until the ripe old age of "+maximun_age+" years.<br>");




//Chapter no.6-9
document.write("<h1>Chapter no.6</h1>")
//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
document.write("<h4>//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:</h4>")
var a =10;
document.write("The value of a is: "+a+"<br>");
document.write(".................<br><br>");

document.write("The value of ++a is: "+(++a)+"<br>");
document.write("The value of a is: "+(a)+"<br><br>");

document.write("The value of a++ is: "+(a++)+"<br>");
document.write("Now the value of a++ is: "+(a)+"<br><br>");

document.write("The value of --a is: "+(--a)+"<br>");
document.write("Now the value of a is: "+(a)+"<br>");

document.write("The value of a-- is: "+(a--)+"<br>");
document.write("Now the value of a is: "+(a)+"<br><br>");

//2. What will be the output in variables a, b & result after execution of the following script:
document.write("<h4>2) What will be the output in variables a, b & result after execution of the following script:</h4>");
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("if a = 2 and b = 1 <br>--a - --b + ++b + b-- =?<br>--a = 1 //pre-decrement<br>--b = 0 //pre-decrement<br>++b = 1 //pre-increment<br>b-- = 1 //post-decrement<br>--a - --b + ++b + b-- = 1-0+1+1 = 3<br><br>");

//3. Write a program that takes input a name from user & greet the user.
var name = prompt("What's your name?");
alert("Welcome "+name+"!");

//5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
document.write("<h4>5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.</h4>");
var table = prompt("Write a number to print it's table:");
if(table!=null)
{
    for(var i=1;i<=10;i++)
    document. write(table+" x "+i+"="+(table * i)+"<br>");
}
else
{
    for(var i=1;i<=10;i++)
    document. write("5 x "+i+"="+(5 * i)+"<br>"); 
}

//6. Take
//a) Take three subjects name from user and store them in 3 different variables.
var s1 = prompt("Your 1st subject: ");
var s2 = prompt("Your 2nd subject: ");
var s3 = prompt("Your 3rd subject: ");
//b) Total marks for each subject is 100, store it in another variable
var ts1 = 100;
var ts2 = 100;
var ts3 = 100;
//c) Take obtained marks for first subject from user and stored it in different variable.
var oms1 = +prompt("Your obtained marks in 1st subject: ");
//d) Take obtained marks for remaining 2 subjects from user and store them in variables.
var oms2 = +prompt("Your obtained marks in 1st subject: ");
var oms3 = +prompt("Your obtained marks in 1st subject: ");
//e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
document.write("<h4>6. Take:Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)</h4> ");
var tmarks = (ts1+ts3+ts3);
var tomarks= (oms1+ oms2+ oms3);
var ps1 = ((oms1/ts1)*100);
var ps2 = ((oms2/ts2)*100);
var ps3 = ((oms3/ts3)*100);
var percentage = (tomarks/tmarks)*100;
document.write("<table><tr><th>Subjects</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td>"+s1+"</td><td>"+ts1+"</td><td>"+oms1+"</td><td>"+ps1+"%</td></tr><tr><td>"+s2+"</td><td>"+ts2+"</td><td>"+oms2+"</td><td>"+ps2+"%</td></tr><tr><td>"+s3+"</td><td>"+ts2+"</td><td>"+oms3+"</td><td>"+ps3+"%</td></tr><tr><td>"+"</td><td>"+tmarks+"</td><td>"+tomarks+"</td><td>"+percentage+"%</td></tr></table><br>");



//Chapter no.9-11
document.write("<h1>Chapter no.9-11</h1>")
//1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:“Welcome to city of lights”
var city = prompt("In which city do you live?");
if(city==="karachi")
{
    alert("Welcome to the city of lights!");
}
else
{
    alert("Welcome!");
}

//2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
var gender = prompt("What's your gender?");
if(gender==="male")
{
    alert("Good Morning Sir");
}
else if(gender==="female")
{
    alert("Good Morning Madam");
}

//3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
var color = prompt("What is the color of traffic signal: ");
if(color==="red")
{
    alert("Must stop!");
}
else if(color==="yellow")
{
    alert("Ready to move!");
}
else if(color==="green")
{
    alert("Move now!");
}

//4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
var rfuel=prompt("How much Petrol is left in your car?");
if(rfuel<=0.25)
{
    alert("“Please refill the fuel in your car”");
}

//5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if (c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
alert("car is smaller than cat");
}

//6. Show the total marks, marks obtained, percentage, grade & remarks like:
var oms1 = +prompt("Your obtained marks in 1st subject: ");
var oms2 = +prompt("Your obtained marks in 2nd subject: ");
var oms3 = +prompt("Your obtained marks in 3rd subject: ");
var tomarks= (oms1+ oms2+ oms3);
var ts1 = 100;
var ts2 = 100;
var ts3 = 100;
var tmarks = (ts1+ts3+ts3);
var percentage = (tomarks/tmarks)*100;
var grade,remarks;
if(percentage>=80)
{
    grade="A-one";
    remarks="Excelent";
}
else if(percentage>=70)
{
    grade="A";
    remarks="Good";
}
else if(percentage>=60)
{
    grade="B";
    remarks="You need to improve.";
}
else if(percentage<60)
{
    grade="Fail";
    remarks="Sorry";
}
document.write("<h4>Marks Sheet</h4><br><br>");
document.write("Total Marks: "+tmarks+"<br>");
document.write("Obtained Marks: "+tomarks+"<br>");
document.write("Percentage: "+percentage+"<br>");
document.write("Grade: "+grade+"<br>");
document.write("Remarks: "+remarks+"<br>");

//7. Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
var x=6,y=7;
var s= +prompt("Guess the secret number:");
if(s===x)
{
    alert("Bingo! Correct answer.");
}
else if(s===y)
{ 
    alert("Close enough to the correct answer");
}
else if(s!=(x,y))
{
    alert("You lost!");
}

//8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
var num=+prompt("Enter a number to check divisibility by 3: ");
if(num%3===0)
{
    alert("Your entered number is divisible by 3.");
}
else
{
    alert("Your entered number is not divisible by 3.");
}

//9. Write a program that checks whether the given input is an even number or an odd number.
var input=prompt("Enter a number to check it's Even or odd: ")
if(input%2===0)
{
    alert("It's even.");
}
else
{
    alert("It's odd.");
}

//10. Write a program that takes temperature as input and shows a message based on following criteria
var T=prompt("What's the temperature today?");
if(T>40)
{
    alert("It is too hot outside");
}
else if(T>30)
{
    alert("The Weather today is Normal.");
}
else if(T>20)
{
    alert("Today’s Weather is cool.");
}
else if(T>10)
{
    alert("OMG! Today’s weather is so Cool.");
}

//11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
var a = prompt("Calculator for +,-,*, / & %/nWrite the first number: ");
var b = prompt("Calculator for +,-,*, / & %/nWrite the second number: ");
var op=prompt("Calculator for +,-,*, / & %/nWhat operation you want to run?(+,-,*,/,%)");
if(op==="+")
{
    var c = (a + b);
    +alert("Answer is: "+c);
}
else if(op==="-")
{
    var c = (a - b);
    +alert("Answer is: "+c);
}
else if(op==="*")
{
    var c = (a * b);
    +alert("Answer is: "+c);
}
else if(op==="/")
{
    var c = (a / b);
    +alert("Answer is: "+c);
}
else if(op==="%")
{
    var c = (a % b);
    +alert("Answer is: "+c);
}

//Chapter no.12-13
document.write("<h1>Chapter no.12-13</h1>")
//1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter.
var char= prompt("Enter a character: "); 
var index=0;
var code=char.charCodeAt(index);
if(code>=65 && code<=90)
{
alert(char+" is a Upper Case Alphabet.");
}
else if(code>=97 && code<=122)
{
alert(char+" is a Lower Case Alphabet.");
}
else if(code>=48 && code<=57)
{
alert(char+" is a Number.");
}

//2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal
var x = +prompt("Enter a digit: ");
var y = +prompt("Enter another digit: ");
if(x>y)
{
    alert(x+" is greater than "+y);
}
else if(x<y)
{
    alert(x+" is less than "+y);
}

//3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
var num = prompt("Enter a number:");
var code=num.charCodeAt(0);
if(code===43)
{
    alert(num+" is a positive number.");
}
else if(code===45)
{
    alert(num+" is a negative number.");
}
else if(code===48)
{
    alert(num+" is zero.");
}

//4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
var character=prompt("Enter an alphabet");
var vowel=character.charCodeAt(0);
if(vowel===65 && vowel===97 && vowel===69 && vowel===101 && vowel===79 && vowel===111 && vowel===85 && vowel===117)
{
    alert(character+" is a vowel!");
}
else
{
    alert(character+" is not a vowel!");
}

//5. Write a program that
//a. Store correct password in a JS variable.
var password=123;
var userpassword=prompt("Please Enter your password:");
if(userpassword===null)
{
    alert("Please enter password!");
}
else if(userpassword===password)
{
    alert("Correct! The password you entered matches the original password!");
}
else if(userpassword!=password)
{
    alert("Incorrect password!");
}

//6. This if/else statement does not work. Try to fix it:
//var greeting;
//var hour = 13;
//if (hour < 18) {
//greeting = "Good day";
//else
//greeting = "Good evening";}

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";}
else
{greeting = "Good evening";}

//7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements
var time=prompt("What's time is it according to 24-hr clock?","e.g: 1900=7pm");
if(time>=0000 && time<=1200)
{
    alert("Good Morning!");
}
else if(time>=1200 && time<1700)
{
    alert("Good Afternoon!");
}
else if(time>=1700 && time<2100)
{
    alert("Good Evening!");
}
else if(time>=2100 && time<=2359)
{
    alert("Good Night!");
}





//Chapter no.14-16
document.write("<h1>Chapter no.14-16</h1>")
//1. Declare an empty array using JS literal notation to store student names in future.
var studentnames=["","",""];

//2. Declare an empty array using JS object notation to store student names in future.
var studentnames={
    FirstName:"",
    LastName:"",
    DOB:""
}

//3. Declare and initialize a strings array.
var stringArray =["I","am","a","string","array"];

//4. Declare and initialize a numbers array.
var numberArray =[1,2,3,4];

//5. Declare and initialize a boolean array.
var booleanArray=[true,false];

//6. Declare and initialize a mixed array.
var mixedArray=[1,"is","not","even",true];

//7. Declare and Initialize an array and store available education qualifications in Pakistan 
document.write("<h4>7). Declare and Initialize an array and store available education qualifications in Pakistan </h4>");
var qArray=[" SSC"," HSC", "BCS","BS"," BCOM"," MS"," M. Phil.", "PhD"];
document.write("<h4>Qualifications:</h4>");
document.write("1)."+qArray[0]+"<br>2)."+qArray[1]+"<br>3)."+qArray[2]+"<br>4)."+qArray[3]+"<br>5)."+qArray[4]+"<br>6)."+qArray[5]+"<br>7)."+qArray[6]+"<br>8)."+qArray[7]+"<br>");

//8. Write a program to store 3 student names in an array.Take another array to store score of these three students. 
var studentnames=["Michael","John","Tony"];
var scores=[320,230,480];
var tmarks=500;
var ps1=(scores[0])/tmarks;
var ps2=(scores[1])/tmarks;
var ps3=(scores[2])/tmarks;
document.write("<h4>8). Write a program to store 3 student names in an array.Take another array to store score of these three students.Assume that total marks are 500 for each student, display the scores & percentages of students like: </h4>");
document.write("Score of Michael is "+scores[0]+".Percentage is "+ps1+".<br>")
document.write("Score of Michael is "+scores[1]+".Percentage is "+ps2+".<br>")
document.write("Score of Michael is "+scores[2]+".Percentage is "+ps3+".<br>")

//9. Initialize an array with color names. Display the array elements in your browser.

var colorArray =["red","green","blue"];
document.write("<h4>9). Initialize an array with color names. Display the array elements in your browser.</h4>");
document.write("<h4>Color Array:</h4>");
document.write(colorArray);
var begin=prompt("What color you want to enter to beginning of colo array?");
colorArray.unshift(begin);
document.write("<br>Now the Array is:<br>"+colorArray);
var end=prompt("What color you want to enter to end of color array?");
colorArray.push(end);
document.write("<br>Now the Array is:<br>"+colorArray);
colorArray.unshift("orange","violet");
document.write("<br>Now the Array is:<br>"+colorArray);
colorArray.shift(0);
document.write("<br>Now the Array is:<br>"+colorArray);
colorArray.pop(5);
document.write("<br>Now the Array is:<br>"+colorArray);
var wishNo=prompt("At which index you want to add a color?");
var wish=prompt("And at index "+wishNo+" color name?");
colorArray[wishNo]=wish;
document.write("<br>Now the Array is:<br>"+colorArray);
var wishD=prompt("At which index you want to remove a color?");
colorArray.splice(wishD);
document.write("<br>Now the Array is:<br>"+colorArray);

//10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
document.write("<h4>10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.</h4>");
var Sscore=[200,320,500,400,100];
document.write("<br>Array is:<br>"+Sscore);
Sscore.sort();
document.write("<br>Now the Array is:<br>"+Sscore);

//11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
document.write("<h4>11. Write a program to initialize an array with city names.Copy 3 array elements from cities array to selectedCities array</h4>");
var cityName=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write("<br>cityName Array is:"+cityName);
var selectedCities =cityName.slice(3,4);
document.write("<br>selectedCities Array is:"+selectedCities);

//12. Write a program to create a single string from the below mentioned array:
document.write("<h4>Write a program to create a single string from the below mentioned array:</h4>");
var arr = ["This", "is", " my ", "cat"];
document.write(arr.join(" "));

//13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
var fifoArray=["Keyboard","Mouse","Printer","Monitor"];
document.write("Out:<br>"+fifoArray[0]);
fifoArray.shift();
document.write("Out:<br>"+fifoArray[1]);
fifoArray.shift();
document.write("Out:<br>"+fifoArray[2]);
fifoArray.shift();
document.write("Out:<br>")+fifoArray[3];
fifoArray.shift();

//14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out)
document.write("<h4>14). Create a new array. Store values one by one in such a way that you can access the values in reverse order.</h4>");
var lifoArray=["Keyboard","Mouse","Printer","Monitor"];
document.write("Out:<br>"+lifoArray[3]);
lifoArray.pop();
document.write("Out:<br>"+lifoArray[2]);
lifoArray.pop();
document.write("Out:<br>"+lifoArray[1]);
lifoArray.pop();
document.write("Out:<br>")+lifoArray[0];
lifoArray.pop();

//15. Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array.Display the following dropdown/select menu in yourbrowser using document.write() method
document.write("<h4>15). Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array.Display the following dropdown/select menu in yourbrowser using document.write() method</h4>")
var select = ("selectNumber");
var options = ["Apple", "Samsung", "Nokia", "Motorola", "Sony","Haier"];
for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
    document.write(opt);
}




//Chapter no.17-20
document.write("<h1>Chapter no.17-20</h1>")

//1. Declare and initialize an empty multidimensional array.
document.write("<h4>1). Declare and initialize an empty multidimensional array.</h4>")
var emptyMultidimensionalArray =[];
document.write(emptyMultidimensionalArray);

//2. Declare and initialize a multidimensional array representing the following matrix:
document.write("<h4>2). Declare and initialize a multidimensional array representing the following matrix:</h4>");
var multidimensionalArray =[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
document.write(multidimensionalArray[0]+"<br>"+multidimensionalArray[1]+"<br>"+multidimensionalArray[2]+"<br>");

//3. Write a program to print numeric counting from 1 to 10.
document.write("<br><h4>3). Write a program to print numeric counting from 1 to 10.</h4>");
for(var num=0;num<=10;num++)
{
document.write(num+"<br>");
}

//4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
document.write("<h4>4). Write a program to print multiplication table of any number using for loop.</h4>");
var input=+prompt("Enter a number whose table you want to write:");
var length=+prompt("Enter length of number whose table you want to write:");
for (var i = 1; i <= length; i++) 
document. write(input+" x "+(i)+"="+(input * i)+"<br>");

//5. Write a program to print items of the following array using for loop:
document.write("<h4>5). Write a program to print items of the following array using for loop:</h4>");
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var i=0;i<=fruits.length;i++)
{
    document.write(i+"<br>");
}

//6. Generate the following series in your browser. See example output.
document.write("<h4>6).Generate the following series in your browser.</h4>");
document.write("Counting 1-15  :");
for(var num=0;num<=15;num++)
{
document.write(num);
}

document.write("<br>Even numbers  :");
for(var num=0;num<=20;num++)
{
    if(num&2===0){
document.write(num);
    }
}
document.write("<br>Odd numbers  :");
for(var num=0;num<=20;num++)
{
    if(num&2!=0){
document.write(num);
    }
}


//7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array.
document.write("<h4>7).Write a program to enable “search by user input” in an array.</h4>");
var A=["cake","apple pie","cookie","chips","patties"];
var order=prompt("Welcome to ABC Bakery.What you wanna order?");
for(var i=0;i<=A;i++){
if(order in A)
{
    alert("You order is available at index"+A[i]);
}
else
{
    alert("Your order is not available.Sorry!");
}
}

//8. Write a program to identify the smallest number in the given array.
document.write("<h4>8). Write a program to identify the largest number in the given array.A = [24, 53, 78, 91, 12].</h4>")
var A = [24, 53, 78, 91, 12];
var man=Math.max.apply(Math,A);
document.write("Largest number is: "+man);


//9. Write a program to identify the smallest number in the given array.
document.write("<h4>9). Write a program to identify the smallest number in the given array.A = [24, 53, 78, 91, 12];</h4>")
var A = [24, 53, 78, 91, 12];
var min=Math.min.apply(Math,A);
document.write("Smallest number is: "+min);

//10. Write a program to print multiples of 5 ranging 1 to 100.
document.write("<h4>10. Write a program to print multiples of 5 ranging 1 to 100.</h4>");
for(var i=1;i<=100;i++)
{
    if(i%5===0)
    {
        document.write(i+"<br>");
    }
}

