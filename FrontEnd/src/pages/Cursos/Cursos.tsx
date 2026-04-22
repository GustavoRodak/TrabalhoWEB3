import { useEffect, useState } from "react";
import Barra from "../../components/Barra/Barra"
import CardCurso from "../../components/CardCurso/CardCurso"
import { api } from "../../config/api";

interface Curso {
  id: string;
  titulo: string;
  descricao: string;
  cargaHoraria: number;
}

export default function TelaCursos() {
  const [cursos, setCursos] = useState<Curso[]>([]);

  async function listarCursos() {
    const response = await api.get("/curso");
    return response.data;
  }

  useEffect(() => {
    async function carregarCursos() {
      try {
        const data = await listarCursos();
        setCursos(data);
      } catch (error) {
        console.error(error);
      }
    }

    carregarCursos();
  }, []);

  return (
    <div className="w-screen min-h-screen">
      <Barra />

      <div className="flex flex-wrap gap-6 p-6 justify-center">
        {cursos.map((curso) => (
          <CardCurso
            key={curso.id}
            id={curso.id}
            titulo={curso.titulo}
            descricao={curso.descricao}
            cargaHoraria={curso.cargaHoraria}
          />
        ))}
      </div>
    </div>
  );
}
