import {
  Facebook,
  FacebookContacts,
  Instagram,
  InstagramContacts,
  Linkedin,
  LinkedInContacts,
  Messanger,
  MessangerContacts,
  Tiktok,
  Twitter,
  Youtube,
  YoutubeContacts,
} from "@jektis/components/icons";

export default function SocialBar() {
  return (
    <div className="flex flex-row text-white bg-black">
      <h1>Suivez nous sur les réseaux sociaux :</h1>
      <div className="flex flex-row gap-x-2">
        <FacebookContacts className="size-10" />
        <MessangerContacts className="size-10" />
        <InstagramContacts className="size-10" />
        <LinkedInContacts className="size-10" />
        <YoutubeContacts className="size-10" />
        <Twitter />
        <Tiktok />
      </div>
    </div>
  );
}
