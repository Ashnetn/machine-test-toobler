function TableData (props) {
    const {user}=props 



     return (
        <tr>
        <th scope="row">{user.id}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.gender}</td>
        <td>{user.status}</td>
      </tr>
     )
}

export default TableData