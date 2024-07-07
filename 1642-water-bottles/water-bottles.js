/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    var numBottlesDrank = numBottles
    while(numBottles >= numExchange){
        var newBottles = Math.floor(numBottles/numExchange)
        numBottlesDrank += newBottles
        numBottles =  newBottles + numBottles % numExchange
    }
    return numBottlesDrank
};