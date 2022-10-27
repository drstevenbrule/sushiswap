import { ChainId } from '@sushiswap/chain'
import { FundSource } from '@sushiswap/hooks'
import { classNames, DEFAULT_INPUT_CLASSNAME, ERROR_INPUT_CLASSNAME, Form, Input, Select } from '@sushiswap/ui'
import { TokenSelector, Web3Input } from '@sushiswap/wagmi'
import { useTokens } from 'lib/state/token-lists'
import { FC, useCallback, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { useCustomTokens } from '../../../lib/state/storage'
import { useTokenFromZToken, ZFundSourceToFundSource } from '../../../lib/zod'
import { FundSourceOption } from '../../stream/CreateForm/FundSourceOption'
import { CreateVestingFormSchemaType } from './schema'

export const GeneralDetailsSection: FC<{ chainId: ChainId }> = ({ chainId }) => {
  const tokenMap = useTokens(chainId)
  const [customTokenMap, { addCustomToken, removeCustomToken }] = useCustomTokens(chainId)
  const [dialogOpen, setDialogOpen] = useState(false)
  const { control, watch, setValue } = useFormContext<CreateVestingFormSchemaType>()
  const [currency] = watch(['currency'])
  const _currency = useTokenFromZToken(currency)

  const onClose = useCallback(() => {
    setDialogOpen(false)
  }, [])

  const onSelect = useCallback(
    (onChange, currency) => {
      if (currency.isNative) {
        const { chainId, decimals, symbol, name, isNative } = currency
        onChange({ chainId, decimals, address: undefined, symbol, name, isNative })
        setValue('fundSource', FundSource.WALLET)
      } else {
        const { chainId, decimals, symbol, name, isNative, wrapped } = currency
        onChange({ chainId, decimals, address: wrapped.address, symbol, name, isNative })
      }

      onClose()
    },
    [onClose, setValue]
  )

  return (
    <Form.Section
      title="General Details"
      description="Furo allows for creating a vested stream using your BentoBox balance."
    >
      <Form.Control label="Token">
        <Controller
          control={control}
          name="currency"
          render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => (
            <>
              <Select.Button
                error={!!error?.message}
                standalone
                className="!cursor-pointer ring-offset-slate-900"
                onClick={() => setDialogOpen(true)}
              >
                {value?.symbol || <span className="text-slate-500">Select a currency</span>}
              </Select.Button>
              <Form.Error message={error?.message} />
              <TokenSelector
                open={dialogOpen}
                variant="dialog"
                chainId={chainId}
                tokenMap={tokenMap}
                customTokenMap={customTokenMap}
                onSelect={(currency) => {
                  onSelect(onChange, currency)
                  onBlur()
                }}
                currency={_currency}
                onClose={onClose}
                onAddToken={addCustomToken}
                onRemoveToken={removeCustomToken}
              />
            </>
          )}
        />
      </Form.Control>
      <Form.Control label="Start date">
        <Controller
          control={control}
          name="startDate"
          render={({ field: { onChange, value, onBlur, name }, fieldState: { error } }) => {
            return (
              <>
                <Input.DatetimeLocal
                  onBlur={onBlur}
                  name={name}
                  onChange={(value) => onChange(new Date(value))}
                  value={value?.toISOString().slice(0, 16) || ''}
                  error={!!error?.message}
                  className="!ring-offset-slate-900"
                />
                <Form.Error message={error?.message} />
              </>
            )
          }}
        />
      </Form.Control>
      <Form.Control label="Recipient">
        <Controller
          control={control}
          name="recipient"
          render={({ field: { onChange, value, name, onBlur }, fieldState: { error } }) => (
            <>
              <Web3Input.Ens
                name={name}
                onBlur={onBlur}
                id="ensInput"
                value={value}
                onChange={onChange}
                error={!!error?.message}
                placeholder="Address or ENS Name"
                className={classNames(
                  DEFAULT_INPUT_CLASSNAME,
                  error ? ERROR_INPUT_CLASSNAME : '',
                  'ring-offset-slate-900'
                )}
              />
              <Form.Error message={error?.message} />
            </>
          )}
        />
      </Form.Control>
      <Form.Control label="Change Funds Source">
        <Controller
          control={control}
          name="fundSource"
          render={({ field: { onChange, value }, fieldState: { error } }) => {
            const _value = ZFundSourceToFundSource.parse(value)
            return (
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <FundSourceOption
                    chainId={chainId}
                    label="Wallet"
                    active={_value === FundSource.WALLET}
                    value={FundSource.WALLET}
                    currency={_currency}
                    onChange={() => onChange(FundSource.WALLET)}
                  />
                  {!currency?.isNative && (
                    <FundSourceOption
                      chainId={chainId}
                      label="BentoBox"
                      active={_value === FundSource.BENTOBOX}
                      value={FundSource.BENTOBOX}
                      currency={_currency}
                      onChange={() => onChange(FundSource.BENTOBOX)}
                    />
                  )}
                </div>
                <Form.Error message={error?.message} />
              </div>
            )
          }}
        />
      </Form.Control>
    </Form.Section>
  )
}
