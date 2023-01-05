import React from "react";
import { Header, Skenleton } from "../components";

function Home() {
  return (
    <div>
      <Header />
      <div>
        <>
          <Skenleton num={3} />
        </>
      </div>
    </div>
  );
}

export default Home;
