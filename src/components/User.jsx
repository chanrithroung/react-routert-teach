const User = ({username, email}) => {
    return(
        <>
            <h5> Username: {username} </h5>
            <h4>Email: <a href={email}> {email} </a></h4>
        </>
    );
}

export default User;