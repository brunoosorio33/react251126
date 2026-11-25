export interface Tarea {
    id: number;
    name: string;
    completed: boolean;
}

export interface ButtonProps {
    text: string;
    onClick: () => void;
    variant?: "primary" | "danger" | "default"; 
}

export interface ListFruitsProps {
    fruits: string[];
}

export interface ListTaskProps {
    tasks: Tarea[];
}