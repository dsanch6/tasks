/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice. DONE
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    }
    if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    }
    return [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3). DONE
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((number) => number * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 * DONE
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((str: string): number => {
        const parsed = parseInt(str, 10);
        return isNaN(parsed) ? 0 : parsed;
    });
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead. DONE
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((amount) => {
        const cleanAmt = amount.startsWith("$") ? amount.slice(1) : amount;
        const parsedAmount = parseInt(cleanAmt, 10);
        return isNaN(parsedAmount) ? 0 : parsedAmount;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 * DONE
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .filter((message) => !message.endsWith("?"))
        .map((message) =>
            message.endsWith("!") ? message.toUpperCase() : message
        );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long. DONE
 */
export function countShortWords(words: string[]): number {
    return words.filter((words) => words.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true. DONE
 */
export function allRGB(colors: string[]): boolean {
    return colors.every((color) => ["red", "blue", "green"].includes(color));
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 * DONE
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce((acc, val) => acc + val, 0);
    const equation = sum + "=" + addends.join("+");
    return equation;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const firstNeg = values.findIndex((value) => value < 0);
    if (firstNeg !== -1) {
        const sum = values
            .slice(0, firstNeg)
            .reduce((acc, curr) => acc + curr, 0);

        return [
            ...values.slice(0, firstNeg),
            values[firstNeg],
            sum,
            ...values.slice(firstNeg + 1)
        ];
    } else {
        const totalSum = values.reduce((acc, curr) => acc + curr, 0);
        return [...values, totalSum];
    }
}
