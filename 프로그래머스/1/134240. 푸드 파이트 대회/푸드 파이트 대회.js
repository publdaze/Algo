//NOTE - 1:1 대결, 가운데 물 먼저 먹는 선수 승리, 두 선수 음식 종류/양/순서 같음

function solution(food) {
    let result = "";
    
    food.forEach((f, i) => {
        if (f < 1) return;
        result += String(i).repeat(Math.floor(f / 2));
    })
    
    return result + "0" + [...result].reverse().join("");
}