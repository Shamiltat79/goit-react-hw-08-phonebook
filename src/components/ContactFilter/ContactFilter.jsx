import { useSelector, useDispatch } from "react-redux";
import { setFilterValue} from "redux/filterSlice";
import { selectFilter } from "redux/selectors";
import { FilterContainer, StyledInput, StyledLabel } from "./ContactFilterStyled";

export const ContactFilter = () => {
    const dispatch = useDispatch();
    const filterValue = useSelector(selectFilter);
    const handleFilter = evt => dispatch(setFilterValue(evt.target.value)); 
    return(
<FilterContainer>
<StyledLabel>Find contacts by name
    <StyledInput 
    type="text"
    name="filter"
    value={filterValue}
    onChange={handleFilter} 
    />
    
</StyledLabel>
</FilterContainer>
    );
}