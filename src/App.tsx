import { useEffect, useState } from "react";
import Home from "@/scenes/home";
import Benefits from "@/scenes/benefits";
import Navbar from "@/scenes/navbar";
import Ourclasses from "@/scenes/ourClasses";
import { SelectedPage } from "@/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };
  });

  return (
    <div className="app bg-grey-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
