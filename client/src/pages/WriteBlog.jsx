import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Button, ContentInput, Image, Input, ItemBox, MainForm, Typography } from "../styled-components/CustomComponent"
import { Container } from "../styled-components/Layout"
import { useContext, useState } from "react"
import { UserContext } from "../Contexts/UserContext"
import axios from "axios"
import { baseUrl } from "../baseUrl"


const WriteBlog = () => {

    const { user } = useContext(UserContext)

    const [poster, setPoster] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const handlePublish = async(e)=> {
        e.preventDefault()
        let newBlog = {
            username: user.username,
            title,
            content,
            poster
        }

        try {
            const response = await axios.post(`${baseUrl}/blogs`, newBlog)
            window.location.replace(`/${response.data._id}`)
        } catch (error) {
            console.log(error);
        }

    }

  return (
    <Container>
        <Navbar />
        <Banner/>
        <Container width="100%"
            style={{ padding: "25px", minHeight: "80vh" }}
        >
            <Container style={{ maxWidth: "650px", margin: "0 auto" }} >
                <Typography style={{ marginBottom: "15px" }} >
                   Create a blog here
                </Typography>
                <MainForm onSubmit={handlePublish}>
                    <ItemBox width="100%" direction="column"
                            style={{ padding: "10px 0" }}
                        >
                            <Typography size="16px" weight="300" color="#242424"
                                style={{ marginBottom: "10px" }}
                            >
                                Title:
                            </Typography>
                            <Input type="text" onChange={e=> setTitle(e.target.value)} />
                    </ItemBox>
                    <ItemBox width="100%" direction="column"
                            style={{ padding: "10px 0" }}
                    >
                            <Typography size="16px" weight="300" color="#242424"
                                style={{ marginBottom: "10px" }}
                            >
                                Content:
                            </Typography>
                            <ContentInput onChange={e=> setContent(e.target.value)} ></ContentInput>
                    </ItemBox>
                    <ItemBox width="100%" direction="column"
                            style={{ padding: "10px 0" }}
                        >
                             <label htmlFor="file">
                                Image URL:
                             </label>
                            <Input type="text" id="file" onChange={e=> setPoster(e.target.value)}  />
                    </ItemBox>
                    { poster && <ItemBox width="100%" height="500px" >
                        <Image src={poster} />
                    </ItemBox> }
                    <Button 
                        type="submit" 
                        btnBg="royalblue" 
                        style={{ marginTop: "25px"}}
                    >
                        PUBLISH
                    </Button>
                </MainForm>
            </Container>
        </Container>
        <Footer/>
    </Container>
  )
}

export default WriteBlog