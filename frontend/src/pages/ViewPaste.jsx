import { useParams } from "react-router-dom";
import { usePasteStore } from "../store/pasteStore";
import { useEffect, useState, useRef, useLayoutEffect } from "react";

function ViewPaste() {
    const { pasteId } = useParams();
    const { getPaste, isLoading } = usePasteStore();
    const [paste, setPaste] = useState(null);
    const textAreaRef = useRef();

    useEffect(() => {
        getPaste(pasteId)
            .then(res => {
                setPaste(res.data);
            })
            .catch(err => {
                console.error("Error fetching paste:", err);
                setPaste(null);
            });

    }, [getPaste]);


    useLayoutEffect(() => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
        }
    }, [paste]);

    if (isLoading) {
        return (
            <div className='min-h-screen px-5 md:px-0 bg-gradient-to-br from-black to-cyan-800 flex justify-center items-center'>
                <p className="text-white font-bold">Loading...</p>
            </div>
        );
    }

    if (!paste) {
        return (
            <div className='min-h-screen px-5 md:px-0 bg-gradient-to-br from-black to-cyan-800 flex justify-center items-center'>
                <p className="text-white font-bold">Paste not found</p>
            </div>
        );
    }


    return (
        <div className='min-h-screen px-5 md:px-0 bg-gradient-to-br from-black to-cyan-800 flex justify-center items-center'>
            <div className='border border-slate-500 text-white min-w-96 rounded-md p-4'>
                <h1 className='font-bold text-3xl'>{paste.title}</h1>
                <textarea
                    ref={textAreaRef}
                    value={paste.content}
                    className="mt-4 outline-none w-full h-auto resize-none"
                    readOnly
                />
                <p className='mt-4 text-slate-400'>
                    {paste.name}, {new Date(paste.createdAt).toDateString()}
                </p>
            </div>
        </div>
    );
}

export default ViewPaste;