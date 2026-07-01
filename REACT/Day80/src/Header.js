import RestuHeader from "./Component/RestuHeader";
import { Outlet } from "react-router-dom";


export default function Header(){
    return (
        <>
        <RestuHeader/>
        <Outlet></Outlet>
        </>
    )
}

