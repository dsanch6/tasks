import React from "react";
import "./App.css";
import Button from "react-bootstrap/esm/Button";
import { Col, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>header is here</h1>
            <img
                src="https://www.discoverpuertorico.com/sites/default/files/styles/horizontal_narrow_800x600/public/2019-02/playuela-beach-cabo-rojo.jpg?h=6eb229a4&itok=H9UWuO1C"
                alt="PR Beach"
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
                    <img src="https://www.discoverpuertorico.com/sites/default/files/styles/horizontal_narrow_800x600/public/2019-02/playuela-beach-cabo-rojo.jpg?h=6eb229a4&itok=H9UWuO1C" />{" "}
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
