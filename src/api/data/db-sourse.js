import axios from 'axios';
import END_POINT from '../global/endpoint';

class DbSourse {
  static async getDataChapters() {
    try {
      const response = await axios.get(END_POINT.list_Chapters);
      return response.data.chapters;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async getDetailChapter(id) {
    try {
      const response = await axios.get(END_POINT.Detail_Chapters(id));
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async getTajwid() {
    try {
      const response = await axios.get(END_POINT.Tajwid);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default DbSourse;
