function NavBar() {
    return(
        <nav className= "md lg relative w-full flex flex-wrap items-center justify-left py-4 bg-gray-100 shadow-lg sticky top-0">
          <a className="ml-6 text-xl text-black" href="/">Isaac Lee</a>
          <a href="/" className="ml-6 text-gray-500 hover:text-gray-600 focus:text-gray-600">Home</a>
          <a href="/about" className="ml-6 text-gray-500 hover:text-gray-600 focus:text-gray-600">About Me</a>
          <a href="/RESUME" className="ml-6 text-gray-500 hover:text-gray-600 focus:text-gray-600">Resume</a>
          <a href="/projects" className="ml-6 text-gray-500 hover:text-gray-600 focus:text-gray-600">Project List</a>
          <a href="/contact" className="ml-6 text-gray-500 hover:text-gray-600 focus:text-gray-600">Contact</a>        
      </nav>
    )
}

export default NavBar;