import { Header } from "../Header";
import bgHero from "../../assets/background-hero-1.png";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";

export function Hero() {
  return (
    <div
      className="relative min-h-screen bg-cover max-w-screen w-full bg-black"
      style={{
        backgroundImage: `url(${bgHero})`,
        backgroundPosition: "center 5%",
        backgroundSize: "2000px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 text-white">
        <header>
          <Header />
        </header>
        <div className="flex flex-col items-center mt-24 md:mt-50 px-4">
          <p
            className="text-xs bg-[#0A0A0A] px-4 py-1 rounded-3xl border border-solid border-[#646161] flex items-center gap-2 text-center"
            data-aos="fade-up"
            data-aos-duration="2900"
          >
            <span className="h-2 w-2 bg-white rounded-full"></span>
            SUA AGENDA, DO SEU JEITO
          </p>
          <p
            className="text-3xl sm:text-4xl md:text-6xl max-w-3xl text-center font-medium mt-4 bg-linear-to-r from-white to-pink-800 bg-clip-text text-transparent pb-6"
            data-aos="fade-up"
            data-aos-duration="2700"
          >
            Beautybook agendamentos simples
          </p>
          <p
            className="text-center max-w-3xl text-[#a19e9e] text-sm sm:text-base leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            Organize seus clientes, gerencie agendas e registre
            <br className="hidden sm:block" />
            procedimentos em um só lugar, com praticidade e controle total
            <br className="hidden sm:block" />
            da sua empresa de estética, economizando tempo, evitando erros e
            trabalhando com mais organização e segurança.
          </p>
          <div data-aos="fade-up" data-aos-duration="2300">
            <Link
              to={"/signup"}
              className="text-xs bg-white text-black px-8 py-4 flex items-center gap-3 rounded-3xl hover:scale-110 duration-200 ease-in-out mt-8 cursor-pointer"
            >
              <p className="flex items-center justify-center gap-3">
                ACESSAR <FaArrowRight className="text-xs" />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
