import { use } from 'react';
import type { AppType } from '../../types/appType';
import AvailableApps from "./AvailableApps"
interface AppsProps {
    appsPromise: Promise<AppType[]>
}
const Apps = ({ appsPromise }: AppsProps) => {
    console.log(appsPromise)
    const apps = use(appsPromise)
    console.log(apps, 'apps')
    return (
        <div>
            <AvailableApps apps={apps} />
        </div>
    );
};

export default Apps;

