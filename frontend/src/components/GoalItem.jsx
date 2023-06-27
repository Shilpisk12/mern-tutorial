import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'
import moment from 'moment';

function GoalItem({ goal }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
      <h2>{goal.text}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default GoalItem