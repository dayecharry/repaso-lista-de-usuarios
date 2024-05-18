import { Link, useParams } from "react-router-dom"


function DetailUser({ data }) {
    const { idUser } = useParams()
    const findUser = data.find((user) => user.id === idUser)
    return (
        <>
            <article>
                <img src={findUser.image} alt="" />
                <h3>{findUser.name} </h3>
                <p>{findUser.phone}</p>
                <p>{findUser.email}</p>
            </article>
            <Link to="/" className="button"> IR A HOME </Link>
        </>
    )
}

export default DetailUser