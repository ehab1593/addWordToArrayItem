
const convertToBaby = (array) => {
  let newArray =[];
  for(i = 0; i < array.length; i++) {
    newArray.push('baby ' + array[i]);
  }
  return newArray;
}

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 

