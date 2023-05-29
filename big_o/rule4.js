function printAllNumversThenAllPairSums(numbers) {
    console.log("these are the numbers:");
    numbers.forEach(function (number) {
        console.log(number);
    });

    console.log("and these are their sums:");
    numbers.forEach(function (firstNumber) {
        numbers.forEach(function (secondNumber) {
            console.log(firstNumber + secondNumber);
        });
    });
}

printAllNumversThenAllPairSums([1, 2, 3, 4, 5]);

// O(n + n^2)
