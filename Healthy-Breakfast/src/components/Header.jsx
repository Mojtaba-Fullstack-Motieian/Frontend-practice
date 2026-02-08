import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import { faSpoon } from '@fortawesome/free-solid-svg-icons'
import pancake from '../assets/Header.jpg'

const Header = () => {
    return (
        <div className="flex justify-center items-center h-screen w-full">
            <div className="w-1/2 mx-auto ml-20">
                <div>
                    <h1 className="font-bold uppercase text-9xl outlined-text text-transparent font-[kanit]"
                        data-aos="fade-right" data-aos-duration="1000" data-aos-easing="linear">
                        <span>T</span>
                        <span>A</span>
                        <span>S</span>
                        <span>T</span>
                        <span className="relative">
                            <span>Y</span>
                            <svg className="absolute w-20 h-20 text-5xl -top-10 -right-25 text-green-500 fill-current" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" data-aos="fade-down-right" data-aos-duration="1000" data-aos-delay="1200"><title>Leaf</title><path id="Nature" d="M24.76,4.12C18.34.3,11.9,0,6.13,3.19,2.83,5,.51,8,.08,11.08a7.06,7.06,0,0,0,1.44,5.4A19.32,19.32,0,0,1,9.4,8.61a.5.5,0,1,1,.49.87c-6.53,3.64-8.66,9.11-9.87,14a.49.49,0,0,0,.1.3c.19.24.52.19,1.13.2H2.33c1.09,0,1.1-.07,1.17-.42a20.69,20.69,0,0,1,1.4-4.38c4.86,2.14,11.53-1,14.32-4.36A14.47,14.47,0,0,0,21.67,10C22.35,8.14,23,6.34,24.8,5a.5.5,0,0,0,0-.83Z" /></svg>
                        </span>
                    </h1>
                </div>
                <h1 className="uppercase text-7xl font-bold text-gray-800" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1000">Breakfast!</h1>
                <p className="text-orange-300 uppercase font-semibold py-5" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1000">Order your tasty breakfast & avial discount (20% off)</p>
                <div className='cursor-pointer hover:scale-110 duration-300 inline-flex gap-2 shadow-xl items-center bg-green-500 px-5 py-2 text-white rounded-full'
                    data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1300">
                    <FontAwesomeIcon icon={faCartShopping} />
                    <button className='cursor-pointer'>Order now</button>
                </div>

            </div>
            <div className="w-[45%] mx-auto relative">
                <img src={pancake} alt="pancake" className='w-2/3 h-auto self-start' data-aos="fade-left" data-aos-duration="1000" />
                <FontAwesomeIcon icon={faSeedling} className='absolute fa-4x text-green-600 top-5 right-20' data-aos="zoom-in" data-aos-duration="500" data-aos-delay="800" />
                <FontAwesomeIcon icon={faSpoon} className='absolute fa-8x bottom-0 right-20 text-white' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1000" />
            </div>

        </div>

    );

}

export default Header;