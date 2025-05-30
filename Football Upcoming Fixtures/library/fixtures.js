export function fixtures(date, league, season, team, last, next, key, host, showErrors) {
  const url = new URL(`https://${host}/fixtures`);

  if (date) url.searchParams.append("date", date);
  if (league) url.searchParams.append("league", league);
  if (season) url.searchParams.append("season", season);
  if (team) url.searchParams.append("team", team);
  if (last) url.searchParams.append("last", last);
  if (next) url.searchParams.append("next", next);

  fetch(url.toString(), {
    method: "GET",
    headers: {
      "x-apisports-key": key
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const container = document.getElementById("wg-api-football-fixtures");
      if (!container) return;

      container.innerHTML = "";

      if (!data.response || data.response.length === 0) {
        container.innerHTML = "<p>No fixtures available.</p>";
        return;
      }

      const now = new Date();

      // Filter fixtures that are at or after current time
      const upcomingFixtures = data.response.filter(fixture => {
        const fixtureDate = new Date(fixture.fixture.date);
        return fixtureDate >= now;
      });

      if (upcomingFixtures.length === 0) {
        container.innerHTML = "<p>No upcoming fixtures available.</p>";
        return;
      }

      // Sort upcoming fixtures by date ascending
      upcomingFixtures.sort((a, b) => new Date(a.fixture.date) - new Date(b.fixture.date));

      // Limit to max 30 matches
      const limitedFixtures = upcomingFixtures.slice(0, 30);

      limitedFixtures.forEach(fixture => {
        const match = document.createElement("div");
        match.className = "fixture-item";
        match.innerHTML = `
          <strong>${fixture.teams.home.name}</strong> vs 
          <strong>${fixture.teams.away.name}</strong> - 
          ${new Date(fixture.fixture.date).toLocaleString()}
        `;
        container.appendChild(match);
      });
    })
    .catch(error => {
      if (showErrors === "true" || showErrors === true) {
        console.error("Fixtures fetch error:", error);
        const container = document.getElementById("wg-api-football-fixtures");
        if (container) container.innerHTML = `<p>Error loading fixtures: ${error.message}</p>`;
      }
    });
}
