import {
    Button,
    ButtonContainer,
    CategoryBox,
    CategoryContainer,
    CategoryImage,
    Container,
    Form,
    FormTitle,
    MapContainer,
    Section,
} from "./styles";
import Input from "../../components/input/index";
import { useState } from "react";

export default function New() {
    const [formValues, setFormValues] = useState({
        name: "",
        description: "",
        contact: "",
        category: "",
    });
    return (
        <Container>
            <Form>
                <FormTitle>Local trade register</FormTitle>

                <Section>Data</Section>
                <Input
                    label="Local name"
                    name="name"
                    value={formValues.name}
                    onChange={setFormValues}
                />
                <Input
                    label="Description"
                    name="description"
                    value={formValues.description}
                    onChange={setFormValues}
                />
                <Input
                    label="Contact"
                    name="contact"
                    value={formValues.contact}
                    onChange={setFormValues}
                />
            </Form>
        </Container>
    );
}
