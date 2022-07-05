import Banner from "../components/Banner"
import Blogcard from "../components/Blogcard"
import Navbar from "../components/Navbar"
import { Container } from "../styled-components/Layout"
import Footer from "../components/Footer"
import axios from 'axios'
import { useEffect, useState } from "react"
import { baseUrl } from '../baseUrl'
import { Typography } from "../styled-components/CustomComponent"

function Home() {

    let posterPath = `${baseUrl}/uploads/`

    const[blogs, setBlogs] = useState([])

    useEffect(()=> {
        const fetchBlogsFunc = async()=> {
            try {
                const response = await axios.get(`${baseUrl}/blogs`)
                setBlogs(response.data)
            } catch (error) {
                console.log(error);
            }

        }
        fetchBlogsFunc()
    }, [])

    const [loading, setLoading] = useState(false)
    useEffect(()=> {
      setLoading(true)
      setTimeout(()=> {
        setLoading(false)
      }, 4500)
    }, [])

  return (
    <Container>
        <Navbar />
        <Banner/>
        <Container
            width="100%" height="100%"
            style={{ padding: "25px", display: "flex", flexDirection: "column", alignItems: "center", minHeight: "80vh" }}
        >    {loading ?
             <Typography size="45px" color="#242424" weight="300"
                style={{textAlign: "center", justifySelf: "center"}}
                >FETCHING BLOGS...
             </Typography> 
                : (   
                blogs.map(blog=> {
                    return <Blogcard key={blog._id} blog={blog} posterPath={posterPath} />
                })
        ) }
        </Container>
        <Footer/>
    </Container>
  )
}

export default Home