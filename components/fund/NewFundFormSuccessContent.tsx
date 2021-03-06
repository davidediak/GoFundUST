import {Flex, Link, Text} from '@chakra-ui/react';
import useFinder from 'hooks/useFinder';
import {truncate} from 'utils/text';
import {FC} from 'react';

type Props = {txHash: string; fundAddress: string};

const NewFundFormSuccessContent: FC<Props> = ({txHash, fundAddress}) => {
  const finder = useFinder();

  return (
    <div>
      <Text variant="content" fontSize="md">
        You&apos;ve created the fund!
      </Text>
      <br />
      <div>
        <Text variant="light" fontSize="md">
          Fund address:
        </Text>
        <Text variant="cardDescription" fontWeight="bold">
          <Link fontWeight="bold" href={`fund/${fundAddress}`} target="_blank">
            {fundAddress}
          </Link>
        </Text>
      </div>
      <br />
      <Flex justify="space-between" align="center" mt="12" w="full">
        <Text variant="light" fontSize="md">
          Tx Hash
        </Text>
        <Link fontWeight="bold" href={finder(txHash, 'tx')} target="_blank">
          {truncate(txHash)}
        </Link>
      </Flex>
    </div>
  );
};

export default NewFundFormSuccessContent;
