import { useState, useEffect } from 'react';
import { useQuery, UseQueryResult } from 'react-query';

import EmployeesTable from '../../components/EmployeesTable';
import TableSearch from '../../components/TableSearch';
import TableTitle from '../../components/TableTitle';

import * as Styles from './styles';
import { getEmployees } from '../../api/employees/getEmployees';

interface IEmployee {
  id: number;
  image: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
}

export default function Home() {
  const [query, setQuery] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState<IEmployee[]>([]);

  const {
    data: employees,
    isLoading,
    error,
  }: UseQueryResult<IEmployee[], unknown> = useQuery<IEmployee[]>('get_employees', () =>
    getEmployees().then((res) => res.data as IEmployee[]),
  );

  useEffect(() => {
    if (employees) {
      const filtered = employees.filter((employee) =>
        Object.values(employee).some((value) => value.toString().toLowerCase().includes(query.toLowerCase())),
      );
      setFilteredEmployees(filtered);
    }
  }, [query, employees]);

  if (isLoading) {
    return <div className="loading">Carregando...</div>;
  }

  if (error) {
    return <div className="loading">Algo deu errado!</div>;
  }

  return (
    <Styles.HomeContainer>
      <TableTitle title="Funcionários" />
      <TableSearch onChange={(e) => setQuery(e.target.value)} />
      <EmployeesTable employees={filteredEmployees} />
    </Styles.HomeContainer>
  );
}
