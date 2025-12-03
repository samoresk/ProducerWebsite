import Header from './components/Header';
import Hero from './components/Hero';
import BeatPlayer from './components/BeatPlayer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-dark min-h-screen text-white font-sans selection:bg-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <BeatPlayer />
        <Contact />
      </main>
      <footer className="py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Producer Name. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
