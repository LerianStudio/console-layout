"use client";

import React from "react";
import { ChevronsUpDown, Database } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "../ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "../ui/command";
import { useOrganization } from "../../providers/organization-provider";
import { useListLedgers } from "../../client/ledgers";
import { Button } from "../ui/button";
import { LedgerDto } from "../../types";
import { useI18n } from "../../lib/i18n";

const LedgerCommand = ({
  ledgers,
  onSelect,
}: {
  ledgers: LedgerDto[];
  onSelect: (id: string) => void;
}) => {
  const { formatMessage } = useI18n();
  const [query, setQuery] = React.useState("");
  const [visibleCount, setVisibleCount] = React.useState(10);

  const filteredLedgers = React.useMemo(() => {
    if (!query) return ledgers;
    return ledgers.filter((ledger) =>
      ledger.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [ledgers, query]);

  const displayedLedgers = query
    ? filteredLedgers
    : filteredLedgers.slice(0, visibleCount);

  const hasMore = !query && displayedLedgers.length < filteredLedgers.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <Command className="w-full">
      <CommandInput
        placeholder={formatMessage("common.search") || "Search..."}
        value={query}
        onValueChange={setQuery}
        className="border-b px-2 py-1 pr-10"
      />

      <CommandList className="max-h-max overflow-y-auto">
        {filteredLedgers.length === 0 ? (
          <CommandEmpty>
            {formatMessage("common.noOptions") || "No options found."}
          </CommandEmpty>
        ) : (
          <CommandGroup>
            {displayedLedgers.map((ledger) => (
              <CommandItem
                key={ledger.id}
                onSelect={() => onSelect(ledger.id)}
                className="truncate"
              >
                {ledger.name}
              </CommandItem>
            ))}

            {!query && hasMore && (
              <div className="border-t border-gray-100 p-1">
                <Button onClick={loadMore} variant="outline" className="w-full">
                  {formatMessage("common.loadMore") || "Load more..."}
                </Button>
              </div>
            )}
          </CommandGroup>
        )}
      </CommandList>
    </Command>
  );
};

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
   * Override "Ledgers" text in dropdown
   */
  ledgersLabel?: string;
}

export const LedgerSelector = ({
  currentLedgerLabel,
  placeholder,
  ledgersLabel,
}: LedgerSelectorProps) => {
  const { formatMessage } = useI18n();
  const [openCommand, setOpenCommand] = React.useState(false);
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
  const isLargeList = totalLedgers >= 10;
  const isSingle = totalLedgers === 1;

  // Use i18n messages with fallbacks
  const currentLedgerText =
    currentLedgerLabel ||
    formatMessage("ledger.selector.currentLedger.label") ||
    "Current Ledger";
  const placeholderText =
    placeholder ||
    formatMessage("ledger.selector.placeholder") ||
    "Select a ledger";
  const ledgersText =
    ledgersLabel || formatMessage("ledgers.title") || "Ledgers";

  if (isSingle) {
    return (
      <Button
        disabled
        className="flex cursor-default items-center gap-4 disabled:opacity-100"
        variant="outline"
      >
        <Database size={20} className="text-zinc-400" />
        <span className="pt-[2px] text-xs font-normal text-zinc-400 uppercase">
          {currentLedgerText}
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

  const handleCommandChange = (id: string) => {
    const selectedLedger = ledgers?.items.find((ledger) => ledger.id === id);
    if (selectedLedger) {
      setLedger(selectedLedger);
    }
    setOpenCommand(false);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div>
            <Select
              value={currentLedger?.id ?? undefined}
              onValueChange={handleSelectChange}
              onOpenChange={(open) => !open && setOpenCommand(false)}
              disabled={!hasLedgers}
            >
              <SelectTrigger className="w-fit text-sm font-semibold text-zinc-800">
                <div className="flex items-center gap-4">
                  <Database size={20} className="text-zinc-400" />
                  <span className="pt-[2px] text-xs font-normal text-zinc-400 uppercase">
                    {currentLedgerText}
                  </span>
                  <SelectValue placeholder={placeholderText} />
                </div>
              </SelectTrigger>

              <SelectContent className="w-(--radix-select-trigger-width)">
                {isLargeList ? (
                  <SelectGroup className="px-3 pb-3">
                    <SelectLabel className="text-xs font-medium text-zinc-400 uppercase">
                      {ledgersText}
                    </SelectLabel>
                    <SelectItem
                      disabled
                      value={currentLedger?.id || ""}
                      className="font-medium text-zinc-800 data-disabled:opacity-100"
                    >
                      {ledgers?.items?.find(
                        (ledger: LedgerDto) => ledger.id === currentLedger?.id
                      )?.name || placeholderText}
                    </SelectItem>

                    <div className="mt-2">
                      <Button
                        type="button"
                        variant="outline"
                        className="flex w-full justify-start rounded-lg border p-2"
                        onClick={() => setOpenCommand((prev) => !prev)}
                      >
                        <span className="flex items-center justify-between w-full">
                          {formatMessage(
                            "ledger.selector.selectAnother.label"
                          ) || "Select another..."}
                          <ChevronsUpDown className="text-zinc-400 h-4 w-4" />
                        </span>
                      </Button>

                      {openCommand && (
                        <div
                          className="my-3 w-fit rounded-lg border"
                          onClick={(e) => e.stopPropagation()}
                          onKeyDown={(e) => e.stopPropagation()}
                        >
                          <LedgerCommand
                            ledgers={ledgers!.items}
                            onSelect={handleCommandChange}
                          />
                        </div>
                      )}
                    </div>
                  </SelectGroup>
                ) : (
                  <SelectGroup className="px-3 pb-3">
                    <SelectLabel className="text-xs font-medium text-zinc-400 uppercase">
                      {ledgersText}
                    </SelectLabel>
                    {ledgers?.items?.map((ledger: LedgerDto) => (
                      <SelectItem key={ledger.id} value={ledger.id}>
                        {ledger.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                )}
              </SelectContent>
            </Select>
          </div>
        </TooltipTrigger>

        {!hasLedgers && (
          <TooltipContent side="bottom">
            {formatMessage("ledger.selector.noledgers") ||
              "No ledgers available. Please create one first."}
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};
