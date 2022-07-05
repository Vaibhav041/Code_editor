import React, {useState} from 'react'
import {v4 as idg} from 'uuid';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

const Login = () => {

    const [roomId, setRoomId] = useState('');
    const [user, setUser] = useState('');
    const nav = useNavigate();
    const createNewRoom = (e) => {
        e.preventDefault();
        const id = idg();
        setRoomId(id);
        toast.success('Created a new room')
    }
    const joinRoom = () => {
        if (!roomId || !user) {
            toast.error('ROOM ID & username is required');
            return;
        }
        nav(`/editor/${roomId}`, {
            state: {
                user,
            }            
        })

    }
    const handleInputEnter = (e) => {
        if (e.code === 'Enter') {
            joinRoom();
        }
    }
    return (
        <div className="homePageWrapper">
            <div className="formWrapper">
                <img className="homePageLogo" src="/logo192.png" alt="/"/>
                <h4 className="mainLabel">Paste Inviation Room Id</h4>
                <div className="inputGroup">
                    <input type="text" placeholder="ROOM ID" className="inputBox" value={roomId} onChange={(e) => setRoomId(e.target.value)} onKeyUp={handleInputEnter} />
                    <input type="text" placeholder="USERNAME" className="inputBox" value={user} onChange={(e) => setUser(e.target.value)} onKeyUp={handleInputEnter}/>
                    <button className="btn joinBtn" onClick={joinRoom}>JOIN</button>
                    <span className="createInfo">
                        If you dont have an invite then create &nbsp;
                        <a onClick={createNewRoom} href="/" className="createNewBtn">New Room</a>
                    </span>
                </div>
            </div>
            <footer>
                <h4>Built with ❤</h4>
            </footer>
        </div>
    )
}

export default Login


// import React, { useState } from 'react'
// import { v4 as uuidv4 } from 'uuid';
// import toast from 'react-hot-toast';

// const Login = () => {
//        const [roomId, setRoomId] =useState('');
//        const [username, setUsername] =useState('');
//        const createNewRoom= (e) => {
//          e.preventDefault();
//          const id =uuidv4();
//          setRoomId(id);
//           toast.success('Created a New Room');
          
         
//        }


//     return (
//     <div className='homePageWrapper'>
//         <div className='formWrapper'>
//           <img className='homePageLogo'src='/logo192.png' alt='code-sync-logo' />

//           <h4 className='mainLable'> Paste invitation ROOM ID</h4>

//           <div className='inputGroup'>
             
//              <input 
//              type="text" 
//              className='inputBox'
//               placeholder='ROOM ID'
//               onChange={(e)=> setRoomId(e.target.value)}
//               value={roomId}
//               />

//               <input
//                type="text" 
//                className='inputBox'
//                 placeholder='USERNAME'
//                 onChange={(e)=> setUsername(e.target.value)}
//                 value={username}
                
//                 />

//               <button className='btn joinbtn'>Join</button>
//               <span className='createInfo'>
//                 If you don't have an invite &nbsp;
//                 <a onClick={createNewRoom} href='' className='createNewBtn'>
//                     New Room
//                 </a>
//               </span>
//           </div>
//         </div>
//            <footer>
//               <h4> Built with 💛 by RENISA</h4>

//            </footer>

//     </div>
//     );

// };

// export default Login;