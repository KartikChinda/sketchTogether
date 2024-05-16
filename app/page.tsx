"use client";
import { useState } from "react";
import MenuCard from "./components/Menu";
import Model from "./components/Model";
import Toolbox from "./components/Toolbar";

export default function Home() {

  const [viewModel, setviewModel] = useState(true)


  const handleModel = () => {
    setviewModel(false);
  }


  return (
    <>
      <div>
        {viewModel && <Model handleClick={handleModel} />}
        <MenuCard />
        <Toolbox />
      </div>
    </>
  );
}
