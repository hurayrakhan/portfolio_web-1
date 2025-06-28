import React from 'react';
import hurayra3 from '../../assets/hurayra-3.jpg'
import hiGif from '../../assets/hi.gif'

const Banner = () => {
    return (
        <div className="mt-12">
            <div className="pb-24 flex flex-col justify-center items-center">
                <div>
                    <img
                        src={hurayra3}
                        alt=""
                        className="relative rounded-full h-32 w-32 object-cover filter grayscale border-4 border-white"
                    />
                    <div className="pl-3 py-2 w-32 bg-white text-xs rounded-4xl -rotate-12 relative -top-24 left-24 flex gap-2">
                        <h1>Hurayra Khan</h1>
                        <img className="w-3 h-3" src={hiGif} alt="" />
                    </div>
                </div>
                <div className="flex justify-center items-center text-center">
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-700 w-2/3 md:w-1/2 leading-14">
                            Building digital products, brands, and experience.
                        </h1>
                        <a className="mt-6 px-12 py-3 rounded-3xl bg-gray-800 text-white hover:bg-gray-600" href="#">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;