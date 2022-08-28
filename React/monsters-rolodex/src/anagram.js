function Logic() {
    // INPUT [uncomment & modify if required]
    let char1 = "abc";
    let char2 = "cab";
    let char1L = char1.length;
    let char2L = char2.length;
    let result = 0;
 
    char1.sort();
    char2.sort();
 
     //write your Logic here:
     for(let i=0; i< char1.length ; i++)
     {
         if(char1[i] != char2[i])
         {
             result = 0;
         }
         else
         {
             result =1;
         }
     } 
     
     // OUTPUT [uncomment & modify if required]
     console.log(result);
 
 }
    
 Logic();