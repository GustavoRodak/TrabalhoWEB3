import Barra from "../../components/Barra/Barra";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen ">
        <div className="w-full">
          <Barra />
        </div>
        <div className="flex w-full h-auto ">
          <div className="flex">
            <span>Sobre o IF</span>
          </div>
        </div>
      </div>
    </>
  )
}