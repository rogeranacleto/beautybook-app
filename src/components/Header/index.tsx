import { Link } from "react-router";
export function Header(){
function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: "smooth" });
}    
    return (
      <div className="max-w-screen bg-transparent">
        <nav className="flex justify-between p-8 items-center">
          <div className="flex gap-3 items-center">
            <button className="text-sm hover:text-[#f0a] duration-300 ease-in-out cursor-pointer" onClick={() => scrollToSection("platform")}>
              Plataforma
            </button>
            <button className="text-sm hover:text-[#f0a] duration-300 ease-in-out cursor-pointer" onClick={() => scrollToSection("mission")}>
              Missão
            </button>
          </div>
          <div>
            <h1 className="font-medium text-lg text-center">
              BeautyBook
            </h1>
          </div>
          <div className="flex gap-3 items-center">
            <Link to={"/login"}>
              <p className="text-sm hover:text-[#f0a] duration-300 ease-in-out cursor-pointer">
                Entrar
              </p>
            </Link>
            <Link to={"/signup"}>
              <p className="text-sm bg-[#0A0A0A] border border-solid border-[#646161] pl-3 pr-3 pt-2 pb-2 rounded-3xl cursor-pointer hover:bg-[#f0a] duration-300 ease-in-out hover:border-black">
                Cadastro
              </p>
            </Link>
          </div>
        </nav>
      </div>
    );
}