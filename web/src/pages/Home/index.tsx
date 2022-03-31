import {
    Container,
    Title,
    Button,
    Image,
    LeftContainer,
    RightContainer,
    SubTitle,
    ButtonBox,
} from "./styles";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <Container>
            <LeftContainer>
                <Title>The local map of your City</Title>
                <SubTitle>Find everything you need at local shops!</SubTitle>

                <Link to="/new">
                    <Button>
                        <ButtonBox>{">"}</ButtonBox>
                        Register a commercial point
                    </Button>
                </Link>
            </LeftContainer>

            <RightContainer>
                <Image />
            </RightContainer>
        </Container>
    );
}
