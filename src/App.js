import { useState } from 'react';
//import Header from './component/Header';
import FeedbackItem from './components/FeedbackItem';
import FeedbackData from './data/FeedbackData';


const App = () => {
    const [feedback, setFeedback] = useState(FeedbackData)
    return (
    <>
        
        <div className='container'>
            <FeedbackItem />
        </div>
    </>
    )
}

export default App