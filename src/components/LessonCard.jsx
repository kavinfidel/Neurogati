/*
  LessonCard displays one lesson inside a module.

  Props are values passed from a parent component:
  - lesson: the lesson data object
  - lessonNumber: the visible number shown in the circle
  - isLocked: whether the child can click the lesson yet
  - isCompleted: whether the lesson has already been finished
  - onStart: function to run when the child clicks an unlocked lesson
*/
export default function LessonCard({
  lesson,
  lessonNumber,
  isLocked,
  isCompleted,
  onStart,
}) {
  const statusText = isCompleted ? "Done" : isLocked ? "Next" : "Play";

  return (
    <button
      type="button"
      disabled={isLocked}
      onClick={() => onStart(lesson)}
      className={`flex w-full items-center gap-4 rounded-[1.35rem] px-4 py-4 text-left shadow-md ring-4 transition ${
        isLocked
          ? "cursor-not-allowed bg-white/50 text-slate-400 ring-white/30"
          : "bg-white text-slate-900 ring-white/80 hover:-translate-y-1 hover:shadow-xl"
      }`}
    >
      <span
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl font-black shadow-sm ${
          isCompleted
            ? "bg-emerald-400 text-white"
            : isLocked
              ? "bg-slate-200 text-slate-400"
              : "bg-fuchsia-500 text-white"
        }`}
      >
        {lessonNumber}
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-xl font-black leading-tight">
          {lesson.title}
        </span>
        <span className="mt-1 block text-sm font-black uppercase tracking-wide opacity-70">
          {statusText}
        </span>
      </span>
    </button>
  );
}
