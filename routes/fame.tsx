import Header from "../components/Header.tsx";
import MyHead from "../components/MyHead.tsx";

export default function Fame() {
    return (
        <>
            <MyHead/>
            <Header active={"/fame.ts"}/>
            <div className="max-w-screen-lg mx-auto p-4 my-8">
                <h1 className="text-4xl font-bold">Hall of Fame</h1>
                <p className="text-xl">Our hall of fame. Thanks to our members.</p>
            </div>
        </>
    )
}