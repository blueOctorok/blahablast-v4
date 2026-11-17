import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="shell eyebrow flex flex-wrap justify-between gap-4 py-8 text-quiet">
        <p>
          {profile.name} · {profile.location}
        </p>
        <p>blahablast v4</p>
      </div>
    </footer>
  );
}
