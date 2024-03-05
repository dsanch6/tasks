import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday = "❤️" | "🍀" | "🎃" | "🦃" | "🎅";
    const holidayByYear: Holiday[] = ["❤️", "🍀", "🎃", "🦃", "🎅"];
    const holidayByAlphabet: Holiday[] = [...holidayByYear].sort();
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>(
        holidayByYear[0]
    );

    const alphabet = (current: Holiday): Holiday => {
        const currentIndex = holidayByAlphabet.indexOf(current);
        return holidayByAlphabet[(currentIndex + 1) % holidayByAlphabet.length];
    };

    const year = (current: Holiday): Holiday => {
        const currentIndex = holidayByYear.indexOf(current);
        return holidayByYear[(currentIndex + 1) % holidayByYear.length];
    };

    const alphabets = () => {
        setCurrentHoliday(alphabet(currentHoliday));
    };
    const yearz = () => {
        setCurrentHoliday(year(currentHoliday));
    };

    return (
        <div>
            <div>Holiday: {currentHoliday}</div>
            <Button onClick={alphabets}>Select By Alphabet</Button>
            <Button onClick={yearz}>Select By Year</Button>
        </div>
    );
}
