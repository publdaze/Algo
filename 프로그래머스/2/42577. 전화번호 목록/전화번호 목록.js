function solution(phone_book) {
    const prefix = new Set(phone_book);
    
    for (const phone of phone_book) {
        for (let i = 1; i < phone.length; i++) {
            const guessPrefix = phone.slice(0, i);
            if (prefix.has(guessPrefix)) return false;
        }
    }
    return true;
}


// 3, 4 시간 초과
// function solution(phone_book) {
//     return !phone_book.some((phone1) => {
//         return phone_book.some((phone2) => {
//             if (phone1 === phone2) return;
//             return phone2.startsWith(phone1);
//         });
//     });
// }

// 3, 4 시간 초과
// function solution(phone_book) {
//     phone_book.sort((a, b) => a.length - b.length);
    
//     for (let i = 0; i < phone_book.length; i++) {
//         for (let j = i + 1; j < phone_book.length; j++) {
//             if (phone_book[j].startsWith(phone_book[i])) return false;
//         }
//     }
    
//     return true;
// }