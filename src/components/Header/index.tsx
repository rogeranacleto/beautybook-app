export function Header(){
    return(
        <div className="max-w-screen bg-transparent">
            <nav className="flex justify-between p-8 items-center">
                <div className="flex gap-3 items-center">
                    <p className="text-sm">missão</p>
                    <p className="text-sm">lorem</p>
                </div>
                <div>
                    <h1 className="font-medium text-lg text-center ml-20">BeautyBook</h1>
                </div>
                <div className="flex gap-3 items-center">
                    <p className="text-sm">lorem</p>
                    <p className="text-sm">entrar</p>
                    <p className="text-sm bg-[#0A0A0A] border border-solid border-[#646161] pl-3 pr-3 pt-2 pb-2 rounded-3xl cursor-pointer">cadastro</p>
                </div>
            </nav>
        </div>
    )
}