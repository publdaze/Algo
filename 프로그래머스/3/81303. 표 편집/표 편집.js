// 삭제되지 않은 행 O, 삭제된 행 X
// stack에 인덱스를 저장.

// 8
// 13, 12, ["U 12", "C", "D 3", "C", "Z", "C", "Z"]
// const commands = {
//     U: ({rowIdx, dRow}) => rowIdx - dRow,
//     D: ({rowIdx, dRow}) => rowIdx + dRow,
//     C: ({table, stack, rowIdx}) => {
//         stack.push(table[rowIdx]);
//         table.splice(rowIdx, 1);
        
//         return rowIdx + 1 < table.length ? rowIdx : table.length - 1;
//     },
//     Z: ({table, stack, rowIdx, dRow}) => {
//         const deletedRow = stack.pop();
//         table.splice(deletedRow, 0, deletedRow);
        
//         return deletedRow <= rowIdx ? rowIdx + 1 : rowIdx;
//     },
// }

// function solution(n, k, cmd) {
//     let rowIdx = k;
//     const table = Array.from({ length: n }, (_, i) => i);
//     const stack = [];
//     for (const command of cmd) {
//         let [c, dRow] = command.split(" ");
//         dRow = Number(dRow);
        
//         rowIdx = commands[c]({table, stack, rowIdx, dRow});
//         // console.log([c, dRow], table, stack, rowIdx)
//     }
//     table.reverse();
//     return Array.from({ length: n }, (_, i) => i).map((i) => {
//         if (table.at(-1) === i) {
//             table.pop();
//             return "O";
//         }
//         return "X";
//     }).join("")
// }

// 10 - Z 문제
// 5, 0, ["C", "C", "C", "Z", "U", "C"]
// const commands = {
//     U: ({rowIdx, dRow}) => rowIdx - dRow,
//     D: ({rowIdx, dRow}) => rowIdx + dRow,
//     C: ({table, stack, rowIdx}) => {
//         stack.push(table[rowIdx]);
//         table.splice(rowIdx, 1);
        
//         return rowIdx + 1 < table.length ? rowIdx : table.length - 1;
//     },
//     Z: ({table, stack, rowIdx, dRow}) => {
//         const deletedRow = stack.pop();
//         table.splice(deletedRow, 0, deletedRow);
        
//         return deletedRow <= rowIdx ? rowIdx + 1 : rowIdx;
//     },
// }

// function solution(n, k, cmd) {
//     let rowIdx = k;
//     const table = Array.from({ length: n }, (_, i) => i);
//     const stack = [];
//     for (const command of cmd) {
//         let [c, dRow] = command.split(" ");
//         dRow = Number(dRow);
        
//         rowIdx = commands[c]({table, stack, rowIdx, dRow});
//         //console.log([c, dRow], table, stack, rowIdx)
//     }
//     table.sort((a, b) => a - b).reverse();
//     return Array.from({ length: n }, (_, i) => i).map((i) => {
//         if (table.at(-1) === i) {
//             table.pop();
//             return "O";
//         }
//         return "X";
//     }).join("")
// }

// 삭제 값 -> 테이블 자체 스냅샷
// 30점 정확성 100
// const commands = {
//     U: ({rowIdx, dRow}) => rowIdx - dRow,
//     D: ({rowIdx, dRow}) => rowIdx + dRow,
//     C: ({table, stack, rowIdx}) => {
//         stack.push([...table]);
//         table.splice(rowIdx, 1);
        
//         return rowIdx + 1 < table.length ? rowIdx : table.length - 1;
//     },
//     Z: ({table, stack, rowIdx}) => {
//         const rowNum = table[rowIdx];
//         table.splice(0, table.length, ...stack.pop());
        
//         return table.indexOf(rowNum);
//     },
// }

// function solution(n, k, cmd) {
//     let rowIdx = k;
//     const table = Array.from({ length: n }, (_, i) => i);
//     const stack = [];
//     for (const command of cmd) {
//         let [c, dRow] = command.split(" ");
//         dRow = Number(dRow);
        
