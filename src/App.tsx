import React, { FC } from "react";
import "./App.css";
import RatesTable from "./components/RatesTable";
import { Analytics } from "@vercel/analytics/react";

type Props = {
  state: any;
  fetchRates?: any
}

const App: FC<Props> = ({ state, fetchRates }) => {
  return (
    <>
      <div>
        <header className="appHeader">Моніторинг курсів</header>
        <main className="mainContent">
          <RatesTable exchangers={state.exchangers} fetchRates={fetchRates} isLoading={state.isLoading} />
          {/* <iframe src="https://obmennovosti.info/city.php?city=39" width="100%" height="500"></iframe> */}
        </main>
      </div>
      <Analytics />
    </>
  );
};

export default App;
