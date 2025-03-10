import React from 'react';

// Styles
import * as Styles from './styles';

interface TableSearchProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TableSearch({ onChange }: TableSearchProps) {
  return (
    <Styles.TableSearchContainer>
      <Styles.InputContainer>
        <input type="text" placeholder="Pesquisar" onChange={onChange} />
      </Styles.InputContainer>
    </Styles.TableSearchContainer>
  );
}
