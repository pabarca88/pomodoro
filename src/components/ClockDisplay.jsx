function ClockDisplay({ time }) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return (
        <div className="col-md-6 order-3 order-md-2">
            <div className="clock">
                <figure>
                    <img src="/images/tomato.svg" alt="Pomodoro Clock" />
                </figure>
                <div className="timer-display">
                    {minutes}:{seconds.toString().padStart(2, "0")}
                </div>
            </div>
        </div>
    );
}

export default ClockDisplay;
