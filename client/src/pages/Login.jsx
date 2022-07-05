import { useContext, useRef } from "react"
import { Link } from "react-router-dom"
import { Button, Input, ItemBox, MainForm, Typography } from "../styled-components/CustomComponent"
import { Container } from "../styled-components/Layout"
import { UserContext } from '../Contexts/UserContext'
import axios from "axios"
import { baseUrl } from '../baseUrl'


const Login = () => {

    const userRef = useRef()
    const passwordRef = useRef()
    const { dispatch } = useContext(UserContext)

    const handleLogin = async(e)=> {
        e.preventDefault()
        dispatch({ type: 'LOGIN_START' })
        try {
            
            const resp = await axios.post(`${baseUrl}/auth/login`, {
                username: userRef.current.value,
                password: passwordRef.current.value
            })
            dispatch({ type: 'LOGIN_SUCCESS', payload: resp.data })
            window.location.replace('/')

        } catch (error) {
            dispatch({ type: 'LOGIN_FAIL' })
        }
    }

  return (
    <Container width="100%" height="100vh"
        style={{ backgroundColor: "pink", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
        <Container width="100%"
            style={{ maxWidth: "650px", backgroundColor: "#fff", padding: "10px", borderRadius: "6px" }} 
        >
            <Typography size="25px" color="#242424" weight="600" 
                style={{ marginBottom: "20px" }}
            >
                LOGIN
            </Typography>
            <MainForm onSubmit={handleLogin} >
                <ItemBox width="100%" direction="column" 
                    style={{ padding: "10px 0" }}
                >
                    <Typography weight="300" size="16.5px" style={{ marginBottom: "10px" }} >Username:</Typography>
                    <Input type="text" ref={userRef} />
                </ItemBox>
                <ItemBox width="100%" direction="column" 
                    style={{ padding: "10px 0" }}
                >
                    <Typography weight="300" size="16.5px" style={{ marginBottom: "10px" }} >Password:</Typography>
                    <Input type="password" ref={passwordRef} />
                </ItemBox>
                <Typography weight="300" size="16.5px" style={{ marginBottom: "10px" }} >
                    Are you not a member yet? Go to <Link to='/register' style={{ textDecoration: "underline", color: "royalblue" }} >Register</Link>
                </Typography>
                <Button type="submit" btnBg="royalblue"
                    style={{ margin: "15px 0", alignSelf: "center" }}
                >
                    LOGIN
                </Button>
            </MainForm>
        </Container>
    </Container>
  )
}

export default Login