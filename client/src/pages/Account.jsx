import axios from "axios"
import { useContext, useState } from "react"
import { baseUrl } from "../baseUrl"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { UserContext } from "../Contexts/UserContext"
import { Button, Input, ItemBox, MainForm, Typography } from "../styled-components/CustomComponent"
import { Container } from "../styled-components/Layout"

const Account = () => {

    const { user, dispatch } = useContext(UserContext)

    const [newUserName, setNewUserName] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const [updatedDone, setUpdatedDone] = useState(false)

    const handleUserUpdate = async(e)=> {
        e.preventDefault()
        let updatedUser = {
            userId: user._id,
            username: newUserName,
            email: newEmail,
            password: newPassword
        }

        try {
            const resp = await axios.put(`${baseUrl}/users/${user._id}`, updatedUser)
            dispatch({ type: 'LOGIN_SUCCESS', payload: resp.data })
            setUpdatedDone(true)
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <Container>
        <Navbar/>
        <Banner/>
        <Container width="100%"
            style={{ padding: "25px", minHeight: "80vh" }}
        >
            <Container style={{ maxWidth: "650px", margin: "0 auto" }} >
                <Typography style={{ marginBottom: "15px" }}>
                    Reset your account here
                </Typography>
                <MainForm onSubmit={handleUserUpdate} >
                    <ItemBox width="100%" direction="column"
                        style={{ padding: "10px 0" }}
                    >
                        <Typography size="16px" weight="300" color="#242424"
                            style={{ marginBottom: "10px" }}
                        >
                            Username
                        </Typography>
                        <Input type="text" placeholder={user && user.username} onChange={e=> setNewUserName(e.target.value)} />
                    </ItemBox>
                    <ItemBox width="100%" direction="column"
                        style={{ padding: "10px 0" }}
                    >
                        <Typography size="16px" weight="300" color="#242424"
                            style={{ marginBottom: "10px" }}
                        >
                            Email
                        </Typography>
                        <Input type="email" placeholder={user && user.email} onChange={e=> setNewEmail(e.target.value)} />
                    </ItemBox>
                    <ItemBox width="100%" direction="column"
                        style={{ padding: "10px 0" }}
                    >
                        <Typography size="16px" weight="300" color="#242424"
                            style={{ marginBottom: "10px" }}
                        >
                            Password
                        </Typography>
                        <Input type='password' onChange={e=> setNewPassword(e.target.value)} />
                    </ItemBox>
                    <Button type="submit" btnBg="royalblue"
                        style={{margin: "20px 0"}}
                     >
                        Confirm
                    </Button>
                </MainForm>
                {updatedDone && <Typography
                                    size="16px" weight="300" color="teal"
                                >
                                    User details updated successfully!!!
                                </Typography>}
            </Container>
        </Container>
        <Footer />
    </Container>
  )
}

export default Account