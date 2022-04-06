import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//import Header from './component/Header';
//import FeedbackItem from './components/FeedbackItem';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './components/context/FeedbackContext';
import AboutIconLink from './components/AboutIconLink';


const App = () => {
  
    return (
    <FeedbackProvider>
    <Router>
        <div className='container'>
            <Routes>
            <Route exact path="/" element={
                <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
                </>
            }>
                
            </Route>
            
            <Route path="/about" element={<AboutPage />}/>
            </Routes>
            <AboutIconLink />
        </div>
    </Router>
    </FeedbackProvider>
    )
}

export default App