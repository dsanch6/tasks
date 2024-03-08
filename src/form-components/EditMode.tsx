import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [studentName, setStudentName] = useState<string>("Your Name");
    const [isEditMode, setIsEditMode] = useState<boolean>(false);

    function updateStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setStudentName(event.target.value);
    }
    function switchEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setIsEditMode(event.target.checked);
    }
    return (
        <div>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode?"
                checked={isEditMode}
                onChange={switchEditMode}
            />

            <h3>{isEditMode ? "Edit Mode" : "View Mode"}</h3>

            {isEditMode ? (
                <div>
                    <Form.Group controlId="studentName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={studentName}
                            onChange={handleNameChange}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-checkbox"
                        label="Are you a student?"
                        checked={isStudent}
                        onChange={updateStatus}
                    />
                </div>
            ) : (
                <div>
                    {studentName} is {isStudent ? "" : "not "}a student.
                </div>
            )}
        </div>
    );
}
