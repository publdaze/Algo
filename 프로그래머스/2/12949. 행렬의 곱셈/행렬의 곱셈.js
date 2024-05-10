function solution(arr1, arr2) {
    const newArr = Array.from({length: arr1.length}, () => Array.from({length: arr2[0].length}, () => 0));
    
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.at(0).length; j++) {
            let sum = 0;
            for (let k = 0; k < arr2.length; k++) {
                sum += arr1[i][k] * arr2[k][j];
                //console.log(i,k,'/', k, j)
            }
            newArr[i][j] = sum;
        }
    }
    
    return newArr;
}