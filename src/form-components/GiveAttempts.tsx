import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [enteredAmount, setEnteredAmount] = useState<number>(0);

    function useAttempts() {
        setAttemptsLeft(attemptsLeft - 1);
    }

    function gainAttempts() {
        if (!isNaN(enteredAmount)) {
            setAttemptsLeft(attemptsLeft + enteredAmount);
        }
    }

    function handleAttemptChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        const parsedValue = parseInt(value, 10);
        setEnteredAmount(isNaN(parsedValue) ? 0 : parsedValue);
    }

    return (
        <div>
            <Form.Group controlId="formAttemptsLeft">
                <Form.Label>Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    onChange={handleAttemptChange}
                />{" "}
                <Button onClick={useAttempts} disabled={attemptsLeft <= 0}>
                    use
                </Button>{" "}
                <Button onClick={gainAttempts}>gain</Button>
                <h3>Given Attempts: {attemptsLeft}</h3>
            </Form.Group>
        </div>
    );
}
