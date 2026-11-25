import type { ListFruitsProps } from "../types";

export const FruitsList: React.FC<ListFruitsProps> = ({fruits}) => {

    return (
    <div className="bg-white pg-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-800">🍎 Lista de Frutas</h2>
            <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full">
                Total: {fruits.length} {fruits.length === 1 ? "Fruta" : "Frutas"}
            </span>
        </div>
        <ul className="space-y-2">
            {fruits.map((fruit, index)=> (
                <li key={`${fruit}-${index}`} className="flex item-center gap-2 bg-slate-50 rounded-lg text-stone-700 border border-slate-100">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    {fruit}
                </li>
            ))}
        </ul>
    </div>
    );
};