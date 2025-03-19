// n개의 집 택배(in 같은 크기 상자) 배달
// 빈 상자 수거 (개수 무관)
// i번째 == i거리
// 최대 cap개 수용 가능
// 집마다 배달 상자, 수거 상자 개수 알고 있음
// => 트럭 하나로 모든 배달 수거 후 물류창고 돌아오기까지 최소 이동거리
// 최대한 뒷쪽 부터 배달 수거가 완료되어야, 다음 이동 시 더 짧은 거리 가능

function delivery(deliveries, vacancy) {
    while (vacancy > 0 && deliveries.length > 0) {
        const lastTargetHomeDelivery = deliveries.pop();
        
        if (lastTargetHomeDelivery > vacancy) {
            deliveries.push(lastTargetHomeDelivery - vacancy);
            vacancy = 0;
        } else {
            vacancy -= lastTargetHomeDelivery;
        }
    }
}

function pickup(pickup, vacancy) {
    while (vacancy > 0 && pickup.length > 0) {
        const lastTargetHomePickup = pickup.pop();
        
        if (lastTargetHomePickup > vacancy) {
            pickup.push(lastTargetHomePickup - vacancy);
            vacancy = 0;
        } else {
            vacancy -= lastTargetHomePickup;
        }
    }
}

function deleteNonTarget(target) {
    while (target.at(-1) === 0) {
        target.pop();
    }
}

function solution(cap, n, deliveries, pickups) {
    let distance = 0;
    while (pickups.length > 0 || deliveries.length > 0) {
        deleteNonTarget(deliveries);
        deleteNonTarget(pickups);
        distance += (Math.max(deliveries.length, pickups.length) * 2)
        delivery(deliveries, cap);
        pickup(pickups, cap);
    }
    
    return distance;
}

// 시간 초과
// function getTargetHomeInfo(deliveries, pickups) {
//     return new Map(deliveries.map((delivery, i) => [i + 1, { delivery, pickup:pickups[i] }]));
// }

// function delivery(target, vacancy) { // remain 직접 수정하는 것에 대해서 원시값이라 외부에서 값이 변하지 않는 건 알고 있지만, 혹시 참조값으로 바뀔 여지를 생각해서 직접 변경하지 않는 것이 좋은 지..
//     let currHome = target.size;

//     while (vacancy > 0 && currHome > 0) {
//         if (target.get(currHome).delivery >= vacancy) {
//             target.get(currHome).delivery -= vacancy; // get으로 불러온 거 직접적으로 수정하는 거 괜찮을 지
//             vacancy = 0;
//         } else {
//             vacancy -= target.get(currHome).delivery;
//             target.get(currHome).delivery = 0;
//             currHome -= 1;
//         }
//     }
// }

// function pickup(target, vacancy) { // delivery와 중복되는 부분이 많은데,,
//     let currHome = target.size;

//     while (vacancy > 0 && currHome > 0) {
//         if (target.get(currHome).pickup >= vacancy) {
//             target.get(currHome).pickup -= vacancy;
//             vacancy = 0;
//         } else {
//             vacancy -= target.get(currHome).pickup;
//             target.get(currHome).pickup = 0;
//             currHome -= 1;
//         }
//     }
// }

// function deleteNonTargetHome(target) {
//     for (let home = target.size; home > 0; home--) {
//         if (target.get(home).delivery !== 0 || target.get(home).pickup !== 0) return;
//         target.delete(home);
//     }
// }

// function solution(cap, n, deliveries, pickups) {
//     const targetHomeInfo = getTargetHomeInfo(deliveries, pickups);

//     let distance = 0;
//     while (targetHomeInfo.size > 0) {
//         deleteNonTargetHome(targetHomeInfo);
//         delivery(targetHomeInfo, cap);
//         distance += targetHomeInfo.size;
//         pickup(targetHomeInfo, cap);
//         distance += targetHomeInfo.size; // 배달 갈 때 거리, 수거할 때 거리 각각 분리해서 적어주는 게 나을 지, 아니면 그냥 한 번에 *2해서 증가시켜주는 게 나을지...
//     }

    
//     return distance;
// }