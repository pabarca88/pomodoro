function TimerControls({ clases, label, value, increase, decrease }) {
    return (
        <div className={clases}>
            <div className="timer-control">
                <label>{label}</label>
                <div className="control-group">
                    <button className="btn-adjust" onClick={decrease}>
                        <img src="/images/ic-minus.svg" alt="Decrease" />
                    </button>
                    <div className="count">{value}</div>
                    <button className="btn-adjust" onClick={increase}>
                        <img src="/images/ic-plus.svg" alt="Increase" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TimerControls;
