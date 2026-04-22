import { Button } from "../Button/Button";

export default function Barra() {
  return (
    <>
      <div className="h-15 flex w-full bg-[#0F5E26] border-b-4 border-[#D72638]">
        <div className="h-full w-full flex justify-center items-center">
          <div className="flex w-full justify-between">
            <div className="flex gap-2">
              <Button text="white" title="Home" width="10" rota="/inicio"/>
              <Button text="white" title="Cursos" width="10" rota="/cursos"/>
              <Button text="white" title="Meus Cursos" width="10" rota="/meuscursos"/>
              <Button text="white" title="Categoria" width="10" rota="/categoria"/>
            </div>
            <div>
              <Button text="white" title="Perfil" width="5" />
              <Button text="red" title="Sair" width="5" />
            </div>

          </div>
        </div>

      </div>
    </>
  )
}