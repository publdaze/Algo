function solution(files) {
    return files.map(file => file.split(/(\d+)/)).sort((a, b) => a[0].toUpperCase().localeCompare(b[0].toUpperCase()) || a[1] - b[1]).map(file => file.join(""));
}