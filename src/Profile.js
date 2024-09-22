import { useUser } from "./Contexts/UserContext";

export default function Profile(){
    const { user, loading } = useUser();

    if (loading) return <div>Loading...</div>;

    return (
        <div className="profile-page">
            <h1>{user.name}'s Profile</h1>
            <p>Email: {user.email}</p>
        </div>
    );
};