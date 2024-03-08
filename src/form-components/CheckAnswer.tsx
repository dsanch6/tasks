import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer = "Dog;"
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [enterAnswer, setEnteredAnswer] = useState<string>("");

    function enterAnswerevent(event: React.ChangeEvent<HTMLInputElement>) {
        setEnteredAnswer(event.target.value);
    }
    function checkAnswer() {
        if (enterAnswer.toLowerCase() === expectedAnswer.toLowerCase()) {
            return "✔️";
        } else {
            return "❌";
        }
    }
    return (
        <div>
            <Form.Group controlId="formAnswer">
                <Form.Label> Answer:</Form.Label>
                <Form.Control value={enterAnswer} onChange={enterAnswerevent} />
            </Form.Group>
            <div>A common household pet who barks is a: {enterAnswer}</div>

            <div>
                {" "}
                <h3>Check Answer: {checkAnswer()} </h3>{" "}
            </div>
        </div>
    );
}
