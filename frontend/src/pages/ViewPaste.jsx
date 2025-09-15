import { FaRegCopy } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { usePasteStore } from "../store/pasteStore";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import toast from 'react-hot-toast';

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

    function handleCopy(text) {
        navigator.clipboard.writeText(text);
        toast.success('Copied!');
        toast.success('Copied!');
    }


    return (
        <div className='min-h-screen px-5 md:px-0 bg-gradient-to-br from-black to-cyan-800 flex justify-center items-center'>
            <div className='border border-slate-500 text-white w-[90vw] my-[5rem] md:min-w-96 rounded-md p-4'>
                <div className='flex justify-between item-center'>
                    <h1 className='font-bold text-xl md:text-3xl'>{paste.title}</h1>
                    <button 
                        className="cursor-pointer hover:text-cyan-400 transition-colors"
                        onClick={() => handleCopy(paste.content)}
                    >
                        <FaRegCopy size={18}/>
                    </button>
                </div>
                <textarea
                    ref={textAreaRef}
                    value={paste.content}
                    className="mt-4 md:text-lg outline-none w-full h-auto resize-none"
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
