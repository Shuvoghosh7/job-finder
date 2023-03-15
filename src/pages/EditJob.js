import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { changeJobs } from '../features/jobs/jobsSlice';
const EditJob = () => {
    const [title, setTitle] = useState("")
  const [type, setType] = useState("")
  const [salary, setSalary] = useState("")
  const [deadline, setDeadline] = useState("")
  const dispatch=useDispatch()
  const{editing}=useSelector(state => state.jobs)
  
  const navigate = useNavigate();

  // listen for edit mode active
  useEffect(()=>{
    const{title,type,salary,deadline}=editing || {}
    setTitle(title)
    setType(type)
    setSalary(salary)
    setDeadline(deadline)
  },[editing])

  const handealEdit=(e)=>{
    e.preventDefault();
    dispatch(changeJobs({
        id: editing?.id,
        data:{
            title:title,
            type:type,
            salary:salary,
            deadline:deadline
        }
    }))
    navigate("/")

  }
    return (
        <div class="lg:pl-[14rem] mt-[5.8125rem]">
            <main class="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
                <h1 class="mb-10 text-center lws-section-title">Edit Job</h1>

                <div class="max-w-3xl mx-auto">
                    <form class="space-y-6" onSubmit={handealEdit}>
                        <div class="fieldContainer">
                            <label class="text-sm font-medium text-slate-300">Job Title</label>
                            <select id="lws-JobTitle" name="title" required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}>
                                <option value="" hidden selected>Select Job</option>
                                <option>Software Engineer</option>
                                <option>Software Developer</option>
                                <option>Full Stack Developer</option>
                                <option>MERN Stack Developer</option>
                                <option>DevOps Engineer</option>
                                <option>QA Engineer</option>
                                <option>Product Manager</option>
                                <option>Social Media Manager</option>
                                <option>Senior Executive</option>
                                <option>Junior Executive</option>
                                <option>Android App Developer</option>
                                <option>IOS App Developer</option>
                                <option>Frontend Developer</option>
                                <option>Frontend Engineer</option>
                            </select>
                        </div>

                        <div class="fieldContainer">
                            <label>Job Type</label>
                            <select id="lws-JobType" name="type" required
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                                <option value="" hidden selected>Select Job Type</option>
                                <option>Full Time</option>
                                <option>Internship</option>
                                <option>Remote</option>
                            </select>
                        </div>

                        <div class="fieldContainer">
                            <label>Salary</label>
                            <div class="flex border rounded-md shadow-sm border-slate-600">
                                <span class="input-tag">BDT</span>
                                <input type="number" name="salary" id="lws-JobSalary" required
                                    value={salary}
                                    onChange={(e) => setSalary(e.target.value)} class="!rounded-l-none !border-0"
                                    placeholder="20,00,000" />
                            </div>
                        </div>

                        <div class="fieldContainer">
                            <label>Deadline</label>
                            <input type="date" name="deadline" id="lws-JobDeadline" required
                                value={deadline}
                                onChange={(e) => setDeadline(e.target.value)}
                            />
                        </div>

                        <div class="text-right">
                            <button type="submit" id="lws-submit" class="cursor-pointer btn btn-primary w-fit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default EditJob;