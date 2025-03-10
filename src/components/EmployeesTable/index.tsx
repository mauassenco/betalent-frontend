import { formatDate, formatPhoneNumber } from '../../utils';
import * as Styles from './styles';

interface IEmployee {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

interface EmployeesTableProps {
  employees: IEmployee[] | undefined;
}

export default function EmployeesTable({ employees }: EmployeesTableProps) {
  return (
    <Styles.Table>
      <Styles.TableHead>
        <tr>
          <th>Foto</th>
          <th>Nome</th>
          <th>Cargo</th>
          <th>Data de Admissão</th>
          <th>Telefone</th>
        </tr>
      </Styles.TableHead>

      <Styles.TableBody>
        {employees?.map((employee) => (
          <tr key={employee.id}>
            <td>
              <img src={employee.image} />
            </td>
            <td>{employee.name}</td>
            <td>{employee.job}</td>
            <td>{formatDate(employee.admission_date)}</td>
            <td>{formatPhoneNumber(employee.phone)}</td>
          </tr>
        ))}
      </Styles.TableBody>
    </Styles.Table>
  );
}
