import styled from 'styled-components';

export const Box = styled.div`
margin: 0px 0px 0px 0px;
padding: 200px 57px 20px 57px;
background: black;
position: relative;
width: 91%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 90px;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 90px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 15px;
font-size: 15px;
text-decoration: none;

&:hover {
	color: aqua;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 20px;
color: white;
margin-bottom: 40px;
font-weight:bold;
`;


export const Column1 = styled.div`
display: flex;
float : left;
flex-direction: column;
text-align: left;
margin-left: 10px;
height: 100px;
border-right: 1px solid white;
  height: 400px;
  position: relative;
  left: 20%;
  top: 0;

`;

export const Heading1 = styled.p`
display: flex;
float : left;
flex-direction: row;
margin-left: -40px;
  position: relative;
  left: -45%;
  top: 0;
`;