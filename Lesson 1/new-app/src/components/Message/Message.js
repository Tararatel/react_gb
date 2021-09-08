import './style.css';

const Message = ({messageProps}) => {
    return (
        <div className="message">
            {messageProps}
        </div>
    )
}

export default Message;