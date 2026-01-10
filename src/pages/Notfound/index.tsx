import { Link } from "react-router"
export function Notfound(){
    return (
      <div className="bg-black max-w-screen min-h-screen flex flex-col items-center justify-center">
        <div className="bg-black flex flex-col items-center">
          <p className="text-5xl max-w-3xl text-center font-medium mt-3 bg-linear-to-r from-white to-pink-800 bg-clip-text text-transparent">
            404
          </p>
          <p className="text-5xl max-w-3xl text-center font-medium mt-3 bg-linear-to-r from-white to-pink-800 bg-clip-text text-transparent pb-3">
            NotFound
          </p>
          <p className="text-gray-400">Ops, a página não foi encontrada. Volte para o início</p>
          <Link to={"/"}>
            <button className=" mb-30 text-xs bg-[#f0a] text-white px-8 py-4 flex items-center gap-3 rounded-3xl hover:scale-110 duration-200 ease-in-out mt-8 cursor-pointer">
              Voltar
            </button>
          </Link>
        </div>
      </div>
    );
}