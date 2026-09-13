import { use } from 'react';
import type { AppType } from '../../types/appType';
import Stack from "./Stack"
import { useState } from "react";
import AvailableApps from './AvailableApps';
interface AppsProps {
    appsPromise: Promise<AppType[]>
}
const Apps = ({ appsPromise }: AppsProps) => {
    const removeFromStack = (id: number) => {
        setSelectedApps(selectedApps.filter((app) => app.id !== id))
    }
    const [selectedApps, setSelectedApps] = useState<AppType[]>([])
    console.log(appsPromise)
    const apps = use(appsPromise)
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
                    removeFromStack={removeFromStack} />

            </div>
        </div>

    );
};

export default Apps;

