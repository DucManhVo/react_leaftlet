import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useMap } from 'react-leaflet';
import { useEffect } from 'react';
import 'leaflet-geosearch/assets/css/leaflet.css'

const SearchBox = () => {
    const provider = new OpenStreetMapProvider({

    });


    // @ts-ignore
    const searchControl = new GeoSearchControl({
        provider: provider,
    });

    const map = useMap();
    useEffect(() => {
        map.addControl(searchControl);
        return () => map.removeControl(searchControl);
    }, []);

    return null;
};

export default SearchBox