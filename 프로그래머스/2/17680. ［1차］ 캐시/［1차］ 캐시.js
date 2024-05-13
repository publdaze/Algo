// 도시 이름 검색 -> 해당 도시 맛집 게시물
// 위 기능 성능 개선 필요 -> 캐시 크기 얼마로? -> 캐시 크기에 따른 실행시간 측정
// 총 실행시간 출력

const CACHE_HIT_TIME = 1;
const CACHE_MISS_TIME = 5;

function solution(cacheSize, cities) {
    const cache = new Set();
    if (cacheSize === 0) return cities.length * CACHE_MISS_TIME;
    return cities.reduce((acc, city) => {
        city = city.toLowerCase();
        
        if (cache.has(city)) {
            cache.delete(city);
            cache.add(city);
            return acc + CACHE_HIT_TIME;
        }
        if (cache.size === cacheSize) {
            const oldestCache = cache.values().next().value;
            cache.delete(oldestCache);
        }
        cache.add(city);
        return acc + CACHE_MISS_TIME;
    }, 0)
}

// 90점 -> cache 사이즈 0에 대한 처리 필요
// const CACHE_HIT_TIME = 1;
// const CACHE_MISS_TIME = 5;

// function solution(cacheSize, cities) {
//     const cache = new Set();
    
//     return cities.reduce((acc, city) => {
//         city = city.toLowerCase();
        
//         if (cache.has(city)) {
//             cache.delete(city);
//             cache.add(city);
//             return acc + CACHE_HIT_TIME;
//         }
//         if (cache.size === cacheSize) {
//             const oldestCache = cache.values().next().value;
//             cache.delete(oldestCache);
//         }
//         cache.add(city);
//         return acc + CACHE_MISS_TIME;
//     }, 0)
// }

// 65점 -> hit일 때 최신으로 업데이트 필요
// const CACHE_HIT_TIME = 1;
// const CACHE_MISS_TIME = 5;

// function solution(cacheSize, cities) {
//     const cache = new Set();
    
//     return cities.reduce((acc, city) => {
//         city = city.toLowerCase();
        
//         if (cache.has(city)) {
//             return acc + CACHE_HIT_TIME;
//         }
//         if (cache.size === cacheSize) {
//             const oldestCache = cache.values().next().value;
//             cache.delete(oldestCache);
//         }
//         cache.add(city);
//         return acc + CACHE_MISS_TIME;
//     }, 0)
// }