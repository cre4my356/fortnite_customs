const tournaments = [
    {
        title: "First Practice Cup (Solo)",
        date: "Tonight, 21:00 CEST",
        mode: "Solo (Build)",
        prize: "Server Performance Test",
        status: "ended"
    },
    {
        title: "Second Practice Cup (Duo)",
        date: "Thursday, 21:00 CEST",
        mode: "Duo (Build)",
        prize: "Server Performance Test",
        status: "live"        
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
    },
    {
        title: "Turnier 5 Name",
        date: "Sunday, 20:00 CEST",
        mode: "Duo",
        prize: "Reload Test",
        status: "upcoming"
    },
    {
        title: "Turnier 6 Name",
        date: "Datum / Uhrzeit",
        mode: "Modus",
        prize: "Gewinn / Preis",
        status: "upcoming"
    }
];

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
    if (!list) return;
    list.innerHTML = tournaments.map(t => {
        let statusText = t.status.toUpperCase();
        if (t.status === 'upcoming') statusText = 'Upcoming';

        return `
            <div class="card">
                <span class="status ${t.status}">${statusText}</span>
                <h3 style="margin-top: 10px;">${t.title}</h3>
                <p><strong>Date:</strong> ${t.date}</p>
                <p><strong>Mode:</strong> ${t.mode}</p>
                <p><strong>Prize:</strong> ${t.prize}</p>
            </div>
        `;
    }).join('');
}

function loadResults() {
    const list = document.getElementById('results-list');
    if (!list) return;
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
    // Diese Sicherheitsabfragen verhindern, dass das Skript abstürzt, wenn ein Feld im HTML fehlt
    if (document.getElementById('record-kills-value')) {
        document.getElementById('record-kills-value').innerText = `${allTimeRecords.mostKills.value} Kills`;
        document.getElementById('record-kills-player').innerText = `by ${allTimeRecords.mostKills.player}`;
    }

    if (document.getElementById('record-points-value')) {
        document.getElementById('record-points-value').innerText = `${allTimeRecords.highestPoints.value} Points`;
        document.getElementById('record-points-player').innerText = `by ${allTimeRecords.highestPoints.player}`;
    }

    if (document.getElementById('record-twoday-value')) {
        document.getElementById('record-twoday-value').innerText = `${allTimeRecords.highestPointsTwoDay.value} Points`;
        document.getElementById('record-twoday-player').innerText = `by ${allTimeRecords.highestPointsTwoDay.player}`;
    }

    if (document.getElementById('record-wins-value')) {
        document.getElementById('record-wins-value').innerText = `${allTimeRecords.mostWins.value} Wins`;
        document.getElementById('record-wins-player').innerText = `by ${allTimeRecords.mostWins.player}`;
    }
}

window.onload = () => {
    loadTournaments();
    loadResults();
    loadRecords();
};