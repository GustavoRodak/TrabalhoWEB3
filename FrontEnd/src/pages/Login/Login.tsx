import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { useState } from "react";
import { api } from "../../config/api";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();

    try {
      const resposta = await api.post("/login", {
        email,
        senha,
      });

      const token = resposta.data.access_token;
      localStorage.setItem("token", token);

      alert("Login realizado!");
      navigate("/inicio");

    } catch (erro) {
      console.log(erro);
      alert("Email ou senha inválidos");
    }
  }

  return (
    <>
      <div className="w-screen h-screen flex bg-linear-to-r from-[#0b4b1d] to-[#20aa45]">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-100 h-90 bg-[#ebebeb] rounded-2xl border-b-2 border-[#D72638]">
            <form
              onSubmit={login}
              className="flex w-full h-full flex-col justify-center items-center gap-4">
              <span className="text-2xl font-bold mb-3">Login</span>
              <div className="w-full flex flex-col justify-center items-center ">
                <span className="text-[20px] font-bold">Email</span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-2 border-[#20aa45] rounded-[5px] focus:outline-none" />
              </div>
              <div className="w-full flex flex-col justify-center items-center ">
                <span className="text-[20px] font-bold">Senha</span>
                <input
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="border-2 border-[#20aa45] rounded-[5px] focus:outline-none" />
              </div>
              <div className="flex flex-col">
                <Button text="#ffffff" title="Login" width="8" background="#20aa45" type="submit"/>
                <Button text="#010101" title="Registrar" width="8" background="" type="button" rota="/register"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}