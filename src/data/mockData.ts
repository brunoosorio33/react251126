import type { Tarea } from "../types";

export const initialFruits: string[] = [
    "Manzana",
    "Banana",
    "Fresa",
    "Mango",
    "Arandanos",
];

export const initialTasks: Tarea[] = [
    { id: 1, name: "Configurar entorno Vite + TypeScript", completed: true},
    { id: 2, name: "Tipar props con interfaces", completed: true },
    { id: 3, name: "Implementar renderizado condicional", completed: false},
    { id: 4, name: "estilizar con Tailwind Grid y Flexbox", completed: false},
];

