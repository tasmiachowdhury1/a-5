import React from 'react';

const getBadgeColor = (badge: string) => {
    if (badge === "Standard" || badge === "Versatile") {
        return "bg-green-50 text-green-500";
    }
    else if (badge === "Popular" || badge === "Containers" || badge === 'Robust' || badge === "Essential") {
        return "bg-blue-50 text-blue-500";
    }
    else if (badge === "Ubiquitous" || badge === "Fast") {
        return "bg-orange-50 text-orange-500"
    }
    else {
        return "bg-purple-50 text-purple-500"
    }
}
const AvailableApps = ({ apps }) => {
    console.log(apps, 'apps from available apps')
    return (
        <section className="bg-gray-50 py-16">
            <div className="mx-auto container">
                <div className="mb-10">

                    <h2 className="text-5xl font-bold text-gray-900">
                        Explore the <span className='bg-linear-to-r  from-pink-600 to-purple-500 bg-clip-text text-transparent'>Technologies</span>
                    </h2>

                    <p className="text-xl text-gray-500">
                        Pick one technology per category to build your ideal stack.
                    </p>
                </div>

                {/* Technology Cards */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

                    {apps.map((app) => (
                        <div
                            key={app.id}
                            className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm h-85 w-80"
                        >
                            {/* Icon + Badge */}
                            <div className="mb-5 flex items-center justify-between">

                                <img
                                    src={app.icon}
                                    alt={app.name}
                                    className="h-10 w-10"
                                />
                                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getBadgeColor(app.badge)}`}>{app.badge}</span>
                            </div>

                            {/* Name */}
                            <h3 className="mb-2 text-xl font-bold text-gray-900">
                                {app.name}
                            </h3>

                            {/* Description */}
                            <p className="mb-5 text-sm leading-6 text-gray-500">
                                {app.description}
                            </p>

                            {/* Category */}
                            <div className="mb-4">
                                <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-600">
                                    {app.category}
                                </span>
                            </div>

                            {/* Difficulty + Rating */}
                            <div className="mb-5 flex items-center justify-between">

                                <span className="text-sm text-gray-500">
                                    {app.difficulty}
                                </span>

                                <span className="font-semibold text-gray-800">
                                    ⭐ {app.rating}
                                </span>

                            </div>

                            {/* Button */}
                            <button className="w-full rounded-xl bg-gray-800 py-3 font-semibold text-white transition hover:opacity-90">
                                Add to Stack
                            </button>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
    ;
};

export default AvailableApps;