import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { tagRemoved, tagSelected } from '../../features/filter/filterSlice';


const Sidebar = () => {
    const dispatch = useDispatch()
    const { tags } = useSelector((state) => state.filter);

    const handleSelect = (x) => {
        dispatch(tagSelected(x));
    };

    return (
        <div class="sidebar">
            <nav>
                <ul class="space-y-4">
                    <li>
                        <button class="main-menu menu-active" id="lws-alljobs-menu" >
                            <i class="fa-solid fa-briefcase"></i>
                            <span> All Available Jobs</span>
                        </button>
                        <ul class="space-y-6 lg:space-y-2 ">
                            <li>
                                <button class="sub-menu" id="lws-internship-menu" onClick={() => handleSelect("Internship")}>
                                    <i class="fa-solid fa-stop !text-[#FF5757]"></i>
                                    Internship
                                </button>
                            </li>
                            <li>
                                <button class="sub-menu" id="lws-fulltime-menu" onClick={() => handleSelect("Full Time")}>
                                    <i class="fa-solid fa-stop !text-[#FF8A00]"></i>
                                    Full Time
                                </button>
                            </li>
                            <li>
                                <button class="sub-menu" id="lws-remote-menu" onClick={() => handleSelect("Remote")}>
                                    <i class="fa-solid fa-stop !text-[#56E5C4]"></i>
                                    Remote
                                </button>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="add-job" class="main-menu" id="lws-addJob-menu">
                            <i class="fa-solid fa-file-circle-plus"></i>
                            <span>Add NewJob</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;