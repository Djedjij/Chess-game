import BoardComponent from "./components/Board/BoardComponent";
import styles from "./App.module.scss";
import { useEffect, useState } from "react";
import { Board } from "./models/Board";

function App() {
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    restart();
  }, []);

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  };
  return (
    <div className={styles.App}>
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
}

export default App;
