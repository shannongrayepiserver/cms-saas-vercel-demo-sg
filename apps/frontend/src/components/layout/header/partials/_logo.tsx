"use client";
import { useMemo } from "react"
import Image from "next/image";
import Link from "next/link";
import { type JSX, type FunctionComponent } from "react";
import useFlag from "@/useFlag";

type LogoProps = JSX.IntrinsicElements["a"] & {
  logo?: string;
};

export const Logo: FunctionComponent<LogoProps> = ({
  logo = "/assets/moseybank-logo.svg",
  ...divProps
}) => {
  // Create a stable default value that doesn't change every render
  const defaultValue = useMemo(() => { return { logo, theme_switcher: false } }, [ logo ])

  // Get the logo configuration
  const myLogoUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmaverik.com%2F&psig=AOvVaw1In6kEfxZLpYb9ydu4_5gk&ust=1752105396766000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDD5sK7ro4DFQAAAAAdAAAAABAK";
  const { logo: logoUrl } = useFlag("layout_configuration", defaultValue);
  return (
    <Link href="/" className="flex items-center grow-0 shrink-0" {...divProps}>
      <Image
        src={myLogoUrl}
        alt="Mosey Bank Logo"
        fill
        unoptimized
        priority
        className="dark:brightness-0	dark:invert !w-auto !h-12 !relative"
      />
    </Link>
  );
};

Logo.displayName = "Logo";

export default Logo;
