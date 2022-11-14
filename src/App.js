import { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import ParallaxContainer from "./components/parallaxContainer/ParallaxContainer";

function App() {
  // const doScroll = () => {
  //   console.log(window.pageYOffset);
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", doScroll);
  //   return () => window.removeEventListener("scroll", doScroll);
  // }, []);

  return (
    <>
      <ParallaxContainer />
    </>
  );
}

export default App;
