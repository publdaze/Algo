function solution(phone_book) {
    phone_book = new Set(phone_book);
    
    for (phoneNum of phone_book) {
        for (let i = 1; i < phoneNum.length; i++) {
            if(phone_book.has(phoneNum.substr(0, i))) return false;
        }
    }
    
    return true;
}