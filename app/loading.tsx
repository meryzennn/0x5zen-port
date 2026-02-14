export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center max-w-6xl mx-auto px-6 relative overflow-hidden">
      {/* Background Ambience (Biar vibe-nya ga putus) */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      {/* SKELETON CONTENT */}
      <div className="w-full space-y-8">
        {/* 1. Small Tag Skeleton */}
        <div className="h-6 w-48 rounded shimmer-wrapper border border-white/5"></div>

        {/* 2. Headline Besar Skeleton */}
        <div className="space-y-4">
          <div className="h-16 md:h-24 w-3/4 rounded-2xl shimmer-wrapper"></div>
          <div className="h-16 md:h-24 w-1/2 rounded-2xl shimmer-wrapper"></div>
        </div>

        {/* 3. Paragraph Skeleton */}
        <div className="space-y-3 max-w-2xl">
          <div className="h-4 w-full rounded shimmer-wrapper"></div>
          <div className="h-4 w-5/6 rounded shimmer-wrapper"></div>
          <div className="h-4 w-4/6 rounded shimmer-wrapper"></div>
        </div>

        {/* 4. Buttons Skeleton */}
        <div className="flex gap-4 pt-4">
          <div className="h-14 w-40 rounded-full shimmer-wrapper"></div>
          <div className="h-14 w-40 rounded-full shimmer-wrapper border border-white/5 bg-transparent"></div>
        </div>
      </div>

      {/* Tech Stack Grid Skeleton (Bawah) */}
      <div className="mt-20">
        <div className="h-8 w-48 rounded shimmer-wrapper mb-8"></div>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-2xl shimmer-wrapper border border-white/5"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
