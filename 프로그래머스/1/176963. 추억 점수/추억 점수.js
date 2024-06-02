function solution(name, yearning, photo) {
    const map = new Map();
    
    name.forEach((person, idx) => {
        map.set(person, yearning[idx]);
    })
    
    return photo.map((people) => people.reduce((acc, curr) => acc + (map.get(curr) ?? 0), 0));
}