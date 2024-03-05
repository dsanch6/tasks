import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDye, setLeftDye] = useState<number>(1);
    const [rightDye, setRightDye] = useState<number>(2);

    const rollLeft = () => {
        setLeftDye(d6());
    };

    const rollRight = () => {
        setRightDye(d6());
    };
    const checkWin = () => {
        if (leftDye === rightDye) {
            return leftDye === 1 ? "Lose" : "Win";
        }
        return "";
    };
    leftDye === rightDye ? (leftDye === 1 ? "Lose" : "Win") : "";
    return (
        <div>
            <span data-testid="left-die">{leftDye}</span>
            <span data-testid="right-die">{rightDye}</span>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
            {checkWin() && <div>{checkWin()}</div>}
        </div>
    );
}
