function Solution(strs: string[]): string {
    if (!strs.length) {
        return "";
    }
    strs.sort();
    let prefix = "";
    const firstStr = strs[0];
    const lastStr = strs[strs.length - 1];
    const minLength = Math.min(firstStr.length, lastStr.length);

    for (let i = 0; i < minLength; i++) {
        if (firstStr[i] === lastStr[i]) {
            prefix += firstStr[i];
        } else {
            break;
        }
    }

    return prefix;
}

// Test cases
const strs1: string[] = ["flower", "flow", "flight"];
console.log(Solution(strs1));  // Output: "fl"

const strs2: string[] = ["dog", "racecar", "car"];
console.log(Solution(strs2));  // Output: ""