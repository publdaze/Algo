function solution(nums) {
    const pokemonTypes = new Set(nums);
    const need = nums.length / 2;
    return pokemonTypes.size > need ? need : pokemonTypes.size;
}