import { Html, useProgress } from "@react-three/drei";

export default function ThreeLoader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center gap-3">
        {/* Spinner */}
        <div className="w-10 h-10 rounded-full border-2 border-white/30 border-t-white animate-spin" />

        {/* Progress */}
        <p className="text-xs text-white/70 tracking-wider">
          Loading {Math.round(progress)}%
        </p>
      </div>
    </Html>
  );
}
