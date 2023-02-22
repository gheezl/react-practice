import { useUserContext } from "../../contexts/UserContext";

const Profile = () => {
    const {signIn, signUp, logOut} = useUserContext()

    return (
        // all of this is just to test, will be removed later
        <div>
            <h1 onClick={() => signUp("testemail@email.com", "123456")}>This is the profile page</h1>
            <h1 onClick={() => logOut()} >Sign out</h1>
            <h1 onClick={() => signIn("testemail@email.com", "123456")}>sign in</h1>
        </div>
    )
}

export default Profile;