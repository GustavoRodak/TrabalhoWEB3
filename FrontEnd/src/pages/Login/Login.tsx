import { Button } from "../../components/Button/Button";

export default function LoginPage() {

  return (
    <>
      <div className="w-screen h-screen flex bg-linear-to-r from-[#0b4b1d] to-[#20aa45]">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-100 h-70 bg-[#ebebeb] rounded-2xl border-b-2 border-[#D72638]">
            <form className="flex w-full h-full flex-col justify-center items-center gap-4">
              <div className="w-full flex flex-col justify-center items-center ">
                <span className="text-[20px] font-bold">Email</span>
                <input className="border-2 border-[#20aa45] rounded-[5px]"/>
              </div>
              <div className="w-full flex flex-col justify-center items-center ">
                <span className="text-[20px] font-bold">Usuário</span>
                <input className="border-2 border-[#20aa45] rounded-[5px]"/>
              </div>
              <div>
                <Button text="#ffffff" title="Login" width="8" background="#20aa45"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}