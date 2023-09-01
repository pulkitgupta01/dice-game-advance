import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { useState } from "react";
import { Button } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
    const [score, setScore] = useState(0);
    const[selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error,setError] = useState("");
    const [showRules, setShowRules] = useState(false);

    const generatRandomNumber= (min, max) => {
        console.log(Math.floor(Math.random() * (max-min) + min));
        return Math.floor(Math.random() * (max-min) + min);
      };
      
      const roleDice = () => {
        if(!selectedNumber) {
            setError("You have not selected any number");
            return;}
            setError("");
        const randomNumber = generatRandomNumber(1,7);
        setCurrentDice((prev) => randomNumber);
      


if(selectedNumber === randomNumber){
    setScore((prev) => prev + randomNumber);
}
else{
    setScore((prev) => prev - 2);
}

setSelectedNumber(undefined);
      };

      const resetScore = () => {
        setScore(0);
      };



    return (
    <MainConatiner>
    <div className="top_section">
   <TotalScore score={score}/>
   <NumberSelector 
   error={error}
   setError={setError}
    selectedNumber={selectedNumber}
    setSelectedNumber={setSelectedNumber}
   />
   </div>
   <RoleDice currentDice={currentDice} roleDice={roleDice}/>
   <div className="btns">
    <Button
    onClick={resetScore}>Reset Score</Button>
    <Button
    onClick={() => setShowRules((prev) => !prev)}
    >{showRules ? "Hide" : "Show" } Rules</Button>
   </div>

 {showRules &&  <Rules />}
    </MainConatiner>
    );
}

export default GamePlay;

const MainConatiner = styled.main`
padding-top: 70px;
.top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;}

    .btns{
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

`;