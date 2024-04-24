import {
  PaperClipIcon,
  PlayIcon,
  PlusCircleIcon,
  Bars3Icon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import DbSourse from "../api/data/db-sourse";
import { useParams } from "react-router-dom";
import bismilah from "../assets/Bismillah_Calligraphy6.svg";
import FilterChapters from "../components/FilterChapters";

const DetailChapter = () => {
  const { id } = useParams();
  const [chapterDetail, setChapterDetails] = useState({
    verses: [], // Informasi ayat-ayat
    chapterInfo: null, // Informasi bab
  });

  useEffect(() => {
    const fetchDataTranlite = async () => {
      try {
        const chapters = await DbSourse.getDetailChapterInfo(id);
        console.log("chapter info", chapters);
        // Simpan informasi bab ke dalam state
        setChapterDetails((prevState) => ({
          ...prevState,
          chapterInfo: chapters,
        }));
      } catch (error) {
        console.log(error);
      }
    };

    const fetchData = async () => {
      try {
        const chapters = await DbSourse.getDataChapters();
        const filteredChapter = chapters.find(
          (chapter) => chapter.id === parseInt(id)
        );
        const detailChapter = await DbSourse.getDetailChapter(id);
        const tajwid = await DbSourse.getTajwid();
        const filteredVerses = tajwid.verses.filter((verse) =>
          verse.verse_key.startsWith(`${id}:`)
        );

        fetchDataTranlite();
        // Simpan informasi ayat-ayat ke dalam state
        setChapterDetails((prevState) => ({
          ...prevState,
          verses: filteredVerses,
        }));
        console.log("detail", chapterDetail);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    console.log("Chapter Detail:", chapterDetail);
  }, [chapterDetail]);

  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const openOffCanvas = () => {
    setIsOffCanvasOpen(true);
  };

  const closeOffCanvas = () => {
    setIsOffCanvasOpen(false);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 865px)");
    setIsSmallScreen(mediaQuery.matches);

    const handleResize = () => {
      setIsSmallScreen(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
      <div className="flex flex-col md:flex-row">
        {isOffCanvasOpen && isSmallScreen && (
          <div className="w-1/3 px-4 sm:px-0 border-r-2 border-gray-200 fixed inset-0 bg-white z-50">
            <div
              className={`fixed inset-y-0 left-0 w-3/4  bg-white z-50 ${
                isOffCanvasOpen ? "block" : "hidden"
              }`}
            >
              <FilterChapters />
            </div>
          </div>
        )}
        {isOffCanvasOpen && isSmallScreen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeOffCanvas}
          ></div>
        )}
        <button className="md:hidden" title="Filters" onClick={openOffCanvas}>
          <Bars3Icon
            className="h-5 w-5 flex-shrink-0 text-gray-400 "
            aria-hidden="true"
          />
        </button>
        {!isSmallScreen && (
          <div className="w-1/3 px-4 sm:px-0 border-r-2 border-gray-200">
            <FilterChapters />
          </div>
        )}
        <div className="flex-grow overflow-y-scroll p-6 border-indigo-500 rounded-xl">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>{/* Card content here */}</div>
            <div>{/* Card content here */}</div>
          </div>
          <div className="flex mb-4 mt-4 justify-center items-center text-center">
            <img
              className="w-64 border-b-2 border-indigo-900 h-auto "
              src={bismilah}
              alt=""
            />
          </div>
          <div className="divide-y divide-gray-100">
            <div className="flex pb-2">
              <PaperClipIcon
                className="h-5 w-5 flex-shrink-0 text-gray-400 mr-5"
                aria-hidden="true"
              />
              <PlayIcon
                className="h-5 w-5 flex-shrink-0 text-gray-400 mr-5"
                aria-hidden="true"
              />
              <PlusCircleIcon
                className="h-5 w-5 flex-shrink-0 text-gray-400 "
                aria-hidden="true"
              />
            </div>
            <div className="flex items-center font-bold">
              <h2 className="mr-3">Muotal by </h2> {" "}
              <button className="flex">
              <h2 className="text-sm font-bold">
                Change
              </h2>
                <PlusCircleIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-400 "
                  aria-hidden="true"
                />
              </button>
             
            </div>
            <div className="px-4 sm:px-0">
              <p className="font-medium text-xl border-b-2 pb-4 border-indigo-300">
                {chapterDetail.chapterInfo &&
                  chapterDetail.chapterInfo.chapter_info.source}
              </p>

              {chapterDetail.verses &&
                chapterDetail.verses.map((verse, index) => (
                  <p
                    style={{ direction: "rtl" }}
                    className="text-2xl amiri-quran-regular m-5 pt-3 leading-[3rem]"
                    key={index}
                    dangerouslySetInnerHTML={{
                      __html: verse.text_uthmani_tajweed,
                    }}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailChapter;
