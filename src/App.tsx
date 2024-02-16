import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <p className="App-header">
                UD CISC275 with React Hooks and TypeScript DIANA DIAZ
            </p>

            <div role="banner">
                <h1 style={{ backgroundColor: "blueviolet" }}>
                    header is here
                </h1>
            </div>
            <>
                <div>
                    <img
                        src="https://www.discoverpuertorico.com/sites/default/files/styles/horizontal_narrow_800x600/public/2019-02/playuela-beach-cabo-rojo.jpg?h=6eb229a4&itok=H9UWuO1C"
                        alt="Puerto Rico Beach"
                        style={{
                            width: "120px",
                            height: "100px",
                            marginBottom: "40px"
                        }}
                    />
                </div>
            </>

            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>

            <div
                style={{
                    backgroundColor: "red",
                    height: "150x",
                    width: "80px"
                }}
            >
                <Container>
                    <Row>
                        <Col style={{ margin: "0 80px", padding: "10px" }}>
                            First col is here
                        </Col>
                        <Col style={{ margin: "0 80px", padding: "10px" }}>
                            Second Col is here
                        </Col>
                    </Row>
                </Container>
            </div>
            <>
                <div style={{ marginTop: "80px" }}>
                    <ol>
                        <li>Palm Trees</li>
                        <li>Beach</li>
                        <li>Sun</li>
                    </ol>
                </div>
            </>
            <p>
                Edit <code>src/App.tsx</code> and save. Hello World This page
                will automatically reload.
            </p>
        </div>
    );
}

export default App;
