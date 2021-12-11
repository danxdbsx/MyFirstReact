const NavBar = () => {
    return(

        <div className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">

                <nav>
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">Web Programming</a>
                    </div>
                </nav>

                <nav>
                    <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <a className="nav-link active" href="/">Home</a>
                                    <a className="nav-link" href="/employees">Employees</a>
                                    <a className="nav-link" href="/add">Add Employees</a>
                                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                </div>
                            </div>
                    </div>
                </nav>
        </div>
        
        
    )

}

export default NavBar;