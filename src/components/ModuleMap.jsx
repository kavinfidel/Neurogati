import { modulesConfig } from "../config/lessonsConfig";
import LessonCard from "./LessonCard";

/*
  ModuleMap is the dashboard screen.

  It reads every module from lessonsConfig.js and turns that data into
  large child-friendly cards.
*/
export default function ModuleMap({ completedLessons, onStartLesson }) {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-sky-200 via-lime-100 to-rose-200 px-4 py-8 sm:px-6 lg:px-8">
      <section className="pointer-events-none fixed inset-0 opacity-30">
        <span className="absolute left-[7%] top-[10%] text-6xl">🍎</span>
        <span className="absolute right-[10%] top-[14%] text-7xl">🍌</span>
        <span className="absolute bottom-[18%] left-[13%] text-7xl">🧺</span>
        <span className="absolute bottom-[10%] right-[15%] text-6xl">⭐</span>
      </section>

      <section className="relative mx-auto max-w-6xl">
        <header className="mb-8 text-center">
          <p className="mx-auto mb-3 w-fit rounded-full bg-white/80 px-5 py-2 text-sm font-black uppercase tracking-wide text-fuchsia-700 shadow-sm">
            Pick a game
          </p>

          <h1 className="text-4xl font-black text-slate-900 drop-shadow-sm sm:text-6xl">
            Fruit Math Fun
          </h1>

          <p className="mt-3 text-xl font-black text-slate-700">
            Count. Add. Take away.
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
              className={`rounded-[2rem] bg-gradient-to-br ${module.themeColor} p-2 shadow-2xl shadow-slate-400/30`}
            >
              <div className="flex h-full flex-col rounded-[1.55rem] bg-white/85 p-5 ring-4 ring-white/60 backdrop-blur">
                <div className="mb-4 flex items-center gap-4">
                  <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.5rem] bg-white text-5xl shadow-lg">
                    {module.icon}
                  </span>

                  <div>
                    <h2 className="text-3xl font-black leading-tight text-slate-900">
                      {module.title}
                    </h2>

                    <p className="mt-1 text-base font-black text-slate-700">
                      {module.description}
                    </p>
                  </div>
                </div>

                <div className="mt-auto space-y-3">
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
