export default function UsersMap(data: { id: number, name: string, username: string }[]) {
    return (
        <div>
            {
                data?.map((user: { id: number, name: string, username: string }) => (
                    <p>{user.name}</p>
                ))
            }
        </div>
    )
}