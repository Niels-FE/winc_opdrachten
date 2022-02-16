const getYieldForPlant = (plant, factors) => {
    if (factors) {
        let newYield = plant.yield;
        for (factor of Object.entries(factors)) {
            newYield = ((100 + plant.factor[factor[0]][factor[1]]) * newYield) / 100
        };
        return newYield
    } else {
        return plant.yield;
    }
}

const getYieldForCrop = (crops, factors) => {
    if (crops.length == undefined) {
        const yieldOfPlant = getYieldForPlant(crops.crop, factors);
        return yieldOfPlant * crops.numCrops;
    } else {
        let totalYield = 0;
        for (tag of crops) {
            const yieldOfPlant = getYieldForPlant(tag.crop, factors);
            totalYield = totalYield + yieldOfPlant * tag.numCrops;
        }
        return totalYield;
    }
}

const getTotalYield = (crops, factors) => {
    const cropArray = Object.entries(crops)[0][1];
    let totalYieldofCrops = 0;
    for (crop of cropArray) {
        const tempYield = getYieldForCrop(crop, factors);
        totalYieldofCrops = totalYieldofCrops + tempYield;
    }
    return totalYieldofCrops;
}

const getCostsForCrop = (crops) => {
    let costs = 0;
    for (crop of crops) {
        costs = costs + (crop.numCrops * crop.costs);
    }
    return costs;
}

const getRevenueForCrop = (crops, factors) => {
    let totalRevenue = 0;
    for (crop of crops) {
        totalRevenue = totalRevenue + (crop.salesPrice * getYieldForCrop(crop, factors))
    }
    return totalRevenue;

}
const getTotalProfit = (crops, factors) => {
    let revenue = getRevenueForCrop(crops, factors);
    let costs = getCostsForCrop(crops);
    return revenue - costs;
}

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getTotalProfit
}