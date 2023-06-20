const nemo = ["nemo"];

const large = new Array(100).fill("nemo");

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        console.log("running");
        if (array[i] === "nemo") {
            console.log("Found NEMO!");
            break;
        }
    }
}

findNemo(large); // O(n) --> Linear Time
