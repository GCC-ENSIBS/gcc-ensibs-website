import Header from "../components/Header.tsx";
import MyHead from "../components/MyHead.tsx";

export default function Fame() {
    return  (
        <>
            <MyHead/>
            <Header active={"/fame.ts"}/>
            <div class="mx-auto max-w-screen-lg items-center flex flex-col justify-center gap-4 mb-14">
                <h1 class="text-4xl font-bold text-center my-4">Hall of Fame</h1>
            </div>
            </>
    )
}