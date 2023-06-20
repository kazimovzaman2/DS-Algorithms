// First approach -> O(n*k)
function findMatchesInArrays1(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true;
            }
        }
    }
    return false;
}

// Second approach -> O(a + b)
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "a"];
function findMatchesInArrays2(arr1, arr2) {
    // loop through first array and create object
    let map = {};
    for (let i = 0; i < arr1.length; i++) {
        if (!map[i]) {
            const item = arr1[i];
            map[item] = true;
        }
    }
    // loop through second array and check if item exists on object
    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true;
        }
    }
    return false;
}

// Third approach
function findMatchesInArrays3(arr1, arr2) {
    return arr1.some((item) => arr2.includes(item));
}
