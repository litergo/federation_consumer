import {Link} from 'react-router-dom';

const Navbar=()=>{
    return (    
                <div className='navBar'>
                    <div className='navItem'>
                        <Link to="/">Home</Link>
                    </div>
                    <div className='navItem'>
                        <Link to="/button">Button</Link>
                </div>
                    <div className='navItem'>
                        <Link to="/docs">Docs</Link>
                    </div>
                </div>
    )

}

export default Navbar;