import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
Heading1,
Column1,
} from "./FooterStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faLinkedin,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column1>
			<Heading1><img src={require('./FA_Logo.png')} /></Heading1>
			   <div className="social-Media">
			   <FooterLink>
		           	<a href="https://www.twitter.com/"
                     className="twitter social">
                     <FontAwesomeIcon icon={faTwitter} size="2x" />
                     </a>
			    </FooterLink>

			    <FooterLink>
			          <a href="https://www.youtube.com/"
                      className="youtube social">
                      <FontAwesomeIcon icon={faYoutube} size="2x" />
                      </a>
		       	</FooterLink>

		     	<FooterLink>
			         <a href="https://www.instagram.com/"
                      className="instagram social">
                      <FontAwesomeIcon icon={faInstagram} size="2x" />
                       </a>
			   </FooterLink>
			    
			   <FooterLink>
			          <a href="https://www.linkedin.com/"
                      className="linkedin social">
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                      </a>
			    </FooterLink>
			   </div>
			   <div className="foot">
			    <b>Contact Us</b>
			   </div>
		</Column1>

		<Column>
			<Heading>Categories</Heading>
			<FooterLink href="#">Athletes</FooterLink>
			<FooterLink href="#">Sports</FooterLink>
			<FooterLink href="#">Nutrition</FooterLink>
			<FooterLink href="#">Suppliments</FooterLink>
			<FooterLink href="#">Recovery & sleep</FooterLink>
			<FooterLink href="#">Training</FooterLink>
			<FooterLink href="#">Mental Performance</FooterLink>
		</Column>

		<Column>
			<Heading>Other Pages</Heading>
			<FooterLink href="#">Charities</FooterLink>
			<FooterLink href="#">About Us</FooterLink>
			<FooterLink href="#">Terms & Conditions</FooterLink>
			<FooterLink href="#">Privacy Policy</FooterLink>
			<FooterLink href="#">Return Policy</FooterLink>
			<FooterLink href="#">FAQ</FooterLink>
			<FooterLink href="#">Why Partner With Us</FooterLink>
		</Column>

		<Column>
		    <Heading>My Page</Heading>
			<FooterLink href="#">My Cart</FooterLink>
			<FooterLink href="#">Wishlist</FooterLink>
			<FooterLink href="#">My Account</FooterLink>
			<FooterLink href="#">My Orders</FooterLink>
		</Column>

		</Row>

	</Container>

	<hr/>
	<h6 style={{ color: "#fff",
				textAlign: "center",
				marginBottom:"30px",
				marginTop: "30px" }}>
		&copy;{new Date().getFullYear()} forAthletes | All rights reserved | Terms of Service | Privacy Policy
	    </h6>
		
	</Box>

);
};
export default Footer;