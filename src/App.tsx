import { Routes, Route } from 'react-router-dom';
import { Nav } from './components/layout/Nav';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { CaseStudies } from './pages/CaseStudies';
import { InceptionCaseStudy } from './pages/InceptionCaseStudy';
import { Quiz } from './pages/Quiz';
import { QuizResults } from './pages/QuizResults';
import { Assessment } from './pages/Assessment';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ScrollToTop />
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/inception-telehealth" element={<InceptionCaseStudy />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz/results" element={<QuizResults />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
