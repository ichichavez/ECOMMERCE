import { Badge } from '@material-ui/core';
import { SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({height: "50px"})}
`;
const Wrapper = styled.div`
  padding: 10px 20px; 
  justify-content : space-between ;
  display: flex;
  display: flex;
  align-items: center;
  ${mobile({padding: "10px 0px"})}
  

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;


`;

const SearchContainer = styled.div`
  border: 1px solid lightgrey;
  padding: 5px;
  display: flex;



`;

const Language = styled.span`
  font-size: 14px;
  padding-left: 5px;
  font-weight: bold;
  cursor: pointer;
  ${mobile({display: "none"})}
  
`;

const Input = styled.input`
  border: none;
  color: gray;
  ${mobile({width: "50px"})}
  
`

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({justifyContent: "center"})}
`;

const Logo = styled.h1`
  font-weight: 600;
  ${mobile({fontSize: "24px"})}

`
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-left: 25px;
  
  ${mobile({justifyContent: "center",flex:2})}
  
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  padding-left: 25px;
  ${mobile({fontSize:"12px", paddingLeft:"10px"})}
  
`;


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Language>EN</Language>
          
            <Input placeholder = "Search"/>
            <SearchOutlined style={{color:"gray", fontSize:16}} />
         </SearchContainer>
          
        </Left>
        <Center>
          <Logo>LAMA.</Logo>
        </Center>
        <Right>
           <MenuItem>REGISTER</MenuItem>
           <MenuItem>SIGN IN</MenuItem>
           <MenuItem>
                  <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlined color="action" />
                  </Badge>
           </MenuItem>
          
        </Right>
      </Wrapper>
    </Container>
  )
  
};

export default Navbar