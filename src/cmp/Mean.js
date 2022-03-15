





export function mean(numbers) {
   
        const total = numbers.reduce((acc, c) => acc + c, 0);
        return total / numbers.length;
      }


export function median(numbers) {
    // median of [3, 5, 4, 4, 1, 1, 2, 3] = 3
    var median = 0, numsLen = numbers.length;
    numbers.sort();
 
    if (
        numsLen % 2 === 0 // is even
    ) {
        median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
    } else { // is odd
        // middle number only
        median = numbers[(numsLen - 1) / 2];
    }
 
    return median;
}
 

    export function getMode(arr) {
        var freq = {}
        for (let item of arr) {
          freq[item] ? freq[item]++ : freq[item] = 1
        }  
        var compare = 0
       var mode
       
        for (let item in freq) {
      
          // have we counted freq[item] more times 
          // than the actual value  of compare? 
          if (freq[item] > compare) {
            // if yes, we store that number on compare
            compare = freq[item]
            // also, item (which is a number too!) is, as far as we know,
            // our mode. 
            mode = item
          }
        }
        return(parseInt(mode))
        }