// 신고당: {신고한, 총 개수}
// 총개수가 k 이상 신고한 필터링
// id: 0

function solution(id_list, report, k) {
    const froms = [...report.reduce((acc, log) => {
        const [from, to] = log.split(" ");
        if (!acc.has(to)) acc.set(to, new Set());
        acc.get(to).add(from);
        return acc;
    }, new Map())]
    .filter(([_, value]) => value.size >= k)
    .flatMap(([_, value]) => [...value]);
    
    return id_list.map((id) => froms.filter((from) => from === id).length);
}