import React from "react";
import { Cell } from "../../models/Cell";
import styles from "../../App.module.scss";
interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}
const CellComponent: React.FC<CellProps> = ({ cell, selected, click }) => {
  return (
    <div
      className={[
        styles.cell,
        styles[cell.color],
        selected ? styles.selected : "",
        cell.figure && cell.available ? styles.underAttack : "",
      ].join(" ")}
      onClick={() => click(cell)}
    >
      {!cell.figure && cell.available && (
        <div className={styles.available}></div>
      )}
      {cell.figure?.logo && <img src={cell.figure.logo} alt="" />}
    </div>
  );
};

export default CellComponent;
