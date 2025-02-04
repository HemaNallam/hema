// Create a promise
const fetchData = new Promise((resolve, reject) => {
    // Simulate a network request
    setTimeout(() => {
        const success = true; // Change this to `false` to test rejection
        if (success) {
            resolve("Data fetched successfully!");
        } else {
            reject("Failed to fetch data.");
        }
    }, 2000); // 2-second delay
});

// Use the promise
fetchData
    .then((message) => {
        console.log(message); // Logs "Data fetched successfully!"
    })
    .catch((error) => {
        console.error(error); // Logs "Failed to fetch data."
    })
    .finally(() => {
        console.log("Promise operation complete."); // Always runs
    });
