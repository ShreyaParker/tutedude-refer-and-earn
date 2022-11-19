import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="pt-1.5 ">
                <div className="flex flex-row items-center text-fuchsia-800 font-poppins  font-normal md:mx-[74px]">
                    <div>
                        <img
                            className="w-40 h-11 md:w-40 md:h-16"
                            src="tuttlogo.png"
                        />
                        <h2>

                        </h2>
                    </div>
                    <div className="md:flex hidden flex-row pl-1 lg:pl-[720px] gap-x-7" >
                        <h1 > My Assignment</h1>
                        <h1 >Chat with Mentor</h1>
                        <div className="flex flex-row gap-2">
                            <img src="profileName.png"/>
                            <h1>ProfileName </h1>
                            <button>
                                <img src="drop.png"/>
                            </button>
                        </div>
                    </div>

                    <div className="flex md:hidden pl-16">
                        <div className="bg-fuchsia-900 p-2 flex flex-row rounded-lg" >
                            <h1 className="text-white pr-4 " > Profile Name </h1>
                            <button><img src="dropwhite.png"/></button>

                        </div>
                    </div>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;