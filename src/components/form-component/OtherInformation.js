import React from "react";

const OtherInformation = ({ nextStep, handleChange, values }) => {
    return (
        <>
        <form>
            <label>Country
                <input 
                type="text" 
                placeholder="country" 
                value={values.country} 
                onChange={handleChange('country')}
                />
            </label>
            <label>Sex
                <input 
                type="text" 
                placeholder="sex" 
                value={values.sex} 
                onChange={handleChange('sex')}
                />
            </label>
            <label>Age
                <input 
                type="number" 
                placeholder="age" 
                value={values.age} 
                onChange={handleChange('age')}
                />
            </label>
        </form>
        </>
    )
}

export default OtherInformation