function solution(bridge_length, weight, truck_weights) {
    const bridgeTruckWeights = Array(bridge_length).fill(0);
    let sumOfBridgeTruckWeights = 0;
    let currentTruckIdx = 0;
    let time = 0;
    
    do {
        time += 1;
        sumOfBridgeTruckWeights -= bridgeTruckWeights.shift();
        
        if (sumOfBridgeTruckWeights + truck_weights[currentTruckIdx] > weight || currentTruckIdx === truck_weights.length) {
            bridgeTruckWeights.push(0);
            continue;
        }
        
        bridgeTruckWeights.push(truck_weights[currentTruckIdx]);
        sumOfBridgeTruckWeights += truck_weights[currentTruckIdx];
        currentTruckIdx += 1;
    } while (!(currentTruckIdx === truck_weights.length && sumOfBridgeTruckWeights === 0))
    
    return time;
}