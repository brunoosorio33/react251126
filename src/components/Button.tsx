import type { ButtonProps } from "../types"


// React.FC<Props> tipa un componente funcional y permite que typescript compruebe sus propiedades.

export const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    variant = "primary"
}) => {

    // Relacionamos cada variant con sus claves de tailwind CSS
    // La clave seleccionada mas adelante dependera del valorant de variant
    const variantStyles = {
        primary: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200",
        danger: "bg-rose-600 hover:bg-rose-700 text-white shadow-rose-200",
        default: "bg-slate-200 hover:bg-slate-300 text-slate-800 shadow-slate-100"

    };
return (
    // renderizamos un boton html y conectamos sus propiedades con las recibidas.
    <button
        onClick={onClick}
        className={`px-4 py-2 rounded-lg font-medium shadow-md cursor-pointer transform transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${variantStyles[variant]}`}
    >
        {/* Mostramos el texto recibir por sus propiedades */}
        {text}
    </button>
    );
};