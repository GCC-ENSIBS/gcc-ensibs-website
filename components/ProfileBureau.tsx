interface Props {
    picture: string;
    name: string;
    job: string;
}


export default function ProfileBureau({picture, name, job}: Props) {
    return (
        <div class="flex flex-col m-8 items-center gap-2">
            <img src={picture} class={"w-32 mx-auto shadow-xl rounded-full"}/>
            <p class="text-2xl font-bold text-center">{name}</p>
            <p class="text-md text-center font-italic">{job}</p>
        </div>
    )
}