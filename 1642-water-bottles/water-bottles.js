/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    var numBottlesDrank = numBottles
    while(numBottles >= numExchange){
        numBottlesDrank += Math.floor(numBottles/numExchange)
        numBottles =  Math.floor(numBottles/numExchange) + numBottles % numExchange
    }
    return numBottlesDrank
};