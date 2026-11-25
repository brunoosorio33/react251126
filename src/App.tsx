import  { useState } from "react";
import { Button } from "./components/Button";
import { FruitsList } from "./components/FruitList";
import { TaskList } from "./components/TaskList";
import { initialFruits, initialTasks} from "./data/mockData";
import type { Tarea } from "./types";

export function App() {
  const  [fruits, setFruits] = useState<string[]>(initialFruits);
  const [tasks, setTasks] = useState<Tarea[]>(initialTasks)

  const addFruit = () => {
    const extras = ["Kiwi", "Naranja", "Uva", "Piña", "Sandia"]
    const random = extras[Math.floor(Math.random() * extras.length)]
    setFruits([...fruits, random]);
  };

  const emptyTasks = () => setTasks([])
  const putTask = () => setTasks(initialTasks)
  return (
    <h1>Hola mundo</h1>
  )
}