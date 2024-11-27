import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListUser() {
    const [users, setUsers] = useState([]); // Initialize with an empty array

    useEffect(() => {
        getUsers();
    }, []);

    // Fetch users from the API
    function getUsers() {
        axios.get("http://localhost:8888/api/users/")
            .then((response) => {
                if (Array.isArray(response.data)) { // Ensure data is an array
                    setUsers(response.data);
                } else {
                    console.error("API response is not an array:", response.data);
                    setUsers([]); // Reset to an empty array if response is invalid
                }
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
                setUsers([]); // Reset to an empty array if there's an error
            });
    }

    // Delete a user by ID
    const deleteUser = (id) => {
        axios.delete(`http://localhost:8888/api/user/${id}/delete`)
            .then((response) => {
                console.log(response.data);
                getUsers(); // Refresh the user list after deletion
            })
            .catch((error) => {
                console.error("Error deleting user:", error);
            });
    };

    return (
        <div>
            <h1>List Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(users) && users.length > 0 ? (
                        users.map((user, key) => (
                            <tr key={key}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.mobile}</td>
                                <td>
                                    <Link to={`user/${user.id}/edit`} style={{ marginRight: "10px" }}>
                                        Edit
                                    </Link>
                                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No users available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
