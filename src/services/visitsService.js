import { supabase } from "../config/supabase.js";

export class VisitsService {
  static async incrementCounter() {
    try {
      // Получаем текущее значение
      const { data: currentData, error: selectError } = await supabase
        .from("visits")
        .select("count")
        .eq("id", 1)
        .single();

      if (selectError && selectError.code !== "PGRST116") {
        throw selectError;
      }

      const currentCount = currentData?.count || 0;
      const newCount = currentCount + 1;

      // Обновляем или создаем запись
      const { data, error } = await supabase
        .from("visits")
        .upsert({
          id: 1,
          count: newCount,
          updated_at: new Date().toISOString(),
        })
        .select()
        .single();

      if (error) throw error;

      return data.count;
    } catch (error) {
      console.error("Error in VisitsService:", error);
      throw error;
    }
  }

  static async getCounter() {
    try {
      const { data, error } = await supabase
        .from("visits")
        .select("count")
        .eq("id", 1)
        .single();

      if (error && error.code === "PGRST116") {
        return 0;
      }

      if (error) throw error;

      return data?.count || 0;
    } catch (error) {
      console.error("Error getting counter:", error);
      throw error;
    }
  }
}
