import { faEllipsisV, faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { TrackMdl } from "../../domain/model/track.mdl"
import { useContext } from "react";
import { FoxbelContext, TrackActionType } from "../provider/FoxbelProvider";

interface CardTrackProps {
  track: TrackMdl;
}
export const CardTrack = ({ track }: CardTrackProps) => {
  const { artist, title, album } = track;
  const { dispatch } = useContext(FoxbelContext);
  const handlePlay = () => {
    dispatch({type: TrackActionType.PUSHTRACK, payload: track });
  }
  return (
    <article className=" flex flex-col gap-2" aria-label='Track Card'>
      <div className="aspect-square relative">
        <figure className='aspect-square bg-softgray'>
            <img src={album.coverBig} alt="Cover of the track"/>
        </figure>
        <div className="aspect-square w-full absolute z-[1] top-0 flex justify-center items-center text-white">
          <button className="h-9 absolute right-0 top-0 p-2">
            <FontAwesomeIcon icon={faEllipsisV} className="h-full"/>
          </button>
          <button className="h-1/3 sm:h-[42px] aspect-square" onClick={handlePlay}>
            <FontAwesomeIcon icon={faPlay} className="h-full"/>
          </button>
        </div>
      </div>
        <div className="">
            <h3 className="text-black text-opacity-70">{title}</h3>
            <p className="text-gray">{artist.name}</p>
        </div>
    </article>
  )
}

