import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "components/Icons";

export default function Collection() {
  const items = [
    {
      id: 1,
      title: "loving on me",
      artist: "Compilation for loving on me",
      image:
        "https://blend-playlist-covers.spotifycdn.com/v2/blend_DEFAULT-maroon-red-tr-tr.jpg",
    },

    {
      id: 2,
      title: "Play it in the background",
      artist: "Background music is just a play button away.",
      image: "https://blend-playlist-covers.spotifycdn.com/v2/blend_DEFAULT-maroon-red-tr-tr.jpg",
    },

    {
      id: 3,
      title: "Arabada +200km/h",
      artist: "Gear three to five",
      image: "https://i.scdn.co/image/ab67706c0000da84471d7ab0ca5344e0a9deec7c",
    },
  ];
  return (
    <div>
      <h3 className="text-2xl text-white font-bold tracking-tight mb-4">
        playlists
      </h3>

      <div className="grid grid-cols-2 gap-x-4">
        <div className="h-[296px] bg-gradient-to-r from-gra3 to-gra4 rounded p-6 group relative">
          <div className="mt-20">
            <span className="text-sm font-semibold">english playlist</span>{" "}
            <span className="opacity-70"> • Nevale </span>
            <span className="text-sm font-semibold">playlist for my crush</span>{" "}
            <span className="opacity-70"> • Superman </span>
            <span className="text-sm font-semibold">romantic playlist</span>{" "}
            <span className="opacity-70"> • sudhama </span>
            <span className="text-sm font-semibold">taylor shift</span>{" "}
            <span className="opacity-70"> • swasthik </span>
            <span className="text-sm font-semibold">five hours meditation</span>{" "}
            <span className="opacity-70"> • Aaron </span>
            <span className="text-sm font-semibold">wholesome songs</span>{" "}
            <span className="opacity-70"> • yash kamal shetty </span>
            <span className="text-sm font-semibold">gujje bro's playlist</span>{" "}
            <span className="opacity-70"> • G J sathwik Rai   </span>
          </div>
          <div>
            <h3 className="text-3xl font-bold mt-6">popular songs</h3>
            <p>204 popular songs</p>
          </div>
          <button className="w-12 h-12 bg-primary absolute right-4 bottom-4 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
            <Icon name="play" />
          </button>
        </div>

        <div className="grid">
          <div className="flex gap-x-4">
            {items.map((item) => (
              <NavLink
                key={item.id}
                to="/"
                className={
                  "bg-footer rounded p-4 transition-all hover:bg-menubg group"
                }
              >
                <div className="relative ">
                  <img
                    className="w-auto h-auto inset-0 object-cover mb-4"
                    src={item.image}
                  />
                  <button className="w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
                    <Icon name="play" />
                  </button>
                </div>
                <span className="font-semibold text-white text-[16px] whitespace-nowrap">
                  {item.title}
                </span>{" "}
                <br />
                <span className="mt-1 text-[14px] text-link">
                  {item.artist}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
