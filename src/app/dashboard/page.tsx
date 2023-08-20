import { BsCheckCircleFill } from "react-icons/bs";

export default function Page() {
    return <div className={"p-5"}>
        <h1 className={"text-7xl"}>Dashboard</h1>
        <div className={"flex flex-row space-x-4"}>
            <div
                className="flex flex-col space-y-5 mt-10 h-[500px] w-[500px] rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <div className={"text-4xl text-center"}>
                    System Health
                </div>
                <div className={"flex-grow items-center m-auto content-center flex-col"}>
                    <BsCheckCircleFill size={200} className={"fill-green-500"}/>
                </div>
            </div>
            <div
                className="flex flex-col space-y-5 mt-10 h-[500px] w-[500px] rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <div className={"text-4xl text-center"}>
                    Subscription Quota Left
                </div>
                <div className={"flex-grow items-center m-auto content-center justify-center flex-col"}>
                    3 days
                </div>
            </div>
        </div>
    </div>
}