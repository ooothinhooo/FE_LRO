import React from 'react';
import { AiTwotoneDislike, AiOutlineDislike } from 'react-icons/ai';
import { GrDislike } from 'react-icons/gr';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../firebase.config';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';

export default function Dislike({ id, dislikes, colDB }) {
    const [user] = useAuthState(auth);
    // const newArr = dislikes.sort(() => Math.random() - 0.5);
    // const arrLikes = newArr.slice(0, 5);
    const dislikesRef = doc(db, colDB, id);
    // console.log(likes);
    const handleLike = () => {
        if (dislikes?.includes(user.photoURL)) {
            updateDoc(dislikesRef, {
                dislikes: arrayRemove(user.photoURL),
            })
                .then(() => {
                    console.log('undisliked');
                })
                .catch((e) => {
                    console.log(e);
                });
        } else {
            updateDoc(dislikesRef, {
                dislikes: arrayUnion(user.photoURL),
            })
                .then(() => {
                    console.log('disliked');
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    };
    return (
        <div
            onClick={handleLike}
            style={{
                color: dislikes?.includes(user.photoURL) ? 'red' : null,
            }}
            className="text-2xl text-white flex items-center justify-center cursor-pointer"
        >
            {!dislikes?.includes(user.photoURL) ? (
                <>
                    <AiOutlineDislike />
                </>
            ) : (
                <>
                    <AiTwotoneDislike className="text-blue-500 mr-2 " />
                </>
            )}
            {/* <AiOutlineLike /> */}
            <span className="mx-2 flex">
                {dislikes &&
                    dislikes.map((item, index) => (
                        <>
                            <img src={item} className={`-ml-[10px] h-6 w-6 rounded-full left-2 z-[${index}]`} />
                        </>
                    ))}
            </span>
        </div>
    );
}
