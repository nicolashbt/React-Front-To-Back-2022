import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackData from './data/FeedbackData'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this comment?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    
    return (
        <>
            <Header />
            <FeedbackStats feedback={feedback} />
            <FeedbackList feedback={feedback} handleDelete={handleDelete} />
        </>
    )
}
export default App