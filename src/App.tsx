import React from "react";
import "./App.css";
import Button from "react-bootstrap/esm/Button";
import { Col, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>header is here</h1>
            <img
                src="https://drive.google.com/uc?id=1mKAzffEPl8d7VJJOwKJQxxaZBtd9qPkq"
                alt="My trip to PR"
            />
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript DIANA DIAZ
            </header>
            <Button>Log Hello World</Button>
            <Button onClick={() => console.log("Hello World!")}>
                Click Me
            </Button>
            <Row>
                <Col> First col is here </Col>
                <Col>
                    {" "}
                    <img src="https://drive.google.com/uc?id=1mKAzffEPl8d7VJJOwKJQxxaZBtd9qPkq" />{" "}
                </Col>
            </Row>
            <div style={{ border: "1px solid red", padding: "4px" }}>
                <ol>
                    <li>Palm Trees</li>
                    <li>Beach</li>
                    <li>Sun</li>
                </ol>
            </div>
            <p>
                Edit <code>src/App.tsx</code> and save. Hello World This page
                will automatically reload.
            </p>
        </div>
    );
}

export default App;
