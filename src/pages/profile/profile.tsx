import { useUserContext } from "../../contexts/UserContext";

const Profile = () => {
    const {signIn, signUp, signOut} = useUserContext()

    return (
        <div>
            <h1 onClick={() => signUp("testemail@email.com", "123456")}>This is the profile page</h1>
        </div>
    )
}

export default Profile;