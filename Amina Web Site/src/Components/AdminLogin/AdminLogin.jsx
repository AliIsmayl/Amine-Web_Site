import React from 'react'
import './AdminLogin.scss'
function AdminLogin() {
    return (
        <div className='adminLogin'>
            <form action="">
                <label htmlFor="">Going Admin</label>
                <input type="text" placeholder='Admin...' />
                <input type="password" placeholder='Password...' />
                <button>Go</button>
            </form>
        </div>
    )
}

export default AdminLogin