import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "Red",
        "Blue",
        "Green",
        "Yellow",
        "Purple",
        "Orange",
        "Pink",
        "Black"
    ];

    const [selectColor, setSelectColor] = useState<string>(colors[0]);
    function handleColorChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color) => (
                <Form.Check
                    key={color}
                    inline
                    label={color}
                    type="radio"
                    name="color-options"
                    id={`color-${color}`}
                    value={color}
                    checked={selectColor === color}
                    onChange={handleColorChange}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectColor,
                    color: "white",
                    padding: "10px",
                    marginTop: "10px"
                }}
            >
                {selectColor}
            </div>
        </div>
    );
}
