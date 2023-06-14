import { useState, createContext } from 'react'

const Context = createContext();

const initalState = {
    action: "",
    type: "",
    code: "",
    area_province: "",
    area_district: "",
    area_ward: "",
    customer: "customer",
    province: "province",
    district: "district",
    ward: "ward",


    // listProvince: "...",
    // listDistrict: "...",
    // listWard: "...",
    // listDeviceProvince: "...",
    // listDeviceDistrict: "...",
    // listDeviceWard: "...",


}


export { Context }

const Store = ({ children }) => {
    const [state, setState] = useState(initalState);
    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    )
}

export default Store