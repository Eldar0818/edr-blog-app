import { Image, ItemBox, Typography } from "../styled-components/CustomComponent"
import { Container } from "../styled-components/Layout"


const Banner = () => {
  return (
    <Container width="100%" height="50vh"
        style={{ backgroundColor: "#242424", position: "relative" }}
    >
        <Image 
            src='/imgs/banner.jpg'
            style={{ opacity: "0.5" }}
         />
    <ItemBox width="100%" height="100%" align="center" justify="center"
        style={{ position: "absolute", top: "0" }}
    >
        <ItemBox width="50%" height="50%" direction="column" justify="space-evenly"
        >
            <Typography size="20px" weight="300" color="#f0f0f0" >
            "Even if you fall on your face, you're still moving forward". - Victor Kiam
            </Typography>
            <Typography size="45px" weight="600" color="#fff" >
                EDR-BLOG.
            </Typography>
            <Typography size="21.5px" weight="400" color="#f0f0f0">
                Mutual benefit and sharing of knowledge
            </Typography>
        </ItemBox>
    </ItemBox>
    </Container>
  )
}

export default Banner