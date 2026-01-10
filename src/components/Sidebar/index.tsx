import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../services/FirebaseConnection";
import { NavLink } from "react-router";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { GiCottonFlower } from "react-icons/gi";
import { MdOutlinePerson } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { IoDocumentText } from "react-icons/io5";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
}

export function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(true);

  async function logoutUser() {
    await signOut(auth);
    logout();
    navigate("/login");
  }

  function sidebarCollapsed() {
    setIsCollapsed(true);
  }

  return (
    <div>
      <main
        className={`
                fixed top-0 left-0
                ${!isCollapsed ? "w-64" : "w-20"}
                h-screen bg-black flex flex-col
                transition-all ease-in-out duration-300
                z-50
            `}
        onMouseEnter={() => {
          if (isCollapsed) setIsHovered(true);
        }}
        onMouseLeave={() => {
          if (isCollapsed) setIsHovered(false);
        }}
      >
        <nav className="text-black pr-5 pl-5 flex flex-col h-screen justify-between relative">
          <div className="flex items-center ml-2 mt-8">
            {isHovered ? (
              <button className="h-8" onClick={() => setIsCollapsed(false)}>
                <div className="hover:text-[#3a0eb6] hover:bg-[#6f5af511] rounded-lg duration-500 ease-in-out cursor-pointer">
                  <FaRegArrowAltCircleRight className="absolute left-8.5 text-lg top-9 text-[#ff00aa71]" />
                </div>
              </button>
            ) : (
              <GiCottonFlower className="h-8 w-8 text-[#f0a]" />
            )}

            {!isCollapsed && (
              <div className="flex items-center justify-center">
                <GiCottonFlower className="h-6.5 w-6.5 text-[#f0a]" />
                <h1 className="text-lg font-medium ml-2.5 bg-linear-to-r from-white to-pink-700 bg-clip-text text-transparent">
                  BeautyBook
                </h1>
              </div>
            )}
            <button
              className="cursor-pointer"
              onClick={() => sidebarCollapsed()}
            >
              <div className="hover:text-[#ffffff8f] hover:bg-[#6f5af511] rounded-lg duration-500 ease-in-out cursor-pointer">
                {!isCollapsed && (
                  <FaRegArrowAltCircleLeft className="absolute right-5 text-lg top-9 text-[#ff00aa71]" />
                )}
              </div>
            </button>
          </div>
          <div className="flex flex-col gap-5">
            <NavLink
              to="admin/dashboard"
              className={({ isActive }) =>
                `relative  rounded-lg duration-500 ease-in-out 
                                    ${
                                      isActive
                                        ? "bg-[#f0a] text-white"
                                        : "hover:text-white hover:bg-[#ff00aa50]"
                                    }`
              }
            >
              {isCollapsed ? (
                <div className="hover:text-black rounded-lg duration-500 ease-in-out mt-2 pt-3 pb-3 pl-3">
                  <LuLayoutDashboard className="absolute top-1.5 left-2.5 text-lg text-white" />
                </div>
              ) : (
                <div className="hover:text-white rounded-lg duration-500 ease-in-out pt-2.5 pb-2.5 pl-3">
                  <LuLayoutDashboard className="absolute top-3.5 left-4 text-lg text-white" />
                  <p
                    className={`text-white pl-10 pr-3 ${
                      isCollapsed ? "hidden" : "block"
                    }`}
                  >
                    Dashboard
                  </p>
                </div>
              )}
            </NavLink>
            <NavLink
              to="admin/clients"
              className={({ isActive }) =>
                `relative  rounded-lg duration-500 ease-in-out 
                                    ${
                                      isActive
                                        ? "bg-[#f0a] text-white"
                                        : "hover:text-white hover:bg-[#ff00aa50]"
                                    }`
              }
            >
              {isCollapsed ? (
                <div className="hover:text-black  rounded-lg duration-500 ease-in-out mt-2 pt-3 pb-3 pl-3">
                  <MdOutlinePerson className="absolute top-2 left-2.5 text-lg text-white" />
                </div>
              ) : (
                <div className="hover:text-black rounded-lg duration-500 ease-in-out pt-2.5 pb-2.5 pl-3">
                  <MdOutlinePerson className="absolute top-3.5 left-3 text-lg text-white" />
                  <p
                    className={`text-[white] pl-10 pr-3 ${
                      isCollapsed ? "hidden" : "block"
                    }`}
                  >
                    Clientes
                  </p>
                </div>
              )}
            </NavLink>
            <NavLink
              to="admin/appointments"
              className={({ isActive }) =>
                `relative  rounded-lg duration-500 ease-in-out 
                                ${
                                  isActive
                                    ? "bg-[#f0a] text-white"
                                    : "hover:text-white hover:bg-[#ff00aa50]"
                                }`
              }
            >
              {isCollapsed ? (
                <div className="hover:text-black rounded-lg duration-500 ease-in-out mt-2 pt-3 pb-3 pl-3">
                  <HiOutlineClipboardCheck className="absolute top-1.5 left-3 text-lg text-white" />
                </div>
              ) : (
                <div className="hover:text-whtie rounded-lg duration-500 ease-in-out  pt-2.5 pb-2.5 pl-3">
                  <HiOutlineClipboardCheck className="absolute top-3 left-3 text-lg text-white" />
                  <p
                    className={`text-white pl-10 pr-3 ${
                      isCollapsed ? "hidden" : "block"
                    }`}
                  >
                    Atendimentos
                  </p>
                </div>
              )}
            </NavLink>
            <NavLink
              to="admin/history"
              className={({ isActive }) =>
                `relative  rounded-lg duration-500 ease-in-out 
                                ${
                                  isActive
                                    ? "bg-[#f0a] text-white"
                                    : "hover:text-white hover:bg-[#ff00aa50]"
                                }`
              }
            >
              {isCollapsed ? (
                <div className="hover:text-black rounded-lg duration-500 ease-in-out mt-2 pt-3 pb-3 pl-3">
                  <IoDocumentText className="absolute top-1.5 left-3 text-lg text-white" />
                </div>
              ) : (
                <div className="hover:text-black rounded-lg duration-500 ease-in-out  pt-2.5 pb-2.5 pl-3">
                  <IoDocumentText className="absolute top-3 left-3 text-lg text-white" />
                  <p
                    className={`text-white pl-10 pr-3 ${
                      isCollapsed ? "hidden" : "block"
                    }`}
                  >
                    Histórico
                  </p>
                </div>
              )}
            </NavLink>
          </div>
          <button className="text-black" onClick={() => logoutUser()}>
            {isCollapsed ? (
              <div className="flex gap-5 mb-8 rounded-lg duration-500 ease-in-out cursor-pointer pt-2.5 pb-2.5 pl-2 items-center">
                <p className="text-white text-lg">
                  <PiSignOutBold />
                </p>
                {!isCollapsed && <p>Sair</p>}
              </div>
            ) : (
              <div className="flex gap-5 mb-8 hover:bg-[#ff00aa50] rounded-lg duration-500 ease-in-out cursor-pointer pt-2.5 pb-2.5 pl-2 items-center">
                <p className="font-white text-lg">
                  <PiSignOutBold className="text-white" />
                </p>
                {!isCollapsed && <p className="text-white">Sair</p>}
              </div>
            )}
          </button>
        </nav>
      </main>
    </div>
  );
}
