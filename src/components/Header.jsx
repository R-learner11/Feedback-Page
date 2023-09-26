
import PropTypes from 'prop-types'
function Header(props) {
  const headerStyles = {
    color: props.textColor,
    backgroundColor: props.bgColor
  }
  return (
    <header style={headerStyles}>
        <div className="container">
            <h2>{props.title}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    title: "Feedback UI",
    textColor: 'rgba(0,0,0,0.4)',
    bgColor:'#f5f6fa',
}


Header.propTypes = {
  title: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header