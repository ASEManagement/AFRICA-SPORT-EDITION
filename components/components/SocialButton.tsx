import React from "react";

interface Props {
  text: string;
  icon: React.ReactNode;
  bg: string;
}

export default function SocialButton({ text, icon, bg }: Props) {
  return (
    <button
      className={`flex items-center justify-center gap-3 w-full py-2 px-4 rounded-lg text-white font-medium transition ${bg}`}
    >
      {icon}
      {text}
    </button>
  );
}
