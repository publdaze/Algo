function solution(num_list) {
    const even = num_list.reduce((p, c) => {
        return c % 2 ? p : p + 1;
    }, 0);
    const odd = num_list.length - even;
    return [even, odd];
}