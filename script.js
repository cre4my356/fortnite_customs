const tournaments = [
    {
        title: "First Practice Cup (Solo)",
        date: "Tonight, 21:00 CEST",
        mode: "Solo (Build)",
        prize: "Server Performance Test",
        status: "ended" // Auf 'live' gesetzt, weils es heute Abend abgeht!
    },
    {
        title: "Second Practice Cup (Duo)",
        date: "Thursday, 21:00 CEST",
        mode: "Duo (Build)",
        prize: "Server Performance Test",
        status: "upcoming"        
    },
    {
        title: "Friday Night Showdown",
        date: "Unlocks at 21 active tournamet players",
        mode: "Trio (Build)",
        prize: "Custom Role + Hype",
        status: "upcoming"
    },
    {
        title: "100 Member Special",
        date: "coming soon",
        mode: "Duo (Build)",
        prize: "Surprise Prize Pool",
        status: "upcoming"
    }
];

// ... (Der Rest deiner Ergebnisse, Rekorde und Ladefunktionen bleibt genau gleich!)
const results = [
    { rank: 1, name: "Sahndichvoll", points: 141, kills: 16, tournament: "Practice Cup #1" },
    { rank: 1, name: "None", points: 0, kills: 0, tournament: "Practice Cup #2" },
    { rank: 1, name: "None", points: 0, kills: 0, tournament: "Practice Cup #3" }
];

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
    loadRecords();
};