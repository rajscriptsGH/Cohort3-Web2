interface UserPartial {
    id: number;
    name: string;
    email: string;
    password: string
}
type UpdatedProps = Pick<UserPartial, 'name' | 'email'>;
type UpdatedPropsOptional = Partial<UpdatedProps>

function updateUser(updatedProps: UpdatedPropsOptional) {

    console.log(`Name: ${updatedProps.name}`);

}