//         rowIdx = commands[c]({table, stack, rowIdx, dRow});
//         // console.log([c, dRow], table, stack, rowIdx)
//     }
//     table.reverse();
//     return Array.from({ length: n }, (_, i) => i).map((i) => {
//         if (table.at(-1) === i) {
//             table.pop();
//             return "O";
//         }
//         return "X";
//     }).join("");
// }

// 92점, 28, 8 런타임 에러
// const commandFn = {
//     U: ({ table, currRow, dRow }) => {
//         return commandFn.move({ direction: "prev", table, currRow, dRow });
//     },
//     D: ({ table, currRow, dRow }) => {
//         return commandFn.move({ direction: "next", table, currRow, dRow });
//     },
//     C: ({ table, stack, currRow }) => {
//         stack.push(currRow);
//         if (table[currRow].prev > 0) table[table[currRow].prev].next = table[currRow].next;
//         if (table[currRow].next) table[table[currRow].next].prev = table[currRow].prev;
        
//         return table[currRow].next ? table[currRow].next : table[currRow].prev;
//     },
//     Z: ({ table, stack, currRow, dRow }) => {
//         const backRow = stack.pop();
//         if (table[backRow].prev > 0) table[table[backRow].prev].next = backRow;
//         if (table[backRow].next) table[table[backRow].next].prev = backRow;
        
//         return currRow;
//     },
//     move: ({ direction, table, currRow, dRow }) => {
//         for (let i = 0; i < dRow; i++) {
//             currRow = table[currRow][direction];
//         }
//         return currRow;
//     }
// }

// function solution(n, k, cmd) {
//     let currRow = k;
//     const table = Array.from({ length: n }, (_, i) => ({ prev: i - 1, next: i < n - 1 ? i + 1 : null }));
//     const stack = [];
    
//     for (const rawCmd of cmd) {
//         const [operator, operand] = rawCmd.split(" ");
//         currRow = commandFn[operator]({table, stack, currRow, dRow: Number(operand)});
//     }
    
//     const result = Array(n).fill("O");
//     for (const deletedRow of stack) {
//         result[deletedRow] = "X";
//     }
    
//     return result.join("");
// }

const commandFn = {
    U: ({ table, currRow, dRow }) => commandFn.move({ direction: "prev", table, currRow, dRow }),

    D: ({ table, currRow, dRow }) => commandFn.move({ direction: "next", table, currRow, dRow }),

    C: ({ table, stack, currRow }) => {
        stack.push(currRow);
        commandFn.unlinkRow({ table, currRow });
        return table[currRow].next ?? table[currRow].prev;
    },

    Z: ({ table, stack, currRow }) => {
        const backRow = stack.pop();
        commandFn.relinkRow({ table, backRow });
        return currRow;
    },

    move: ({ direction, table, currRow, dRow }) => {
        for (let i = 0; i < dRow; i++) {
            currRow = table[currRow][direction];
        }
        return currRow;
    },

    unlinkRow: ({ table, currRow }) => {
        if (table[currRow].prev >= 0) table[table[currRow].prev].next = table[currRow].next;
        if (table[currRow].next !== null) table[table[currRow].next].prev = table[currRow].prev;
    },

    relinkRow: ({ table, backRow }) => {
        if (table[backRow].prev >= 0) table[table[backRow].prev].next = backRow;
        if (table[backRow].next !== null) table[table[backRow].next].prev = backRow;
    }
};

function solution(n, k, cmd) {
    let currRow = k;
    const table = Array.from({ length: n }, (_, i) => ({
        prev: i - 1, 
        next: i < n - 1 ? i + 1 : null
    }));
    const stack = [];
    
    for (const rawCmd of cmd) {
        const [operator, operand] = rawCmd.split(" ");
        currRow = commandFn[operator]({
            table, 
            stack, 
            currRow, 
            dRow: Number(operand)
        });
    }
    
    const result = Array(n).fill("O");
    for (const deletedRow of stack) {
        result[deletedRow] = "X";
    }
    
    return result.join("");
}