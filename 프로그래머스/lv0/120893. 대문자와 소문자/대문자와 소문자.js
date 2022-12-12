function solution(my_string) {
    return [...my_string].map((str) => {
        if (str === str.toUpperCase()) return str.toLowerCase();
        return str.toUpperCase();
    }).join('');
}