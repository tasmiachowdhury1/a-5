import { use } from 'react';
import type { appType } from '../../types/appType';
interface AppsProps {
    appsPromise: Promise<appType[]>
}
const Apps = ({ appsPromise }: AppsProps) => {
    console.log(appsPromise)
    const apps = use(appsPromise)
    console.log(apps, 'apps')
    return (
        <div>

        </div>
    );
};

export default Apps;

