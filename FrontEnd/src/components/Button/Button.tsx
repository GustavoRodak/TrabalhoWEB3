import { useNavigate } from "react-router-dom";

interface PropsButton {
  title: string;
  width: string;
  background?: string
  text: string
  rota?: string;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ title, width, rota, type = "button", background, text }: PropsButton) => {

  const navigate = useNavigate();

  const handleClick = () => {
    if (rota && type === "button") {
      navigate(rota);
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      style={{width: `${width}rem`, backgroundColor: `${background}`, color: `${text}`}}
      className="h-10 rounded-xl cursor-pointer hover:scale-[1.03] duration-150"
      
    >
      {title}
    </button>
  );
};