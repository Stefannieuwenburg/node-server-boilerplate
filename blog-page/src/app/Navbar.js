export default function Navbar() { 
    return ( 
        <div> 
            <nav classNameName="bg-white fixed w-full  
                                z-20 top-0 left-0  
                                border-b border-gray-200"> 
                <div className="flex flex-wrap items-center  
                                justify-between mx-auto p-4"> 
                    <a href="https://geeksforgeeks.org/" 
                       className="flex items-center"> 
                        
<img src="https://www.freeiconspng.com/uploads/blogger-logo-icon-png-20.png" width="150" alt="Blogger Logo Svg Free" 
                             className="mr-2"  /> 
                        <span className="self-center text-2xl font-semibold "> 
                            Blogger
                        </span> 
                    </a> 
                    <div className="items-center justify-between hidden  
                                    w-full md:flex md:w-auto md:order-1" 
                         id="navbar-sticky"> 
                        <ul className="flex flex-col p-4  
                                       md:p-0 mt-4 font-medium  
                                       border border-gray-100 rounded-lg  
                                       bg-gray-50 md:flex-row md:space-x-8  
                                       md:mt-0 md:border-0 md:bg-white"> 
                            <li> 
                                <a href="#" 
                                   className="block py-2 pl-3  
                                              pr-4 text-white bg-blue-700  
                                              rounded md:bg-transparent  
                                              md:text-blue-700 md:p-0"> 
                                    Home 
                                </a> 
                            </li> 
                            <li> 
                                <a href="#" 
                                   className="block py-2 pl-3  
                                              pr-4 text-gray-900 rounded  
                                              hover:bg-gray-100  
                                              md:hover:bg-transparent  
                                              md:hover:text-blue-700 md:p-0"> 
                                    Posts 
                                </a> 
                            </li> 
                            <li> 
                                <a href="#" 
                                   className="block py-2 pl-3  
                                              pr-4 text-gray-900 rounded  
                                              hover:bg-gray-100  
                                              md:hover:bg-transparent  
                                              md:hover:text-blue-700 md:p-0"> 
                                    About us 
                                </a> 
                            </li> 
                        </ul> 
                    </div> 
                </div> 
            </nav> 
        </div> 
    ) 
}