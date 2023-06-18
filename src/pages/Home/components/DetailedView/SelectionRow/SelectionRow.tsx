import React, { useState } from "react"
import { SelectionOptionsContainer, SelectionRowContainer } from "./SelectionRow.style"

export const SelectionRow = ()=>{
    const [selectedTabIndex, setSelectedTabIndex] = useState(0)

    return (
        <SelectionRowContainer>
            <SelectionOptionsContainer>Radar chart</SelectionOptionsContainer>
            <SelectionOptionsContainer>Metadata</SelectionOptionsContainer>
        </SelectionRowContainer>
    )   


}