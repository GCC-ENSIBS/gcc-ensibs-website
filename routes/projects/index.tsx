import MyHead from "../../components/MyHead.tsx";
import Header from "../../components/Header.tsx";
import {AllText} from "../../utils/text.ts";

export default function Index() {
    return (
        <>
            <MyHead/>
            <Header active={"/projects"}/>
            <div className="max-w-screen-lg mx-auto p-4 my-8">
                <h1 className="text-4xl font-bold">{AllText.en.projects}</h1>
                <p className="text-xl">{AllText.en.projectsSubtitle}</p>
            </div>
        </>
    )
}