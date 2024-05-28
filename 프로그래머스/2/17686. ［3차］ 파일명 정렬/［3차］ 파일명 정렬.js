function solution(files) {
    return files
        .map(file => {
            const [head, number, ...tail] = file.split(/(\d+)/);
            return { file, head, number };
        })
        .sort((a, b) => a.head.toUpperCase().localeCompare(b.head.toUpperCase()) || a.number - b.number)
        .map(({ file }) => file);
}


// function solution(files) {
//     return files.map(file => file.split(/(\d+)/)).sort((a, b) => a[0].toUpperCase().localeCompare(b[0].toUpperCase()) || a[1] - b[1]).map(file => file.join(""));
// }