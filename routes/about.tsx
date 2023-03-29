import MyHead from "../components/MyHead.tsx";
import Header from "../components/Header.tsx";
import ProfileBureau from "../components/ProfileBureau.tsx";
import {AllText} from "../utils/text.ts";

export default function About() {
    return (
        <>
            <MyHead/>
            <Header active={"/about"}/>
            <div className="max-w-screen-lg mx-auto p-4 my-8">
                <h1 className="text-4xl font-bold">{AllText.en.about}</h1>
                <p className="text-xl">{AllText.en.aboutSubtitle}</p>
            </div>
            <div class="mx-auto max-w-screen-lg items-center flex flex-col justify-center my-8">
                <div class="flex flex-wrap">
                    <ProfileBureau picture={"/profilepicture/shadows.webp"} name={"Shadowwws"} job={"Président"}/>
                </div>
                <div className="flex flex-wrap">
                    <ProfileBureau picture={"/profilepicture/ribt.webp"} name={"ribt"} job={"Trésorier"}/>
                    <ProfileBureau picture={"/profilepicture/drahox.jpg"} name={"Drahoxx"} job={"Vice-président"}/>
                    <ProfileBureau picture={"/profilepicture/theor.webp"} name={"ThéoR"} job={"Secrétaire"}/>
                </div>
                <div className="flex flex-wrap">
                    <ProfileBureau picture={"/profilepicture/kouki.webp"} name={"Kouki"} job={"Relations Club/École"}/>
                    <ProfileBureau picture={"/profilepicture/clemhate.webp"} name={"ClemHate"} job={"Communication"}/>
                    <ProfileBureau picture={"/profilepicture/freezingkas.png"} name={"FreezingKas"}
                                   job={"Infrastructure"}/>
                    <ProfileBureau picture={"/profilepicture/fabien.jpg"} name={"Fabien"} job={"Infrastructure"}/>
                </div>
            </div>

            {/* Contact */}
            <div className="mx-auto max-w-screen-md items-center flex flex-col justify-center gap-4 mb-8">
                <h2 className="text-4xl font-bold text-center">{AllText.en.contactTitle}</h2>
                <p className="text-xl text-center font-italic">{AllText.en.mail}</p>
            </div>
        </>
    )
}