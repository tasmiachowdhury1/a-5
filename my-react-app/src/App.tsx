import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Apps from "./components/apps/Apps"
import { Suspense } from "react";
import type { AppType } from "./types/appType";


const appsFetch = async (): Promise<AppType[]> => {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data
}
function App() {
  const appsPromise = appsFetch()
  console.log(appsPromise);
  return (
    <>

      <Navbar />
      <Banner />
      <Suspense fallback={<p>Loading...</p>}>
        <Apps appsPromise={appsPromise} />
      </Suspense>

    </>
  );
}

export default App;