import { Routes, Route, Navigate } from 'react-router-dom';
import { Nav } from './components/layout/Nav';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { RouteChangeTracker } from './components/layout/RouteChangeTracker';
import { PageMetadata } from './components/layout/PageMetadata';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { CaseStudies } from './pages/CaseStudies';
import { InceptionCaseStudy } from './pages/InceptionCaseStudy';
import { Quiz } from './pages/Quiz';
import { QuizResults } from './pages/QuizResults';
import { SystemsReview } from './pages/SystemsReview';
import { KristiCaseStudy } from './pages/KristiCaseStudy';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ScrollToTop />
      <RouteChangeTracker />
      <PageMetadata />
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/inception-telehealth" element={<InceptionCaseStudy />} />
          <Route path="/case-studies/kristi-leigh" element={<KristiCaseStudy />} />
          <Route path="/case-study/kristi-leigh" element={<Navigate to="/case-studies/kristi-leigh" replace />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz/results" element={<QuizResults />} />
          <Route path="/systems-review" element={<SystemsReview />} />
          <Route path="/assessment" element={<Navigate to="/systems-review" replace />} />
          <Route path="/contact" element={<Navigate to="/systems-review" replace />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
