function solution(my_string, index_list) {
    return index_list.map((idx) => my_string[idx]).join("");
}