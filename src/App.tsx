import Header from "./components/Header";
import Band from "./components/Band";
import InformationSection from "./components/Information";
import ServicesSection from "./components/Services";
import WorksSection from "./components/Works";
import ScheduleSection from "./components/Schedule";
import WhatsAppButton from "./components/WhatsappButton";

function App() {
  return (
    <div className="bg-[#140a11] min-h-screen">
      <section className="min-h-screen md:mb-20 relative">
        <div>
          <div className="md:block absolute inset-0 z-0 md:bg-contain bg-no-repeat bg-center md:bg-left bg-[url('/src/assets/rossi2.png')]" />
          <div className="hidden md:block absolute inset-0 z-0 bg-contain bg-no-repeat bg-right bg-[url('/src/assets/rossi2.png')]" />
        </div>
        <div className="content-container relative z-10">
          <Header />
          <Band />
          <InformationSection />
        </div>
      </section>
      <section className="min-h-screen relative">
        <div>
          <div className="md:block absolute inset-0 z-0 md:bg-contain bg-no-repeat bg-center md:bg-left bg-[url('/src/assets/rossi2.png')]" />
          <div className="hidden md:block absolute inset-0 z-0 bg-contain bg-no-repeat bg-right bg-[url('/src/assets/rossi2.png')]" />
        </div>
        <div className="content-container relative z-10">
          <Band />
          <Band styles={"origin-bottom -rotate-2 mt-[20px] md:mt-[40px]"} />
          <ServicesSection />
        </div>
      </section>
      <section className="min-h-screen relative">
        <div>
          <div className="absolute inset-0 z-0 bg-contain bg-no-repeat bg-center bg-[url('/src/assets/rossi1.png')]" />
        </div>
        <div className="content-container relative z-10">
          <WorksSection />
        </div>
      </section>
      <section className="min-h-screen relative">

          <div className="absolute inset-0 z-0 bg-contain bg-no-repeat bg-top bg-[url('/src/assets/rossi.png')]" />
          {/* <div className="absolute inset-0 z-0 bg-contain bg-no-repeat bg-bottom bg-[url('/src/assets/rossi.png')]" /> */}
        <div className="content-container relative z-10">
          <Band />
          <Band styles={"origin-bottom rotate-2 mt-[20px] md:mt-[40px]"} />
          <ScheduleSection />
        </div>
      </section>
      <section className="relative w-full flex justify-between items-center my-20">
        <img
          src="../public/assets/leftArrow.png"
          className="w-[15vw] sm:w-30 md:w-40"
        />
        <WhatsAppButton
          phoneNumber={8293488341}
          message="Hola! Quiero agendar un cita."
        />
        <img
          src="../public/assets/rightArrow.png"
          className="w-[15vw] sm:w-30 md:w-40"
        />
      </section>
      <footer className="text-white text-center pb-5">
        2024 Rossi Brows all rights reserved
      </footer>
    </div>
  );
}

export default App;
