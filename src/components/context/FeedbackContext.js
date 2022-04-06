import { createContext, useState} from 'react';
import { v4 as uuidv4} from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from context',
            rating: 8
        },
        {
            id: 2,
            text: 'This item is from text 3',
            rating: 5
        }
    ]);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    //Delete Feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    //Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback])
    }

    //Set item to edit
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
         })
    }

    //Update Feedback
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => (item.id === id ? {...item, ...updItem} : item)))
    }

    return ( 
    <FeedbackContext.Provider value={{feedback,deleteFeedback, addFeedback, editFeedback, feedbackEdit, updateFeedback}}>
        {children}
    </FeedbackContext.Provider>
    )
}   

export default FeedbackContext
