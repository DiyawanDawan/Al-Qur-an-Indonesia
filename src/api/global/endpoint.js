import CONFIG from "./config"

const END_POINT = {
    list_Chapters: `${CONFIG.BASE_URL}/chapters`,
    Detail_Chapters: (id) => `${CONFIG.BASE_URL}/chapters/${id}`,
    Tajwid: `${CONFIG.BASE_URL}/quran/verses/uthmani_tajweed`,
}

export default END_POINT