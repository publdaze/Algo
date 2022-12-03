function solution(my_string) {
    const vowel = ['a', 'e', 'i', 'o', 'u']
    return my_string.split('').filter((s) => !vowel.includes(s)).join('');
}