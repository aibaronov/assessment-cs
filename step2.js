// 1) Sum Zero
function addToZero(arr){
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            
            if (arr[i] + arr[j] === 0){
                return true;
            }
        }
    }
    return false;
}
//Time Complexity: O(n^2)
//Space Complexity: O(1);

// let array = [1, 2, -3, 4, 5, 6, 29];
// console.log(addToZero(array));

// 2) unique characters
function hasUniqueChars(str){
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        for ( j = 0; j < str.length; j++){
            if(i === j){
                continue;
            }
            else if (char === str[j]){
                return true;
            }
        }
    }
    return false;
}
//Time Complexity: O(n^2)
//Space Complexity: O(1)

// console.log(hasUniqueChars("Monday"));
// console.log(hasUniqueChars("Moonday"));

// 3) Pangram Sentence

function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }
//Time Complexity: O(n)
//space Complexity: O(n) because memory is allocated to the strArr and alphabet array.

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// console.log(isPangram("I like cats, but not mice"));

function findLongestWord(arr){
    let lengthArr = [];

    for (let i = 0; i < arr.length; i++){
        lengthArr.push(arr[i].length);
    }
    lengthArr.sort((a,b) => {a-b});
    return lengthArr[lengthArr.length-1];
}
//Time Complexity: O(n log(n)). The time complexity of the .sort() method is O(n log(n)) as a worst case scenario. This is the largest time complexity executed in the function and and due to the asymptotic nature of time complexity,
//it because the time complexity for the function overall. 
//Space Complexity: O(n) because I'm allocating memory to the lengthArr
// console.log(findLongestWord(["hi", "hello"]));