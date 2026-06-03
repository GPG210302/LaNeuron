import { useRef } from "react";
import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhatIsSteam } from "@/components/sections/WhatIsSteam";
import { WhySteam } from "@/components/sections/WhySteam";
import { Approach } from "@/components/sections/Approach";
import { Programmes } from "@/components/sections/Programmes";
import { Events } from "@/components/sections/Events";
import { Register } from "@/components/sections/Register";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";

function App() {
  const formRef = useRef(null);
  const scrollToForm = () =>
    document.querySelector("#register")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="App min-h-screen bg-[#FDFBF7] overflow-x-hidden">
      <Navbar onRegister={scrollToForm} />
      <main>
        <Hero onRegister={scrollToForm} />
        <About />
        <WhatIsSteam />
        <WhySteam />
        <Approach />
        <Programmes onRegister={scrollToForm} />
        <Events onRegister={scrollToForm} />
        <Register formRef={formRef} />
        <Faq />
      </main>
      <Footer onRegister={scrollToForm} />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
