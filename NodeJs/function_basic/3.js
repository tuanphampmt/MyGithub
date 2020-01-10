console.log('Hello World');

 var number = 0;
 var numArr = setInterval(function () {
     number++;
     console.log('Number ' + number);
     if(number > 5){
         clearInterval(numArr); // xoa numArr
     }
 },2000);
