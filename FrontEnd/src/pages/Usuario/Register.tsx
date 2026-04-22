import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { api } from "../../config/api";

export default function LoginPage() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [tipoAcesso, setTipoAcesso] = useState("");
  const navigate = useNavigate();

  async function registrar(e) {
    e.preventDefault();

    try {
      await api.post("/usuario", {
        nome,
        email,
        senha,
        tipoAcesso,
      });

      alert("Usuário criado com sucesso!");
      navigate("/"); // volta pro login

    } catch (erro) {
      console.log(erro);
      alert("Erro ao registrar usuário");
    }
  }

  return (
    <>
      <div className="w-screen h-screen flex bg-linear-to-r from-[#0b4b1d] to-[#20aa45]">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-100 h-120 bg-[#ebebeb] rounded-2xl border-b-2 border-[#D72638]">
            <form
              onSubmit={registrar}
              className="flex w-full h-full flex-col justify-center items-center gap-4">
              <span className="text-2xl font-bold mb-3">Registrar Usuário</span>
              <div className="w-full flex flex-col justify-center items-center ">
                <span className="text-[20px] font-bold">Nome</span>
                <input
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-[70%] border-2 border-[#20aa45] rounded-[5px] focus:outline-none"
                />
              </div>
              <div className="w-full flex flex-col justify-center items-center ">
                <span className="text-[20px] font-bold">Email</span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-[70%] border-2 border-[#20aa45] rounded-[5px] focus:outline-none"
                />
              </div>
              <div className="w-full flex flex-col justify-center items-center ">
                <span className="text-[20px] font-bold">Senha</span>
                <input
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="w-[70%] border-2 border-[#20aa45] rounded-[5px] focus:outline-none"
                />
              </div>
              <div className="w-full flex flex-col justify-center items-center ">
                <span className="text-[20px] font-bold">Tipo</span>
                <select
                  value={tipoAcesso}
                  onChange={(e) => setTipoAcesso(e.target.value)}
                  className="w-[70%] border-2 border-[#20aa45] rounded-[5px] focus:outline-none">
                  <option value="">Selecione uma opção</option>
                  <option value="ADMIN">Admin</option>
                  <option value="ALUNO">Aluno</option>
                </select>
              </div>
              <div className="flex mt-4 flex-col">
                <Button text="#ffffff" title="Registrar" width="8" background="#20aa45" type="submit" />
                <Button text="#010101" title="Já tem conta?" width="8" background="" type="button" rota="/login"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}