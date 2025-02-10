import { useState, useEffect, useRef } from "react";
import Title from "./components/Title";
import TimerControls from "./components/TimerControls";
import ClockDisplay from "./components/ClockDisplay";
import ControlButtons from "./components/ControlButtons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timer, setTimer] = useState(sessionLength * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isSession, setIsSession] = useState(true);

  const intervalRef = useRef(null);

  function increaseBreak() {
    setBreakLength((prev) => Math.min(prev + 1, 60));
  }

  function decreaseBreak() {
    setBreakLength((prev) => Math.max(prev - 1, 1));
  }

  function increaseSession() {
    setSessionLength((prev) => {
      const newLength = Math.min(prev + 1, 60);
      if (!isRunning) setTimer(newLength * 60);
      return newLength;
    });
  }

  function decreaseSession() {
    setSessionLength((prev) => {
      const newLength = Math.max(prev - 1, 1);
      if (!isRunning) setTimer(newLength * 60);
      return newLength;
    });
  }

  function toggleTimer() {
    if (isRunning) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    } else {
      intervalRef.current = setInterval(() => {
        setTimer((prevTime) => {
          if (prevTime <= 0) {
            setIsSession((prevSession) => !prevSession);
            return isSession ? breakLength * 60 : sessionLength * 60; // Cambia el tiempo de descanso/sesión
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    setIsRunning((prev) => !prev);
  }

  function resetTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
    setIsSession(true);
    setTimer(25 * 60);
    setBreakLength(5);
    setSessionLength(25);
  }

  useEffect(() => {
    document.title = `Pomodoro Timer: ${Math.floor(timer / 60)}:${(timer % 60).toString().padStart(2, "0")}`;
  }, [timer]);

  return (
    <div className="container">
      <Title value="Pomodoro Timer" />
      <div className="pomodoro-wrapper">
        <div className="row">
          <TimerControls clases="col-6 col-md-3 order-1 order-lg-1" label="Break Length" value={breakLength} increase={increaseBreak} decrease={decreaseBreak} />
          <ClockDisplay time={timer} />
          <TimerControls clases="col-6 col-md-3 order-2 order-md-3" label="Session Length" value={sessionLength} increase={increaseSession} decrease={decreaseSession} />
        </div>
        <div className="row">
          <div className="col-12">
            <ControlButtons onStartPause={toggleTimer} onReset={resetTimer} isRunning={isRunning} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
