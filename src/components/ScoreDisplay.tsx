const ScoreDisplay = ({currentScore, bestScore, allMemorizedScore}) => {
    return (
        <div className="flex bg-secondary rounded-xl p-3 text-primary-content gap-3 text-center">
            <div className="flex flex-col">
                <div>Current Score</div>
                <div>{currentScore}</div>
            </div>
            <div className="flex flex-col">
                <div>Best Score</div>
                <div>{bestScore}</div>
            </div>
            <div className="flex flex-col">
                <div>All Memorized Score</div>
                <div>{allMemorizedScore}</div>
            </div>
        </div>
    )
};

export default ScoreDisplay;