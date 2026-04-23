import { useNavigate } from "react-router-dom";

interface CardCurso {
  id: string;
  titulo: string;
  descricao: string;
  cargaHoraria: number;
  categoria: {id: string, nome: string};
}

export default function CardCurso({ id, titulo, descricao, cargaHoraria, categoria }: CardCurso) {

  const navigate = useNavigate();

  function abrirCurso() {
    navigate(`/curso/${id}`);
  }

  return (
    <>
      <div
        onClick={abrirCurso}
        className="w-100 h-70 bg-gray-300 border-b-5 border-[#D72638] rounded-2xl">
        <div className="w-[90%] h-[90%] flex items-center justify-center flex-col gap-6">
          <div>
            <span>Título: {titulo}</span>
          </div>
          <div>
            <span>Descrição: {descricao}</span>
          </div>
          <div>
            <span>Carga Horária: {cargaHoraria}</span>
          </div>
          <div>
            <span>Categoria: {categoria.nome}</span>
          </div>
        </div>
      </div>
    </>
  )
}