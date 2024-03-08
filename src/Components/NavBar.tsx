import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import { BiCameraMovie,BiSearchAlt2 } from 'react-icons/bi';
import './NavBar.css';

function NavBar(){

    const [search,setSearch]=useState("");
    const navegate=useNavigate();

    const handleSubmit=(e)=>{
      e.preventDefault();

      if(!search) return
      navegate(`/search?q=${search}`);
      setSearch("");
      console.log(search);
    }

    return(
        <nav id="navbar">
        <h2>
          <Link to="/">
            <BiCameraMovie/>MoviesLib
            </Link>
        </h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Busque um filme' onChange={(e)=> setSearch(e.target.value)} value={search}/>
            <button type="submit">
               <BiSearchAlt2/> Pesquisar
            </button>
        </form>
      </nav>
    )

}

export default NavBar