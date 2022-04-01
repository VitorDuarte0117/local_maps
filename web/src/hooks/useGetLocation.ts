import { useState, useEffect } from "react";

const defaultCoords = [-23.55052, -46.633308];
export default function useGetLocation() {
    const [coords, setCoords] = useState<number[] | null>(null);

    useEffect(() => {
        function onSuccess(position: GeolocationPosition) {
            setCoords([position.coords.latitude, position.coords.longitude]);
        }
        function onError() {
            console.error("Error on get the location");
            setCoords(defaultCoords);
        }
        try {
            //Trying to get the location from the user and if doesn't succeed,then im defining a default location
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        } catch (error) {
            setCoords(defaultCoords);
        }
    }, []);
    return { coords };
}
