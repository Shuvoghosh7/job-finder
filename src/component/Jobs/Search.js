import { useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searched } from "../../features/filter/filterSlice";

const Search = () => {
    const dispatch = useDispatch();
    const { search } = useSelector((state) => state.filter);
    const [input, setInput] = useState(search);
    const match = useMatch("/");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searched(input));

        // if user is not in home page, redirect to home page
        if (!match) {
            navigate("/");
        }
    };
    return (
        <div class="flex gap-4">
            <form onSubmit={handleSubmit}>
                <div class="search-field group flex-1">
                    <i class="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
                    <input type="text" placeholder="Search Job" class="search-input" id="lws-searchJob" value={input}
                        onChange={(e) => setInput(e.target.value)} />
                </div>

            </form>
            <select id="lws-sort" name="sort" autocomplete="sort" class="flex-1">
                <option>Default</option>
                <option>Salary (Low to High)</option>
                <option>Salary (High to Low)</option>
            </select>
        </div>
    );
};

export default Search;