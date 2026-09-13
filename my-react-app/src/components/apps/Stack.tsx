import type { AppType } from "../../types/appType";
import AppCard from "./AppCard";
interface StackProps {
    selectedApps: AppType[]
    removeFromStack: (id: number) => void
    removeAll: () => void
}

const Stack = ({ selectedApps, removeFromStack, removeAll }: StackProps) => {

    return (
        <div className="flex flex-col gap-4 border-gray-200 border-2 rounded-sm p-5 w-full my-46">
            <div className="flex flex-col gap-1">
                <h2 className="text-xl font-bold">Your Stack</h2>
                <p className="text-gray-500">{selectedApps.length}{" "}
                    {selectedApps.length === 1 ? "Technology" : "Technologies"}{" "}Selected</p>
            </div>
            <div className="border-2 border-gray-200 border-dashed p-6 w-60 rounded-xl mx-auto flex flex-col gap-3">
                {selectedApps.length === 0 ? (
                    <p className="text-gray-500">Your stack is empty.</p>
                ) : (
                    selectedApps.map((app) => {
                        return <AppCard
                            key={app.id}
                            app={app}
                            removeFromStack={removeFromStack} />
                    }
                    )
                )}
            </div>
            <button onClick={removeAll}
                disabled={selectedApps.length === 0}
                className="rounded-xl bg-red-500 py-2 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer">
                Remove All
            </button>
        </div>
    );
};

export default Stack;