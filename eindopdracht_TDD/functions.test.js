const { getYieldForPlant, getYieldForCrop, getTotalYield, getCostsForCrop, getRevenueForCrop, getTotalProfit } = require("./farm");

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });



});

describe("getYieldForPland v2", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factor: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
        },
    };

    const environmentFactors = {
        sun: "low",
    };

    test("calculate yield with factors", () => {
        expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
    })
})

describe("getYieldforPlant v3", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factor: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            wind: {
                low: -20,
                medium: 10,
                high: 70,
            },
        },
    };

    const environmentFactors = {
        sun: "low",
        wind: "high",
    };
    test("multiple factors for yield for plant", () => {
        expect(getYieldForPlant(corn, environmentFactors)).toBe(25.5);
    })
})

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, advanced", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 10,
                    high: 70,
                },
            },
        };
        const pumpkin = {
            name: "pumkin",
            yield: 5,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 10,
                    high: 70,
                },
            },
        };
        const input = [{
            crop: corn,
            numCrops: 10,
        },
        {
            crop: pumpkin,
            numCrops: 10,
        }];

        const environmentFactors = {
            sun: "low",
            wind: "high",
        };
        expect(getYieldForCrop(input, environmentFactors)).toBe(68);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, very advanced", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumkin",
            yield: 5,
        };
        const input = [{
            crop: corn,
            numCrops: 10,
        },
        {
            crop: pumpkin,
            numCrops: 10,
        }]
        expect(getYieldForCrop(input)).toBe(80);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});


describe("getTotalYield V2", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 10,
                    high: 70,
                },
            },
        };
        const pumpkin = {
            name: "pumkin",
            yield: 5,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 10,
                    high: 70,
                },
            },
        };
        const crops = [{
            crop: corn, numCrops: 10,
        },
        { crop: pumpkin, numCrops: 10, }
        ];

        const environmentFactors = {
            sun: "low",
            wind: "high",
        };
        expect(getTotalYield({ crops })).toBe(80);
    });
});

describe("calculate costs for crop", () => {
    const corn = {
        name: "corn",
        yield: 3,
        factor: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            wind: {
                low: -20,
                medium: 10,
                high: 70,
            },
        },
    };
    const pumpkin = {
        name: "pumkin",
        yield: 5,
        factor: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            wind: {
                low: -20,
                medium: 10,
                high: 70,
            },
        },
    };
    const crops = [{
        crop: corn, numCrops: 10, salesPrice: 15, costs: 4,
    },
    { crop: pumpkin, numCrops: 10, salesPrice: 20, costs: 12, }
    ];

    const environmentFactors = {
        sun: "low",
        wind: "high",
    };
    test('calculate the total costs for this pumpkin and corn', () => {
        expect(getCostsForCrop(crops)).toBe(160);
    })
});

describe("GetRevenueForCrop", () => {
    const corn = {
        name: "corn",
        yield: 3,
        factor: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            wind: {
                low: -20,
                medium: 10,
                high: 70,
            },
        },
    };
    const pumpkin = {
        name: "pumkin",
        yield: 5,
        factor: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            wind: {
                low: -20,
                medium: 10,
                high: 70,
            },
        },
    };
    const crops = [{
        crop: corn, numCrops: 10, salesPrice: 15, costs: 4,
    },
    { crop: pumpkin, numCrops: 10, salesPrice: 20, costs: 12, }
    ];

    const environmentFactors = {
        sun: "low",
        wind: "high",
    };
    test('calculate the total revenue for this pumpkins', () => {
        expect(getRevenueForCrop(crops)).toBe(1450);
    })
});

describe("GetTotalProfit", () => {
    const corn = {
        name: "corn",
        yield: 3,
        factor: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            wind: {
                low: -20,
                medium: 10,
                high: 70,
            },
        },
    };
    const pumpkin = {
        name: "pumkin",
        yield: 5,
        factor: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            wind: {
                low: -20,
                medium: 10,
                high: 70,
            },
        },
    };
    const crops = [{
        crop: corn, numCrops: 10, salesPrice: 15, costs: 4,
    },
    { crop: pumpkin, numCrops: 10, salesPrice: 20, costs: 12, }
    ];

    const environmentFactors = {
        sun: "low",
        wind: "high",
    };
    test('calculate the total profit', () => {
        expect(getTotalProfit(crops)).toBe(1290);
    })
})