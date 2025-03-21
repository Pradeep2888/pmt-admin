

function ChatLeftUserCard() {
    return (
        <div className='user-chat-card d-flex justify-content-between' >
            <div className=' d-flex gap-1' >
                <div className='chat-user-img' >
                    <img src='https://bit.ly/dan-abramov' />
                </div>
                <div className='d-flex flex-column justify-content-center' >
                    <span className='chat-user-name' >Verona Schultz</span>
                    <span className='chat-user-status' >Typing ...    </span>
                </div>
            </div>
            <div> <span className='chat-user-status' >11/02/2022</span></div>
        </div>
    )
}

export default ChatLeftUserCard
