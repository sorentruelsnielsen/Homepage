// ============================================================
//  MY HOMEPAGE - EDIT EVERYTHING IN THIS FILE
//  Change the values below, save, and commit/push to GitHub.
//  The page picks everything up from here - no other edits needed.
// ============================================================

window.HOMEPAGE_CONFIG = {

  // Your name: used for the greeting ("Good morning, Soren").
  name: 'Soren',

  // Hide the greeting entirely by setting this to true.
  showGreeting: true,

  // Weather: pick any spot on Earth. Find coordinates for any
  // place at https://open-meteo.com/en/docs (or right-click in
  // Google Maps and copy the numbers in the URL).
  // label is shown next to the temperature.
  weather: {
    latitude: 55.6761,
    longitude: 12.5683,
    label: 'Copenhagen'
  },
  // Set showWeather to false to hide the weather card.
  showWeather: true,

  // Countdowns: any dates you look forward to.
  // Format: 'YYYY-MM-DD'. Expired dates are hidden automatically.
  countdowns: [
    { label: 'Christmas Eve', date: '2025-12-24' },
    { label: 'New Year',      date: '2026-01-01' },
    { label: 'Next birthday', date: '2026-03-14' }
  ],

  // Links: the tiles on your page. icon is any emoji
  // (leave it out to show the first letter instead).
  links: [
    { title: 'Gmail',        url: 'https://mail.google.com',          icon: '📬' },
    { title: 'Calendar',     url: 'https://calendar.google.com',      icon: '📅' },
    { title: 'Drive',        url: 'https://drive.google.com',         icon: '📁' },
    { title: 'GitHub',       url: 'https://github.com',               icon: '🐙' },
    { title: 'DR TV',        url: 'https://www.dr.dk/drtv',           icon: '📺' },
    { title: 'Netflix',      url: 'https://www.netflix.com',          icon: '🍿' },
    { title: 'Spotify',      url: 'https://open.spotify.com',         icon: '🎧' },
    { title: 'Google Maps',  url: 'https://maps.google.com',          icon: '🗺️' },
    { title: 'Weather',      url: 'https://www.yr.no/en',             icon: '⛅' },
    { title: 'Bank',         url: 'https://example.com',              icon: '🏦' },
    { title: 'News',         url: 'https://www.dr.dk/nyheder',        icon: '📰' },
    { title: 'Shopping',     url: 'https://www.zalando.dk',           icon: '🛒' }
  ]
};
