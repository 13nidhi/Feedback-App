import { useState } from 'react';
//import Header from './component/Header';
//import FeedbackItem from './components/FeedbackItem';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';


const App = () => {
    const [feedback, setFeedback] = useState(FeedbackData)
    return (
    <>
        
        <div className='container'>
            <FeedbackList feedback={feedback} />
        </div>
    </>
    )
}

export default App