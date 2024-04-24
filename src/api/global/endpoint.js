import CONFIG from "./config"

const END_POINT = {
    list_Chapters: `${CONFIG.BASE_URL}/chapters`,
    Detail_Chapters: (id) => `${CONFIG.BASE_URL}/chapters/${id}`,
    Detail_ChaptersInfo: (id) => `${CONFIG.BASE_URL}/chapters/${id}/info`,
    Tajwid: `${CONFIG.BASE_URL}/quran/verses/uthmani_tajweed`,
    Chapters_Tanslation: (id) => `${CONFIG.BASE_URL}/quran/tafsirs/${id}`,
}

export default END_POINT