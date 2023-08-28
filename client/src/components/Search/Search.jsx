
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getGamesByName, cleanSearch } from '../../Redux/Actions/actions'

import { DATA_ERRORS } from '../../Redux/Actions/actionType';
import { ModalErrores } from "../index";

import style from './Search.module.css'


const Search = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('');
    
    const nameHandle = (e) => {
        const {name, value} = e.target;
        setName(value)
    }
    const searchHandle = (name) => {
        dispatch(getGamesByName(name))
    }

    const cleanHandle = (e) => {
        e.preventDefault()
        dispatch(cleanSearch())
        document.getElementById('inputbyname').value = ''
        setName('')
    }

    const cierreModal = () => {
        dispatch({type:DATA_ERRORS, payload: {}})
    }
    return  (
        <div>
            <ModalErrores cierreModal={cierreModal}/>
            <input type="text" id='inputbyname' placeholder="Search by name..." onChange={nameHandle} className={style.entrada}/>
            <button onClick={()=>searchHandle(name)} className={style.buscar}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button>
            <button onClick={cleanHandle} className={style.borrar}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
</svg></button>
        </div>
    )
}

export default Search;