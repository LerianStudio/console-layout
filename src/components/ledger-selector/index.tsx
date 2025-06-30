"use client";

import React from "react";
import { Database } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { LedgerDto } from "@/types";
import { useOrganization } from "@/providers/organization-provider";
import { useListLedgers } from "@/client/ledgers";

export interface LedgerSelectorProps {
  /**
   * Override current ledger label text
   */
  currentLedgerLabel?: string;
  /**
   * Override placeholder text when no ledger is selected
   */
  placeholder?: string;
  /**
   * Override "Ledger" text in dropdown
   */
  ledgerLabel?: string;
}

export const LedgerSelector = ({
  currentLedgerLabel = "Current Ledger",
  placeholder = "Select a ledger",
  ledgerLabel = "Ledger",
}: LedgerSelectorProps) => {
  const { currentOrganization, currentLedger, setLedger } = useOrganization();

  const { data: ledgers } = useListLedgers({
    organizationId: currentOrganization?.id || "",
    limit: 100,
  });

  React.useEffect(() => {
    if (ledgers?.items?.length) {
      if (!currentLedger?.id) {
        setLedger(ledgers.items[0]);
        return;
      }

      const ledgerExists = ledgers.items.some(
        (ledger: LedgerDto) => ledger.id === currentLedger.id
      );

      if (!ledgerExists) {
        setLedger(ledgers.items[0]);
      }
    }
  }, [ledgers, currentLedger?.id, setLedger]);

  const hasLedgers = !!ledgers?.items?.length;
  const totalLedgers = ledgers?.items?.length ?? 0;
  const isSingle = totalLedgers === 1;

  if (isSingle) {
    return (
      <Button
        disabled
        className="flex cursor-default items-center gap-4 disabled:opacity-100"
        variant="outline"
      >
        <Database size={20} className="text-zinc-400" />
        <span className="pt-[2px] text-xs font-normal text-zinc-400 uppercase">
          {currentLedgerLabel}
        </span>
        <span className="text-sm font-semibold text-zinc-800">
          {ledgers?.items[0].name}
        </span>
      </Button>
    );
  }

  const handleSelectChange = (id: string) => {
    const selectedLedger = ledgers?.items.find((ledger) => ledger.id === id);
    if (selectedLedger) {
      setLedger(selectedLedger);
    }
  };

  return (
    <div>
      <Select
        value={currentLedger?.id ?? undefined}
        onValueChange={handleSelectChange}
        disabled={!hasLedgers}
      >
        <SelectTrigger className="w-fit text-sm font-semibold text-zinc-800">
          <div className="flex items-center gap-4">
            <Database size={20} className="text-zinc-400" />
            <span className="pt-[2px] text-xs font-normal text-zinc-400 uppercase">
              {currentLedgerLabel}
            </span>
            <SelectValue placeholder={placeholder} />
          </div>
        </SelectTrigger>

        <SelectContent className="w-(--radix-select-trigger-width)">
          <SelectGroup className="px-3 pb-3">
            <SelectLabel className="text-xs font-medium text-zinc-400 uppercase">
              {ledgerLabel}
            </SelectLabel>
            {ledgers?.items?.map((ledger) => (
              <SelectItem key={ledger.id} value={ledger.id}>
                {ledger.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
