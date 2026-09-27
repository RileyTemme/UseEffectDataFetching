const Card = ({ user }) => {
    const cardStyle = {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        margin: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        backgroundColor: '#f9f9f9'
    }

    const avatarStyle = {
        width: '60px',
        height: '60px',
        borderRadius: '50%'
    }

    return (
        <div style={cardStyle}>
            <img src={user.avatar} alt={user.name} style={avatarStyle} />
            <div>
                <h3 style={{ margin: '0 0 4px 0' }}>{user.name}</h3>
                <p style={{ margin: '0', color: '#666' }}>{user.role}</p>
                <p style={{ margin: '4px 0 0 0', fontSize: '14px' }}>{user.email}</p>
            </div>
        </div>
    )
}

export default Card
