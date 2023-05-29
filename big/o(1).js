const boxes = [0, 1, 2, 3, 4, 5];

function printFirstItem(items) {
    console.log(items[0]); // O(1)
    console.log(items[1]); // O(1)
}

printFirstItem(boxes); // O(2)
