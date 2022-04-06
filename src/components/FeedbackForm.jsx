import { useState, useContext } from "react";
import RatingSelect from "./RatingSelect";
import Card from "./shared/Card";
import Button from "./shared/Button";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import FeedbackContext from "./context/FeedbackContext";

const FeedbackForm = () => {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled]  = useState(true);
    const [message, setMessage] = useState(''); 

    const {addFeedback} = useContext(FeedbackContext);

    const handleTextChange = (e) => {
        if (text === ''){
            setBtnDisabled(true);
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            addFeedback(newFeedback);
            setText('');
        }
    }

    return (
        <Card reverse={true}>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={setRating} selected={rating} />
                <div className="input-group">
                    <input type='text' onChange={handleTextChange} value={text} className="input-card" placeholder="Write a review" />
                    <Button type="submit" version="secondary" isDisabled={btnDisabled} className="input-card">Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form> 
        </Card>
    )
}

export default FeedbackForm;