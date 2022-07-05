import { Button, ItemBox, Typography } from "../styled-components/CustomComponent"
import { Navigation } from "../styled-components/Layout"
import { FaUserCircle } from 'react-icons/fa'
import { BsFillPenFill } from 'react-icons/bs'
import { Link } from "react-router-dom"
import { UserContext } from "../Contexts/UserContext"
import { useContext } from "react"

const Navbar = () => {
   
    const { user, dispatch } = useContext(UserContext)

    const handleLogOut = ()=> {
        dispatch({ type: 'LOGOUT' })
        window.location.reload()
    }

  return (
   <Navigation>
    <ItemBox align="center" justify="space-around" style={{padding: "15px"}} >
        <Link to='/' >
            <Typography size="30px"
                style={{ cursor: "pointer" }}
            >
                EDR-BLOG.
            </Typography>
        </Link>
        { 
            user ? <Typography size="20px" color="#242424" weight="200" >Hi<span style={{color:"royalblue", textTransform:"capitalize"}}> {user.username}</span></Typography> 
                 : <Link to='/login' ><Button btnBg="royalblue" >Login</Button></Link>
        }
    </ItemBox>
        { 
        user &&
        <ItemBox align="center" justify="space-around" style={{padding: "15px", borderTop: "1px solid #ddd"}}>
            <ItemBox>
                <Link to='/account' >
                    <FaUserCircle className="linkicons" style={{ margin: "0 15px" }} />
                </Link>
                <Link to='/write' >
                    <BsFillPenFill className="linkicons" style={{ margin: "0 15px" }} />
                </Link>
            </ItemBox>
            <Button btnBg="royalblue"
                onClick={handleLogOut}
            >
                Logout
            </Button>
        </ItemBox>
        }
   </Navigation>
  )
}

export default Navbar