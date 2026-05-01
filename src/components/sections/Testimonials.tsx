import { ScrollReveal } from '../ui/ScrollReveal';

type Video = { id: string; name: string };

const videos: Video[] = [
  { id: '8iKJvXJ7EUE', name: 'Kristi' },
  { id: 'hyVvRVefIHY', name: 'Dr. Erika' },
  { id: 'bNs20i-EQKI', name: 'Sean' },
  { id: 'lI8J-yhjzpc', name: 'Nate' },
  { id: 'sloJaDNDsZ4', name: 'Rashid' },
  { id: 'SOjWkJuQCr4', name: 'Elijah' },
];

export function Testimonials() {
  return (
    <section className="section-y bg-primary-bg">
      <div className="container-content">
        <p className="eyebrow">Testimonials</p>
        <h2 className="mt-4 max-w-3xl text-4xl md:mt-6 md:text-6xl">
          From our clients.
        </h2>
        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {videos.map((video, i) => (
            <ScrollReveal key={video.id} delay={i * 60}>
              <figure className="overflow-hidden rounded-2xl bg-dark shadow-sm">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={`${video.name} testimonial`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="h-full w-full border-0"
                  />
                </div>
                <figcaption className="border-t border-white/10 px-5 py-3 text-sm font-medium text-white">
                  {video.name}
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
