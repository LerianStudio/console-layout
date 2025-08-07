'use client'

import React from 'react'
import { ChevronsUpDown, Database } from 'lucide-react'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem
} from '../ui/select'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '../ui/tooltip'
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem
} from '../ui/command'
import { useOrganization } from '@/providers/organization-provider'
import { useListLedgers } from '@/client/ledgers'
import { Button } from '../ui/button'
import { LedgerDto } from '@/types/ledger-dto'
import { useIntl } from '@/lib/intl/use-intl'

const LedgerCommand = ({
  ledgers,
  onSelect
}: {
  ledgers: LedgerDto[]
  onSelect: (id: string) => void
}) => {
  const intl = useIntl()
  const [query, setQuery] = React.useState('')
  const [visibleCount, setVisibleCount] = React.useState(10)

  const filteredLedgers = React.useMemo(() => {
    if (!query) return ledgers
    return ledgers.filter((ledger) =>
      ledger.name.toLowerCase().includes(query.toLowerCase())
    )
  }, [ledgers, query])

  const displayedLedgers = query
    ? filteredLedgers
    : filteredLedgers.slice(0, visibleCount)

  const hasMore = !query && displayedLedgers.length < filteredLedgers.length

  const loadMore = () => {
    setVisibleCount((prev) => prev + 10)
  }

  return (
    <Command className="w-full">
      <CommandInput
        placeholder={intl.formatMessage({
          id: 'common.search',
          defaultMessage: 'Search...'
        })}
        value={query}
        onValueChange={setQuery}
        className="border-b px-2 py-1 pr-10"
      />

      <CommandList className="max-h-max overflow-y-auto">
        {filteredLedgers.length === 0 ? (
          <CommandEmpty>
            {intl.formatMessage({
              id: 'common.noOptions',
              defaultMessage: 'No options found.'
            })}
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
                  {intl.formatMessage({
                    id: 'common.loadMore',
                    defaultMessage: 'Load more...'
                  })}
                </Button>
              </div>
            )}
          </CommandGroup>
        )}
      </CommandList>
    </Command>
  )
}

export const LedgerSelector = () => {
  const intl = useIntl()
  const [openCommand, setOpenCommand] = React.useState(false)
  const { currentOrganization, currentLedger, setLedger } = useOrganization()

  const { data: ledgers } = useListLedgers({
    organizationId: currentOrganization?.id || '',
    filters: {
      limit: 100,
      page: 1
    }
  })

  const hasLedgers = !!ledgers?.items?.length
  const totalLedgers = ledgers?.items?.length ?? 0
  const isLargeList = totalLedgers >= 10
  const isSingle = totalLedgers === 1

  const placeholderText = intl.formatMessage({
    id: 'ledger.selector.placeholder',
    defaultMessage: 'Select a ledger'
  })
  const ledgersText = intl.formatMessage({
    id: 'ledgers.title',
    defaultMessage: 'Ledgers'
  })

  const handleSelectChange = (id: string) => {
    const selectedLedger = ledgers?.items.find((ledger) => ledger.id === id)
    if (selectedLedger) {
      setLedger(selectedLedger)
    }
  }

  const handleCommandChange = (id: string) => {
    const selectedLedger = ledgers?.items.find((ledger) => ledger.id === id)
    if (selectedLedger) {
      setLedger(selectedLedger)
    }
    setOpenCommand(false)
  }

  if (isSingle) {
    return (
      <Button
        disabled
        className="flex cursor-default items-center gap-4 disabled:opacity-100"
        variant="outline"
      >
        <Database size={20} className="text-zinc-400" />
        <span className="pt-[2px] text-xs font-normal text-zinc-400 uppercase">
          {intl.formatMessage({
            id: 'ledger.selector.currentLedger.label',
            defaultMessage: 'Current Ledger'
          })}
        </span>
        <span className="text-sm font-semibold text-zinc-800">
          {ledgers?.items[0].name}
        </span>
      </Button>
    )
  }

  return (
    <TooltipProvider>
      <Tooltip disabled={hasLedgers}>
        <TooltipTrigger asChild>
          <div>
            <Select
              value={currentLedger?.id ?? ''}
              onValueChange={handleSelectChange}
              onOpenChange={(open) => !open && setOpenCommand(false)}
              disabled={!hasLedgers}
            >
              <SelectTrigger className="w-fit text-sm font-semibold text-zinc-800">
                <div className="flex items-center gap-4">
                  <Database size={20} className="text-zinc-400" />
                  <span className="pt-[2px] text-xs font-normal text-zinc-400 uppercase">
                    {intl.formatMessage({
                      id: 'ledger.selector.currentLedger.label',
                      defaultMessage: 'Current Ledger'
                    })}
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
                      value={currentLedger?.id || 'a'}
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
                        <span className="flex w-full items-center justify-between">
                          {intl.formatMessage({
                            id: 'ledger.selector.selectAnother.label',
                            defaultMessage: 'Select another...'
                          })}
                          <ChevronsUpDown className="h-4 w-4 text-zinc-400" />
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
        <TooltipContent side="bottom">
          {intl.formatMessage({
            id: 'ledger.selector.noledgers',
            defaultMessage: 'No ledgers available. Please create one first.'
          })}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
