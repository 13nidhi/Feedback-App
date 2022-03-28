import { useState } from 'react';
//import Header from './component/Header';
//import FeedbackItem from './components/FeedbackItem';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import FeedbackData from './data/FeedbackData';


const App = () => {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    return (
    <>
        
        <div className='container'>
            <FeedbackForm />
            <FeedbackStats feedback={feedback}/>
            <FeedbackList feedback={feedback} 
                handleDelete={deleteFeedback}    
            />
        </div>
    </>
    )
}

export default App