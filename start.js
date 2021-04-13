//1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"]
const euroCities2 = euroCities[1]
console.log(euroCities);
console.log(euroCities2);

//2. Change the first item in the array to "Berlin".

const ex2 = euroCities[0] = "Berlin"

console.log(euroCities);

//3. Print the length of the array "euroCities".

console.log(euroCities.length);

//4. Remove the last item of the array "euroCities". 

euroCities.pop()
console.log(euroCities);

//5. Use an array method to add "Budapest" to the euroCities array.
euroCities.push("Budapest")
console.log(euroCities);

//6. **Bonus**: Remove the second and third items from the euroCities array. 
euroCities.splice(1, 2)
console.log(euroCities);

//7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.

const asianCities = ["Tokyo", "Kyoto", "Seoul", "Hong Kong", "Taipei"]
console.log(asianCities);

//8. **Bonus**: Use an array method to select items 2-4 from the array of asianCities and store this in another variable. 

const aParts = asianCities.slice(1, 4);
console.log(aParts);


//9. **Bonus**: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).  

const worldCities = asianCities.concat(euroCities)
console.log(worldCities);

//10. Reverse the order of worldCities.

console.log(worldCities.reverse());

//11. **Bonus**: Replace the 3rd item in the array of worldCities with "Toronto". 

const ex11 = worldCities[2] = "Toronto"
console.log(worldCities);

//12. **Bonus**: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.

console.log(worldCities.splice(1, 0, "Washington"));
console.log(worldCities);

13.

console.log(worldCities.join(" , "));
console.log(worldCities.join("+"));