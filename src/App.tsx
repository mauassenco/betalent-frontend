import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globals';
import { theme } from './styles/theme';
// import { useQuery, UseQueryResult } from 'react-query';
import Header from './components/Header';
// import { getEmployees } from './api/employees/getEmployees';

// interface IEmployee {
//   id: number;
//   name: string;
//   job: string;
//   admissionDate: Date;
//   phone: string;
//   image: string;
// }

function App() {
  // const {
  //   data: employees,
  //   isLoading,
  //   error,
  // }: UseQueryResult<IEmployee[], unknown> = useQuery<IEmployee[]>('get_employees', () =>
  //   getEmployees().then((res) => res.data as IEmployee[]),
  // );

  // if (isLoading) {
  //   return <div className="loading">Carregando...</div>;
  // }

  // if (error) {
  //   return <div className="loading">Algo deu errado!</div>;
  // }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {/* <div className="app-container">
          <div className="todos">
            {employees!.map((employee: IEmployee) => (
              <p key={employee.id}>{employee.name}</p>
            ))}
          </div>
        </div> */}
        <Header />
      </ThemeProvider>
    </>
  );
}

export default App;
