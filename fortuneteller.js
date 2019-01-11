let userName ='David'
userName ? console.log(`Hello, $userName`) :
console.log("Hello!")
let userQuestion = "can you answer my question?";
console.log(`David asked: ${userQuestion}`);
let randomnumber = Math.floor(Math.random() * 8);
let eightBall ='';
switch (randomnumber)
{
  case  0:
    eightBall = 'it is certain';
    break;
  case  1:
    eightBall = "it is decidedly so";
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall ='Cannot predict now';
    break;
  case 4:
    eigthBall ='Do not count on it';
    break;
  case 5:
    eigthBall ='My sources say no';
    break;
    case 6:
    eightBall ='Outlook not so good';
    break;
  case 7:
    eightBall ='Signs point to yes';
    break;
     
}
console.log(eightBall);