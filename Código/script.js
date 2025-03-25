    let food = ['chicken', 'rice', 'salad', 'soup'];
    let isVeganPerson = true;
        function buyFood() {
            return new Promise(function(resolve, reject) {
                resolve(food);
            });
        }
            function cookFood(food) {
                return new Promise(function(resolve, reject) {
                    if (food.length === 4) {
                        resolve(food);
                    } else {
                        reject(false);
                    }                
                });
            }
                function serveFood(food) {
                    return new Promise(function(resolve, reject) {
                        if (food.includes('chicken') && !isVeganPerson) {
                            resolve("Lunch served. Enjoy your meal!");
                        } else {
                            reject(
                                "Apologies. I didn't know this food is unsuitable for you.");
                        }
                    });
                }
                    let handleCookFood = function(result) {
                        return serveFood(result);
                    };
                        let handleServeFood = function(result) {
                            console.log(result);
                        };
                            buyFood()
                            .then(handleCookFood)
                            .catch(handleServeFood);