interface User {
    id: number;
    name: string;
    email: string;
    password: string
}
type UserProfile = Pick<User, 'name' | 'email'>;

function displayUserProfile(user: User) {
    console.log(`Name: ${user.name} Email: ${user.email}`);

}