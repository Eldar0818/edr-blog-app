import React, { useContext, useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Button, ContentInput, Image, Input, ItemBox, Typography } from '../styled-components/CustomComponent'
import { BlogCard, Container } from '../styled-components/Layout'
import { useLocation } from 'react-router-dom'
import { FaEdit } from 'react-icons/fa'
import { GoTrashcan } from 'react-icons/go'
import axios from 'axios'
import { baseUrl } from '../baseUrl'
import { UserContext } from '../Contexts/UserContext'

const SingleBlog = () => {

    let blogPath = useLocation().pathname.split("/")[1]

    const { user } = useContext(UserContext)
    
    const [targetBlog, setTargetBlog] =  useState({})

    const [updatedTitle, setUpdatedTitle] = useState("")
    const [updatedContent, setUpdatedContent] = useState("")
    const [onUpdate, setOnUpdate] = useState(false)
    
    useEffect(()=> {
        const FetchtargetBlog = async()=> {
            try {
                const response = await axios.get(`${baseUrl}/blogs/${blogPath}`)
                setTargetBlog(response.data)

                //in order to edit for update
                setUpdatedTitle(response.data.title)
                setUpdatedContent(response.data.content)
            } catch (error) {
                console.log(error);
            }
        }
        FetchtargetBlog()
    }, [ blogPath])

    const handleDeleteBlog = async()=> {
        try {
            await axios.delete(`${baseUrl}/blogs/${targetBlog._id}`,
                {
                    data: {username: user.username}
                }
            )
            window.location.replace('/')
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdateBlog = async()=> {
        try {
            await axios.put(`${baseUrl}/blogs/${targetBlog._id}`,
            { 
            username: user.username,
            title: updatedTitle,
            content: updatedContent
            }
        )
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }

  return (
   <Container>
         <Navbar />
        <Banner/>
        <Container width="100%"
            style={{ padding: "25px", display: "flex", flexDirection: "column", alignItems: "center"}}
        >
             <BlogCard direction="column" >
                        {
                            onUpdate ? <Input type="text" value={updatedTitle} onChange={e=> setUpdatedTitle(e.target.value)} style={{marginBottom: "20px"}} /> : (

                                    <Typography size="25px" weight="600" color="#242424"
                                        style={{marginBottom: "15px"}}
                                    >
                                        {targetBlog.title}
                                    </Typography>
                            )
                        }
                                    <ItemBox width="100%" height="500px"
                                         style={{marginBottom: "15px"}}
                                    >
                                        <Image src={targetBlog.poster} />
                                    </ItemBox>
                        {
                            targetBlog.username === user?.username && (

                                    <ItemBox width="100%" justify="flex-end" align="center"
                                        style={{ marginBottom: "15px" }}
                                    >
                                        <FaEdit 
                                            onClick={()=> setOnUpdate(true)}
                                            style={{ fontSize: "25px", cursor: "pointer", color: "royalblue", margin: "0 15px" }}
                                        />
                                        <GoTrashcan
                                            onClick={handleDeleteBlog}
                                            style={{ fontSize: "25px", cursor: "pointer", color: "crimson", margin: "0 15px" }}
                                        />
                                    </ItemBox>
                            )
                        }
                            {
                                onUpdate ? <ContentInput value={updatedContent}
                                        onChange={e=> setUpdatedContent(e.target.value)}
                                ></ContentInput> : (

                                    <Typography
                                        size="17.5px" weight="300" color="#242424"
                                    >
                                        {targetBlog.content}
                                    </Typography>
                                )
                            }

                            { onUpdate && <Button btnBg="royalblue" onClick={handleUpdateBlog} >Update</Button> }
                                  </BlogCard>
        </Container>
        <Footer />
   </Container>
  )
}

export default SingleBlog