const Banner = () => {
    return (
        <div className="mt-37">
            <div className="flex flex-col gap-9 container mx-auto">
                <div className="flex flex-col gap-7" ><h1 className="text-5xl font-bold">
                    Build Your Ideal <br /> <span className="bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">Development Stack</span>
                </h1>
                    <p className="text-base text-gray-600">Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.</p></div>
                <div className="flex gap-3"><button className="cursor-pointer bg-gradient-to-r from-orange-500 to-pink-600 text-gray-50 p-2 rounded-sm">Explore Technologies</button>
                    <button className="text-gray-600 border-gray-300 border rounded-xs p-2 cursor-pointer">Learn More</button></div>
            </div>
        </div>
    );
};

export default Banner;