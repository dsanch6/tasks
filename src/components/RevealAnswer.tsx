import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [answerIsVisable, setAnswerVisable] = useState<boolean>(false);
    const pickVisability = () => {
        setAnswerVisable(!answerIsVisable);
    };
    return (
        <div>
            <Button onClick={pickVisability}>Reveal Answer</Button>
            {answerIsVisable && <div>42</div>}
        </div>
    );
}
