
interface Props{
    avatar: string;
    name: string;
    description: string;
}

function ProfileCard(props:Props){
    const {avatar,name,description} = props;
    return <div>
        
        <img src={avatar} alt="User avatar" width={"200px"}/>
        <h2> {name} </h2>
        <p>{description} </p>
    </div>

};

export default ProfileCard