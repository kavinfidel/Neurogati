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
  const statusText = isCompleted ? "Done" : isLocked ? "Locked" : "Start";

  return (
    <button
      type="button"
      disabled={isLocked}
      onClick={() => onStart(lesson)}
      className={`flex w-full items-center gap-4 rounded-2xl px-4 py-4 text-left shadow-sm ring-2 transition ${
        isLocked
          ? "cursor-not-allowed bg-slate-100 text-slate-400 ring-slate-200"
          : "bg-white text-slate-900 ring-white/70 hover:-translate-y-1 hover:shadow-lg"
      }`}
    >
      <span
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-black ${
          isCompleted
            ? "bg-emerald-500 text-white"
            : isLocked
              ? "bg-slate-300 text-slate-500"
              : "bg-slate-900 text-white"
        }`}
      >
        {lessonNumber}
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-lg font-black leading-tight">
          {lesson.title}
        </span>
        <span className="mt-1 block text-sm font-bold uppercase tracking-wide opacity-70">
          {statusText}
        </span>
      </span>
    </button>
  );
}
