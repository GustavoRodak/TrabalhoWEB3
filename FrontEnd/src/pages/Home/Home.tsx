import Barra from "../../components/Barra/Barra";

export default function Home(){
  return(
    <>
    <div className="w-full h-full flex">
      <Barra/>
        <div className="flex w-full h-full">
          <div className="flex">
            <span>Sobre o IF</span>
          </div>
        </div>
    </div>
    </>
  )
}