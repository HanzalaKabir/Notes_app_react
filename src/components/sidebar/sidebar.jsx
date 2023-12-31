import "./sidebar.css"
import {AiOutlineHome} from "react-icons/ai"
import {BiArchiveIn} from "react-icons/bi"
import {MdLabelImportant} from "react-icons/md"
import {ImBin2} from "react-icons/im"
import { NavLink } from "react-router-dom"
import { useNotes } from "../../notesContext/notesContext"
 export function Sidebar(){
    let variableObject = useNotes();
    return (
        <div className="sidebar">
        <NavLink className={({isActive})=>`${isActive ?"btn-active" :""} btn`}   to="/" ><AiOutlineHome className="icon" size="20"/>Home</NavLink>
        {/* active==="#" ? " btn btn-active" : " btn " */}


        <NavLink className={({isActive})=>`${isActive ?"btn-active" :""} btn`}  to="/archived" ><BiArchiveIn className="icon" size="20"/>Archive</NavLink>


        <NavLink className={({isActive})=>`${isActive ?"btn-active" :""} btn`} to="/important"><MdLabelImportant className="icon" size="20"/>Important</NavLink>


        <NavLink className={({isActive})=>`${isActive ?"btn-active" :""} btn`} to="/bin"><ImBin2 className="icon" size="20"/>Bin</NavLink> 
        </div>
    )
 }