function Actions( {handlePlusCount, handleMinusCount}) {
    return (
        <div className="btn">
            <button onClick={handleMinusCount}>-</button>
            <button onClick={handlePlusCount}>+</button>


        </div>
    )
}

export default Actions