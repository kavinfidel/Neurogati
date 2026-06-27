import { modulesConfig } from "../config/lessonsConfig";
import LessonCard from "./LessonCard";

/*
  ModuleMap is the dashboard screen.

  It reads every module from lessonsConfig.js and turns that data into
  large child-friendly cards.
*/
export default function ModuleMap({ completedLessons, onStartLesson }) {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-6xl">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-black text-slate-900 sm:text-5xl">
            Math Learning Adventure
          </h1>
          <p className="mt-3 text-lg font-semibold text-slate-600">
            Choose a lesson and learn one small step at a time.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {/*
            .map() explanation:

            modulesConfig is an array.
            modulesConfig.map((module) => (...)) visits each module once.

            Python comparison:
            cards = []
            for module in modulesConfig:
                cards.append(create_card(module))

            React likes .map() because it returns the new list of JSX cards.
          */}
          {modulesConfig.map((module) => (
            <article
              key={module.id}
              className={`rounded-3xl bg-gradient-to-br ${module.themeColor} p-1 shadow-xl shadow-slate-300/60`}
            >
              <div className="flex h-full flex-col rounded-[22px] bg-white/90 p-6">
                <h2 className="text-2xl font-black leading-tight text-slate-900">
                  {module.title}
                </h2>

                <p className="mt-3 text-base font-semibold leading-relaxed text-slate-700">
                  {module.description}
                </p>

                <div className="mt-6 space-y-3">
                  {/*
                    This second .map() loops through only this module's lessons.

                    Python comparison:
                    for lesson in module["lessons"]:
                        show_lesson_card(lesson)
                  */}
                  {module.lessons.map((lesson, lessonIndex) => {
                    const previousLesson = module.lessons[lessonIndex - 1];
                    const previousLessonDone =
                      lessonIndex === 0 || completedLessons[previousLesson.id];
                    const isCompleted = Boolean(completedLessons[lesson.id]);
                    const isLocked = !previousLessonDone;

                    return (
                      <LessonCard
                        key={lesson.id}
                        lesson={lesson}
                        lessonNumber={lessonIndex + 1}
                        isLocked={isLocked}
                        isCompleted={isCompleted}
                        onStart={onStartLesson}
                      />
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
