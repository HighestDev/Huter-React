import {FooterContainer, FooterGlobe, FooterLeftSide, FooterRightSide} from '../../Styles/Footer.styled';
import {GlobalOutlined,TwitterOutlined,FacebookOutlined,CodeTwoTone, LinkedinOutlined,CodeOutlined} from '@ant-design/icons'

function Footer() {
  return (
    <FooterContainer>
      <FooterLeftSide>
        <>
       <CodeOutlined className='footer_icon'/>
       <span className="reg">&reg;</span>
       </>
       <p className='vrom'> &copy;GeesssOnCodesss Ltd.2022</p>
      </FooterLeftSide>

      <FooterRightSide className='footer_right'>
        <TwitterOutlined className='icon twitter'/>
        <FacebookOutlined className='icon fb'/>
        <LinkedinOutlined className='icon linkIn'/>

        <FooterGlobe>      
        <GlobalOutlined className='icon globe'/>
          <span className="eng">English</span>
        </FooterGlobe>
        
      </FooterRightSide>

    </FooterContainer>
  )
}

export default Footer