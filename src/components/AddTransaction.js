import React from 'react'

function AddTransaction() {
    return (
        <div>
            <h3>Add new transaction</h3>
            <form>
                <div className='form-control'>
                    <label htmlFor='text'>Text</label>
                    <input type='text' id='text' placeholder='Enter text....'></input>
                </div>
                <div class="form-control">
                   <label htmlFor="amount"
                   >Amount <br />
                   (negative - expense, positive - income)</label>
                   <input type="number" id="amount" placeholder="Enter amount..." />
                 </div>
            </form>
        </div>
    )
}

export default AddTransaction
