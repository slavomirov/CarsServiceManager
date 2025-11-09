import { toast } from "react-toastify";

export async function apiClient(url, options = {}) {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (!response.ok) {
      let message = "Възникна грешка.";
      const errors = data.errors[0].split(",");
      
      if (errors.length > 1) {
        errors.forEach(e => {
          toast.error(e);
        });
      } else {
        try {
          message = data.errors[0].split(",") || message;
          } catch {}

        toast.error(message);
      }
    }

    return data;
  } catch (error) {
    toast.error(error.message || "Нещо се обърка при заявката.");
    throw error;
  }
}
