import Logo from '../assets/logo-text.png'
const Footer = () => {
    return (
        <footer className=" border-gray-100 bg-white mt-25 border-t">
            <div className=" p-10 container mx-auto">

                <div className="grid gap-10 grid-cols-4">

                    <div className="">
                        <div className="flex items-center gap-2 mb-4">

                            <img src={Logo} alt="" />
                        </div>

                        <p className="max-w-md text-sm leading-6 text-gray-500">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>

                        <div className="mt-6 flex gap-5">
                            <a
                                href="" className="text-sm font-medium text-gray-600"
                            >
                                GitHub
                            </a>

                            <a href="" className="text-sm font-medium text-gray-600"
                            >
                                Twitter
                            </a>

                            <a href="" className="text-sm font-medium text-gray-600"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-5 text-sm font-bold uppercase text-gray-900">
                            Product
                        </h3>

                        <ul className="flex flex-col gap-3 text-sm text-gray-500">
                            <li>
                                <a href="">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="">
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a href="">
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-5 text-sm font-bold uppercase text-gray-900">
                            Company
                        </h3>

                        <ul className="flex flex-col gap-3 text-sm text-gray-500">
                            <li>
                                <a href="">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="">
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a href="">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-5 text-sm font-bold uppercase text-gray-900">
                            Legal
                        </h3>

                        <ul className="flex flex-col gap-3 text-sm text-gray-500">
                            <li>
                                <a href="">
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a href="">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>


                </div>

                <div className="mt-10 border-t border-gray-100"></div>

                <div className="mt-7 text-sm text-gray-500 flex items-center justify-between">

                    <p>
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <a href="">
                            Privacy
                        </a>

                        <a href="">
                            Terms
                        </a>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;