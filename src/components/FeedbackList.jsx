import { useContext } from "react"
import Feedbackitem from "./Feedbackitem"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackList() {
    const {feedback} = useContext(FeedbackContext)
    if (!feedback || feedback.length === 0){
        return <p>No Feedback yet!</p>
    }

  return ( 
    <div>
        <div className="feedback-list">
            {feedback.map((item) => {
                return(
                    <Feedbackitem 
                    key ={item.id} 
                    item={item}
                    />
                )
            })}
        </div>
    </div>
  )
}

// FeedbackList.propTypes= {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired,
//         })
//     )
// }

// key={item.id} item={item}
export default FeedbackList