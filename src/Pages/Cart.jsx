
import { Add, Remove} from "@material-ui/icons";
import styled from "styled-components"
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div`

`;
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding: "10px"})}
   
   
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;

`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type=== "filled" && "none"};
    background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"};
    color: ${(props)=>props.type === "filled" && "white"};

`;

const TopTexts = styled.div`
    ${mobile({display: "none"})}

`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
    
    
`;
const Info = styled.div`
    flex:3;   
`;

const Product =styled.div`
     display: flex; 
     ${mobile({flexDirection: "column"})}
`;

const ProductDetail =styled.div`
    flex: 2; 
    display: flex;
`;

const Image = styled.img`
    width: 200px;
    
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;


const ProductName = styled.span`
    margin-bottom: 20px;
`;

const ProductId = styled.span`
    margin-bottom: 20px;
`;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin-bottom: 20px;
`;

const ProductSize = styled.span`

`;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin: "5px 15px"})}
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom: "20px"})}
`;

const Hr = styled.hr`
    background-color: #d8d4d4;
    border: none;
    height: 1px;

`;


const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
    
    
   
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
    
   
`;


const SummaryItem = styled.div`
    margin: 30px 0px ;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type==="total" && "500"};
    font-size: ${props=>props.type==="total" && "24px"};
    
   
`;


const SummaryItemText = styled.span`
    
   
`;

const SummaryItemPrice = styled.span`
    
   
`;

const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;

   
`;



const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                                <Image src="https://www.kindpng.com/picc/m/357-3577910_nike-transparent-shoe-nike-air-max-270-hd.png"/>
                                <Details>
                                    <ProductName><b>Product:</b> JESSIE THUDER SHOES</ProductName>
                                    <ProductId><b>ID:</b> 12345678</ProductId>
                                    <ProductColor color= "black"/>
                                    <ProductSize><b>Size:</b> 37.5</ProductSize>
                                </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>

                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                                <Image src="https://www.kindpng.com/picc/m/357-3577910_nike-transparent-shoe-nike-air-max-270-hd.png"/>
                                <Details>
                                    <ProductName><b>Product:</b> JESSIE THUDER SHOES</ProductName>
                                    <ProductId><b>ID:</b> 12345678</ProductId>
                                    <ProductColor color= "black"/>
                                    <ProductSize><b>Size:</b> 37.5</ProductSize>
                                </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>

                        </PriceDetail>
                    </Product>
               
                  
                    

                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$80</SummaryItemPrice> 
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$5.90</SummaryItemPrice> 
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice> 
                    </SummaryItem>
                    <SummaryItem type= "total">
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>  
                    </SummaryItem>
                    <SummaryButton>CHECKOUT NOW</SummaryButton>
                </Summary>
            </Bottom>

        </Wrapper>
        <Footer/>

    </Container>
  )
}

export default Cart