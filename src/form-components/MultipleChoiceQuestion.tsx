import React, { useState } from "react";
import { Form } from "react-bootstrap";

MultipleChoiceQuestion.defaultProps = {
    options: ["Great", "Good", "Bad"],
    expectedAnswer: "Great"
};

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]);

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedChoice(event.target.value);
    }
    function checkAnswer() {
        if (selectedChoice.toLowerCase() === expectedAnswer.toLowerCase()) {
            return "✔️";
        } else {
            return "❌";
        }
    }
    return (
        <div>
            <Form.Group controlId="Options">
                <Form.Select value={selectedChoice} onChange={updateChoice}>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>

            <h3>
                Today is a {selectedChoice} day {checkAnswer()}
            </h3>
        </div>
    );
}
