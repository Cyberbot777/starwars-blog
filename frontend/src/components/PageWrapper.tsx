interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="bg-gradient-to-br from-[#0d0d0d] to-[#1f1f1f] text-gray-300 px-6 py-10 min-h-screen w-full font-sans leading-relaxed">
      {children}
    </div>
  );
}
