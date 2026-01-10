import { Link } from "react-router";

export function Header() {
  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="max-w-screen bg-transparent w-full">
      <nav className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between md:p-8">
        <div className="flex gap-4 justify-center md:justify-start">
          <button
            className="text-sm hover:text-[#f0a] duration-300 ease-in-out cursor-pointer"
            onClick={() => scrollToSection("platform")}
          >
            Plataforma
          </button>
          <button
            className="text-sm hover:text-[#f0a] duration-300 ease-in-out cursor-pointer"
            onClick={() => scrollToSection("mission")}
          >
            Missão
          </button>
        </div>
        <div className="text-center">
          <h1 className="font-medium text-lg">BeautyBook</h1>
        </div>
        <div className="flex gap-4 justify-center md:justify-end items-center">
          <Link to="/login">
            <p className="text-sm hover:text-[#f0a] duration-300 ease-in-out cursor-pointer">
              Entrar
            </p>
          </Link>

          <Link to="/signup">
            <p className="text-sm bg-[#0A0A0A] border border-solid border-[#646161] px-4 py-2 rounded-3xl cursor-pointer hover:bg-[#f0a] duration-300 ease-in-out hover:border-black">
              Cadastro
            </p>
          </Link>
        </div>
      </nav>
    </div>
  );
}
