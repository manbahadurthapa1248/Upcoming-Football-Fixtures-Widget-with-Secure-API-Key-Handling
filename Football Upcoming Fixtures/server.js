import { fixtures } from "./library/fixtures.js";

window.addEventListener("DOMContentLoaded", () => {
  let refreshInterval;

  if (document.getElementById("wg-api-football-fixtures")) {
    const container = document.getElementById("wg-api-football-fixtures");
    const apiKey = container.getAttribute("data-key");
    const apiHost = container.getAttribute("data-host");
    const refresh = parseInt(1000 * container.getAttribute("data-refresh"));
    const league = container.getAttribute("data-league");
    const season = container.getAttribute("data-season");
    const team = container.getAttribute("data-team");
    const last = container.getAttribute("data-last");
    const next = container.getAttribute("data-next");
    const date = container.getAttribute("data-date");
    const showErrors = container.getAttribute("data-show-errors");

    fixtures(date, league, season, team, last, next, apiKey, apiHost, showErrors);

    if (refresh >= 15000 && Number.isInteger(refresh)) {
      refreshInterval = setInterval(() => {
        fixtures(date, league, season, team, last, next, apiKey, apiHost, showErrors);
      }, refresh);
    }
  }

  // Event listener for arrow toggle (expand/collapse)
  document.addEventListener(
    "click",
    (event) => {
      if (!event.target.matches(".api_football_arrow")) return;
      event.preventDefault();
      const arrow = event.target;
      const targetClass = arrow.getAttribute("data-id");
      const elements = document.getElementsByClassName(targetClass);

      for (let el of elements) {
        if (el.classList.contains("api_football_hide")) {
          el.classList.remove("api_football_hide");
          arrow.classList.remove("api_football_arrow_down");
          arrow.classList.add("api_football_arrow_up");
        } else {
          el.classList.add("api_football_hide");
          arrow.classList.remove("api_football_arrow_up");
          arrow.classList.add("api_football_arrow_down");
        }
      }
    },
    false
  );

  // Event listener for button toggle tabs
  document.addEventListener(
    "click",
    (event) => {
      if (!event.target.matches(".api_football_button_toggle")) return;
      event.preventDefault();
      const button = event.target;
      const targetId = button.getAttribute("data-id");
      const contents = document.getElementsByClassName("api_football_toggle_content");

      for (let content of contents) {
        if (content.id !== targetId) content.classList.add("api_football_hide");
      }

      document.getElementById(targetId).classList.remove("api_football_hide");

      const buttons = document.getElementsByClassName("api_football_button_toggle");
      for (let btn of buttons) {
        if (btn.getAttribute("data-id") !== targetId && btn.classList.contains("api_football_active")) {
          btn.classList.remove("api_football_active");
        }
      }
      button.classList.add("api_football_active");
    },
    false
  );
});
