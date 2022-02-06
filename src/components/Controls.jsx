import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { CustomSelect } from './CustomSelect';
import Search from './Search';

const options = [
    {value:"Africa", label:"Africa"},
    {value:"America", label:"America"},
    {value:"Europa", label:"Europa"},
    {value:"Asia", label:"Asia"},
    {value:"Oceania", label:"Oceania"}
]

const Wrapper =styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;

@media(min-width: 767px){
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
}
`

function Controls(props) {
    const [search, setSearch] = useState("")
    const [region, setRegion] = useState("")
    return (
        <Wrapper>
          <Search search={search} setSearch={setSearch} />
          < CustomSelect 
            options={options} 
            placeholder="Filter by region" 
            isClearable 
            isSearchable={false}
            onChange={setRegion}
            value={region}
         />
        </Wrapper>
    );
}

export default Controls;