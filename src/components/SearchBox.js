import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useMap } from 'react-leaflet';
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-geosearch/assets/css/leaflet.css'



const SearchBox = () => {
    const customIcon = new L.Icon({
        iconUrl: require('../assets/images/marker-icon-2x.png'),
        iconSize: [25, 41]
    });
    const provider = new OpenStreetMapProvider({});

    // @ts-ignore
    const searchControl = new GeoSearchControl({
        marker: {
            icon: customIcon,
            draggable: false,
        },
        provider: provider
    });

    const map = useMap();
    useEffect(() => {
        map.addControl(searchControl);
        return () => map.removeControl(searchControl);
    }, []);
    return null;
};

export default SearchBox