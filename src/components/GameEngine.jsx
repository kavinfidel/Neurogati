import { useState } from "react";

function DotGroup({ count }) { // DotGroup component
  return (
    <div className="flex max-w-md flex-wrap justify-center gap-3">
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          className="h-10 w-10 rounded-full bg-rose-500 shadow-md shadow-rose-200"
        />
      ))}
    </div>
  );                               
}
/*                */
/*
  GameEngine runs the selected lesson.

  It does not know about the whole app. It only receives:
  - lesson: the lesson to play
  - onBack: function to return to the dashboard
  - onComplete: function to save progress when the lesson is finished
*/
export default function GameEngine({ lesson, onBack, onComplete }) { // nesting the DotGrouop component
  const [questionIndex, setQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState("");

  const currentQuestion = lesson.questions[questionIndex];
  const isLastQuestion = questionIndex === lesson.questions.length - 1;

  function handleAnswer(choice) {
    if (choice !== currentQuestion.answer) {
      setFeedback("Try again. Count slowly.");
      return;
    }

    if (isLastQuestion) {
      onComplete(lesson.id);
      return;
    }

    setFeedback("");
    setQuestionIndex(questionIndex + 1);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-8">
      <section className="w-full max-w-3xl rounded-3xl bg-white p-6 text-center shadow-xl sm:p-8">
        <button
          type="button"
          onClick={onBack}
          className="mb-6 rounded-full bg-slate-100 px-5 py-2 text-sm font-black text-slate-700 hover:bg-slate-200"
        >
          Back to map
        </button>

        <p className="text-sm font-black uppercase tracking-wide text-slate-500">
          Question {questionIndex + 1} of {lesson.questions.length}
        </p>

        <h1 className="mt-2 text-3xl font-black text-slate-900">
          {lesson.title}
        </h1>

        <p className="mt-6 text-3xl font-black text-slate-800">
          {currentQuestion.prompt}
        </p>

        <div className="mt-8 flex justify-center">
          {currentQuestion.visualCount ? (
            <DotGroup count={currentQuestion.visualCount} />
          ) : (
            <div className="rounded-3xl bg-slate-100 px-8 py-6 text-5xl font-black text-slate-900">
              {currentQuestion.left} {lesson.type === "subtraction" ? "-" : "+"}{" "}
              {currentQuestion.right}
            </div>
          )}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {/*
            This .map() creates one answer button for every choice.
            It is like: for choice in currentQuestion["choices"].
          */}
          {currentQuestion.choices.map((choice) => (
            <button
              key={choice}
              type="button"
              onClick={() => handleAnswer(choice)}
              className="rounded-3xl bg-blue-500 px-6 py-5 text-4xl font-black text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-600"
            >
              {choice}
            </button>
          ))}
        </div>

        <p className="mt-6 min-h-8 text-2xl font-black text-rose-600">
          {feedback}
        </p>
      </section>
    </main>
  );
}
