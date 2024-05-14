function solution(id_list, report, k) {
    report = new Set(report);
    const reportedPeople = new Map();
    
    report.forEach((r) => {
        const [src,dst] = r.split(" ");
        
        reportedPeople.has(dst) ? reportedPeople.get(dst).push(src) : reportedPeople.set(dst, [src]);
    })
    
    const notificationPeople = [];
    reportedPeople.forEach((value, key) => {
        if (value.length >= k) {
            notificationPeople.push(...value);
        }
    })
    
    return id_list.map((id) => notificationPeople.filter((person) => person === id).length);
}