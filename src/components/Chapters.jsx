import { useEffect, useState } from "react"
import Card from "./Fragments/Card"
import DbSourse from "../api/data/db-sourse"

const Chapters = () => {
// Dapatkan data surah dari API
const [chapters, setChapters] = useState([]);
// Dapatkan data tajwid dari API
const [tajwid, setTajwid] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        try {
            // Panggil fungsi untuk mendapatkan data surah
            const chaptersData = await DbSourse.getDataChapters();
            // Set state dengan data surah
            setChapters(chaptersData);
            
            // Panggil fungsi untuk mendapatkan data tajwid
            const tajwidData = await DbSourse.getTajwid();
            // Set state dengan data tajwid
            setTajwid(tajwidData.verses);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    
    fetchData();
}, []);


  return (
    <div className="bg-gradient-to-r from-indigo-900 to-indigo-500" >
        <section className="mx-auto max-w-7xl n p-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">   
          {chapters.map((item) => {
            console.log(item);
            return (
              <Card key={item.id} id={item.id}>
            <Card.CardHeading id={item.id} name_simple={item.name_simple} translated_name={item.translated_name.name}></Card.CardHeading>
            <Card.CardBody name_arabic={item.name_arabic} classname="amiri-quran-regular" verses_count={item.verses_count}></Card.CardBody>
          </Card>
            )
          })}     
            </div>
        </section>
      </div>
  )
}

export default Chapters