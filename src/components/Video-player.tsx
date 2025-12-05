import MuxPlayer from "@mux/mux-player-react";

export default function VideoPlayer({
  playbackId,
  video_id,
}: {
  playbackId: string;
  video_id: string;
}) {
  return (
    <MuxPlayer
      autoPlay
      loop
      muted
      playbackId={playbackId}
      metadata={{
        video_id: video_id,
        video_title: "Mindvale App",
        // viewer_user_id: "user-id-007",
      }}
    />
  );
}
