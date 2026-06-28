import { useState } from "react";

const fruitIcons = {
  apple: "🍎",
  banana: "🍌",
};

function FruitGroup({ count, fruit, fadedCount = 0 }) {
  const fruitIcon = fruitIcons[fruit] || "🍎";

  return (
    <div className="flex max-w-xl flex-wrap justify-center gap-2 rounded-[2rem] bg-white/80 p-4 shadow-inner">
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          className={`text-4xl drop-shadow-sm sm:text-5xl ${
            index >= count - fadedCount ? "opacity-25 grayscale" : ""
          }`}
        >
          {fruitIcon}
        </span>
      ))}
    </div>
  );
}

function QuestionVisual({ lesson, question }) {
  if (lesson.type === "counting") {
    return <FruitGroup count={question.visualCount} fruit={question.fruit} />;
  }

  if (lesson.type === "addition") {
    return (
      <div className="grid w-full gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <FruitGroup count={question.left} fruit={question.fruit} />
        <span className="text-5xl font-black text-fuchsia-600">+</span>
        <FruitGroup count={question.right} fruit={question.fruit} />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <FruitGroup
        count={question.left}
        fruit={question.fruit}
        fadedCount={question.right}
      />
      <p className="text-2xl font-black text-slate-700">
        Take away {question.right}
      </p>
    </div>
  );
}

/*
  GameEngine runs the selected lesson.

  It does not know about the whole app. It only receives:
  - lesson: the lesson to play
  - onBack: function to return to the dashboard
  - onComplete: function to save progress when the lesson is finished
*/
export default function GameEngine({ lesson, onBack, onComplete }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState("");

  const currentQuestion = lesson.questions[questionIndex];
  const isLastQuestion = questionIndex === lesson.questions.length - 1;

  function handleAnswer(choice) {
    if (choice !== currentQuestion.answer) {
      setFeedback("Try again.");
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
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-cyan-100 via-yellow-100 to-pink-100 px-4 py-8">
      <section className="w-full max-w-5xl rounded-[2rem] bg-white/90 p-6 text-center shadow-2xl shadow-slate-300/50 ring-4 ring-white sm:p-8">
        <button
          type="button"
          onClick={onBack}
          className="mb-6 rounded-full bg-slate-100 px-5 py-3 text-sm font-black text-slate-700 hover:bg-slate-200"
        >
          Back
        </button>

        <p className="text-sm font-black uppercase tracking-wide text-fuchsia-600">
          {questionIndex + 1} / {lesson.questions.length}
        </p>

        <h1 className="mt-2 text-4xl font-black text-slate-900">
          {lesson.title}
        </h1>

        <p className="mt-6 text-4xl font-black text-slate-800">
          {currentQuestion.prompt}
        </p>

        <div className="mt-8 flex justify-center">
          <QuestionVisual lesson={lesson} question={currentQuestion} />
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
              className="rounded-[1.5rem] bg-blue-500 px-6 py-5 text-5xl font-black text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-600"
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
