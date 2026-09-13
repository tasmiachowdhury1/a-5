import { use } from 'react';
import type { AppType } from '../../types/appType';
import Stack from "./Stack"
import { useState } from "react";
import AvailableApps from './AvailableApps';
import { toast } from "react-toastify";
interface AppsProps {
    appsPromise: Promise<AppType[]>
}
const Apps = ({ appsPromise }: AppsProps) => {

    const [selectedApps, setSelectedApps] = useState<AppType[]>([])
    console.log(appsPromise)
    const apps = use(appsPromise)
    const removeAll = () => {
        setSelectedApps([])
        toast.info("All technologies removed from stack.")
    }
    const removeFromStack = (id: number) => {
        const removedApp = selectedApps.find((app) => app.id === id)
        setSelectedApps(
            selectedApps.filter((app) => app.id !== id)
        )
        if (removedApp) {
            toast.info(`${removedApp.name} removed from stack`)
        }
    }
    console.log(apps, 'apps')
    return (
        <div className='container mx-auto grid grid-cols-4 gap-4'>
            <div className='lg:col-span-3'>
                <AvailableApps
                    apps={apps}
                    selectedApps={selectedApps}
                    setSelectedApps={setSelectedApps}
                />
            </div>
            <div className='lg:col-span-1'>
                <Stack
                    selectedApps={selectedApps}
                    removeFromStack={removeFromStack}
                    removeAll={removeAll} />

            </div>
        </div>

    );
};

export default Apps;

