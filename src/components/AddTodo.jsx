import React from 'react';
import Swal from 'sweetalert2'
const AddTodo = () => {

    const handleAddTodo = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const email = form.email.value;
        const description = form.description.value;

        const newTodo = {
            email,
            title,
            description,
        }
        console.log(newTodo);
        // send data to server
        fetch(`http://localhost:5000/addTodo`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newTodo)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'Todo Added Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="my-modal-6" className="btn-primary">Create TODO</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle ">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Add a new TODO</h3>

                    {/* form */}
                    <div className="card-body ">
                        <form onSubmit={handleAddTodo}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" name='title' placeholder="Title" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea className="textarea textarea-bordered h-full" name='description' placeholder="Description" ></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' value='Add' className="btn btn-primary "/>
                            </div>
                        </form>
                    </div>

                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn-outlined">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTodo;