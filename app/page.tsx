"use client";
import { useState } from "react";
import MenuCard from "./components/Menu";
import Model from "./components/Model";
import Toolbox from "./components/Toolbar";
import Board from "./components/Board";

export default function Home() {


  const [viewModel, setviewModel] = useState<boolean>(true)
  const [startTimer, setstartTimer] = useState<boolean>(false)


  const handleModel = (): void => {
    setviewModel(false);
    setstartTimer(true);
  }


  return (
    <>
      <div className=" overflow-x-hidden">
        {viewModel && <Model handleClick={handleModel} />}
        <MenuCard />
        {startTimer && <Toolbox />}
        <Board />
      </div>
    </>
  );
}
