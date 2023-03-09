import React, { useState } from "react";

const GoalForm = ({ allGoals, setAllGoals}) => {
    const [formData, setFormData] = useState({
      goal: "",
      by: ""
    });

    const handleGoal = (e) => {
      const newGoal = {
        goal: e.target.value,
        by: formData.by
      }
      setFormData(newGoal);
    }

    const handleBy = (e) => {
      const newBy = {
        goal: formData.goal,
        by: e.target.value
      }
      setFormData(newBy);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      const newGoals = [...allGoals, formData];
      setAllGoals(newGoals);
      setFormData({
        goal: "",
        by: ""
      })
    }
  
    return (
      <>
        <h1>My Goals</h1>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name='goal' 
            placeholder='Goal...'
            value={formData.goal}
            onChange={handleGoal}
          />
          <input 
            type="text"
            name="by"
            placeholder='By...'
            value={formData.by}
            onChange={handleBy}
          />
          <button type="submit">Add</button>
        </form>
      </>
    )
}

export default GoalForm;