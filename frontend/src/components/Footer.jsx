
function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="bg-black text-center text-white py-3 text-xs flex flex-col justify-center items-center">
            <a target="_blank" href="https://github.com/Sandipv2">
                &copy; {year}  &lt;sandipv2/&gt;
            </a>
        </div>
    )
}

export default Footer