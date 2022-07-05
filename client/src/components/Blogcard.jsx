import { Button, Image, ItemBox, Typography } from "../styled-components/CustomComponent"
import { BlogCard } from "../styled-components/Layout" 
import { AiFillClockCircle } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { Link } from "react-router-dom"

const Blogcard = ({ blog }) => {
  return (
    <BlogCard>

        <ItemBox style={{flex: "1", height: "500px", padding: "20px"}} >
            <Image src={ blog.poster} />
        </ItemBox>

        <ItemBox style={{flex: "1", padding: "20px"}} 
            direction="column" align="center" justify="center" 
        >
            <ItemBox style={{margin: "15px 0"}} >
                <ItemBox style={{margin: "0 10px"}} align="center" >
                    <FaUserAlt className="icon"/>
                    <Typography size="17.5px" weight="300" style={{textTransform: "capitalize"}} >{blog.username}</Typography>
                </ItemBox>
                <ItemBox style={{margin: "0 10px"}} align="center" >
                    <AiFillClockCircle className="icon"/>
                    <Typography size="17.5px" weight="300">{new Date(blog.createdAt).toDateString()}</Typography>
                </ItemBox>
            </ItemBox>

            <Typography style={{margin: "15px 0", textAlign: "center"}}
                size="20px" weight="600"
            >
                {blog.title}
            </Typography>
            <Typography style={{margin: "15px 0", textAlign: "center"}}
                 size="17.5px" weight="300"
            >
                {blog.content.substring(0, 200)}...
            </Typography>
            <Link to={`/${blog._id}`} >
                <Button btnBg="#242424" >Read More</Button>
            </Link>
        </ItemBox>

    </BlogCard>
  )
}

export default Blogcard