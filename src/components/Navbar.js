import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return (
        <nav class="w-3/4 mx-auto flex justify-between  pt-4" >
            <div class="logo">
                <img src="" alt="" />
                <img src="" alt="" />
                <p>ogplateau</p>

            </div>
            <div class="left-side">
            <div class="search-bar">
                <input class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
              </div>
              <div>
               <FontAwesomeIcon icon={["far", "coffee"]} />
              </div>
            </div>
        </nav>
    )
}

export default Navbar;
