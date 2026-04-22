import Barra from "../../components/Barra/Barra";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen ">
        <div className="w-full">
          <Barra />
        </div>
        <div className="flex w-full h-auto flex-col items-center mt-20 gap-4">
          <span className="text-2xl font-bold">
            Este sistema foi desenvolvido para organizar cursos livres de forma simples e prática.
          </span>
          <span className="text-2xl font-bold">
            A plataforma permite consultar cursos e categorias, além de gerenciar usuários e matrículas com segurança.
          </span>
          <span className="text-2xl font-bold"> 
            Projeto desenvolvido para a disciplina de WEB3 com o professor Fabrício.
          </span>
        </div>
      </div>
    </>
  )
}