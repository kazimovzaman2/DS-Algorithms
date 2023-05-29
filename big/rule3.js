function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(function (boxes) {
        console.log(boxes);
    });

    boxes2.forEach(function (boxes) {
        console.log(boxes);
    });
}

// O(n + k)
// Because the arrays may be different sizes

// O(n * k)
// If loops are nested big o is like that
