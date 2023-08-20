export default async function Page({ params }: { params: { slug: string } }) {
    const data = await getData(params.slug)
    return (<>
        <div>
            <h1 className={"text-7xl"}>Search Results</h1>
            <div>
                {data.map((entry: any) => {
                    return (<>
                        <a href={`http://localhost:5566/download-file?file_name=${entry.fileName}`}>
                            <div>
                                <span>
                                    {entry.fileName}
                                </span>
                                <span>
                                    {entry.score}
                                </span>
                            </div>
                        </a>
                    </>)
                })}
            </div>
        </div>
    </>)
}

async function getData(query: string) {
    const res = await fetch(`http://localhost:5566/similarity-search?search_keyword=${query}`, {
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