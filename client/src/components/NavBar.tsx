function NavBar() {
    return(
        <nav className= "md lg relative w-full flex flex-wrap items-center justify-left py-4 bg-gray-100 shadow-lg sticky top-0">
          <a className="ml-6 text-xl text-black" href="/">ScheduleMaker</a>
          <a href="/" className="ml-6 text-gray-500 hover:text-gray-600 focus:text-gray-600">View Schedule</a>
          <a href="/add" className="ml-6 text-gray-500 hover:text-gray-600 focus:text-gray-600">Add Shift</a>
          <a href="/addDebug" className="ml-6 text-gray-500 hover:text-gray-600 focus:text-gray-600">Add DEBUG</a>
          <a href="/delete" className="ml-6 text-gray-500 hover:text-gray-600 focus:text-gray-600">Delete Shift</a>
          <a href="/update" className="ml-6 text-gray-500 hover:text-gray-600 focus:text-gray-600">Update Shift</a>
          {/* <a href="/update-form" className="ml-6 text-gray-500 hover:text-gray-600 focus:text-gray-600">Update Shift Form</a> */}
      </nav>
    )
}

export default NavBar;