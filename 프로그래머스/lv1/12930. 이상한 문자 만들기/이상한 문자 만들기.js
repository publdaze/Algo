function solution(s) {
    return s.split(' ').map((v, i) => (
        v.split('').map((_v, _i) => {
            if (_i % 2 === 0) return _v.toUpperCase();
            return _v.toLowerCase();
        }).join('')
    )).join(' ');
}