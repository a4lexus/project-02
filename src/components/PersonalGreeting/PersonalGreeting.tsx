interface Props{
    name: string;
}

function PersonalGreeting(props: Props){

    const {name} = props;
    return <div>Hello, {name}!</div>;

}

export default PersonalGreeting;
