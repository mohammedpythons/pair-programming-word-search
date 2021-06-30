const wordSearch = (letters, word) => { 
    let status = true;
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = letters[0].map((column, index) => 
        letters.map((row) => row[index])
    );

    const flip = verticalJoin.map((ls) => ls.join(""))
    for (l of horizontalJoin) {
        console.log("new iteration",status, l, word)
        if (l.includes(word)) {
          
            
            status = true
            return status
           
           
         } else {
            
             status = false;
         }
         
    }
  
    return status;
};



module.exports = wordSearch