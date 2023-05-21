import React from 'react';
import AddTodo from '../components/AddTodo';
import { useLoaderData } from 'react-router-dom';
import TodoCard from '../components/TodoCard';
import { FaArrowRight, FaBeer } from 'react-icons/fa';
const Home = () => {
    const todos = useLoaderData()
    console.log(todos.length)
    return (
        <div className="w-5/6 mx-auto space-y-10">
            {/* search */}
           <div className='flex justify-between items-center'>
           <div className="form-control">
                <div className="input-group">
                    <input type="text" placeholder="Search…" className="input input-bordered" />
                    <button className="btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>

            <AddTodo></AddTodo>
           </div>

            {/* todo cards */}
            <div className='mx-auto grid grid-cols-3 gap-10'>
                {
                    todos.map((todo) => <TodoCard
                    key={todo._id}
                    todo={todo}
                    ></TodoCard>)
                }

            </div>
                {/* btn */}
            <div className="svg-wrapper">
            <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
              <rect id="shape" height="40" width="150" />
            </svg>
            <div className="text" id="see_all_btn">
              <a to="/services" className="flex justify-center items-center">
                See All
                <FaArrowRight className="ml-2 mt-1" />
              </a>
            </div>
          </div>
          {/* btn end */}
          {/* another btn */}
          
          {/*  */}
        </div>
    );
};

export default Home;