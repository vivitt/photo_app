import { FooterDiv } from "../styledComponents";
function Footer({text}) {
    return (
        <FooterDiv className="footer">
            <p> {text} </p>
        </FooterDiv>
    )
}
export default Footer;