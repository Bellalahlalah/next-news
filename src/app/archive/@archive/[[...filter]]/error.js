'use client'; /* error ที่ฝั่ง clientเพราะที่ serverทำงานปกติ */

export default function ArchiveFilterError({ error }) {
  return (
    <div id="error">
      <h2>An error occurred!</h2>
      <p>{error.message || 'Invalid filter value!'}</p>
    </div>
  );
}