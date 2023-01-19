import React from "react";

const UserInformation = ({ nextStep, handleChange, values }) => {
    return (
        <>
        <form>
            <label>Username
                <input 
                type="text" 
                placeholder="username" 
                value={values.username} 
                onChange={handleChange('username')}
                />
            </label>
            <label>Email
                <input 
                type="text" 
                placeholder="email" 
                value={values.email} 
                onChange={handleChange('email')}
                />
            </label>
            <label>Password
                <input 
                type="text" 
                placeholder="password" 
                value={values.password} 
                onChange={handleChange('password')}
                />
            </label>
        </form>
        </>
    )
}

export default UserInformation