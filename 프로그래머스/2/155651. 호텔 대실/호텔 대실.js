const MAX_MINUTES = 24 * 60 - 1;
const CLEANUP_TIME = 10;

function convertToMinutes([start, end]) {
    const [startHour, startMinutes] = start.split(":").map(Number);
    const [endHour, endMinutes] = end.split(":").map(Number);
    start = startHour * 60 + startMinutes;
    end = endHour * 60 + endMinutes + CLEANUP_TIME;
    return [start, end > MAX_MINUTES ? MAX_MINUTES : end];
}

function numberRangeArr([start, end]) {
    return Array.from({ length: end - start }, (_, v) => start + v);
}

function solution(book_time) {
    const times = Array(MAX_MINUTES + 1).fill(0);
    
    for (const [start, end] of book_time) {
        const [startMinute, endMinute] = convertToMinutes([start, end]);
        times[startMinute]++;
        times[endMinute]--;
    }
    
    let maxRoom = 0;
    let currentRoom = 0;
    for (let i = 0; i <= MAX_MINUTES; i++) {
        currentRoom += times[i];
        maxRoom = Math.max(maxRoom, currentRoom);
    }
    
    return maxRoom;
}



// function convertToMinutes([start, end]) {
//     const [startHour, startMinutes] = start.split(":").map(Number);
//     const [endHour, endMinutes] = end.split(":").map(Number);
//     start = startHour * 60 + startMinutes;
//     end = endHour * 60 + endMinutes + 10;
//     return [start, end > 1440 ? 1440 : end];
// }

// function numberRangeArr([start, end]) {
//     return Array.from({ length: end - start }, (_, v) => start + v);
// }

// function solution(book_time) {
//     const times = Array(24 * 60).fill(0);
//     book_time.map(convertToMinutes).map(numberRangeArr).forEach((range) => {
//         range.forEach((r) => {
//             times[r] += 1;
//         })
//     });
    
//     return Math.max(...times);
// }
