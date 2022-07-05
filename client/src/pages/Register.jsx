import { Link } from "react-router-dom"
import { Button, Input, ItemBox, MainForm, Typography } from "../styled-components/CustomComponent"
import { Container } from "../styled-components/Layout"
import axios from "axios"
import { baseUrl } from "../baseUrl"
import { useState } from "react"


const Register = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [errors, setErrors] = useState(false)


    const handleRegister = async(e)=> {
        e.preventDefault()
        setErrors(false)
        try {
            const response = await axios.post(`${baseUrl}/auth/register`, {
               username, email, password 
            })

            if(response.data){
                window.location.replace('/login')
            }

        } catch (error) {
            setErrors(true)
        }
    }

  return (
    <Container width="100%" height="100vh"
        style={{ backgroundColor: "teal", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
        <Container width="100%"
            style={{ maxWidth: "650px", backgroundColor: "#fff", padding: "10px", borderRadius: "6px" }} 
        >
            <Typography size="25px" color="#242424" weight="600" 
                style={{ marginBottom: "20px" }}
            >
                REGISTER
            </Typography>
            {errors && <Typography size="15px" color="crimson" weight="300" 
                style={{ marginBottom: "20px" }}
            >
                Invalid inputs!!!
            </Typography>}
            <MainForm onSubmit={handleRegister} >
                <ItemBox width="100%" direction="column" 
                    style={{ padding: "10px 0" }}
                >
                    <Typography weight="300" size="16.5px" style={{ marginBottom: "10px" }} >Username:</Typography>
                    <Input type="text" onChange={e=> setUsername(e.target.value)} />
                </ItemBox>
                <ItemBox width="100%" direction="column" 
                    style={{ padding: "10px 0" }}
                >
                    <Typography weight="300" size="16.5px" style={{ marginBottom: "10px" }} >Email:</Typography>
                    <Input type="email" onChange={e=> setEmail(e.target.value)} />
                </ItemBox>
                <ItemBox width="100%" direction="column" 
                    style={{ padding: "10px 0" }}
                >
                    <Typography weight="300" size="16.5px" style={{ marginBottom: "10px" }} >Password:</Typography>
                    <Input type="password" onChange={e=> setPassword(e.target.value)} />
                </ItemBox>
                <Typography weight="300" size="16.5px" style={{ marginBottom: "10px" }} >
                   Have already an account? Go to <Link to='/login' style={{ textDecoration: "underline", color: "royalblue" }} >Login</Link>
                </Typography>
                <Button type="submit" btnBg="royalblue"
                    style={{ margin: "15px 0", alignSelf: "center" }}
                >
                    REGISTER
                </Button>
            </MainForm>
        </Container>
    </Container>
  )
}

export default Register