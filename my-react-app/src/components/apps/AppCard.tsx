import type { AppType } from "../../types/appType";
interface AppCardProps {
    app: AppType
    removeFromStack: (id: number) => void
}

const AppCard = ({ app, removeFromStack }: AppCardProps) => {
    return (
        <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl">
            <img src={app.icon} alt={app.name} className="h-10 w-10" />
            <div>
                <h3 className="font-semibold text-gray-900">{app.name}</h3>
                <p className="text-sm text-gray-500">{app.category}</p>
            </div>
            <button onClick={() => removeFromStack(app.id)}
                className="text-2xl text-gray-500 hover:text-red-700 cursor-pointer"
            >
                ×
            </button>
        </div>
    );
};

export default AppCard;