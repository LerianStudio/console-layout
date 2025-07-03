"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useI18n } from "../../lib/i18n";

export interface AboutMidazDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  /** Custom version override */
  version?: string;
  /** Custom logo source */
  logoSrc?: string;
  /** Terms of use link */
  termsLink?: string;
  /** License link */
  licenseLink?: string;
  /** Show terms and license links */
  showLinks?: boolean;
}

export const AboutMidazDialog = ({
  open,
  setOpen,
  version,
  logoSrc = "/svg/lerian-logo.svg",
  termsLink = "",
  licenseLink = "",
  showLinks = false,
}: AboutMidazDialogProps) => {
  const { formatMessage } = useI18n();

  // Auto-detect version or use provided
  const displayVersion =
    version || process.env.NEXT_PUBLIC_MIDAZ_VERSION || "1.0.0";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="w-fit justify-center gap-6 p-4 sm:max-w-[425px] [&>button]:hidden"
        onOpenAutoFocus={(event) => event.preventDefault()}
      >
        <DialogHeader className="flex flex-col items-center">
          {logoSrc && (
            <img src={logoSrc} alt="Lerian Flag" width={324} height={32} />
          )}
          <div className="flex flex-col gap-2">
            <DialogTitle className="text-lg font-bold text-zinc-900 sm:text-center">
              Midaz Console
            </DialogTitle>
            <DialogDescription className="flex flex-col gap-2 text-zinc-500 sm:text-center">
              <span>
                {formatMessage("dialog.about.midaz.version")?.replace(
                  "{version}",
                  displayVersion
                ) || `Version ${displayVersion}`}
              </span>
            </DialogDescription>
          </div>

          {showLinks && (termsLink || licenseLink) && (
            <DialogDescription className="flex justify-center gap-4 text-zinc-800">
              {termsLink && (
                <Button variant="link" className="h-fit p-0" asChild>
                  <a href={termsLink} target="_blank" rel="noopener noreferrer">
                    {formatMessage("dialog.about.midaz.terms") ||
                      "Terms of Use"}
                  </a>
                </Button>
              )}
              {licenseLink && (
                <Button variant="link" className="h-fit p-0" asChild>
                  <a
                    href={licenseLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {formatMessage("dialog.about.midaz.license") || "License"}
                  </a>
                </Button>
              )}
            </DialogDescription>
          )}

          <DialogDescription className="flex text-zinc-500 sm:text-center">
            {formatMessage("dialog.about.midaz.copyright")?.replace(
              "{year}",
              new Date().getFullYear().toString()
            ) ||
              `Copyright © Lerian ${new Date().getFullYear()} - All rights reserved.`}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex sm:justify-center">
          <Button onClick={() => setOpen(false)} variant="outline">
            {formatMessage("common.close") || "Close"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
