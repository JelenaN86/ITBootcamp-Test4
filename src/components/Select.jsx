const Select = ({options, onChange})=>{
    options = Array.from(new Set(options))

    return(
        <div>
            <label htmlFor ="selectNumberOfLaunches">Choose how much launches:</label>
            <select name="selectNumberOfLaunches" onChange={onChange}>
                <option value="">All</option>
                    {options.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
            <hr/>
        </div>
    )
}
export default Select