import { useState, useEffect } from 'react'
import Card from './Card.jsx'

const UserList = () => {
   
    const [ users, setUsers ] = useState([])
    const [ isLoading, setisLoading ] = useState(true)
    const [ error, setError ] = useState(null)
   
   useEffect(() => {
        (async () => {
            try {
            const url = 'https://raw.githubusercontent.com/rdappel/courses/master/support-files/ajs/users.json'
            const response = await fetch(url)
            if(!response.ok) {
                throw new Error('Failed to fatch users')}
            const data = await response.json()
            setUsers(data)
            }
            catch (err) {
                setError(err.message)
            }
            finally {
            setisLoading(false)}
        })()
   }, [])
   
   if (isLoading) return <div>Loading Users</div>
   if (error) return <div>Error: {error}</div>


    return (
       <div>
           <h2>Users</h2>
            <ul>
                {users.map(user => (
                    <Card key={user.id} user={user}></Card>
                    
                ))}
            </ul>
       </div>
   )
}

export default UserList