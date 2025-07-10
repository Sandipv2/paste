import { useRef } from 'react';
import { useAuthStore } from '../store/authStore';

function VerifyEmail() {
    const inputRefs = useRef([]);

    const { verifyEmail, isLoading } = useAuthStore();

    async function handleSubmit(e) {
        e.preventDefault();
        let otp = '';

        inputRefs.current.forEach((elem) => {
            otp += elem.value;
        })

        try {
            await verifyEmail(otp);
        } catch(err) {
            console.log(err.response.data.message || err.message);
        }
    }

    function handleInputEnter(e, idx) {
        if (e.target.value.length == 1 && idx < inputRefs.current.length - 1) {
            inputRefs.current[idx + 1].focus();
        }
    }

    function handleInputDelete(e, idx) {
        if (e.key === 'Backspace' && e.target.value === '' && idx > 0) {
            inputRefs.current[idx - 1].focus();
        }
    }

    function handleInputPaste(e) {
        const paste = e.clipboardData.getData('text').split('');

        paste.forEach((ch, idx) => {
            if (inputRefs.current[idx]) {
                inputRefs.current[idx].value = ch;
            }
        })
    }

    return (
        <div className="min-h-screen px-5 md:px-0 bg-gradient-to-br from-black to-cyan-800 flex items-center justify-center">
            <form className="w-full md:max-w-96 text-white flex flex-col gap-2 items-center" onSubmit={handleSubmit}>
                <h1 className="font-bold mb-7 text-3xl text-center">Verify email</h1>
                <p>Enter OTP sent to your mail</p>
                <div className='w-full flex justify-between' onPaste={handleInputPaste}>
                    {Array(6).fill(0).map((_, idx) => (
                        <input type='text' key={idx}
                            className='w-12 h-12 border-2 border-cyan-500 outline-none rounded-lg text-center font-bold text-xl'
                            ref={(e) => inputRefs.current[idx] = e}
                            maxLength={1}
                            onChange={(e) => handleInputEnter(e, idx)}
                            onKeyDown={(e) => handleInputDelete(e, idx)}
                            required
                        />
                    ))}
                </div>

                <button type="submit"
                    disabled={isLoading}
                    className="bg-cyan-500 px-3 py-2 font-bold rounded-full cursor-pointer w-full hover:scale-95 duration-200 hover:bg-cyan-600 mt-7 active:bg-cyan-600 active:scale-95"
                >{isLoading ? 'Verifying...' : 'Verify'}</button>

                {/* <p className='mt-2 mb-3'>
                    Don't have an account? <Link to='/register' className='text-blue-600 underline'>Sign up here</Link>
                </p> */}

                {/* <Link to='/'>
                    <p className='text-blue-600 underline'>Go to home</p>
                </Link> */}
            </form>
        </div>
    )
}

export default VerifyEmail