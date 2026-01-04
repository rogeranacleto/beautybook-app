import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-black min-h-80  max-w-screen relative flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full flex justify-between items-start">
        <div className="h-px w-1/2 bg-linear-to-r from-[#f0a] to-transparent rounded-full"></div>
        <div className="h-px w-1/2 bg-linear-to-l from-[#f0a] to-transparent rounded-full"></div>
      </div>
      <div className="flex flex-col text-center justify-center items-center">
        <h2 className="text-[#ffffff] font-medium text-3xl max-w-lg mt-20">
          Organize seus agendamentos em um só lugar!
        </h2>
        <p className="text-gray-400 mt-4">
          A plataforma é totalmente gratuíta, crie sua conta e comece a utilizar
          os recursos.
        </p>
        <Link to={"/signup"}>
          <button className=" mb-30 text-xs bg-[#f0a] text-white px-8 py-4 flex items-center gap-3 rounded-3xl hover:scale-110 duration-200 ease-in-out mt-8 cursor-pointer">
            ACESSAR <FaArrowRight className="text-xs text-white" />
          </button>
        </Link>
      </div>
      <div className="absolute bottom-1 flex items-center flex-col">
        <p className="text-white font-bold text-center">
          Desenvolvido por Roger Anacleto • © 2025 Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-3 mt-2">
          <a
            href="https://github.com/rogeranacleto"
            className="hover:scale-110 duration-300 ease-in-out"
            target="_blank"
          >
            <FiGithub className="text-white text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/rogeranacleto/"
            className="hover:scale-110 duration-300 ease-in-out"
            target="_blank"
          >
            <CiLinkedin className="text-white text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}
