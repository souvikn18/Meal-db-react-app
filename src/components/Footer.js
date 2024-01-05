

const Footer = () => {
    const date = new Date();
    const year= date.getFullYear()
    return (
        <>
        <footer className="fixed bottom-0 h-[40px] w-[100%] bg-sky-600 mt-4 overflow-x-hidden">
            <p className="text-center text-sky-50 py-2">© Copyright {year}</p>
        </footer>
        </>
    )
}

export default Footer