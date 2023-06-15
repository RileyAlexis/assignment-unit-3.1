console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods

let favFoods =
    [
        'Jelly Beans',
        'Ice Cream',
        'Sour Patch Kids',
        'Sour Balls',
        'Licorice',
        'White Chocolate'
    ];


// 1.b. TODO: Log your array of foods to the console with a message, similar 
//      to the example above

console.log('1.b. Favorite Foods are:', favFoods);


// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');

// Example: How many animals are in the array? 
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array
console.log('2.a. # of Favorite Foods', favFoods.length);

// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0])

// 3.a. TODO: Log the second animal in the array 
console.log('3.a The second animal is', animalArray[1]);

// 3.b. TODO: Log the last animal in the array using it's array index 
console.log('3.b The last animal is', animalArray[3]);

// 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
//      instead of the exact index number of the last item
console.log('3.c The last animal is via array length', animalArray[animalArray.length-1]);


// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array
favFoods.push('More Ice Cream');
console.log('4.a. Pushed Value', favFoods);


// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);


// 4.b. TODO: Remove the food at the end of your array & 
//      log both the food removed and the updated array
let popFood = favFoods.pop();
console.log('4.b. Popped out:', popFood);
console.log('4.b. Array after popping', favFoods);

// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array
favFoods.unshift('Cookie Dough Ice Cream');
console.log('4.c. Added to first spot with unshift', favFoods);

// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array & 
//     log both the food removed and the updated array
let shiftedFood = favFoods.shift();
console.log('4.d. Shift out this one:', shiftedFood);
console.log('4.d. favFoods array after shifty shifted', favFoods);

// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.

let randI = Math.round(Math.random()*(favFoods.length-1));
favFoods[1] = favFoods[randI];
console.log('4.e. Replaced with random selection', favFoods);


// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.
let newFoodArr = favFoods.sort();
newFoodArr.reverse();
console.log('4.f. Sorted in decending', newFoodArr);


// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.

//Nested loops and forEach function both lead to an extra 'and' at the end
let arrToString = '';
let conj = 'and';

for (let i = 0; i < favFoods.length; i++) {
    if ((i + 1) < favFoods.length) {
        arrToString += favFoods[i] + ' ' + conj + ' ';
    }
    else {
        arrToString += favFoods[i];
    }
}

console.log('4.g. Convert to string and include "add" in between each word:', arrToString);

// 4.h (STRETCH) TODO: Make a new array that combines 
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']



let comboArr = favFoods.concat(animalArray);;
let checkText;

console.table('4.h. Combined Array', comboArr);

checkText = '4.h. Check if comboArr is an array: ' + Array.isArray(comboArr);
console.log(checkText);

