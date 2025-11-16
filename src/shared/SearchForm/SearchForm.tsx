import s from './SearchForm.module.css'
import type {ChangeEvent, FormEvent} from "react";

type PropsSearch = {
    handleSearchSubmit: (e: FormEvent<HTMLFormElement>) => void
    handleSearchInput: (e: ChangeEvent<HTMLInputElement>) => void
    searchQuery: string;

}

export const SearchForm = ({handleSearchInput,handleSearchSubmit,searchQuery}:PropsSearch) => {
    return(
        <form onSubmit={handleSearchSubmit} className={s.searchForm}>
            <input
                type="text"
                value={searchQuery}
                onChange={handleSearchInput}
                placeholder="Search for movies..."
                className={s.searchInput}
            />
            <button
                type="submit"
                className={s.searchButton}
                disabled={!searchQuery.trim()}
            >
                Search
            </button>
        </form>
    )
}