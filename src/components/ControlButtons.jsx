function ControlButtons({ onStartPause, onReset, isRunning }) {
    return (
        <div className="control-buttons">
            <button className="btn" onClick={onStartPause}>
                <img src="/images/ic-pause.svg" alt="Pause" />
                {isRunning ? "PAUSE" : "START"}
            </button>
            <button className="btn" onClick={onReset}>
                <img src="/images/ic-repeat.svg" alt="Reset" />
                RESET
            </button>
        </div>
    );
}

export default ControlButtons;
