import React, { useEffect, useState } from 'react';
import { FaAngleDoubleRight, FaCheckCircle, FaEdit, FaTimesCircle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import EditTodo from './EditTodo';


const TodoCard = ({ todo }) => {
    // const [edit, setEdit] = useState({})
    const { _id, email, title, description } = todo
    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/todos/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Todo has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    // const handleEdit = (_id) => {
    //     fetch(`http://localhost:5000/todos/${_id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setEdit(data)
    //         })
    // }
    return (
        <div className='card'>
            {/*edit modal  */}
           <EditTodo 
           ></EditTodo>
            {/*  */}
            <section className="absolute h-96 w-80 transform rounded-2xl bg-orange-300" />
            <section className="h-96 w-80 transform  rounded-2xl bg-orange-50 hover:bg-orange-100 p-6 duration-300 hover:scale-95">
                {/* <section className="h-80 rounded-2xl bg-orange-50 p-10 duration-300 hover:bg-orange-100"> */}
                <div className="flex justify-end">
                    <div className="h-4 w-4 rounded-full bg-gray-900" />
                </div>
                {/* year.month.day */}
                <header className="text-xl font-extrabold text-gray-600 absolute top-4">
                    2021.09.01
                </header>
                <div>
                    <p className="text-4xl font-extrabold text-[#FE5401]">
                        {title}
                    </p>
                </div>
                <div className="">
                    <FaAngleDoubleRight className='mt-1.5 text-2xl font-extrabold text-gray-900 '></FaAngleDoubleRight>
                    <p className='text-lg font-bold'>
                        {description}
                    </p>
                </div>
                <footer className="flex gap-8 justify-center absolute bottom-3 left-1/2 -translate-x-1/2 -translate-y-1/2">

                    <button className="flex gap-1 items-center rounded-lg bg-[#7def69] text-lg hover:scale-110 transition-all duration-300 p-2  font-bold text-white hover:bg-[#4cb634]">
                        <FaCheckCircle></FaCheckCircle>
                    </button>
                    <label htmlFor="my-modal-5" className="flex gap-1 items-center rounded-lg bg-[#fe9647] text-lg hover:scale-110 transition-all duration-300 p-2 font-bold text-white hover:bg-[#E56707]">
                        <FaEdit></FaEdit>
                    </label>
                    <button onClick={() => handleDelete(_id)} className="flex gap-1 items-center rounded-lg bg-[#db8484] text-lg hover:scale-110 transition-all duration-300 p-2  font-bold text-white hover:bg-[#e50707]">
                        <FaTimesCircle></FaTimesCircle>
                    </button>
                    {/* <label htmlFor="my-modal-5" className="btn-primary">Create TODO</label> */}
                </footer>
           
            </section>
        </div>
    );
};

export default TodoCard;