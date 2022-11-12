

export default function Button({ text, className }) {
        return (
                <button className={className} >{text}</button>
        )
}

Button.defaultProps = {
        text: 'click me',
        className :' btn'
}
