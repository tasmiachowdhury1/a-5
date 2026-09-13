import { use } from 'react';
import type { AppType } from '../../types/appType';
import AvailableApps from "./AvailableApps"
import Stack from "./Stack"
interface AppsProps {
    appsPromise: Promise<AppType[]>
}
const Apps = ({ appsPromise }: AppsProps) => {
    console.log(appsPromise)
    const apps = use(appsPromise)
    console.log(apps, 'apps')
    return (
        <div className='container mx-auto grid grid-cols-4 gap-4'>
            <div className='lg:col-span-3'>
                <AvailableApps apps={apps} />
            </div>
            <div className='lg:col-span-1'>
                <Stack />
            </div>
        </div>

    );
};

export default Apps;

