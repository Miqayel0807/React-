 function UserCard ({imgUrl, imgAlt, name, profession, phone, email, dif }) {
    return (
        <div className={dif? "usercard dif": "usercard"}>
            <h1>{name}</h1>
            <img src={imgUrl} alt={imgAlt}/>
            <p>{phone}</p>
            <p>{email}</p>
            <p>{profession}</p>
        </div>
    )
}

export default UserCard