import { Play } from 'lucide-react';

interface VideoSectionProps {
  /** Path to the video file, relative to /public (e.g. '/prison-ministry.mp4'). */
  src: string;
  title: string;
  description?: string;
  /** Still image shown before playback. Strongly recommended — without it the
   *  player renders as a black box until the viewer presses play. */
  poster?: string;
  /** Optional WebVTT captions track, relative to /public. */
  captionsSrc?: string;
}

export default function VideoSection({
  src,
  title,
  description,
  poster,
  captionsSrc,
}: VideoSectionProps) {
  return (
    <div className="bg-gradient-to-br from-primary-800 to-primary-900 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Play className="mx-auto h-10 w-10 text-primary-200" aria-hidden="true" />
          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100">
              {description}
            </p>
          )}
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative aspect-video overflow-hidden rounded-lg bg-black shadow-2xl">
            {/* Deliberately not autoplaying: this video has narration, so it
                needs an explicit play. preload="metadata" keeps the page fast
                by fetching only the header rather than the whole file. */}
            <video
              controls
              preload="metadata"
              playsInline
              poster={poster}
              className="h-full w-full"
            >
              <source src={src} type="video/mp4" />
              {captionsSrc && (
                <track
                  kind="captions"
                  src={captionsSrc}
                  srcLang="en"
                  label="English"
                  default
                />
              )}
              Your browser does not support embedded video.{' '}
              <a href={src} className="underline">
                Download the video
              </a>{' '}
              to watch it.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
