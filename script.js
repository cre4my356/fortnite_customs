const tournaments = [
    {
        title: "First Practice Cup",
        date: "9th July, 21:00 CEST",
        mode: "Solo (Build)",
        prize: "Server Performance Test",
        status: "upcoming"
    },
    {
        title: "100 Member Special",
        date: "???",
        mode: "Duo (Build)",
        prize: "???",
        status: "upcoming"
    }
];

// UPDATED: Hier trägst du immer die Sieger der letzten 3 Turniere ein
const results = [
    { rank: 1, name: "None", points: 0, kills: 0, tournament: "" },
    { rank: 1, name: "None", points: 0, kills: 0, tournament: "" },
    { rank: 1, name: "None", points: 0, kills: 0, tournament: "" }
];

// NEW: Enter your server's all-time records here manually
const allTimeRecords = {
    mostKills: { value: 28, player: "Brix" },
    highestPoints: { value: 245, player: "Knusper unc356" },
    highestPointsTwoDay: { value: 420, player: "Cre4my356" },
    mostWins: { value: 10, player: "Jay 25" }
};

function loadTournaments() {
    const list = document.getElementById('tournament-list');
    list.innerHTML = tournaments.map(t => `
        <div class="card">
            <span class="status ${t.status}">${t.status === 'live' ? 'LIVE' : 'Upcoming'}</span>
            <h3 style="margin-top: 10px;">${t.title}</h3>
            <p><strong>Date:</strong> ${t.date}</p>
            <p><strong>Mode:</strong> ${t.mode}</p>
            <p><strong>Prize:</strong> ${t.prize}</p>
        </div>
    `).join('');
}

function loadResults() {
    const list = document.getElementById('results-list');
    list.innerHTML = results.map(r => `
        <tr>
            <td><strong>#${r.rank}</strong></td>
            <td>${r.name}</td>
            <td>${r.points}</td>
            <td>${r.kills}</td>
            <td>${r.tournament}</td>
        </tr>
    `).join('');
}

// NEW: Function to display the records in the HTML boxes
function loadRecords() {
    document.getElementById('record-kills-value').innerText = `${allTimeRecords.mostKills.value} Kills`;
    document.getElementById('record-kills-player').innerText = `by ${allTimeRecords.mostKills.player}`;

    document.getElementById('record-points-value').innerText = `${allTimeRecords.highestPoints.value} Points`;
    document.getElementById('record-points-player').innerText = `by ${allTimeRecords.highestPoints.player}`;

    document.getElementById('record-twoday-value').innerText = `${allTimeRecords.highestPointsTwoDay.value} Points`;
    document.getElementById('record-twoday-player').innerText = `by ${allTimeRecords.highestPointsTwoDay.player}`;

    document.getElementById('record-wins-value').innerText = `${allTimeRecords.mostWins.value} Wins`;
    document.getElementById('record-wins-player').innerText = `by ${allTimeRecords.mostWins.player}`;
}

window.onload = () => {
    loadTournaments();
    loadResults();
    loadRecords(); // Executed on page load
};
