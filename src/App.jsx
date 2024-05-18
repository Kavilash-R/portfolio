import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Tech from "./components/Tech";

function App() {
  return (
    <div className=" dark:bg-white dark:text-black overflow-x-hidden text-neutral-300 antialiased">
      <div className=" fixed top-0 -z-10 h-full w-full"></div>
      <div className="fixed top-0 z-[-2] h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] "></div>

      <div className=" container mx-auto px-12">
        <Navbar />
        <Home />
        <About />
        <Tech />
      </div>
    </div>
  );
}

export default App;

{
  /* <Routes>
  <Route path="/" element={<Home />}></Route>
</Routes>; */
}

// light mode
{
  /* <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div> */
}

// dark mode
<div class="relative h-full w-full bg-slate-950">
  <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
</div>;