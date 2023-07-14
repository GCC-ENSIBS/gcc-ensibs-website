import MyHead from "../components/MyHead.tsx";
import Header from "../components/Header.tsx";
import ProfileBureau from "../components/ProfileBureau.tsx";

export default function About() {
    return (
        <>
            <MyHead/>
            <Header active={"/about"}/>
            <div className="max-w-screen-lg mx-auto p-4 my-8">
                <h1 className="text-4xl font-bold">About us</h1>
                <p className="text-xl">Who we are. </p>
            </div>
            <div class="mx-auto max-w-screen-lg items-center flex flex-col justify-center my-8">
                <div class="flex flex-wrap justify-center">

                    <ProfileBureau picture={"/profilepicture/ribt.webp"} name={"ribt"} job={"Treasurer"}/>
                    <ProfileBureau picture={"/profilepicture/drahox.jpg"} name={"Drahoxx"} job={"Vice-president"}/>
                    <ProfileBureau picture={"/profilepicture/shadows.webp"} name={"Shadowwws"} job={"President"}/>
                    <ProfileBureau picture={"/profilepicture/theor.webp"} name={"ThéoR"} job={"Secretary"}/>
                    <ProfileBureau picture={"/profilepicture/kouki.webp"} name={"Kouki"} job={"University Relations"}/>
                    <ProfileBureau picture={"/profilepicture/clemhate.webp"} name={"ClemHate"} job={"Partnership"}/>
                    <ProfileBureau picture={"/profilepicture/freezingkas.png"} name={"FreezingKas"} job={"DevOps"}/>
                    <ProfileBureau picture={"/profilepicture/fabien.jpg"} name={"Fabien"} job={"DevOps"}/>
                </div>
            </div>

            {/* Contact */}
            <div className="mx-auto max-w-screen-md items-center flex flex-col justify-center gap-4 mb-8">
                <h2 className="text-4xl font-bold text-center">Contact us</h2>
                <p className="text-xl text-center font-italic"><span class={"font-bold text-[#f99712]"}>contact[@]gcc-ensibs.fr</span>
                </p>
            </div>
        </>
    )
}