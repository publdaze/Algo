function comvertToMinutes([start, end]) {
    const [startHour, startMinutes] = start.split(":").map(Number);
    const [endHour, endMinutes] = end.split(":").map(Number);
    start = startHour * 60 + startMinutes;
    end = endHour * 60 + endMinutes + 10;
    return [start, end > 1440 ? 1440 : end];
}

function numberRangeArr([start, end]) {
    return Array.from({ length: end - start }, (_, v) => start + v);
}

function solution(book_time) {
    const times = Array(24 * 60).fill(0);
    book_time.map(comvertToMinutes).map(numberRangeArr).forEach((range) => {
        range.forEach((r) => {
            times[r] += 1;
        })
    });
    
    return Math.max(...times);
}
