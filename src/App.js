import './App.css';
import { useEffect, useRef } from 'react';
import Home from './home';
import About from './about';

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    const moveGradient = (event) => {
      const winWidth = window.innerWidth;
      const winHeight = window.innerHeight;

      const mouseX = Math.round((event.pageX / winWidth) * 100);
      const mouseY = Math.round((event.pageY / winHeight) * 100);

      if (appRef.current) {
        appRef.current.style.setProperty('--mouse-x', mouseX + "%");
        appRef.current.style.setProperty('--mouse-y', mouseY + "%");
      }
    };

    document.addEventListener("mousemove", moveGradient);

    return () =>
      document.removeEventListener("mousemove", moveGradient);
  }, []);

  return (
    <div className="app" id="app" ref={appRef}>
      <Home />
      <About />
    </div>
  );
}

export default App;
