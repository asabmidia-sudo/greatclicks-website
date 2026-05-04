import type { QuizQuestion as QuizQuestionType } from '../../data/quizQuestions';
import { Button } from '../ui/Button';

type QuizQuestionProps = {
  question: QuizQuestionType;
  selectedValue: number | null;
  onSelect: (value: number) => void;
  onNext: () => void;
  onBack?: () => void;
};

export function QuizQuestion({
  question,
  selectedValue,
  onSelect,
  onNext,
  onBack,
}: QuizQuestionProps) {
  return (
    <div>
      <h2 className="font-display text-3xl text-dark md:text-5xl">
        {question.question}
      </h2>

      <fieldset className="mt-8">
        <legend className="sr-only">{question.question}</legend>
        <div className="space-y-3">
          {question.options.map((opt) => {
            const isSelected = opt.value === selectedValue;
            return (
              <label
                key={opt.value}
                className={`flex min-h-[44px] cursor-pointer items-start gap-4 rounded-2xl border p-5 transition-colors focus-within:ring-2 focus-within:ring-primary/30 ${
                  isSelected
                    ? 'border-primary bg-primary-bg'
                    : 'border-line bg-white hover:border-primary'
                }`}
              >
                <input
                  type="radio"
                  name={question.id}
                  value={opt.value}
                  checked={isSelected}
                  onChange={() => onSelect(opt.value)}
                  className="sr-only"
                />
                <span
                  className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 ${
                    isSelected ? 'border-primary' : 'border-line'
                  }`}
                  aria-hidden="true"
                >
                  {isSelected && (
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                  )}
                </span>
                <span className="font-display text-base text-dark md:text-lg">
                  {opt.label}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-10 flex items-center justify-between gap-4">
        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            className="group inline-flex min-h-[44px] items-center text-sm font-medium text-body transition-colors hover:text-primary"
          >
            <span className="mr-2 transition-transform group-hover:-translate-x-1" aria-hidden="true">←</span>
            Back
          </button>
        ) : (
          <span aria-hidden="true" />
        )}
        <Button onClick={onNext} disabled={selectedValue === null}>
          Next
        </Button>
      </div>
    </div>
  );
}
