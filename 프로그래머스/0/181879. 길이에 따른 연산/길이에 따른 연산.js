function solution(num_list) {
    if (num_list.length >= 11) {
        return num_list.reduce((acc, curr) => acc + curr, 0);
    }
    return num_list.reduce((acc, curr) => acc * curr, 1);
}