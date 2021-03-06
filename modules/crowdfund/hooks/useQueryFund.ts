import {useTerraWebapp} from '@arthuryeti/terra';
import {useContracts} from 'modules/common';
import {FundListItem} from 'modules/common/types/common';
import {useQuery} from 'react-query';

export type FundListResponse = {
  funds: FundListItem[];
};

export const useQueryFundList = () => {
  const {fundFactory} = useContracts();
  const {client} = useTerraWebapp();

  const {data, isLoading} = useQuery('all_anchor_funds', () => {
    return client.wasm.contractQuery<FundListResponse>(fundFactory, {
      all_anchor_funds: {},
    });
  });

  if (isLoading || data == null) {
    return {isLoading: true, data: null};
  }

  return {
    isLoading: false,
    data,
  };
};

export const useQueryFundListByBeneficiary = (beneficiaryAddress: string) => {
  const {fundFactory} = useContracts();
  const {client} = useTerraWebapp();

  const {data, isLoading} = useQuery([beneficiaryAddress, 'anchor_funds_by_beneficiary'], () => {
    return client.wasm.contractQuery<FundListResponse>(fundFactory, {
      anchor_funds_by_beneficiary: {
        beneficiary: beneficiaryAddress,
      },
    });
  });

  if (isLoading || data == null) {
    return {isLoading: true, data: null};
  }

  return {
    isLoading: false,
    data,
  };
};
