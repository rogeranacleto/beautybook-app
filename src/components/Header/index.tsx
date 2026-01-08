import { Link } from "react-router";
export function Header(){
    return (
      <div className="max-w-screen bg-transparent">
        <nav className="flex justify-between p-8 items-center">
          <div className="flex gap-3 items-center">
              <p className="text-sm hover:text-[#f0a] duration-300 ease-in-out">
                plataforma
              </p>
              <p className="text-sm hover:text-[#f0a] duration-300 ease-in-out">
                missão
              </p>
          </div>
          <div>
            <h1 className="font-medium text-lg text-center ml-20">
              BeautyBook
            </h1>
          </div>
          <div className="flex gap-3 items-center">
            <p className="text-sm">lorem</p>
            <Link to={"/login"}>
              <p className="text-sm">entrar</p>
            </Link>
            <Link to={"/signup"}>
              <p className="text-sm bg-[#0A0A0A] border border-solid border-[#646161] pl-3 pr-3 pt-2 pb-2 rounded-3xl cursor-pointer">
                cadastro
              </p>
            </Link>
          </div>
        </nav>
      </div>
    );
}