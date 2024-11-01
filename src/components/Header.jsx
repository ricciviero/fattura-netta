export const Header = () => {
    return (
        <>
            <div className=" p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Fattura Netta</h1>
                <div className="space-x-4">

                    <button className="bg-gray-200 font-bold py-2 px-4 rounded shadow-sm">

                        <a href="/documentazione">Documentazione</a>
                    </button>

                    <button className="bg-gray-200 font-bold py-2 px-4 rounded shadow-sm">
                        <a href="https://github.com/ricciviero/fattura-netta" >GitHub</a>
                    </button>


                </div>
            </div>
        </>
    );
}