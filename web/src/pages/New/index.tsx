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
import { LatLngExpression, LeafletMouseEvent } from "leaflet";
import { TileLayer, Marker } from "react-leaflet";
import { categories } from "./categories";
import useGetLocation from "../../hooks/useGetLocation";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function New() {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        name: "",
        description: "",
        contact: "",
        category: "",
        coords: [0, 0],
    });
    // This is what brings  all the code from the hook getUserLocation
    const { coords } = useGetLocation();

    // Requisition to the server
    async function onSubmit() {
        const request = await fetch("http://localhost:3000/store", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...formValues,
                latitude: formValues.coords[0],
                longitude: formValues.coords[1],
            }),
        });

        if (request.ok) {
            toast("Establishment successfully recorded!", {
                type: "success",
                autoClose: 2000,
                onClose: () => navigate("/"),
            });
        }
    }

    if (!coords) {
        return <h1>Getting the location...</h1>;
    }

    return (
        <Container>
            <Form
                onSubmit={(ev) => {
                    ev.preventDefault();
                    onSubmit();
                }}
            >
                <FormTitle>Local business register</FormTitle>

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

                <Section>Address</Section>

                <MapContainer
                    center={
                        {
                            lat: coords[0],
                            lng: coords[1],
                        } as LatLngExpression
                    }
                    zoom={13}
                    // Add the "pointer" on the map when clicked
                    whenCreated={(map) => {
                        map.addEventListener(
                            "click",
                            (event: LeafletMouseEvent) => {
                                setFormValues((prev) => ({
                                    ...prev,
                                    coords: [
                                        event.latlng.lat,
                                        event.latlng.lng,
                                    ],
                                }));
                            }
                        );
                    }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <Marker
                        // Add the "pointer" on the map when clicked
                        position={
                            [
                                formValues.coords[0],
                                formValues.coords[1],
                            ] as LatLngExpression
                        }
                    />
                </MapContainer>
                <Section>Categories</Section>
                <CategoryContainer>
                    {categories.map((category) => (
                        <CategoryBox
                            key={category.key}
                            //On click,for example on the pharmacy,will change the value of FormValues to pharmacy
                            onClick={() => {
                                setFormValues((prev) => ({
                                    ...prev,
                                    category: category.key,
                                }));
                            }}
                            isActive={formValues.category === category.key}
                        >
                            <CategoryImage src={category.url} />
                            {category.label}
                        </CategoryBox>
                    ))}
                </CategoryContainer>
                <ButtonContainer>
                    <Button type="submit">Save</Button>
                </ButtonContainer>
            </Form>
        </Container>
    );
}
