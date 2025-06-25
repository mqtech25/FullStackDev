// 1️⃣ What does `"hello".toUpperCase()` return?
// Ans: it's return all uppercase words
    console.log('Hello => '+ 'hello'.toUpperCase())

// 2️⃣ How can you convert `"WORLD"` to lowercase in JS?
// Ans: by using toLowerCase() function
    console.log('WORLD => ' + 'WORLD'.toLowerCase() )

// 3️⃣ What will `"JavaScript".charAt(4)` return?
// Ans: It's return 'S' char which at 4 index in string
    console.log('Index 4 of javaScript'+'javaScript'.charAt(4))

// 4️⃣ How do you find the index of `'a'` in `"banana"`?
// Ans: there is two way by using indexOf() function we can find first one char which match
    console.log('Index of a '+'banana'.indexOf('a'))
// by using array we can find each char in string
    let fruit = 'banana';
    let splitVarInArray = fruit.split('');
    // we can find first one char which match in array
    console.log(splitVarInArray.findIndex(char => char === 'a'))
    // we can find multipal one char which match
    let charIndex =[]
    for(let i=0; i < splitVarInArray.length; i++){
        if(splitVarInArray[i]=='a'){
            charIndex.push(i)
        }
    }
    console.log(charIndex.toString());

// 5️⃣ What does `"   spaced   ".trim()` return?
// Ans: it's remove extra space from string
    console.log('   spaced remove    '.trim());

// 6️⃣ How to replace `"I like JS"` with `"I love JS"`?
// Ans: by using replace function
    let likeVar = 'I like JS';
    let loveVar = 'I love JS';

   let newLikeVar= likeVar.replace('I like JS','I love JS')

    console.log(newLikeVar);

// 7️⃣ What is the output of `"hello".slice(1, 4)`?
// Ans: the result 'ell' char return from hello
    console.log('hello'.slice(1,4))

// 8️⃣ How to check if `"React"` includes `"act"`?
// Ans: By using include function
    console.log('React'.includes('act'));

// 9️⃣ What is the result of `"frontend".substring(0, 5)`?
// Ans: substring return char from given index
    console.log('frontend'.substring(0,5))

// 🔟 How do you split `"a,b,c"` into an array?
// Ans: by using split function
    let varX = "a,b,c";
    console.log(varX.split());

// 1️⃣1️⃣ How can you repeat the string `"ha"` 3 times?
// Ans: By using repeat function
    console.log('ha'.repeat(3));

// 1️⃣2️⃣ What will `"Hello".startsWith("He")` return?
// Ans: it return true
console.log("Hello".startsWith("He"));

// 1️⃣3️⃣ What does `"JavaScript".endsWith("pt")` give?
// Ans: it return true
console.log("JavaScript".endsWith("pt"));

// 1️⃣4️⃣ How to pad `"7"` to `"007"` using `padStart()`?
// Ans: By using adStart()
// Pad with leading zeros to a length of 3

    console.log('7'.padStart(3,'00'));

// 1️⃣5️⃣ What is the result of `"abc".concat("123")`?
// Ans: concat add two strings
    console.log('abc'.concat('123'));

// --- //

// 1️⃣ What does `[1, 2, 3].push(4)` return?
// Ans: return new array with add 4
 
    console.log([1, 2, 3].push(4));

// 2️⃣ What is the output of `[1, 2, 3].pop()`?
// Ans: last char removed from array ;
console.log([1, 2, 3].pop());

// 3️⃣ How to remove the first element from `[10, 20, 30]`?
// Ans: By using shift function
console.log([10,20,30].shift());

// 4️⃣ What does `[1, 2, 3].shift()` do?
// Ans: remove first char from  orginal Array and return first char;
    console.log([1,2,3].shift());

// 5️⃣ How can you add `0` at the beginning of `[1, 2, 3]`?
// Ans: there is two method one unshift and second sperad operator
    let arr = [1, 2, 3];
    arr.unshift(0);
    console.log(arr);

    let arrX = [1,2,3];
    let newArrX = [0 , ...arrX]

    console.log(newArrX);


// 6️⃣ What is the result of `[1, 2].concat([3, 4])`?
// Ans: add two array
console.log([1,2].concat([3,4])); 


// 7️⃣ How do you reverse `[1, 2, 3]`?
// Ans: By using reverse function
    console.log([1,2,3].reverse());

// 8️⃣ What will `[3, 1, 4, 2].sort()` return?
// Ans: sort will arrange by alpha or number
    console.log([3,1,4,2].sort());

// 9️⃣ How to join `['a', 'b', 'c']` into `"a-b-c"`?
// Ans: by using join function convert array to string
    console.log(['a','b','c'].join('-'));

// 🔟 What does `['x', 'y', 'z'].indexOf('y')` return?
// Ans: find index of array element
    console.log(['x','y','z'].indexOf('y'));

// 1️⃣1️⃣ What’s the output of `[1, 2, 3].includes(2)`?
// Ans: its return True if find element
    console.log([1,2,3].includes(2));

// 1️⃣2️⃣ What does `[1, 2, 3, 4].slice(1, 3)` return?
// Ans: Its remove slice element from array and return array with remain element
    console.log([1, 2, 3, 4].slice(1, 3));

// 1️⃣3️⃣ How to remove 2 elements from `[10, 20, 30, 40]` starting at index 1?
// Ans: by using splice function remove element from orginal array
let arrayZ = [10, 20, 30, 40];
 arrayZ.splice(0,2)
    console.log(arrayZ);

// 1️⃣4️⃣ What is the result of `[1, 2, 3].map(x => x * 2)`?
// Ans: its multiplay all array element with 2 and return array with new elements
// Map => The Array.map() method allows you to iterate over an array and modify its elements using a callback function.
    console.log([1,2,3].map(x => x*2));

// 1️⃣5️⃣ What will `[1, 2, 3].filter(x => x > 1)` return?
// Ans: its return [2,3]
// The filter() method returns a new array with all elements that pass the test defined by the given function.
console.log([1,2,3].filter(x => x>1));
// --- //

