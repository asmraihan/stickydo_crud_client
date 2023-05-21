import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const EditTodo = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle ">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Edit TODO</h3>

                        {/* form */}
                        <div className="card-body">
                            <form>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">ID</span>
                                    </label>
                                    <input type="text" name='email'  className="input input-bordered" disabled />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>
                                    <input type="text" name='title' placeholder="Title" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">ADescription</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered h-full" name='description' placeholder="Description"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <input type='submit' value='Update' className="btn btn-primary " />
                                </div>
                            </form>
                        </div>

                        <div className="modal-action">
                            <label htmlFor="my-modal-5" className="btn-outlined">Close</label>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default EditTodo;