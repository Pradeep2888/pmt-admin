

function Searchbar() {
    return (
        <div className="input-group my-auto search-bar">
            <span className="input-group-text search-bar-icon" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12.0206 11.0777L14.8759 13.9323L13.9326 14.8757L11.0779 12.0203C10.0157 12.8718 8.69459 13.3349 7.33325 13.333C4.02125 13.333 1.33325 10.645 1.33325 7.33301C1.33325 4.02101 4.02125 1.33301 7.33325 1.33301C10.6453 1.33301 13.3333 4.02101 13.3333 7.33301C13.3352 8.69434 12.8721 10.0155 12.0206 11.0777ZM10.6833 10.583C11.5293 9.71293 12.0018 8.54663 11.9999 7.33301C11.9999 4.75501 9.91125 2.66634 7.33325 2.66634C4.75525 2.66634 2.66659 4.75501 2.66659 7.33301C2.66659 9.91101 4.75525 11.9997 7.33325 11.9997C8.54687 12.0016 9.71317 11.5291 10.5833 10.683L10.6833 10.583Z" fill="#3954A5" />
            </svg></span>
            <input type="text" className="form-control search-bar-input-box" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
    )
}

export default Searchbar
