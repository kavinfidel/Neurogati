import { useEffect, useRef, useState } from "react";

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

function NumberEquation({ lesson, question }) {
  if (lesson.type === "counting") {
    return (
      <div className="rounded-[1.5rem] bg-yellow-100 px-6 py-4 text-4xl font-black text-slate-900 shadow-inner">
        {question.visualCount}
      </div>
    );
  }

  const sign = lesson.type === "subtraction" ? "-" : "+";

  return (
    <div className="rounded-[1.5rem] bg-yellow-100 px-6 py-4 text-4xl font-black text-slate-900 shadow-inner sm:text-5xl">
      {question.left} {sign} {question.right} = ?
    </div>
  );
}

function QuestionVisual({ lesson, question }) {
  if (lesson.type === "counting") {
    return (
      <div className="space-y-5">
        <FruitGroup count={question.visualCount} fruit={question.fruit} />
        <NumberEquation lesson={lesson} question={question} />
      </div>
    );
  }

  if (lesson.type === "addition") {
    return (
      <div className="space-y-5">
        <div className="grid w-full gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <FruitGroup count={question.left} fruit={question.fruit} />
          <span className="text-5xl font-black text-fuchsia-600">+</span>
          <FruitGroup count={question.right} fruit={question.fruit} />
        </div>
        <NumberEquation lesson={lesson} question={question} />
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <FruitGroup
        count={question.left}
        fruit={question.fruit}
        fadedCount={question.right}
      />
      <p className="text-2xl font-black text-slate-700">
        Take away {question.right}
      </p>
      <NumberEquation lesson={lesson} question={question} />
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
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null);
  const nextQuestionTimer = useRef(null);

  const currentQuestion = lesson.questions[questionIndex];
  const isLastQuestion = questionIndex === lesson.questions.length - 1;
  const isFirstQuestion = questionIndex === 0;

  useEffect(() => {
    return () => {
      clearTimeout(nextQuestionTimer.current);
    };
  }, []);

  function resetAnswerState() {
    setFeedback("");
    setSelectedChoice(null);
    setAnswerStatus(null);
    clearTimeout(nextQuestionTimer.current);
  }

  function goToQuestion(nextIndex) {
    resetAnswerState();
    setQuestionIndex(nextIndex);
  }

  function goToPreviousQuestion() {
    if (!isFirstQuestion) {
      goToQuestion(questionIndex - 1);
    }
  }

  function goToNextQuestion() {
    if (!isLastQuestion) {
      goToQuestion(questionIndex + 1);
    }
  }

  function handleAnswer(choice) {
    if (answerStatus === "correct") {
      return;
    }

    setSelectedChoice(choice);

    if (choice !== currentQuestion.answer) {
      setAnswerStatus("incorrect");
      setFeedback("Try again.");
      return;
    }

    setAnswerStatus("correct");
    setFeedback("Great job!");

    nextQuestionTimer.current = setTimeout(() => {
      if (isLastQuestion) {
        onComplete(lesson.id);
        return;
      }

      goToQuestion(questionIndex + 1);
    }, 1200);
  }

  function getChoiceClass(choice) {
    if (selectedChoice !== choice) {
      return "bg-blue-500 shadow-blue-200 hover:-translate-y-1 hover:bg-blue-600";
    }

    if (answerStatus === "correct") {
      return "bg-emerald-500 shadow-emerald-200";
    }

    if (answerStatus === "incorrect") {
      return "bg-rose-500 shadow-rose-200";
    }

    return "bg-blue-500 shadow-blue-200 hover:-translate-y-1 hover:bg-blue-600";
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-cyan-100 via-yellow-100 to-pink-100 px-4 py-8">
      <section className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white/90 p-6 text-center shadow-2xl shadow-slate-300/50 ring-4 ring-white sm:p-8">


        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={onBack}
            className="rounded-full bg-slate-100 px-5 py-3 text-sm font-black text-slate-700 hover:bg-slate-200"
          >
            Back
          </button>

          <button
            type="button"
            onClick={goToPreviousQuestion}
            disabled={isFirstQuestion}
            className="rounded-full bg-white px-5 py-3 text-sm font-black text-slate-700 shadow-sm ring-2 ring-slate-100 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>

          <button
            type="button"
            onClick={goToNextQuestion}
            disabled={isLastQuestion}
            className="rounded-full bg-white px-5 py-3 text-sm font-black text-slate-700 shadow-sm ring-2 ring-slate-100 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>

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
              disabled={answerStatus === "correct"}
              className={`rounded-[1.5rem] px-6 py-5 text-5xl font-black text-white shadow-lg transition disabled:cursor-not-allowed ${getChoiceClass(
                choice
              )}`}
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
