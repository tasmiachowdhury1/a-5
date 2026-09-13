import type { AppType } from "../../types/appType";
import AppCard from "./AppCard";
interface StackProps {
    selectedApps: AppType[]
    removeFromStack: (id: number) => void
}

const Stack = ({ selectedApps, removeFromStack }: StackProps) => {

    return (
        <div className="flex flex-col gap-4 border-gray-200 border-2 rounded-sm p-5 w-80 my-46">
            <div className="flex flex-col gap-1">
                <h2 className="text-xl font-bold">Your Stack</h2>
                <p className="text-gray-500">No technologies selected yet.</p>
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
        </div>
    );
};

export default Stack;