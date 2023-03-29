import Header from "../components/Header.tsx";
import MyHead from "../components/MyHead.tsx";
import {AllText} from "../utils/text.ts";

export default function Fame() {
    return (
        <>
            <MyHead/>
            <Header active={"/fame.ts"}/>
            <div className="max-w-screen-lg mx-auto p-4 my-8">
                <h1 className="text-4xl font-bold">{AllText.en.fame}</h1>
                <p className="text-xl">{AllText.en.fameSubtitle}</p>
            </div>
        </>
    )
}