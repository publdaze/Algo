// 개인정보 n개
// 우효기간 전까지 보관, 지나면 파기
// 모든 달 28일까지로 가정
// 오늘 날짜로 파기해야 할 개인정보 번호 // 오름차순

function solution(today, terms, privacies) {
    const periodByterm = Object.fromEntries(terms.map((term) => {
        const [type, period] = term.split(" ");
        return [type, Number(period)]; // Number를 어느 시점에 적용해야 할 지
    }));
    
    const expirationPrivacy = [];
    for (let [i, privacy] of privacies.entries()) {
        const [date, term] = privacy.split(" ");
        const [year, month, day] = date.split(".").map(Number);
        const expirationDay = day - 1 || 28
        const expirationMonth = (day - 1 === 0 ? month - 1 : month) + periodByterm[term];
        const expirationDate = [year + Math.floor(expirationMonth / 12 - (expirationMonth % 12 === 0 ? 1 : 0)), String((expirationMonth % 12) || 12).padStart(2, "0"), String(expirationDay).padStart(2, "0")]

        const tDate = today.split(".").join("");
        if (Number(expirationDate.join("")) < tDate) expirationPrivacy.push(i + 1);
    }
    
    return expirationPrivacy;
}