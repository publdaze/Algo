function solution(babbling) {
    return babbling.map((word) => word.replace(/ayaaya|yeye|woowoo|mama/g, "-")).filter((word) => word.replace(/aya|ye|woo|ma/g, "") === "").length;
}