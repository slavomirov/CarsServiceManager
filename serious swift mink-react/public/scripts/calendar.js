import { initMonthCalendar } from "./month-calendar.js";
import { initWeekCalendar } from "./week-calendar.js";
import { currentDeviceType } from "./responsive.js";
import { getUrlDate } from "./url.js";

export async function initCalendar(eventStore) {
  const calendarElement = document.querySelector("[data-calendar]");

  let selectedView = "week";
  let selectedDate = getUrlDate();
  let deviceType = currentDeviceType();

  async function refreshCalendar() {
  const calendarScrollableElementBefore = calendarElement.querySelector(
    "[data-calendar-scrollable]"
  );

  const scrollTop =
    calendarScrollableElementBefore === null
      ? 0
      : calendarScrollableElementBefore.scrollTop;

  calendarElement.replaceChildren();

  if (selectedView === "month") {
    await initMonthCalendar(calendarElement, selectedDate, eventStore);
  } else if (selectedView === "week") {
    initWeekCalendar(
      calendarElement,
      selectedDate,
      eventStore,
      false,
      deviceType
    );
  } else {
    initWeekCalendar(
      calendarElement,
      selectedDate,
      eventStore,
      true,
      deviceType
    );
  }

  const calendarScrollableElementAfter = calendarElement.querySelector(
    "[data-calendar-scrollable]"
  );

  if (calendarScrollableElementAfter) {
    calendarScrollableElementAfter.scrollTo({ top: scrollTop });
  }
}


  document.addEventListener("view-change", async (event) => {
    selectedView = event.detail.view;
    await refreshCalendar();
  });

  document.addEventListener("date-change", async (event) => {
    selectedDate = event.detail.date;
    await refreshCalendar();
  });

  document.addEventListener("device-type-change", async (event) => {
    deviceType = event.detail.deviceType;
    await refreshCalendar();
  });

  document.addEventListener("events-change", async () => {
    await refreshCalendar();
  });

  await refreshCalendar();
}
