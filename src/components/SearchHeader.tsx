import React, { useEffect, useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";

const SearchHeader = () => {
  const router = useRouter();
  const [text, setText] = useState<string>("");
  const { keyword } = router.query;

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(`/video/${text}`);
  };

  useEffect(() => {
    if (typeof keyword === "string") {
      setText(keyword || "");
    }
  }, [keyword]);

  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link href={"/"} className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </Link>
      <form onClick={handleSubmit} className="w-full flex justify-center">
        <input
          type="text"
          placeholder="Search"
          value={text}
          onChange={e => setText(e.target.value)}
          className="w-7/12 p-2 outline-none bg-black text-gray-50"
        />
        <button className="bg-zinc-600 px-4">
          <BsSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchHeader;
