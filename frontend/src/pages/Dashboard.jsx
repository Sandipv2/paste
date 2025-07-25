import { FaPlus, FaRegCopy, FaEdit } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";
import { PiSpinner } from "react-icons/pi";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';

import { usePasteStore } from "../store/pasteStore";

function Dashboard() {

  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [pasteId, setPasteId] = useState('');

  const { create, getAllPastes, pastes, remove, update, isCreating, isDeleting } = usePasteStore();

  async function handleSubmit(e) {
    e.preventDefault();


    try {
      if (pasteId) {
        await update(pasteId, title, content);
      } else {
        await create(title, content);
      }
      getAllPastes();
    } catch (err) {
      console.log(err.response.data.message || err.message)
    }

    setTitle('');
    setContent('');
    setPasteId('');
  }

  useEffect(() => {
    getAllPastes();
  }, [])

  async function handlePasteDelete(pasteId) {
    await remove(pasteId);
    getAllPastes();
  }

  function handleCopy(text) {
    navigator.clipboard.writeText(text);
    toast.success('Copied!');
  }

  function handleShare(pasteId) {
    navigator.clipboard.writeText(`${import.meta.env.VITE_FRONTEND_URL}/paste/${pasteId}`);
    toast.success('Share link copied!');
  }

  function handleUpdate(pasteId, title, content) {
    setPasteId(pasteId);
    setTitle(title);
    setContent(content);
  }

  return (
    <div className='min-h-screen px-5 md:px-0 bg-gradient-to-br from-black to-cyan-800 flex justify-center text-white'>
      <div className='my-25 min-w-full md:min-w-1/2 md:max-w-1/2'>
        <form onSubmit={handleSubmit}>
          <div className="flex border border-slate-500 justify-between rounded-md bg-black overflow-hidden">
            <input
              type="text"
              className="outline-none p-2 w-full"
              placeholder="Title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <button
              type='submit'
              disabled={isCreating}
              className="bg-cyan-500 text-center px-2 content-center cursor-pointer duration-200 hover:bg-cyan-600 group"
            >
              {isCreating
                ?
                <PiSpinner size={25} className="animate-spin" />
                : (
                  pasteId ? <FaEdit size={25} className="group-active:scale-90" /> :
                    <FaPlus size={25} className="group-active:scale-90" />
                )
              }
            </button>
          </div>

          <input
            className="hidden"
            name="pasteId"
            value={pasteId}
            onChange={(e) => setPasteId(e.target.value)}
          />

          <div className="bg-black border border-slate-500 rounded-md p-2 mt-3">
            <textarea
              className="w-full outline-none"
              placeholder="Description"
              rows={10}
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </form>

        <div className="mt-10">
          <div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search paste"
              className="bg-black w-full rounded-md p-2 outline-none border border-slate-500"
            />
          </div>

          <div className="mt-5">
            <h1 className="font-bold text-xl">All Pastes</h1>
          </div>

          {/*========== Rendering the pastes ============*/}

          <div className="mt-2 flex flex-col gap-4">
            {pastes.length === 0
              ?
              <p className="text-center">No paste created yet</p>
              :
              pastes
                .filter(e => e.title.toLowerCase().includes(search.toLowerCase()))
                .reverse()
                .map((item) => (
                  <div key={item._id} className='bg-black p-3 flex flex-wrap md:flex-nowrap justify-between rounded-md hover:bg-gray-900 transition-colors cursor-pointer'>
                    <div className="w-full md:w-[70%] pr-4">
                      <h1 className="font-bold text-lg truncate">
                        {item.title}
                      </h1>
                      <p className="text-slate-300 line-clamp-2 break-words mt-1">
                        {item.content}
                      </p>
                    </div>

                    <div className="flex flex-col justify-between mt-4 md:mt-0 min-w-max md:items-end">
                      <div className="flex gap-4 justify-end flex-wrap">
                        <button
                          className="cursor-pointer hover:text-cyan-400 transition-colors"
                          onClick={() => handleCopy(item.content)}
                        >
                          <FaRegCopy size={18} />
                        </button>

                        <button className="cursor-pointer hover:text-cyan-400 transition-colors">
                          <Link to={`/paste/${item._id}`}>
                            <GrView size={18} />
                          </Link>
                        </button>

                        <button
                          className="cursor-pointer hover:text-cyan-400 transition-colors"
                          onClick={() => handleUpdate(item._id, item.title, item.content)}
                        >
                          <FaEdit size={18} />
                        </button>

                        <button
                          disabled={isDeleting}
                          onClick={() => handlePasteDelete(item._id)}
                          className="cursor-pointer hover:text-cyan-400 transition-colors"
                        >
                          <MdDeleteOutline size={18} />
                        </button>

                        <button
                          onClick={() => handleShare(item._id)}
                          className="cursor-pointer hover:text-cyan-400 transition-colors"
                        >
                          <FiShare2 size={18} />
                        </button>
                      </div>

                      <div className="text-left mt-3">
                        <p className="text-slate-400 text-sm">
                          {new Date(item.createdAt).toDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
