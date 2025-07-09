import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

function Dashboard() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className='min-h-screen px-5 md:px-0 bg-gradient-to-br from-black to-cyan-800 flex justify-center items-center'>

    </div>
  )
}

export default Dashboard