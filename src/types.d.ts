type ScoreState = {
    currentScore: number,
    bestScore: number,
    allMemorizedScore: number,
  }
  
type ScoreAction = 'increment' | 'reset';