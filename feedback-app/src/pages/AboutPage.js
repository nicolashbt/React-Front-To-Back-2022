import { Link } from 'react-router-dom'
import Card from "../components/shared/Card"

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>React app to leave feedback</p>
        <p>
          <Link to="/">Back To Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage