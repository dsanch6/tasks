import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [quizInProgress, setIsInProgress] = useState<boolean>(false);

    const startQuiz = () => {
        if (attempts > 0) {
            setIsInProgress(true);
            setAttempts((newAmountAttempts) => newAmountAttempts - 1);
        }
    };

    const stopQuiz = () => {
        setIsInProgress(false);
    };

    const mulligan = () => {
        setAttempts((newAmountAttempts) => newAmountAttempts + 1);
    };

    return (
        <div>
            <div>Attempts left: {attempts}</div>
            <Button
                onClick={startQuiz}
                disabled={quizInProgress || attempts === 0}
            >
                Start Quiz{" "}
            </Button>
            <Button onClick={stopQuiz} disabled={!quizInProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={quizInProgress}>
                {" "}
                Mulligan
            </Button>
        </div>
    );
}
