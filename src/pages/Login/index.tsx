import { Link } from "react-router";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/FirebaseConnection";
import { AuthContext } from "../../contexts/AuthContext";
export function Login(){
const {login} = useContext(AuthContext);
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");
const [userLoginDetail, setUserLoginDetail] = useState({});

const navigate = useNavigate();

async function loginUser() {
  await signInWithEmailAndPassword(auth, email, password)
    .then((value) => {
      setUserLoginDetail({
        uid: value.user.uid,
        email: value.user.email,
      });
      toast.success(
        <div>
          <h2 className="text-white font-bold text-sm">Login Efetuado</h2>
          <p className="text-gray-400 text-sm">Login efetuado com sucesso.</p>
        </div>
      );
      navigate("/admin/dashboard");
      login(userLoginDetail);
    })
    .catch((erro) => {
      if (erro) {
        toast.error(
          <div>
            <h2 className="text-white font-bold text-sm">Erro no Login</h2>
            <p className="text-gray-400 text-sm">
              Ocorreu um erro nas credenciais.
            </p>
          </div>
        );
      }
    });
}
return (
  <div>
    <main>
      <section className="w-screen flex flex-col items-center justify-center h-screen bg-black">
        <div>
          <div className="flex flex-col items-center mb-5">
            <div className="flex items-center gap-3 mb-3 justify-center">
              <h2 className="font-bold text-white text-2xl flex gap-4">
                Bem-vindo!
              </h2>
            </div>
            <p className="text-gray-400 tracking-wide font-medium">
              Faça login para utilizar o BeautyBook
            </p>
          </div>
          <div className="w-full max-w-md overflow-hidden flex flex-col justify-center">
            <div className="flex flex-col mb-5.5 relative">
              <label className="text-gray-400 font-bold mb-2.5 text-sm">
                Email
              </label>
              <MdOutlineEmail className="absolute text-2xl text-gray-400 top-9.5 left-3" />
              <input
                type="text"
                placeholder="nome@exemplo.com"
                className="border border-solid border-gray-400/20 rounded-md pt-2 pb-2 pl-12 focus:border-gray-400/40 outline-none text-white text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col relative">
              <label className="text-gray-400 font-bold mb-2.5 text-sm">
                Senha
              </label>
              <TbLockPassword className="absolute text-2xl text-gray-400 top-9 left-3" />
              <input
                type="password"
                placeholder="Digite sua senha"
                className="border border-solid border-gray-400/20 rounded-md pt-2 pb-2 pl-12 focus:border-gray-400/40 outline-none text-white text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col items-center">
              <button className="w-full bg-[#f0a] rounded-lg p-2 mt-4.5 cursor-pointer text-white hover:bg-[#ff00aaf3] duration-700 ease-in-out text-sm" onClick={loginUser}>
                Entrar
              </button>
              <Link to={"/signup"} className="text-gray-400 mt-15 text-sm">
                Não tem uma conta?{" "}
                <span className="text-[#f0a]">Crie uma conta</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
);
}