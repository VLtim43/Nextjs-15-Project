import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ShouldRender from "./ShouldRender";

type Props = {
  icon: LucideIcon;
  label: string;
  href: string;
};

const NavButton = ({ icon: Icon, label, href }: Props) => {
  return (
    <Button
      variant={"ghost"}
      size={"icon"}
      aria-label={label}
      title={label}
      className="rounded-full"
      asChild
    >
      <>
        <ShouldRender if={href}>
          <Link href={href}>
            <Icon />
          </Link>
        </ShouldRender>

        <ShouldRender if={!href}>
          <Icon />
        </ShouldRender>
      </>
    </Button>
  );
};

export default NavButton;
