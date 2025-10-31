import { today } from "./date.js";

export function initUrl() {
  let selectedView = getUrlView();
  let selectedDate = getUrlDate();

  document.addEventListener("date-change", (event) => {
    selectedDate = event.detail.date;
    updateUrl();
  });
}

export function getUrlView() {
  return "month";
}

export function getUrlDate() {
  const urlParams = new URLSearchParams(window.location.search);
  const date = urlParams.get("date");

  return date ? new Date(date) : today();
}
