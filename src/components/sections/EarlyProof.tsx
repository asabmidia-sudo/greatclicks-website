export function EarlyProof() {
  return (
    <section className="section-y">
      <div className="container-content grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <div>
          <p className="eyebrow">Client perspective</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Built from real practice operations.</h2>
          <p className="mt-6 max-w-xl text-lg">
            We've built and managed patient acquisition, onboarding, follow-up, and operational systems for health and wellness practices.
          </p>
        </div>
        <figure className="overflow-hidden rounded-2xl bg-dark shadow-sm">
          <video src="/Inception_testimonial.mp4" aria-label="Inception Telehealth client testimonial" controls preload="metadata" playsInline className="block aspect-video w-full" />
          <figcaption className="border-t border-white/10 px-5 py-3 text-sm font-medium text-white">Inception Telehealth</figcaption>
        </figure>
      </div>
    </section>
  );
}
