import type { FormEvent } from 'react';
import { Button } from '../ui/Button';
import type { ContactInfo } from '../../lib/buildGhlPayload';

type QuizEmailCaptureProps = {
  contact: ContactInfo;
  onChange: (next: ContactInfo) => void;
  onSubmit: () => void;
  onSkip: () => void;
  isSubmitting?: boolean;
};

export function QuizEmailCapture({
  contact,
  onChange,
  onSubmit,
  onSkip,
  isSubmitting = false,
}: QuizEmailCaptureProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div>
      <h2 className="font-display text-3xl text-dark md:text-5xl">
        One last thing.
      </h2>
      <p className="mt-4 text-lg text-body md:text-xl">
        Want your full results emailed to you?
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-4">
        <Field
          id="quiz-first-name"
          label="First name"
          value={contact.firstName}
          onChange={(v) => onChange({ ...contact, firstName: v })}
          autoComplete="given-name"
        />
        <Field
          id="quiz-email"
          label="Email"
          type="email"
          value={contact.email}
          onChange={(v) => onChange({ ...contact, email: v })}
          autoComplete="email"
        />
        <Field
          id="quiz-clinic"
          label="Clinic name"
          value={contact.companyName}
          onChange={(v) => onChange({ ...contact, companyName: v })}
          autoComplete="organization"
        />

        <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center">
          <Button type="submit" variant="primary" disabled={isSubmitting}>
            {isSubmitting ? 'Sending' : 'Send my results'}
          </Button>
          <button
            type="button"
            onClick={onSkip}
            disabled={isSubmitting}
            className="group inline-flex min-h-[44px] items-center justify-center text-sm font-medium text-body transition-colors hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
          >
            Skip to results
            <span className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
          </button>
        </div>
      </form>
    </div>
  );
}

type FieldProps = {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  autoComplete?: string;
};

function Field({ id, label, type = 'text', value, onChange, autoComplete }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-dark">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        className="mt-2 block min-h-[44px] w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-dark transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
