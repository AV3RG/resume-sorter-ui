export const dynamic = 'force-dynamic'

export default async function Page() {
    const data = await getData()
    return (<>
        <div>
            {data.map((file: string) => {
                return <>
                    <a href={`http://localhost:5566/download-file?file_name=${file}`}>
                        <div>
                            {file}
                        </div>
                    </a>
                </>
            })}
        </div>
    </>)
}

async function getData() {
    console.log("GETTING DATA");
    const res = await fetch('http://0.0.0.0:5566/list-files', {
        headers: {
            "auth-token": "gsdgfdgsd",
            "Access-Control-Allow-Origin": "*"
        }
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}