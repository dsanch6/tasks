import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [pickQuestionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );
    const scrollQuestion = () => {
        setQuestionType(
            pickQuestionType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    };

    return (
        <div>
            <div>Change Type</div>;
            <div>
                {" "}
                Current Type:{" "}
                {pickQuestionType === "short_answer_question"
                    ? "Short Answer"
                    : "Multiple Choice"}
            </div>
            <Button onClick={scrollQuestion}>Change Type</Button>
        </div>
    );
}
