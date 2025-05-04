import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar";

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage
        src="https://github.com/reactvideoeditor.png"
        alt="@reactvideoeditor"
      />
      <AvatarFallback>RVE</AvatarFallback>
    </Avatar>
  );
}
