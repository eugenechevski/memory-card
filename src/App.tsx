import CardContainer from "Components/CardContainer";
import ScoreDisplay from "Components/ScoreDisplay";
import ResetButton from "Components/ResetButton";
import { useRef, useReducer } from "react";

/**
 * Initial state for keeping track of scores.
 */
const initialState = { currentScore: 0, bestScore: 0, allMemorizedScore: 0 };

/**
 * A reducer function for updating the state of scores.
 */
function reducer(state: ScoreState, action: ScoreAction): ScoreState {
  if (action === "increment") {
    state.currentScore += 1;

    if (state.currentScore > state.bestScore) {
      state.bestScore = state.currentScore;
    }

    if (state.currentScore === 10) {
      state.currentScore = 0;
      state.bestScore = 0;
      state.allMemorizedScore += 1;
    }
  } else {
    state.currentScore = 0;
  }

  return {
    ...state,
  };
}

/**
 * A root component of the application.
 */
function App() {
  const [scores, dispatch] = useReducer(reducer, initialState);
  const pickedNumbers = useRef(new Set());

  /**
   * Updates the state of the game when a user clicks on a card.
   * The function updates the scores and causes rerendering of cards,
   *
   * @param order of the clicked card
   */
  const cardClicked = (order: number) => {
    if (pickedNumbers.current.has(order)) {
      pickedNumbers.current.clear();
      dispatch("reset");
    } else {
      pickedNumbers.current.add(order);
      dispatch("increment");
    }
  };

  return (
    <div className="h-full w-full flex flex-col p-3">
      <div className="basis-1/6 flex justify-end items-center">
        <ScoreDisplay
          currentScore={scores.currentScore}
          bestScore={scores.bestScore}
          allMemorizedScore={scores.allMemorizedScore}
        ></ScoreDisplay>
      </div>
      <div className="basis-2/3">
        <CardContainer cardClicked={cardClicked}></CardContainer>
      </div>
      <div className="basis-1/6 flex items-center justify-center">
        <ResetButton reset={() => dispatch("reset")}></ResetButton>
      </div>
    </div>
  );
}

export default App;
