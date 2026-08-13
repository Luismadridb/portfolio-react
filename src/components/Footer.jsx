import { profile } from '../data/portfolio';

export default function Footer() {
  return (
    <footer>
      <div className="wrap footbar">
        <span>
          {profile.name} — {profile.location}
        </span>
        <span>Hoja 01/01 · Escala 1:1</span>
      </div>
    </footer>
  );
}