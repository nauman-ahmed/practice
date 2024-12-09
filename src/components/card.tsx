type TUser = {
    name: string,
    age?: number,
    isActive?: boolean
}

const UserCard: React.FC<TUser> = ({ name, age, isActive = true }) => {
    
    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", width: "250px" }}>
            <h2>User Card</h2>
            <p><strong>Name:</strong> {name}</p>
            {age !== undefined && <p><strong>Age:</strong> {age}</p>}
            <p><strong>Status:</strong> {isActive ? "Active" : "Inactive"}</p>
        </div>
    )
}

export default UserCard