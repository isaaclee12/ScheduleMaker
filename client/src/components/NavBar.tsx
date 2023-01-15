const NavBar = () => {
    return(
        <nav className= "z-50 md lg relative w-full flex flex-wrap items-center justify-left py-4 bg-gray-100 shadow-lg sticky top-0">
          <a className="ml-6 text-xl text-black" href="/">ScheduleMaker</a>
          <a href="/" className="ml-6 text-gray-500 hover:text-gray-600 focus:text-gray-600">View Schedule</a>
          <a href="/add" className="ml-6 text-gray-500 hover:text-gray-600 focus:text-gray-600">Add Shift</a>
          <a href="/delete" className="ml-6 text-gray-500 hover:text-gray-600 focus:text-gray-600">Delete Shift</a>
          <a href="/update" className="ml-6 text-gray-500 hover:text-gray-600 focus:text-gray-600">Update Shift</a>
      </nav>
    )
}

export default NavBar;