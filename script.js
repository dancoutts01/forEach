// double values
function doubleValues(array) {
    let newArray = [];
    array.forEach(function(val) {
        newArray.push(val * 2);
    });
    return newArray;
}

// only even values
function onlyEvenValues(array) {
    let newArray = [];
    array.forEach(function(val) {
        if (val % 2 === 0) {
            newArray.push(val);
        }      
    })
    return newArray;
}

// show first and last
function showFirstAndLast(array) {
    let newArray = [];
    for (el of array) {
        let firstLetter = el.charAt(0);
        let lastLetter = el.charAt(el.length - 1);
        let string = firstLetter + lastLetter;
        newArray.push(string);
    }
    return newArray;
}

// add key and value
function addKeyAndValue(array, key, value) {
    array.forEach(function(el) {
        el[key] = value;
    })
    return array;
}

// vowel count
function vowelCount(string) {
    let object = {};
    const vowels = 'aeiou'
    // splits string into array of letters
    let splitString = string.split("");
    // for each letter in the string 
    splitString.forEach(function(letter) {
        let vowelCount = 0
        let lowerCaseLetter = letter.toLowerCase();
        // if it contains a vowel
        if (vowels.indexOf(lowerCaseLetter) !== -1) {
            if (object[lowerCaseLetter]) {
                object[lowerCaseLetter]++;
            } else {
                object[lowerCaseLetter] = 1;
            }
        }
    });
    return object;
}   

// double values with map
function doubleValuesWithMap(array) {
    return array.map(function(val) {
        return val * 2;
    })
}

// val times index
function valTimesIndex(array) {
    return array.map(function(value,index) {
        return value * index;
    })
}

// extract key
function extractKey(array, key) {
    return array.map(function(value) {
        return value[key];
    });
};

// extract full name
function extractFullName(array) {
    return array.map(function(value) {
        return value.first + " " + value.last; 
    });
};

// filter by value
function filterByValue(array, key) {
    return array.filter(function(value) {
        if (value[key] === true) {
            return value;
        }
    })
}

// find 
function find(array, value) {
   let newArray = array.filter(function(val) {
        if (val === value) {
            return val
        }
    })
    return newArray[0];
}

// find in object
function findInObj(array, key, value) {
    let newArray = array.filter(function(val) {
        return val[key];
    })
    return newArray[0];
}

// remove vowels
function removeVowels(string) {
    let splitString = string.toLowerCase().split('');
    const vowels = 'aeiou';
    return splitString.filter(function(val) {
        return vowels.indexOf(val) == -1
    }).join("")
}

// double odd numbers
function doubleOddNumbers(array) {
    return array
    .filter(function(val){
        return val % 2 !== 0
    })
    .map(function(val) {
        return val * 2;
    }) 
}