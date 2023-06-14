import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useMap } from 'react-leaflet';
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-geosearch/assets/css/leaflet.css'



const SearchBox = () => {

    // @ts-ignore

    const map = useMap();
    useEffect(() => {
        const searchIcon = new L.Icon({
            iconUrl: require('../assets/images/searchMarker.png'),
            iconSize: [40, 40]
        });
        const provider = new OpenStreetMapProvider({});
        const searchControl = new GeoSearchControl({
            marker: {
                icon: searchIcon,
                draggable: false,
            },
            provider: provider
        });
        map.addControl(searchControl);
        return () => map.removeControl(searchControl);
    }, []);
    return null;
};

export default SearchBox