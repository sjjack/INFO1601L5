function happyPrint(string){
  console.log("😀: "+string);
 }
 
 function sadPrint(string){
  console.log("😢: "+string);
 }
 
 //This high-order function adds 2 parameters and passes the answer to the callback
 function add(a, b, callback){
    let ans = a + b;
    happyPrint(ans)
 }
 
 //call add passing the callbacks to it
 
 add(5, 10);
 add(11, 12);