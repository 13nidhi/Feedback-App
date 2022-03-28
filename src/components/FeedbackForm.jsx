import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const FeedbackForm = () => {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled]  = useState(true);
    const [message, setMessage] = useState(''); 

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

    return (
        <Card reverse={true}>
            <form>
                <h2>How would you rate your service with us?</h2>
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