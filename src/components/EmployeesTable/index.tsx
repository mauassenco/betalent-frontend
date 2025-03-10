// import { formatDate, formatPhoneNumber } from '../../utils';

// import ArrowDown from '../../assets/icons/svg/Icon/arrow-down.svg';
// import * as Styles from './styles';
// import { useState } from 'react';

// interface IEmployee {
//   id: number;
//   name: string;
//   job: string;
//   admission_date: string;
//   phone: string;
//   image: string;
// }

// interface EmployeesTableProps {
//   employees: IEmployee[] | undefined;
// }

// export default function EmployeesTable({ employees }: EmployeesTableProps) {
//   const [rotated, setRotated] = useState<number | null>(null);

//   const handleArrowClick = (id: number) => {
//     setRotated((prev) => (prev === id ? null : id));
//   };

//   return (
//     <Styles.Table>
//       <Styles.TableHead>
//         <Styles.Tr>
//           <th className="photo">Foto</th>
//           <th className="name">Nome</th>
//           <th className="dot">
//             <span></span>
//           </th>
//           <th className="job">Cargo</th>
//           <th className="admission_date">Data de Admissão</th>
//           <th className="phone">Telefone</th>
//         </Styles.Tr>
//       </Styles.TableHead>

//       <Styles.TableBody>
//         {employees?.map((employee) => (
//           <Styles.Tr key={employee.id}>
//             <td className="photo">
//               <img src={employee.image} />
//             </td>
//             <td className="name">{employee.name}</td>
//             <td className="arrow" onClick={() => handleArrowClick(employee.id)}>
//               <img src={ArrowDown} className={rotated === employee.id ? 'rotated' : ''} alt="Arrow" />
//             </td>
//             <td className="job">{employee.job}</td>
//             <td className="admission_date">{formatDate(employee.admission_date)}</td>
//             <td className="phone">{formatPhoneNumber(employee.phone)}</td>
//           </Styles.Tr>
//         ))}
//       </Styles.TableBody>
//     </Styles.Table>
//   );
// }
import { useState } from 'react';
import { formatDate, formatPhoneNumber } from '../../utils';

import ArrowDown from '../../assets/icons/svg/Icon/arrow-down.svg';
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
  const [rotated, setRotated] = useState<number | null>(null);

  const handleArrowClick = (id: number) => {
    setRotated((prev) => (prev === id ? null : id));
  };

  return (
    <Styles.Table>
      <Styles.TableHead>
        <Styles.Tr>
          <th className="photo">Foto</th>
          <th className="name">Nome</th>
          <th className="dot">
            <span></span>
          </th>
          <th className="job">Cargo</th>
          <th className="admission_date">Data de Admissão</th>
          <th className="phone">Telefone</th>
        </Styles.Tr>
      </Styles.TableHead>

      <Styles.TableBody>
        {employees?.map((employee) => (
          <>
            <Styles.Tr key={employee.id}>
              <td className="photo">
                <img src={employee.image} />
              </td>
              <td className="name">{employee.name}</td>
              <td className="arrow" onClick={() => handleArrowClick(employee.id)}>
                <img src={ArrowDown} className={rotated === employee.id ? 'rotated' : ''} alt="Arrow" />
              </td>
              <td className="job">{employee.job}</td>
              <td className="admission_date">{formatDate(employee.admission_date)}</td>
              <td className="phone">{formatPhoneNumber(employee.phone)}</td>
            </Styles.Tr>
            {rotated === employee.id && (
              <Styles.ExpandedRow>
                <td colSpan={3}>
                  <div className="expanded-content">
                    <div className="expanded-content--item">
                      <p>
                        <strong>Cargo:</strong>
                      </p>
                      <p>{employee.job}</p>
                    </div>
                    <div className="expanded-content--item">
                      <p>
                        <strong>Data de Admissão:</strong>
                      </p>
                      <p>{formatDate(employee.admission_date)}</p>
                    </div>
                    <div className="expanded-content--item">
                      <p>
                        <strong>Telefone:</strong>
                      </p>
                      <p>{formatPhoneNumber(employee.phone)}</p>
                    </div>
                  </div>
                </td>
              </Styles.ExpandedRow>
            )}
          </>
        ))}
      </Styles.TableBody>
    </Styles.Table>
  );
}
