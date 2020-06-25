import React from 'react';

export const AddTranscation = () => {
    return (
        <div>
            <h3>Add New Transcation</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" placeholder="Income 1"/>
                </div>
                <div className="form-control">
                    <lable htmlFor="transcationamount">Transcation Amount</lable>
                    <input type="number" id="transcationamount" placeholder="Enter amount"/>
                </div>
                <button className="btn">Add transcation</button>
            </form>
        </div>
    );
}