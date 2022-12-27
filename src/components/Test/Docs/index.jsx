import styles from "./styles.module.css";
import { deleteObject, ref } from "firebase/storage";
import { storage } from "../../../firebase.js";

const Docs = ({ song }) => {
  const btnXoa = () => {
    console.log(song.song);
    const deleteRef1 = ref(storage, song.song);
    deleteObject(deleteRef1).then(() => {
      // setImagesAssets(null);
      console.log("ok");
    });
    const deleteRef2 = ref(storage, song.img);
    deleteObject(deleteRef2).then(() => {
      // setImagesAssets(null);
      console.log("ok");
    });
  };

  return (
    <div className={styles.song_container}>
      <img src={song.img} alt="song_img" className={styles.song_img} />
      <div className={styles.song_info}>
        <p className={styles.song_name}>{song.name}</p>
        <p className={styles.song_artist}>{song.artist}</p>
      </div>
      <audio className={styles.audio} src={song.song} controls />
      <button onClick={btnXoa(song)}>xoa</button>
    </div>
  );
};

export default Docs;
