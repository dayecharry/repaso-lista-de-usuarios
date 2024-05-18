import { Link } from "react-router-dom"


function User({ data }) {
    return (
        <article>
            <Link to={`/detail/${data.id}`}>
                <img src={data.image} alt="" />
                <h3> {data.name}</h3>
                <p>{data.city}</p>
            </Link>
        </article>
    )
}

export default User