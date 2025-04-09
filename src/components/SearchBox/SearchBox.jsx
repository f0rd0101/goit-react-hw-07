import { useDispatch, useSelector } from 'react-redux'
import s from '../SearchBox/SearchBox.module.css'
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice'
import { useId } from 'react'

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);
  const id = useId();

  return (
    <div className={s.search_div}>
      <form>
        <label>Find contacts by name</label>
        <input 
          id = {id}
          type="text" 
          value={value}  
          onChange={(evt) => {dispatch(changeFilter(evt.target.value)) }} 
        />
      </form>
    </div>
  )
}

export default SearchBox
