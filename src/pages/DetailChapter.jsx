import {
  PaperClipIcon,
  PlayIcon,
  PlusCircleIcon,
} from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import DbSourse from "../api/data/db-sourse";
import { useParams } from "react-router-dom";
import bismilah from "../assets/Bismillah_Calligraphy6.svg";

const DetailChapter = () => {
  const [chapterDetail, setChapterDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const chapters = await DbSourse.getDataChapters();
        const filteredChapter = chapters.find((chapter) => chapter.id === parseInt(id));
        console.log('filteredChapter', filteredChapter);
        const detailChapter = await DbSourse.getDetailChapter(id);
        console.log('detail chapter',detailChapter );
        const tajwid = await DbSourse.getTajwid();
        const filteredVerses = tajwid.verses.filter((verse) => verse.verse_key.startsWith(`${id}:`));
  
        setChapterDetails(filteredVerses);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, [id]);
  
  useEffect(() => {
    console.log('Chapter Detail:', chapterDetail);
  }, [chapterDetail]);
  
  
  return (
    <div className="mx-auto  max-w-7xl p-6 lg:px-8">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold  leading-7 text-gray-900">
          Applicant Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Personal details and application.
        </p>
      </div>
      <div className="mt-6 border-2 p-6 border-indigo-500 rounded-xl">
        <div className="flex mb-4 mt-4 justify-center items-center text-center">
          <img className="w-64 border-b-2 border-indigo-900 h-auto " src={bismilah} alt="" />
        </div>
        <div className="divide-y divide-gray-100">
          <div className="flex pb-2">
            <PaperClipIcon
              className="h-5 w-5 flex-shrink-0 text-gray-400 mr-5"
              aria-hidden="true"
            ></PaperClipIcon>
            <PlayIcon
              className="h-5 w-5 flex-shrink-0 text-gray-400 mr-5"
              aria-hidden="true"
            ></PlayIcon>
            <PlusCircleIcon
              className="h-5 w-5 flex-shrink-0 text-gray-400 "
              aria-hidden="true"
            ></PlusCircleIcon>
          </div>
          <div className="px-4 sm:px-0">
            <p className="font-medium text-xl border-b-2 pb-4 border-indigo-300">
            {/* <h1>{chaptarDetail.detailChapter.chapter}</h1> */}
Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam esse sapiente quae reprehenderit et consequuntur ipsa sequi quo ratione nam. Ipsa accusantium necessitatibus beatae consequatur eos quia asperiores magni architecto.
            </p>
            {chapterDetail && chapterDetail.map((verse, index) => (
        <p  style={{ direction: "rtl" }} className="text-2xl amiri-quran-regular m-5 pt-3 " key={index} dangerouslySetInnerHTML={{ __html: verse.text_uthmani_tajweed }} />
      ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailChapter;
