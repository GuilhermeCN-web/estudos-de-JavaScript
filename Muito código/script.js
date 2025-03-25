console.log("We're calculating the first 12000 prime numbers.");
console.log("Waiting...");
    const arr = [2];
    let number = 3;
        while (arr.length < 12000) {
            for (let i = 2; i < number; i++) {
                if (number % i === 0) {
                    number++
                    break;
                }
                if (i === number - 1) {
                    arr.push(number);
                    number++
                    break;
                }
            }
        }
console.log(`We finished calculating the first ${arr.length} prime numbers.`);
console.log("We had to wait even longer for this line to print.")