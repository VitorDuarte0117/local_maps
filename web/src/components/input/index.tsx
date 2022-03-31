import { Container, InputStyled } from "./styles";

interface InputProps {
    label: string;
    name: string;
    value: string;
    onChange: Function;
}

export default function Input(props: InputProps) {
    return (
        <Container>
            <label>{props.label}</label>
            <InputStyled
                required
                name={props.name}
                value={props.value}
                onChange={(e) => {
                    props.onChange((previousState: any) => ({
                        ...previousState,
                        [props.name]: e.target.value,
                    }));
                }}
            />
        </Container>
    );
}
