function solution(bridge_length, weight, truck_weights) {
  const bridge = Array(bridge_length).fill(0); 
  let time = 0;
  let currentWeight = 0;

  while (truck_weights.length > 0 || currentWeight > 0) {
    time++;

    currentWeight -= bridge.shift();

    if (truck_weights.length > 0 && currentWeight + truck_weights[0] <= weight) {
      const nextTruck = truck_weights.shift();
      bridge.push(nextTruck);
      currentWeight += nextTruck;
    } else {
      bridge.push(0);
    }
  }

  return time;
}