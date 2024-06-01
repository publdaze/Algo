function getMinutesRange(a, b) {
    let [aHour, aMinutes] = a.split(":").map(Number);
    let [bHour, bMinutes] = b.split(":").map(Number);
    
    return (bHour * 60 + bMinutes) - (aHour * 60 + aMinutes);
}

function getPrice(fees, minutes) {
    const [baseTime, basePrice, timeTerm, priceTerm] = fees;

    if (minutes <= baseTime) return basePrice;
    
    const overTime = minutes - baseTime;
    return basePrice + Math.ceil(overTime / timeTerm) * priceTerm;
}

function solution(fees, records) {
    const FINAL_OUT_TIME = "23:59";
    const IN = "IN";
    
    const timeRecordsOfCar = records
        .map((record) => record.split(" "))
        .reduce((acc, record) => {
            const [time, carNum, inOut] = record;
            if (!acc[carNum]) acc[carNum] = [];
            inOut === IN ? acc[carNum].push({ inTime: time, outTime: FINAL_OUT_TIME}) : acc[carNum].at(-1).outTime = time;
            return acc;
        }, {});
    
    return Object.entries(timeRecordsOfCar)
        .sort()
        .map(([carNum, timeRecords]) => {
                const totalMinutes = timeRecords.reduce((acc, { inTime, outTime }) => {
                                        return acc + getMinutesRange(inTime, outTime);
                                    }, 0);
                return getPrice(fees, totalMinutes);
            }
        );
    
}