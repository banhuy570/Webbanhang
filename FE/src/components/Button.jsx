import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {

    const bg = props.backgroundColor ? 'bg-' + props.backgroundColor : 'bg-main'
    const size = props.size ? 'btn-' + props.size : ''
    const animate = props.animate ? 'btn-animate' : ''
    const children = props.children
    const icon = props.icon
    const onClick = props.onClick
    return (
        <button
            className={`btn ${bg} ${size} ${animate}`} style={{marginBottom:"10px"}}
            onClick={onClick ? () => onClick() : null}
        >
            <span className="btn__txt" >{children}</span>
            {
                icon ? (
                    <span className="btn__icon">
                        <i className={`${icon} bx-tada`}/>
                    </span>
                ) : null
            }
        </button>
    )
}

Button.propTypes = {
    backgroundColor: PropTypes.string,
    size: PropTypes.string,
    icon: PropTypes.string,
    animate: PropTypes.bool,
    onclick: PropTypes.func
}

export default Button
