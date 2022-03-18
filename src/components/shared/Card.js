import PropTypes from 'prop-types'

function Card({ children, darkmode }) {
    return (
        <div className={`card ${darkmode && "reverse"}`}>{children}</div>
    )
}

Card.defaultProps = {
    darkmode: false,
}
Card.propTypes = {
    children: PropTypes.node.isRequired,
    darkmode: PropTypes.bool
}

export default Card