function Header() {
    return (
        <nav className='blue-grey darken-3'>
            <div className='nav-wrapper'>
                <a href='/' className='brand-logo'>
                    Mentor
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a href='/formentor'> For Mentors</a>
                    </li>
                    <li>
                        <a href='/frostudent'> For Students</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
