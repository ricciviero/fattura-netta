export const Header = () => {
    return (
        <>
            <div className=" p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Calcola il netto della tua fattura in regime forfettario</h1>
                <div className="space-x-4">
                    <a href="/documentazione">Documentazione</a>
                    <a href="https://github.com" >GitHub</a>
                </div>
            </div>
        </>
    );
}