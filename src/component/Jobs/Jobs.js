import { useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { fetchJobs } from "../../features/jobs/jobsSlice";
import Sidebar from '../Sidebar/Sidebar';
import JobItem from './JobItem';
import Search from './Search';

const Jobs = () => {
    const dispatch=useDispatch()
    const { jobs, isLoading, isError} = useSelector(
        (state) => state.jobs
    );
    const { type:selectedType,search } = useSelector((state) => state.filter);

    useEffect(()=>{
        dispatch(fetchJobs(search))
    },[dispatch,search])

    const filterByType=job => {
        switch (selectedType) {
            case "Internship":
                return job.type === selectedType;
            case "Full Time":
                return job.type === selectedType;
            case "Remote":
                return job.type === selectedType;    
            default:
                return true;
        }
    
    }
    let content=null

    if (isLoading) content = <p>Loading...</p>;

    if (!isLoading && isError)
        content = <p className="error">There was an error occured</p>;

    if (!isLoading && !isError && jobs?.length > 0) {
        content = jobs.filter(filterByType).map((job) => (
            <JobItem key={job.id} job={job} />
        ));
    }

    if (!isLoading && !isError && jobs?.length === 0) {
        content = <p>No transactions found!</p>;
    }
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
                        {content}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Jobs;