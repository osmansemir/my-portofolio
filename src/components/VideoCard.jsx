import { useState } from "react";

function VideoCard({ src, gif }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="relative overflow-hidden rounded-t-xl bg-gray-900 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <video
          className="rounded-t-lg w-full h-auto object-cover"
          src={src || ""}
          autoPlay
          loop
          muted
          playsInline
          poster={gif || ""}
        />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-100"
          onClick={() => setIsOpen(false)}
        >
          <video
            className="w-[90%] max-w-3xl rounded-0 shadow-lg"
            src={src || ""}
            autoPlay
            loop
            muted
            playsInline
            poster={gif || ""}
          />
        </div>
      )}
    </>
  );
}

export default VideoCard;
