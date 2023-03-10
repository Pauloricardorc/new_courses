import {
  ChatTeardropText,
  DotsThree,
  PaperPlaneTilt,
  ShareNetwork,
  ThumbsUp,
} from "phosphor-react";
import GithubPa from "../../../../core/assets/github-pauloricardorc.png";
import Profile from "../../../../core/assets/myimg.jpg";

interface FeedProps {
  img_profile?: string;
  title?: string;
  subTitle?: string;
  description?: {
    text: string;
  }[];
  feed?: any;
}

export function CardNews({
  img_profile,
  title,
  subTitle,
  description,
  feed,
}: FeedProps) {
  return (
    <div className="w-full xl:w-[800px] h-auto border-b border-t border-gray-200 py-4">
      <header className="flex mb-4 justify-between">
        <div className="flex gap-3">
          <img src={img_profile} alt="" className="w-12 rounded-full" />
          <div className="flex flex-col justify-between">
            <p className="font-semibold text-gray-700">{title}</p>
            <span className="text-sm text-gray-500">{subTitle}</span>
          </div>
        </div>
        <span className="text-gray-500 text-sm font-normal self-end">
          24 mins
        </span>
      </header>

      <main className="flex flex-col gap-2 text-gray-600 font-medium">
        {description?.map((sub, index) => (
          <p key={index}>{sub.text}</p>
        ))}

        <img src={feed} alt="" className="border border-gray-100" />
      </main>
      <footer className="flex justify-between pt-4">
        <div className="flex items-center gap-5">
          <button className="flex items-center gap-1 text-xs text-gray-500 font-semibold">
            <ThumbsUp size={18} color="#5c48a2" />
            99
          </button>
          <button className="flex items-center gap-1 text-xs text-gray-500 font-semibold">
            <ChatTeardropText size={18} color="#5c48a2" />
            22
          </button>
          <button className="flex items-center gap-1 text-xs text-gray-500 font-semibold">
            <ShareNetwork size={18} color="#5c48a2" />
          </button>
        </div>
        <div className="flex gap-4 items-center">
          <button>
            <PaperPlaneTilt size={18} color="#5c48a2" />
          </button>
          <button>
            <DotsThree size={24} color="#5c48a2" weight="fill" />
          </button>
        </div>
      </footer>
    </div>
  );
}
