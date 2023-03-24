export default function MarkdownAdd() {

    return (
        <div className={"flex flex-col gap-4"}>
            <div className={"flex flex-col gap-2"}>
                <h2 className={"text-center text-2xl"}>Upload a write-ups</h2>
                <form action={"/admin/api/wu"} method={"post"} encType={"multipart/form-data"}
                      className={"flex flex-col gap-4"}>
                    <input type={"file"} name={"file"} accept={".md, text/markdown"}
                           className={"file-input appearance-none bg-[#6d588c] text-white rounded-md p-2 border border-[#6d588c] hover:bg-[#3e6db2]"}/>
                    <input type={"submit"} value={"Upload"}
                           className={"px-3 py-2 mx-auto bg-white w-24 rounded-lg border(gray-500 2) hover:bg-gray-200 active:bg-gray-300"}/>
                </form>
            </div>
        </div>
    )
}