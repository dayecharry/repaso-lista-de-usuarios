import User from "../User/User"


function ListUsers({ users }) {

    const usersHtml = users.map((item) => <li key={item.id}> <User data={item} /> </li>)

    return (
        <ul>
            {usersHtml}
        </ul>
    )
}

export default ListUsers