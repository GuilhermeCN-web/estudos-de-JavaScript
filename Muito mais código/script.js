    function goToTheMall() {
        return new Promise (function(resolve, reject) {
            setTimeout(function() {
                resolve("I went to the shopping mall to buy a new shoes.");
            }, 1000);
        });
    }
        function purchaseShoes() {
            return new Promise(function(resolve, reject) {
                setTimeout(function() {
                    resolve(
                    "I bought the black shoes. Look at how shiny this pair is!"); 
                }, 500);
            });
        }
            let handleSelectShoes = function(result) {
                return purchaseShoes();
            };
                let handlePurchaseShoes = function(result) {
                    console.log(result);
                };
                    goToTheMall()
                        .then(handleSelectShoes)
                        .then(handlePurchaseShoes);