/**
* FileName: app.js
*
* @author Abhinav sharda
* @date June 3, 2016
*
* StudentID: 300868625
* website: Assigment 1
* @description This contain javascript 
*/ 

var write = [
    "Abhinav Sharda",
    "I was born in India on may 07,1997. I was born and raised in middle class family.our family has great affection with animals so we are always ready help any needy animals. I persuade all my studies in CBSE .having agreat intrest in computers made me to decide to came canada for my higher qualification in the technology field. I hope to get a good job in this field.",
    "Projects",
     "First project - composition of lead battery",
    "I have done this project in my 9 th grade. i was specaly granted for this project so that proper precatauion will be taken in car .It was a veery interesting project ",
    "Second Project - Composition of gujarat sand",
    "one can find can find this project to be boring but infact it is a very intresting project to do. as we know that there is used to be a great ocean above the gujrat and now there just sand.son  one can find great diversity in its sand ",
    "Third Project - Finiacing the needy people ",
    "we carried out this  project in our 12th grade . iI was the leader our our group and we hane collect the fund for the needy chlidren among our country. "
    ];
 
(function(){
 
   var keys = []
    keys[0] = document.getElementById('Name');
    keys[1] = document.getElementById('Portfolio');
    keys[2] = document.getElementById('projects');
    keys[3] = document.getElementById('projects1');
    keys[4] = document.getElementById('about1');
    keys[5] = document.getElementById('projects2');
    keys[6] = document.getElementById('about2');
    keys[7] = document.getElementById('projects3');
    keys[8] = document.getElementById('about3');
    
    for (var i = 0; i < keys.length; i++) {
        
        if (keys[i]){
            keys[i].textContent = write[i];}}  
              //create  a link for sending form
   var sendButton = document.getElementById("sendButton");
   
   sendButton.addEventListener("click", sendButtonClick);
   
   function sendButtonClick(event) {
       console.log("sended!");
   };
   
  //a refrence to form
   var contactmeform = document.getElementById("contactmeform");
    
    contactmeform.addEventListener("submit", function(event){
        event.preventDefault();
        console.log("posted");
    });
    var fullName
})();