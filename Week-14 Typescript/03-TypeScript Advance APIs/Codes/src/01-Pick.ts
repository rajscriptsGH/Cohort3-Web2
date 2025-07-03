interface UserPfp {
    id: number;
    name: string;
    email: string;
    password: string
}
type UserProfile = Pick<UserPfp, 'name' | 'email'>;

function displayUserProfile(user: UserPfp) {
    console.log(`Name: ${user.name} Email: ${user.email}`);

}