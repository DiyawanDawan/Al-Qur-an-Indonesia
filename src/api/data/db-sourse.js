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
  static async getDetailChapterInfo(id) {
    try {
      const response = await axios.get(END_POINT.Detail_ChaptersInfo(id));
      console.log('chapter info', response);
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
  static async transliteChapter(id) {
    try {
      const response = await axios.get(END_POINT.Chapters_Tanslation(id));
      console.log('response tr', response);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default DbSourse;
