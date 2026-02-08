import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return(
        <div className="fixed left-0 right-0 z-50 flex justify-between items-center h-[10vh] px-10">
            <div>
                <h1 className='text-4xl text-orange-400 font-bold'>Healthy.</h1>
            </div>
            <div>
                <a href="#" className="mx-2 font-medium uppercase relative after:content-[''] after:absolute after:left-0 after:h-0.75 after:w-0 after:rounded-2xl after:bg-orange-500 hover:after:w-full after:duration-300 after:-bottom-1.75">Home</a>
                <a href="#" className="mx-2 font-medium uppercase relative after:content-[''] after:absolute after:left-0 after:h-0.75 after:w-0 after:rounded-2xl after:bg-orange-500 hover:after:w-full after:duration-300 after:-bottom-1.75">Services</a>
                <a href="#" className="mx-2 font-medium uppercase relative after:content-[''] after:absolute after:left-0 after:h-0.75 after:w-0 after:rounded-2xl after:bg-orange-500 hover:after:w-full after:duration-300 after:-bottom-1.75">Delivery</a>
                <a href="#" className="mx-2 font-medium uppercase relative after:content-[''] after:absolute after:left-0 after:h-0.75 after:w-0 after:rounded-2xl after:bg-orange-500 hover:after:w-full after:duration-300 after:-bottom-1.75">Contact us</a>
            </div>
            <div className='h-10 w-10 bg-black rounded-full text-white flex items-center justify-center'>
                <FontAwesomeIcon icon={faCartShopping}  />
            </div>

        </div>
    )

}


export default Navbar;