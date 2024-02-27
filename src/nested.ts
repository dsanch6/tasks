import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`. DONE
 *
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter((question) => question.published);
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`. DONE
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions.filter((question) => {
        return (
            question.body !== "" ||
            question.expected !== "" ||
            question.options.length > 0
        );
    });
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead. DONE
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const quest = questions.find((question) => question.id === id);
    return quest || null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`. DONE
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const nonQ = questions.filter((question) => question.id !== id);
    return nonQ;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array. DONE
 */
export function getNames(questions: Question[]): string[] {
    const nameArr = questions.map((questions) => questions.name);
    return nameArr;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
  DONE */
export function sumPoints(questions: Question[]): number {
    const sumQ = questions.reduce(
        (sum, questions) => sum + questions.points,
        0
    );
    return sumQ;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
  DONE */
export function sumPublishedPoints(questions: Question[]): number {
    const isPublished = questions.filter((questions) => questions.published);
    const totalPoints = isPublished.reduce(
        (sum, question) => sum + question.points,
        0
    );

    return totalPoints;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    let headerCSV = "id,name,options,points,published\n";
    questions.forEach((question) => {
        const opCount = question.options ? question.options.length : 0;
        const gName =
            question.id +
            "," +
            question.name +
            "," +
            opCount +
            "," +
            question.points +
            "," +
            question.published;
        headerCSV += gName + "\n";
    });

    return headerCSV.trim();
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
  DONE */
export function makeAnswers(questions: Question[]): Answer[] {
    return questions.map((questions) => ({
        questionId: questions.id,
        text: "",
        submitted: false,
        correct: false
    }));
}
/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
  DONE */
export function publishAll(questions: Question[]): Question[] {
    const nowPublished = questions.map((questions) => {
        return { ...questions, published: true };
    });
    return nowPublished;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
  DONE */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) {
        return true;
    }
    const sameQ = questions[0].type;
    return questions.every((question) => question.type === sameQ);
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
  DONE */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newQ = makeBlankQuestion(id, name, type);
    return [...questions, newQ];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    return questions.map((question) => {
        if (question.id === targetId) {
            return { ...question, name: newName };
        } else {
            return question;
        }
    });
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    return questions.map((question) => {
        if (question.id === targetId) {
            if (newQuestionType !== "multiple_choice_question") {
                return { ...question, type: newQuestionType, options: [] };
            } else {
                return { ...question, type: newQuestionType };
            }
        }
        return question;
    });
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    return questions.map((question) => {
        if (question.id === targetId) {
            const updatedOp = [...question.options];
            if (targetOptionIndex === -1) {
                updatedOp.push(newOption);
            } else {
                updatedOp[targetOptionIndex] = newOption;
            }
            return { ...question, options: updatedOp };
        }
        return question;
    });
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const newQuestions: Question[] = [];
    questions.forEach((question) => {
        newQuestions.push(question);
        if (question.id === targetId) {
            const dupe = duplicateQuestion(newId, question);
            newQuestions.push(dupe);
        }

        return newQuestions;
    });
    return newQuestions;
}
