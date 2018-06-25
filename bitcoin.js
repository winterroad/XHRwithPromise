// Colt Steele: Advanced Bootcamp: Ajax and Chris Ferdinandi: Promised based XMLHttpRequest
//https://gomakethings.com/promise-based-xhr/

var button = document.getElementById("btn");
var price = document.getElementById("price");

button.addEventListener("click", function() {

    var makeRequest = function(url, method) {
        var XHR = new XMLHttpRequest();

        return new Promise(function(resolve, reject) {

            XHR.onreadystatechange = function() {

                if (XHR.readyState !== 4) return;

                if (XHR.status = 200) {
                    resolve(XHR);
                } else {
                    reject({
                        status: XHR.status,
                        statusText: XHR.statusText
                    });
                }
            };

            XHR.open("GET", url, true);
            XHR.send();
        });
    };

    makeRequest("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(function(XHR) {
            var priceEur = JSON.parse(XHR.responseText).bpi.EUR.rate;
            price.textContent = priceEur;
        })
        .catch(function(error) {
            console.log(error);
        });
});
