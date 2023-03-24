import MyHead from "../components/MyHead.tsx";
import Header from "../components/Header.tsx";

export default function Projects() {
    return (
        <>
            <MyHead/>
            <Header active={"/projects"}/>
            <div className="mx-auto max-w-screen-lg items-center flex flex-col justify-center gap-4 mb-14">
                <h1 className="text-4xl font-bold text-center my-4">Projects</h1>
            </div>
        </>
    )
}