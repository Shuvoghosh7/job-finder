import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import JobItem from './JobItem';
import Search from './Search';

const Jobs = () => {
    return (
        <div class="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
            <div>
                <Sidebar />
            </div>
            <div class="lg:pl-[14rem]  mt-[5.8125rem]">
                <main class="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
                    <div class="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
                        <h1 class="lws-section-title">All Available Jobs</h1>
                        <Search/>
                    </div>

                    <div class="jobs-list">
                        <JobItem/>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Jobs;