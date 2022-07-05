import { Typography } from '../styled-components/CustomComponent'
import { FooterBox } from '../styled-components/Layout'

const Footer = () => {
  return (
   <FooterBox>
    <Typography
        size="30px" color="#fff"
        style={{ marginBottom: "20px", textAlign: "center" }}
    >
        EDR-BLOG.
    </Typography>
    <Typography
        size="15px" color="#ddd"
        style={{ fontStyle: "italic" }}
    >
        Web dev Yilida Yalkun created, 2022 &copy;
    </Typography>
   </FooterBox>
  )
}

export default Footer