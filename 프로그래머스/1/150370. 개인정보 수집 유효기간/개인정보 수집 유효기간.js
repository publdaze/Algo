function solution(today, terms, privacies) {
    const termsMap = new Map(terms.map((term) => term.split(" ")));
    
    return privacies.reduce((accDeletePrivacy, privacy, i) => {
        const [day, provision] = privacy.split(" ");
        let [year, month, date] = day.split(".").map(Number);
        month = month + Number(termsMap.get(provision));
        year += Math.floor(month / 12);
        month = month % 12;
        
        if (new Date(year, month-1, date) <= new Date(today)) accDeletePrivacy.push(i + 1);
        return accDeletePrivacy;
    }, []);
}